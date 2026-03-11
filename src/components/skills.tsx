const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML/CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "NestJS",
      "Python",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    title: "Database & ORM",
    skills: ["PostgreSQL", "Prisma", "Redis", "MongoDB", "SQL"],
  },
  {
    title: "AI / LLM",
    skills: [
      "OpenAI API",
      "Anthropic API",
      "RAG",
      "Vercel AI SDK",
      "Prompt Engineering",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Docker", "GitHub Actions", "Vercel", "AWS", "Linux"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="text-2xl font-bold mb-12 flex items-center gap-3">
        <span className="text-[var(--accent)] font-mono text-lg">03.</span>
        Skills
        <span className="h-px flex-1 bg-[var(--border)]" />
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--accent)]">
              {cat.title}
            </h3>
            <ul className="space-y-1.5">
              {cat.skills.map((skill) => (
                <li
                  key={skill}
                  className="text-sm text-[var(--muted)] flex items-center gap-2"
                >
                  <span className="text-[var(--accent)] text-xs">&#9656;</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
