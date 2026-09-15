import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'
import resumeUrl from '../assets/angel-feliz-data-science-resume.pdf'

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16"
    >
      <div className="section-wrap relative">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accent mb-6 opacity-0 animate-fade-in">
            Portfolio · Data Science &amp; Software Development
          </p>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold text-ink-900 leading-[1.05] opacity-0 animate-slide-up">
            Angel S.{' '}
            <span className="text-gradient">Feliz</span>
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-ink-500 max-w-xl leading-relaxed opacity-0 animate-slide-up delay-100">
            Computer Science student with a Data Science minor at the University of Northern Iowa.
            I turn data into insights, build full-stack applications, and develop deep learning
            models for animal-footprint research.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink-200 px-4 py-2 text-sm text-ink-500 opacity-0 animate-slide-up delay-100">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span>Cedar Falls, Iowa &middot; Open to internships &amp; collaboration</span>
          </div>

          <div className="mt-10 flex flex-wrap gap-3 opacity-0 animate-slide-up delay-200">
            <a href="#projects" className="btn-primary">
              View projects
            </a>
            <a href="#contact" className="btn-secondary">
              Get in touch
            </a>
            <a href={resumeUrl} download="Angel Feliz - Data Science Resume.pdf" className="btn-secondary">
              Download resume
            </a>
          </div>

          <div className="mt-12 flex items-center gap-3 opacity-0 animate-slide-up delay-300">
            <a
              href="https://github.com/AngelFeliz17"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink-200 p-3 text-ink-500 hover:text-ink-900 hover:border-ink-900 transition-all"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/angel-feliz-694208376/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink-200 p-3 text-ink-500 hover:text-ink-900 hover:border-ink-900 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:angelsfeliz@hotmail.com"
              className="rounded-full border border-ink-200 p-3 text-ink-500 hover:text-ink-900 hover:border-ink-900 transition-all"
              aria-label="Email"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        <div className="mt-24 flex justify-center sm:justify-start opacity-0 animate-fade-in delay-300">
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-2 text-ink-400 hover:text-accent transition-colors text-xs font-medium uppercase tracking-widest"
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
