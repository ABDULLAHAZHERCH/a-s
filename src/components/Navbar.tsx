// src/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./MobileNav";
import { usePathname, useRouter } from "next/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();
  const router = useRouter();

  const handleScroll = (id: string) => {
    if (pathname !== "/") {
      // Navigate to homepage with hash
      router.push(`/#${id}`);
    } else {
      // Already on homepage, smooth scroll
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-sm border-b"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center justify-center">
          <span className="text-xl font-bold">Abdullah & Shahmir</span>
        </Link>

        {/* --- Desktop Navigation (Hidden on mobile) --- */}
        <nav className="hidden md:flex items-center gap-4 sm:gap-6">
          <button onClick={() => handleScroll("services")} className="text-sm font-medium hover:underline underline-offset-4">
            Services
          </button>
          <button onClick={() => handleScroll("projects")} className="text-sm font-medium hover:underline underline-offset-4">
            Projects
          </button>
          <Link
            href="/about"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            About
          </Link>
          <ThemeToggle />
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </nav>

        {/* --- Mobile Navigation (Visible on mobile) --- */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
