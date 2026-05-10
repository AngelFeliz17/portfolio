import React from 'react'
import { FaAward, FaBook } from 'react-icons/fa'

const Education = () => {
  const coursework = [
    'Machine Learning',
    'Data Structures',
    'Computer Systems & Architecture',
    'Statistics',
  ]

  return (
    <section id="education" className="py-24 bg-ink-900/50 border-y border-slate-800/80">
      <div className="section-wrap">
        <p className="section-kicker text-center lg:text-left">Education</p>
        <h2 className="section-title text-center lg:text-left mb-12">
          University of Northern Iowa
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="card-surface p-8 lg:p-10">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-teal-500/10 p-3 text-teal-400">
                <FaBook size={24} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-white">
                  B.S. in Computer Science
                </h3>
                <p className="text-teal-400/90 font-medium mt-1">Minor in Data Science</p>
                <p className="mt-4 text-slate-400 leading-relaxed">
                  Dean&apos;s List · Top 4 Math Student (Kirkwood Community College) · Phi Theta
                  Kappa member
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="card-surface p-6 flex items-center gap-4">
              <FaAward className="text-amber-400 text-2xl shrink-0" />
              <div>
                <p className="text-sm uppercase tracking-wider text-slate-500">GPA</p>
                <p className="font-display text-3xl font-bold text-white">3.54</p>
              </div>
            </div>
            <div className="card-surface p-6">
              <p className="text-sm font-semibold text-slate-300 mb-3">Relevant coursework</p>
              <ul className="flex flex-wrap gap-2">
                {coursework.map((c) => (
                  <li
                    key={c}
                    className="rounded-lg border border-slate-700 bg-ink-950/50 px-3 py-1.5 text-sm text-slate-300"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
