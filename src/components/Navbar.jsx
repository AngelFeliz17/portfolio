import React, { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

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
          ? 'border-b border-slate-800/80 bg-ink-950/85 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-wrap">
        <div className="flex h-16 items-center justify-between">
          <a
            href="#home"
            className="font-display text-lg font-bold tracking-tight text-white hover:text-teal-300 transition-colors"
          >
            Angel Feliz
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-white/5"
            onClick={() => setIsMobileMenuOpen((o) => !o)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-ink-950/95 backdrop-blur-md">
          <div className="section-wrap py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-3 text-base font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/5"
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
