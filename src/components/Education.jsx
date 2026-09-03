import React from 'react'
import { FaAward, FaBook } from 'react-icons/fa'
import Reveal from './Reveal'

const Education = () => {
  const coursework = [
    'Machine Learning',
    'Data Structures',
    'Statistics',
    'Database Systems',
    'Data Visualization',
  ]

  return (
    <section id="education" className="py-24 bg-paper-subtle border-y border-ink-100">
      <div className="section-wrap">
        <p className="section-kicker text-center lg:text-left">Education</p>
        <h2 className="section-title text-center lg:text-left mb-12">
          University of Northern Iowa
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal className="card-surface p-8 lg:p-10 transition-transform hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-accent-light p-3 text-accent">
                <FaBook size={22} />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink-900">
                  B.S. in Computer Science
                </h3>
                <p className="text-accent font-medium mt-1">
                  Minor in Data Science &middot; Expected Dec 2027
                </p>
                <p className="mt-4 text-ink-500 leading-relaxed">
                  Dean&apos;s List &middot; Top 4 Math Student (Kirkwood Community College)
                  &middot; Phi Theta Kappa member
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="space-y-6">
            <div className="card-surface p-6 flex items-center gap-4 transition-transform hover:-translate-y-1">
              <FaAward className="text-gold text-2xl shrink-0" />
              <div>
                <p className="text-sm uppercase tracking-wider text-ink-400">GPA</p>
                <p className="num text-3xl font-semibold text-ink-900">3.54</p>
              </div>
            </div>
            <div className="card-surface p-6">
              <p className="text-sm font-semibold text-ink-700 mb-3">Relevant coursework</p>
              <ul className="flex flex-wrap gap-2">
                {coursework.map((c) => (
                  <li
                    key={c}
                    className="tag-pill transition-colors hover:border-accent/50 hover:text-ink-900"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Education
