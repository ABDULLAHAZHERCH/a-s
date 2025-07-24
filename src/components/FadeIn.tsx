// src/components/FadeIn.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Optional delay in seconds
}

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const inView =
      rect.top < window.innerHeight && rect.bottom > 0;
    if (inView) {
      setShouldAnimate(true);
    }
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : undefined}
      whileInView={!shouldAnimate ? { opacity: 1, y: 0 } : undefined}
      viewport={!shouldAnimate ? { once: true, margin: "-50px" } : undefined}
      transition={{
        duration: 0.5,
        delay: delay,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}