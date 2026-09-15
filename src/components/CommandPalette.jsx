import React, { useEffect, useMemo, useRef, useState } from 'react'
import {
  FaHome,
  FaUser,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaTools,
  FaUsers,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaSun,
  FaMoon,
  FaSearch,
} from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef(null)
  const { theme, toggleTheme } = useTheme()

  const commands = useMemo(
    () => [
      { label: 'Home', keywords: 'top hero', icon: FaHome, action: () => scrollTo('#home') },
      { label: 'About', keywords: 'bio who', icon: FaUser, action: () => scrollTo('#about') },
      {
        label: 'Education',
        keywords: 'uni school degree',
        icon: FaGraduationCap,
        action: () => scrollTo('#education'),
      },
      {
        label: 'Experience',
        keywords: 'work jobs internships',
        icon: FaBriefcase,
        action: () => scrollTo('#experience'),
      },
      {
        label: 'Research & projects',
        keywords: 'work portfolio apps machine learning footprints pantherx',
        icon: FaCode,
        action: () => scrollTo('#projects'),
      },
      { label: 'Skills', keywords: 'tools stack', icon: FaTools, action: () => scrollTo('#skills') },
      {
        label: 'Community',
        keywords: 'activities leadership',
        icon: FaUsers,
        action: () => scrollTo('#activities'),
      },
      {
        label: 'Contact',
        keywords: 'email message form',
        icon: FaEnvelope,
        action: () => scrollTo('#contact'),
      },
      {
        label: 'Open GitHub',
        keywords: 'code repos',
        icon: FaGithub,
        action: () => window.open('https://github.com/AngelFeliz17', '_blank', 'noopener'),
      },
      {
        label: 'Open LinkedIn',
        keywords: 'network profile',
        icon: FaLinkedin,
        action: () =>
          window.open('https://www.linkedin.com/in/angel-feliz-694208376/', '_blank', 'noopener'),
      },
      {
        label: theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
        keywords: 'theme dark light appearance',
        icon: theme === 'dark' ? FaSun : FaMoon,
        action: toggleTheme,
      },
    ],
    [theme, toggleTheme]
  )

  const scrollTo = (hash) => {
    document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return commands
    return commands.filter(
      (c) => c.label.toLowerCase().includes(q) || c.keywords.includes(q)
    )
  }, [query, commands])

  const close = () => {
    setIsOpen(false)
    setQuery('')
    setActiveIndex(0)
  }

  const runCommand = (cmd) => {
    if (!cmd) return
    cmd.action()
    close()
  }

  useEffect(() => {
    const handleKey = (e) => {
      const isMod = e.metaKey || e.ctrlKey
      if (isMod && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setIsOpen((o) => !o)
        return
      }
      if (!isOpen) return

      if (e.key === 'Escape') {
        close()
      } else if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveIndex((i) => (i + 1) % Math.max(filtered.length, 1))
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveIndex((i) => (i - 1 + filtered.length) % Math.max(filtered.length, 1))
      } else if (e.key === 'Enter') {
        e.preventDefault()
        runCommand(filtered[activeIndex])
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, filtered, activeIndex])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="hidden sm:inline-flex items-center gap-2 rounded-full border border-ink-200 px-3.5 py-2 text-xs font-medium text-ink-400 hover:text-ink-900 hover:border-ink-900 transition-colors"
        aria-label="Open command palette"
      >
        <FaSearch size={12} />
        <span>Search</span>
        <kbd className="ml-1 rounded border border-ink-200 px-1.5 py-0.5 text-[10px] font-sans text-ink-400">
          &#8984;K
        </kbd>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[80] flex items-start justify-center pt-24 sm:pt-32 px-4 bg-ink-900/50 backdrop-blur-sm animate-fade-in"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label="Command palette"
        >
          <div
            className="card-surface w-full max-w-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-ink-100 px-4 py-3">
              <FaSearch className="text-ink-400 shrink-0" size={14} />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Jump to a section, project, or action…"
                className="w-full bg-transparent text-sm text-ink-900 placeholder:text-ink-300 outline-none"
              />
              <kbd className="rounded border border-ink-200 px-1.5 py-0.5 text-[10px] text-ink-400 shrink-0">
                Esc
              </kbd>
            </div>

            <ul className="max-h-80 overflow-y-auto py-2">
              {filtered.length === 0 && (
                <li className="px-4 py-6 text-center text-sm text-ink-400">No matches.</li>
              )}
              {filtered.map((cmd, i) => (
                <li key={cmd.label}>
                  <button
                    type="button"
                    onClick={() => runCommand(cmd)}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={`flex w-full items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors ${
                      i === activeIndex
                        ? 'bg-accent-light text-ink-900'
                        : 'text-ink-500 hover:bg-paper-subtle'
                    }`}
                  >
                    <cmd.icon
                      className={i === activeIndex ? 'text-accent' : 'text-ink-300'}
                      size={14}
                    />
                    {cmd.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default CommandPalette
