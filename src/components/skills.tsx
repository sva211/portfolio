"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./motion";

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
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <FadeIn>
        <h2 className="text-2xl font-bold mb-12 flex items-center gap-4">
          <span className="text-accent font-mono text-base">03.</span>
          Skills
          <span className="h-px flex-1 bg-[hsl(var(--border))]" />
        </h2>
      </FadeIn>
      <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((cat) => (
          <StaggerItem key={cat.title}>
            <div className="space-y-4">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-accent">
                {cat.title}
              </h3>
              <ul className="space-y-2">
                {cat.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted flex items-center gap-2.5 group"
                  >
                    <span className="text-accent text-[10px] opacity-60 group-hover:opacity-100 transition-opacity">
                      &#9656;
                    </span>
                    <span className="group-hover:text-[hsl(var(--foreground))] transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
