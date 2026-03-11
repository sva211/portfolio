export function Footer() {
  return (
    <footer className="border-t border-default py-10">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            Built with Next.js & Tailwind CSS.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/sva211"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sv211"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:sv@sv211.xyz"
              className="text-xs text-muted hover:text-accent transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
