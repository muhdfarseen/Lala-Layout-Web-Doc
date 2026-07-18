import { Link } from 'react-router-dom'
import { Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Brand */}
          <div className="max-w-[300px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 group">
              <div className="h-7 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img src="/lalalayout.svg" alt="Lala Layout" className="w-full h-full object-contain logo-light" />
                <img src="/lalalayoutondark.svg" alt="Lala Layout" className="w-full h-full object-contain logo-dark" />
              </div>
            </Link>

            <p className="text-sm text-[var(--text-secondary)] mt-3 font-medium leading-relaxed">
              Lightweight, zero-dependency React layout components. Build beautiful layouts with any UI library.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap md:flex-nowrap gap-10 md:gap-24">
            {/* Components */}
            <div>
              <h4 className="text-[15px] font-semibold text-[var(--text-primary)] mb-4">Components</h4>
              <ul className="space-y-3">
                {['Center', 'Container', 'Flex', 'Grid', 'Group', 'SimpleGrid', 'Space', 'Stack'].map((comp) => (
                  <li key={comp}>
                    <Link
                      to={`/docs/components/${comp.toLowerCase()}`}
                      className="text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      {comp}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-[15px] font-semibold text-[var(--text-primary)] mb-4">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/docs" className="text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                    Getting Started
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.npmjs.com/package/@muhdfarseen/lala-layout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    npm Package
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/muhdfarseen/Lala-Layout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h4 className="text-[15px] font-semibold text-[var(--text-primary)] mb-4">Community</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://github.com/muhdfarseen/Lala-Layout/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    Report Issue
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/muhdfarseen/Lala-Layout/discussions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    Discussions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--text-secondary)] font-medium flex items-center gap-1.5">
            Made with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> by muhdfarseen
            {/* LinkedIn icon */}
            <a
              href="https://www.linkedin.com/in/muhdfarseen/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-[var(--text-secondary)] hover:text-[#0A66C2] transition-colors inline-flex items-center"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </p>
          <p className="text-sm text-[var(--text-secondary)] font-medium">
            MIT License · v1.0.0
          </p>
        </div>
      </div>
    </footer>
  )
}
