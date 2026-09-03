import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`rounded-full border border-ink-200 p-2.5 text-ink-500 hover:text-ink-900 hover:border-ink-900 transition-colors ${className}`}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? <FaSun size={15} /> : <FaMoon size={15} />}
    </button>
  )
}

export default ThemeToggle
