import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink-100 bg-paper-subtle py-12">
      <div className="section-wrap flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display italic text-lg font-semibold text-ink-900">Angel S. Feliz</p>
          <p className="mt-1 text-sm text-ink-400">
            Computer Science · University of Northern Iowa
          </p>
          <p className="mt-3 text-sm text-ink-300">© {year}. All rights reserved.</p>
        </div>
        <div className="flex gap-3">
          <a
            href="https://github.com/AngelFeliz17"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink-200 p-3 text-ink-500 hover:text-ink-900 hover:border-ink-900 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/angel-feliz-694208376/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink-200 p-3 text-ink-500 hover:text-ink-900 hover:border-ink-900 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:angelsfeliz@hotmail.com"
            className="rounded-full border border-ink-200 p-3 text-ink-500 hover:text-ink-900 hover:border-ink-900 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
