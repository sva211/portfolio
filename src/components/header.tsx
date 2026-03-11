"use client";

import { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-default bg-[hsl(var(--background))]/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-lg font-semibold tracking-tight hover:text-accent transition-colors"
        >
          sv211
        </a>

        <div className="hidden sm:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-[hsl(var(--foreground))] transition-colors"
            >
              <span className="text-accent font-mono text-xs mr-1">
                0{i + 1}.
              </span>
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            className="text-sm border border-[hsl(var(--accent))] text-accent px-4 py-1.5 rounded-md hover:bg-[hsl(var(--accent))]/10 transition-colors"
          >
            Resume
          </a>
          <ThemeToggle />
        </div>

        <div className="flex sm:hidden items-center gap-3">
          <ThemeToggle />
          <button
            className="flex flex-col gap-1.5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-[hsl(var(--foreground))] transition-transform duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-[hsl(var(--foreground))] transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-6 bg-[hsl(var(--foreground))] transition-transform duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="sm:hidden border-t border-default bg-[hsl(var(--background))] px-6 py-6 space-y-4">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-sm text-muted hover:text-[hsl(var(--foreground))] transition-colors"
            >
              <span className="text-accent font-mono text-xs mr-2">
                0{i + 1}.
              </span>
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            className="block text-sm text-accent"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
