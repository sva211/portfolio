"use client";

import { FadeIn } from "./motion";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <FadeIn>
        <div className="max-w-lg mx-auto text-center">
          <p className="text-accent font-mono text-sm mb-4">04. What&apos;s next?</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Get In Touch</h2>
          <p className="text-muted leading-relaxed mb-10">
            I&apos;m looking for remote opportunities. If you have a role that
            might be a good fit, want to collaborate on something, or just want
            to say hi — I&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sv@sv211.xyz"
              className="inline-flex items-center justify-center gap-2 bg-[hsl(var(--accent))] text-white px-8 py-3.5 rounded-lg text-sm font-medium hover:bg-[hsl(var(--accent-hover))] transition-all duration-200 hover:shadow-lg hover:shadow-[hsl(var(--accent))]/20"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              sv@sv211.xyz
            </a>
            <a
              href="https://www.linkedin.com/in/sv211"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-default px-8 py-3.5 rounded-lg text-sm font-medium hover:border-[hsl(var(--accent))] hover:text-accent transition-all duration-200"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
