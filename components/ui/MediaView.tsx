"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type Props = {
  imageUrl?: string | null;
  videoUrl?: string | null;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

export function MediaView({ imageUrl, videoUrl, alt, sizes, priority, className }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [videoUrl]);

  if (videoUrl) {
    return (
      <video
        ref={videoRef}
        src={videoUrl}
        autoPlay
        muted
        loop
        playsInline
        className={className}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    );
  }

  if (!imageUrl) return null;

  return (
    <Image
      src={imageUrl}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className}
    />
  );
}
