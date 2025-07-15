// src/components/SmoothScroll.tsx
"use client";

import ReactLenis from "lenis/react";
import useLenis from "lenis";
import { useEffect } from "react";

// This component now integrates Lenis for smooth scrolling
function SmoothScroll({ children }: { children: React.ReactNode }) {
  // Get the Lenis instance (no arguments)
  const lenis = useLenis;

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
