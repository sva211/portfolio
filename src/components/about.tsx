"use client";

import { FadeIn } from "./motion";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <FadeIn>
        <h2 className="text-2xl font-bold mb-10 flex items-center gap-4">
          <span className="text-accent font-mono text-base">01.</span>
          About Me
          <span className="h-px flex-1 bg-[hsl(var(--border))]" />
        </h2>
      </FadeIn>
      <div className="grid sm:grid-cols-[3fr_2fr] gap-12 items-start">
        <FadeIn delay={0.1}>
          <div className="space-y-5 text-muted leading-relaxed">
            <p>
              I&apos;m a full-stack developer based in Tashkent, Uzbekistan. I
              like building web applications that solve real problems — from
              responsive frontends to database schemas and everything in between.
            </p>
            <p>
              Right now I&apos;m building{" "}
              <a
                href="https://1uy.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline underline-offset-4"
              >
                1uy.uz
              </a>
              , a real estate platform for the Uzbek market. Think Zillow, but
              built for how people actually search for property here. That project
              has pushed me deep into complex search, data modeling, and building
              something people use daily.
            </p>
            <p>
              I&apos;m also interested in AI integration. I maintain an enhanced
              fork of{" "}
              <a
                href="https://github.com/sva211/HumanCompiler"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline underline-offset-4"
              >
                HumanCompiler
              </a>
              , where I added multi-LLM export and profile analytics to a Claude
              Code plugin that compiles human expertise into AI agent
              configurations.
            </p>
            <p>
              I&apos;m looking for remote opportunities worldwide and happy to
              work through EOR/Deel arrangements.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-[hsl(var(--accent))]/10 rounded-xl blur-xl group-hover:bg-[hsl(var(--accent))]/20 transition-colors duration-500" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-xl bg-card border border-default flex items-center justify-center text-6xl font-bold text-accent/50 overflow-hidden">
                V
                {/* Replace with: <Image src="/avatar.jpg" alt="Valijon" fill className="object-cover" /> */}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
