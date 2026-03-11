const projects = [
  {
    title: "1uy.uz",
    description:
      "Full-stack real estate platform for the Uzbek market. Property listings, search with filters, user accounts, and admin dashboard. Think Zillow/Zoopla for Uzbekistan.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Node.js", "Tailwind CSS"],
    links: {
      live: "https://1uy.uz",
    },
    featured: true,
  },
  {
    title: "HumanCompiler",
    description:
      "A Claude Code plugin that conducts deep behavioral interviews and generates installable AI agent plugins. Compiles human knowledge and decision-making patterns into reusable agent configurations.",
    tech: ["TypeScript", "Claude API", "Node.js", "Prompt Engineering"],
    links: {
      github: "https://github.com/sva211/HumanCompiler",
    },
    featured: true,
  },
];

function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="text-2xl font-bold mb-12 flex items-center gap-3">
        <span className="text-[var(--accent)] font-mono text-lg">02.</span>
        Projects
        <span className="h-px flex-1 bg-[var(--border)]" />
      </h2>
      <div className="space-y-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group border border-[var(--border)] rounded-lg p-6 sm:p-8 hover:border-[var(--accent)]/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold group-hover:text-[var(--accent)] transition-colors">
                {project.title}
              </h3>
              <div className="flex items-center gap-3 text-[var(--muted)]">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--accent)] transition-colors"
                    aria-label={`${project.title} GitHub`}
                  >
                    <GitHubIcon />
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[var(--accent)] transition-colors"
                    aria-label={`${project.title} live site`}
                  >
                    <ExternalLinkIcon />
                  </a>
                )}
              </div>
            </div>
            <p className="text-[var(--muted)] leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-[var(--muted)] text-sm mt-8">
        More projects coming soon. Check my{" "}
        <a
          href="https://github.com/sva211"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent)] hover:underline"
        >
          GitHub
        </a>{" "}
        for the latest.
      </p>
    </section>
  );
}
