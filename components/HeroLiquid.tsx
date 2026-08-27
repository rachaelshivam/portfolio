"use client";

import { useEffect, useRef, useState } from "react";

interface HeroLiquidProps {
  trigger?: number;
  sectionRef?: React.RefObject<HTMLElement | null>;
}

const VERTEX_SHADER = `
  attribute vec2 a_position;
  varying vec2 v_uv;
  void main() {
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER = `
  precision mediump float;
  varying vec2 v_uv;

  uniform vec2 u_resolution;
  uniform vec2 u_mouse;         // current smoothed mouse (0-1)
  uniform float u_mouseActive;  // 0 or 1
  uniform vec2 u_trail[8];      // past positions for viscous trail
  uniform float u_trailCount;

  // Soft pink gradient base
  vec3 baseColor(vec2 uv) {
    vec3 bg = vec3(0.992, 0.992, 0.992); // #FDFDFD
    vec3 pink1 = vec3(0.910, 0.630, 0.745); // muted pink
    vec3 pink2 = vec3(0.847, 0.216, 0.459); // #D83775
    vec3 pink3 = vec3(0.940, 0.780, 0.850); // light pink

    float d1 = length(uv - vec2(0.3, 0.4));
    float d2 = length(uv - vec2(0.7, 0.6));
    float d3 = length(uv - vec2(0.5, 0.3));

    vec3 col = bg;
    col = mix(col, pink1, 0.18 * smoothstep(0.5, 0.0, d1));
    col = mix(col, pink2, 0.10 * smoothstep(0.45, 0.0, d2));
    col = mix(col, pink3, 0.14 * smoothstep(0.4, 0.0, d3));
    return col;
  }

  vec2 displaceAt(vec2 uv, vec2 center, float strength) {
    vec2 diff = uv - center;
    float dist = length(diff);
    float radius = 0.18;
    if (dist < radius && dist > 0.0) {
      float force = (1.0 - dist / radius);
      force = force * force * force; // cubic falloff — smooth and heavy
      return diff / dist * force * strength;
    }
    return vec2(0.0);
  }

  void main() {
    vec2 uv = v_uv;
    vec2 aspect = vec2(u_resolution.x / u_resolution.y, 1.0);

    vec2 totalDisp = vec2(0.0);

    if (u_mouseActive > 0.5) {
      // Current mouse position — strongest displacement
      totalDisp += displaceAt(uv * aspect, u_mouse * aspect, 0.06);

      // Trail positions — decreasing strength for viscous drag
      int count = int(u_trailCount);
      for (int i = 0; i < 8; i++) {
        if (i >= count) break;
        float age = float(i + 1) / 8.0;
        float strength = 0.04 * (1.0 - age);
        totalDisp += displaceAt(uv * aspect, u_trail[i] * aspect, strength);
      }
    }

    vec2 displaced_uv = uv + totalDisp;
    vec3 col = baseColor(displaced_uv);

    // Subtle refraction highlight at displacement edges
    float dispMag = length(totalDisp);
    col += vec3(0.6, 0.2, 0.35) * dispMag * 2.0;

    gl_FragColor = vec4(col, 1.0);
  }
`;

export default function HeroLiquid({ trigger = 0, sectionRef }: HeroLiquidProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);
  const glRef = useRef<{
    gl: WebGLRenderingContext;
    program: WebGLProgram;
    mouseSmooth: { x: number; y: number };
    mouseTarget: { x: number; y: number } | null;
    trail: { x: number; y: number }[];
    raf: number;
    frameCount: number;
  } | null>(null);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", { alpha: false, antialias: false });
    if (!gl) return;

    // Compile shaders
    const vs = gl.createShader(gl.VERTEX_SHADER)!;
    gl.shaderSource(vs, VERTEX_SHADER);
    gl.compileShader(vs);

    const fs = gl.createShader(gl.FRAGMENT_SHADER)!;
    gl.shaderSource(fs, FRAGMENT_SHADER);
    gl.compileShader(fs);

    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);

    // Full-screen quad
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1, 1, -1, -1, 1,
      -1, 1, 1, -1, 1, 1,
    ]), gl.STATIC_DRAW);
    const posLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const state = {
      gl,
      program,
      mouseSmooth: { x: 0.5, y: 0.5 },
      mouseTarget: null as { x: number; y: number } | null,
      trail: [] as { x: number; y: number }[],
      raf: 0,
      frameCount: 0,
    };
    glRef.current = state;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    window.addEventListener("resize", resize);
    resize();

    // Uniform locations
    const uRes = gl.getUniformLocation(program, "u_resolution");
    const uMouse = gl.getUniformLocation(program, "u_mouse");
    const uActive = gl.getUniformLocation(program, "u_mouseActive");
    const uTrailCount = gl.getUniformLocation(program, "u_trailCount");
    const uTrail: (WebGLUniformLocation | null)[] = [];
    for (let i = 0; i < 8; i++) {
      uTrail.push(gl.getUniformLocation(program, `u_trail[${i}]`));
    }

    const animate = () => {
      const { mouseSmooth, mouseTarget, trail } = state;

      // Ease toward target mouse position (viscous lag)
      if (mouseTarget) {
        mouseSmooth.x += (mouseTarget.x - mouseSmooth.x) * 0.08;
        mouseSmooth.y += (mouseTarget.y - mouseSmooth.y) * 0.08;
      }

      // Record trail every 4 frames
      state.frameCount++;
      if (state.frameCount % 4 === 0 && mouseTarget) {
        trail.unshift({ x: mouseSmooth.x, y: mouseSmooth.y });
        if (trail.length > 8) trail.pop();
      }

      // When mouse leaves, slowly fade trail
      if (!mouseTarget && trail.length > 0 && state.frameCount % 8 === 0) {
        trail.pop();
      }

      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform2f(uMouse, mouseSmooth.x, mouseSmooth.y);
      gl.uniform1f(uActive, mouseTarget || trail.length > 0 ? 1.0 : 0.0);
      gl.uniform1f(uTrailCount, trail.length);
      for (let i = 0; i < 8; i++) {
        if (i < trail.length) {
          gl.uniform2f(uTrail[i], trail[i].x, trail[i].y);
        }
      }

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      state.raf = requestAnimationFrame(animate);
    };

    state.raf = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(state.raf);
      window.removeEventListener("resize", resize);
    };
  }, [mounted]);

  // Pointer events on section
  useEffect(() => {
    if (!mounted) return;
    const section = sectionRef?.current;
    if (!section) return;

    const onMove = (e: PointerEvent) => {
      const canvas = canvasRef.current;
      if (!canvas || !glRef.current) return;
      const rect = canvas.getBoundingClientRect();
      glRef.current.mouseTarget = {
        x: (e.clientX - rect.left) / rect.width,
        y: 1.0 - (e.clientY - rect.top) / rect.height, // flip Y for GL
      };
    };

    const onLeave = () => {
      if (glRef.current) glRef.current.mouseTarget = null;
    };

    section.addEventListener("pointermove", onMove);
    section.addEventListener("pointerleave", onLeave);
    return () => {
      section.removeEventListener("pointermove", onMove);
      section.removeEventListener("pointerleave", onLeave);
    };
  }, [mounted, sectionRef]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      style={{ touchAction: "none" }}
    />
  );
}