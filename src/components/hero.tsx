export function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-32 pb-20 sm:pt-40 sm:pb-28">
      <p className="text-[var(--accent)] font-mono text-sm mb-4">
        Hi, my name is
      </p>
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4">
        Valijon.
      </h1>
      <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[var(--muted)] mb-6">
        I build things for the web.
      </h2>
      <p className="max-w-xl text-[var(--muted)] text-lg leading-relaxed mb-8">
        Full-Stack Developer specializing in{" "}
        <span className="text-[var(--foreground)]">
          TypeScript, React/Next.js, Node.js
        </span>
        , and{" "}
        <span className="text-[var(--foreground)]">Python</span>. Based in
        Tashkent, Uzbekistan. Currently building{" "}
        <a
          href="https://1uy.uz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent)] hover:underline"
        >
          1uy.uz
        </a>{" "}
        — a real estate platform for the Uzbek market.
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 bg-[var(--accent)] text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors"
        >
          View my work
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 border border-[var(--border)] px-6 py-3 rounded-md text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
