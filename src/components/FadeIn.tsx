// src/components/FadeIn.tsx
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Optional delay in seconds
}

export function FadeIn({ children, className, delay = 0 }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Start invisible and 20px down
      whileInView={{ opacity: 1, y: 0 }} // Animate to visible and original position
      viewport={{ once: true, margin: "-50px" }} // Trigger animation when element is 50px into the viewport, and only once
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