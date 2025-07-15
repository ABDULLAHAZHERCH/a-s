// src/app/template.tsx
"use client";

import { motion } from "framer-motion";

// This is a simple fade-in animation
// You can customize it to be more complex if you wish
const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ ease: "linear", duration: 0.5 }}
    >
      {children}
    </motion.main>
  );
}