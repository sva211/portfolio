export function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
        <span className="text-[var(--accent)] font-mono text-lg">01.</span>
        About Me
        <span className="h-px flex-1 bg-[var(--border)]" />
      </h2>
      <div className="grid sm:grid-cols-[3fr_2fr] gap-12">
        <div className="space-y-4 text-[var(--muted)] leading-relaxed">
          <p>
            I&apos;m a full-stack developer based in Tashkent, Uzbekistan with a
            passion for building web applications that solve real-world problems.
            I enjoy working across the entire stack — from crafting responsive
            UIs to designing scalable backend architectures and database schemas.
          </p>
          <p>
            Currently, I&apos;m building{" "}
            <a
              href="https://1uy.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              1uy.uz
            </a>
            , a real estate platform for the Uzbek market — similar to Zillow or
            Zoopla but tailored for local needs. This project has given me deep
            experience with complex data models, search infrastructure, and
            building products that people actually use.
          </p>
          <p>
            I&apos;m also passionate about AI integration — I&apos;ve built
            tools like{" "}
            <a
              href="https://github.com/sva211/HumanCompiler"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] hover:underline"
            >
              HumanCompiler
            </a>
            , a Claude Code plugin that conducts deep behavioral interviews and
            compiles human expertise into installable AI agent configurations.
          </p>
          <p>
            I&apos;m open to remote opportunities worldwide and available for
            EOR/contractor arrangements via Deel.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="relative group">
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-lg bg-[var(--accent)]/10 border-2 border-[var(--accent)]/30 flex items-center justify-center text-6xl">
              V
            </div>
            {/* Replace with actual photo: <Image src="/avatar.jpg" ... /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
