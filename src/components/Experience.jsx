import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'

const roles = [
  {
    title: 'Research Assistant',
    org: 'AI-Driven Drone Evacuation System Research',
    location: 'Cedar Falls, Iowa',
    period: 'Jan 2026 – Present',
    current: true,
    bullets: [
      'Develop ML-based systems using drone-collected data to detect individuals inside structures during fire scenarios.',
      'Use Microsoft AirSim with Unreal Engine to simulate flying drones and realistic environments for data collection and testing.',
      'Process geospatial and sensor data to map building layouts and identify safest evacuation routes.',
      'Train computer vision / ML models for real-time decision support under dynamic conditions (fire spread, obstacles, visibility).',
      'Build visualizations to communicate evacuation paths and risk zones for emergency response use.',
    ],
  },
  {
    title: 'Backend Development Intern',
    org: 'VOPM Skunkworks',
    location: 'Santo Domingo, Dominican Republic',
    period: 'Sept 2023 – Nov 2023',
    current: false,
    bullets: [
      'Developed backend tools using Python and SQLite for data tracking and system monitoring.',
      'Implemented automated testing with Cypress, reducing manual testing time by roughly 30%.',
      'Built monitoring systems to improve data update reliability and system accuracy.',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="section-wrap">
        <p className="section-kicker">Experience</p>
        <h2 className="section-title mb-4">Research & internships</h2>
        <p className="text-slate-400 max-w-2xl mb-12">
          From emergency-response ML research to production backend tooling—focused on reliable
          data pipelines and measurable outcomes.
        </p>

        <div className="space-y-8">
          {roles.map((job) => (
            <article
              key={job.org}
              className="card-surface p-8 lg:p-10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-teal-500/10 transition-colors" />
              <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-white">{job.org}</h3>
                  <p className="text-teal-400 font-medium mt-1">{job.title}</p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-1.5">
                      <FaMapMarkerAlt className="text-slate-600" />
                      {job.location}
                    </span>
                    <span
                      className={
                        job.current
                          ? 'text-teal-400 font-medium'
                          : ''
                      }
                    >
                      {job.period}
                    </span>
                  </div>
                </div>
                {job.current && (
                  <span className="inline-flex self-start rounded-full bg-teal-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-400 border border-teal-500/30">
                    Current
                  </span>
                )}
              </div>
              <ul className="relative mt-8 space-y-3 text-slate-400 leading-relaxed">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500/80" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
