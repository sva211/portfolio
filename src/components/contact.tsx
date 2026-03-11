export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-20">
      <div className="max-w-lg mx-auto text-center">
        <p className="text-[var(--accent)] font-mono text-sm mb-4">
          04. What&apos;s Next?
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-[var(--muted)] leading-relaxed mb-8">
          I&apos;m currently looking for remote opportunities worldwide.
          Whether you have a position that might be a fit, a project you&apos;d
          like to collaborate on, or just want to say hi — my inbox is always
          open.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:sv@sv211.xyz"
            className="inline-flex items-center justify-center gap-2 bg-[var(--accent)] text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-[var(--accent-hover)] transition-colors"
          >
            Say Hello
          </a>
          <a
            href="https://www.linkedin.com/in/sv211"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-[var(--border)] px-8 py-3 rounded-md text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
