"use client";

import { FadeIn } from "./motion";

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-32 pb-24 sm:pt-44 sm:pb-32">
      <FadeIn>
        <p className="text-accent font-mono text-sm mb-5 tracking-wide">
          Hi, my name is
        </p>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.1] mb-4">
          Valijon.
        </h1>
      </FadeIn>
      <FadeIn delay={0.2}>
        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight leading-[1.1] text-muted mb-8">
          I build things for the web.
        </h2>
      </FadeIn>
      <FadeIn delay={0.3}>
        <p className="max-w-xl text-muted text-lg leading-relaxed mb-10">
          Full-stack developer working with{" "}
          <span className="text-[hsl(var(--foreground))] font-medium">
            TypeScript, React/Next.js, Node.js
          </span>
          , and{" "}
          <span className="text-[hsl(var(--foreground))] font-medium">
            Python
          </span>
          . Based in Tashkent, Uzbekistan. Currently building{" "}
          <a
            href="https://1uy.uz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline underline-offset-4"
          >
            1uy.uz
          </a>{" "}
          — a real estate platform for the Uzbek market.
        </p>
      </FadeIn>
      <FadeIn delay={0.4}>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-[hsl(var(--accent))] text-white px-7 py-3.5 rounded-lg text-sm font-medium hover:bg-[hsl(var(--accent-hover))] transition-all duration-200 hover:shadow-lg hover:shadow-[hsl(var(--accent))]/20"
          >
            View my work
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-default px-7 py-3.5 rounded-lg text-sm font-medium hover:border-[hsl(var(--accent))] hover:text-accent transition-all duration-200"
          >
            Get in touch
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
