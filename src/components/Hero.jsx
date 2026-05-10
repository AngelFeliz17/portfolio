import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import { HiOutlineAcademicCap } from 'react-icons/hi2'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-20 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-grid-fade" />
      <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-teal-500/10 blur-3xl animate-float" />
      <div
        className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-cyan-500/5 blur-3xl animate-float"
        style={{ animationDelay: '2s' }}
      />

      <div className="section-wrap relative z-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-400/90 mb-4 opacity-0 animate-fade-in">
            Portfolio · Computer Science
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.05] opacity-0 animate-slide-up">
            Angel S.{' '}
            <span className="text-gradient">Feliz</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-400 max-w-xl opacity-0 animate-slide-up delay-100">
            B.S. Computer Science (Data Science minor) at the University of Northern Iowa.
            I build full-stack applications and ML-powered systems—from research drones to
            production APIs.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-ink-850/40 px-4 py-2 text-sm text-slate-400 opacity-0 animate-slide-up delay-100">
            <HiOutlineAcademicCap className="text-teal-400 text-lg shrink-0" />
            <span>Cedar Falls, Iowa · Open to internships & collaboration</span>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 opacity-0 animate-slide-up delay-200">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-ink-950 shadow-lg shadow-teal-500/20 hover:brightness-110 transition-all"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-slate-600 bg-ink-850/50 px-6 py-3 text-sm font-semibold text-white hover:border-teal-500/50 hover:bg-ink-800/80 transition-all"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4 opacity-0 animate-slide-up delay-300">
            <a
              href="https://github.com/AngelFeliz17"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-700 p-3 text-slate-400 hover:text-white hover:border-teal-500/40 hover:bg-white/5 transition-all"
              aria-label="GitHub"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/angel-feliz-694208376/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-700 p-3 text-slate-400 hover:text-white hover:border-teal-500/40 hover:bg-white/5 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="mailto:angelsfeliz@hotmail.com"
              className="rounded-xl border border-slate-700 p-3 text-slate-400 hover:text-white hover:border-teal-500/40 hover:bg-white/5 transition-all"
              aria-label="Email"
            >
              <FaEnvelope size={22} />
            </a>
          </div>
        </div>

        <div className="mt-20 flex justify-center sm:justify-start opacity-0 animate-fade-in delay-300">
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-slate-500 hover:text-teal-400 transition-colors text-xs font-medium uppercase tracking-widest"
          >
            <span>Scroll</span>
            <FaArrowDown className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
