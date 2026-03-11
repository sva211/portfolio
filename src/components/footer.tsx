export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-8">
      <div className="mx-auto max-w-4xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--muted)]">
          Built with Next.js &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/sva211"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sv211"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:sv@sv211.xyz"
            className="text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
