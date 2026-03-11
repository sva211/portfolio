"use client";

import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-lg font-semibold tracking-tight hover:text-[var(--accent)] transition-colors"
        >
          sv211
        </a>

        {/* Desktop nav */}
        <ul className="hidden sm:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              className="text-sm border border-[var(--accent)] text-[var(--accent)] px-4 py-1.5 rounded-md hover:bg-[var(--accent)] hover:text-white transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-[var(--foreground)] transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-[var(--foreground)] transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-[var(--foreground)] transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="sm:hidden border-t border-[var(--border)] bg-[var(--background)] px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                className="text-sm text-[var(--accent)]"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
