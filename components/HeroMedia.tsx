"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type HeroMediaProps = {
  src: string;
  alt: string;
};

export default function HeroMedia({ src, alt }: HeroMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideo = src.endsWith('.mp4');

  useEffect(() => {
    if (!isVideo || !videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = videoRef.current;
          if (video) {
            if (entry.isIntersecting) {
              video.play().catch(() => {});
            } else {
              video.pause();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [isVideo]);

  return (
    <div className="w-full overflow-hidden rounded-xl">
      {isVideo ? (
        <video
          ref={videoRef}
          src={src}
          muted
          loop
          playsInline
          className="w-full h-auto"
          style={{ width: '100%', height: 'auto' }}
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          style={{ width: '100%', height: 'auto' }}
          priority
        />
      )}
    </div>
  );
}
