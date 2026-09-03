import React from 'react'
import Counter from './Counter'
import Reveal from './Reveal'

const stats = [
  { to: 70000, suffix: '+', label: 'Business records cleaned' },
  { to: 20, suffix: '+', label: 'Tableau dashboards shipped' },
  { to: 98, suffix: '%', label: 'Data accuracy maintained' },
  { to: 3.54, decimals: 2, label: 'GPA' },
]

const Stats = () => {
  return (
    <section className="border-y border-ink-100 bg-paper-subtle py-12">
      <div className="section-wrap">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90} className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-semibold text-ink-900">
                <Counter to={stat.to} suffix={stat.suffix} decimals={stat.decimals} />
              </div>
              <p className="mt-2 text-xs sm:text-sm text-ink-500 leading-snug">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
