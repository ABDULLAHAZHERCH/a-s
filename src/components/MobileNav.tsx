// src/components/MobileNav.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling of the background when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="md:hidden">
      <Button onClick={toggleOpen} variant="ghost" size="icon">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </Button>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-in fade-in-20"
          aria-modal="true"
          role="dialog"
        >
          {/* Overlay: clicking/touching outside the menu closes it */}
          <div
            className="absolute inset-0"
            onClick={() => setIsOpen(false)}
            onTouchStart={() => setIsOpen(false)}
            style={{ zIndex: 51 }}
          />
          {/* Menu panel */}
          <div
            className="fixed left-0 top-0 w-full h-full bg-background z-60 p-6"
            style={{ maxWidth: "100vw", maxHeight: "100vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
                <span className="text-xl font-bold">Abdullah & Shahmir</span>
              </Link>
              <Button onClick={toggleOpen} variant="ghost" size="icon">
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="flex flex-col items-center justify-center gap-6 mt-16">
              <Link
                href="/#services"
                className="text-2xl font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/#projects"
                className="text-2xl font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="text-2xl font-medium hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Button asChild size="lg" className="w-full mt-8">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
