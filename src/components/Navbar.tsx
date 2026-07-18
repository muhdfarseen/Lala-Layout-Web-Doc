import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { docsComponents } from './DocsSidebar'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark')
    }
    return false
  })

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    }
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    if (next) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#1c1c1f]/80 backdrop-blur-[20px] border-b border-[var(--border-color)]">
      <nav className="max-w-[1200px] mx-auto flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="h-8 flex items-center justify-start group-hover:scale-105 transition-transform duration-300 origin-left">
            <img
              src={isDark ? '/lalalayoutondark.svg' : '/lalalayout.svg'}
              alt="Lala Layout"
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-1">
          {/* Documentation link */}
          <Link
            to="/docs"
            className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
          >
            Documentation
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          {/* Divider */}
          <div className="w-px h-5 bg-[var(--border-color)] mx-1.5" />

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--hover-bg)] transition-all duration-200"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
          </button>

          {/* npm icon */}
          <a
            href="https://www.npmjs.com/package/@muhdfarseen/lala-layout"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--hover-bg)] transition-all duration-200"
            aria-label="npm"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323h13.74v13.354H15.5V8.693h-3.37v9.984H5.13z" />
            </svg>
          </a>

          {/* GitHub icon */}
          <a
            href="https://github.com/muhdfarseen/Lala-Layout"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--hover-bg)] transition-all duration-200"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
        </div>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-1">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
          </button>
          <button
            className="p-2 text-[var(--text-primary)]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[var(--border-color)] bg-[var(--bg-primary)] px-6 py-4 space-y-2">
          <Link
            to="/docs"
            onClick={() => setMobileOpen(false)}
            className="block py-2 text-sm font-medium text-[var(--text-primary)]"
          >
            Documentation
          </Link>
          <a
            href="https://www.npmjs.com/package/@muhdfarseen/lala-layout"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 text-sm font-medium text-[var(--text-secondary)]"
          >
            npm ↗
          </a>
          <a
            href="https://github.com/muhdfarseen/Lala-Layout"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            GitHub ↗
          </a>
          
          {/* Docs Mobile Menu */}
          {location.pathname.startsWith('/docs') && (
            <div className="pt-4 mt-2 border-t border-[var(--border-color)]">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-3 px-1">
                Components
              </h3>
              <div className="space-y-1">
                {docsComponents.map((component) => {
                  const isActive = location.pathname === component.path
                  const Icon = component.icon
                  return (
                    <Link
                      key={component.name}
                      to={component.path}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'bg-[var(--hover-bg)] text-[var(--text-primary)]'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--hover-bg)]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {component.name}
                    </Link>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      )}

    </header>
  )
}
