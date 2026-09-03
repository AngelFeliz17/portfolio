import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import ThemeToggle from './ThemeToggle'
import CommandPalette from './CommandPalette'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Community', href: '#activities' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-ink-100 bg-paper/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-wrap">
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href="#home"
            className="font-display text-lg italic font-semibold tracking-tight text-ink-900 hover:text-accent transition-colors shrink-0"
          >
            Angel Feliz
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-ink-500 hover:text-ink-900 rounded-full hover:bg-ink-100/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <CommandPalette />
            <ThemeToggle />
            <button
              type="button"
              className="md:hidden p-2 text-ink-700 hover:text-ink-900 rounded-lg hover:bg-ink-100/60"
              onClick={() => setIsMobileMenuOpen((o) => !o)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-ink-100 bg-paper/95 backdrop-blur-md">
          <div className="section-wrap py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-3 text-base font-medium text-ink-700 hover:text-ink-900 rounded-lg hover:bg-ink-100/60"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
