// src/components/Footer.tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t w-full">
      <div className="container mx-auto py-6 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} A&S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
