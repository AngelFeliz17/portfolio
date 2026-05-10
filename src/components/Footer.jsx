import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800 bg-ink-950 py-12">
      <div className="section-wrap flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-bold text-white">Angel S. Feliz</p>
          <p className="mt-1 text-sm text-slate-500">
            Computer Science · University of Northern Iowa
          </p>
          <p className="mt-3 text-sm text-slate-600">© {year}. All rights reserved.</p>
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/AngelFeliz17"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-800 p-3 text-slate-400 hover:text-white hover:border-teal-500/40 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/angel-feliz-694208376/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-slate-800 p-3 text-slate-400 hover:text-white hover:border-teal-500/40 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="mailto:angelsfeliz@hotmail.com"
            className="rounded-xl border border-slate-800 p-3 text-slate-400 hover:text-white hover:border-teal-500/40 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope size={22} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
