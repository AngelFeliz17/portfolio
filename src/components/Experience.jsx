import React from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa'
import Reveal from './Reveal'

const roles = [
  {
    title: 'Data Analyst',
    org: 'University of Northern Iowa — Institutional Effectiveness and Planning',
    location: 'Cedar Falls, Iowa',
    period: 'Aug 2026 – Present',
    current: true,
    bullets: [
      'Analyzed 3,000+ student records using SQL and Excel to uncover enrollment, yield, and retention trends used in recruitment and student-success planning.',
      'Built 10+ Tableau dashboards that centralized key recruitment and retention KPIs, giving stakeholders faster access to actionable student insights.',
      'Integrate data from 4+ sources to identify factors associated with admitted students choosing not to enroll.',
      'Develop enrollment projections and visual analyses that inform university budget planning and resource-allocation decisions.',
    ],
  },
  {
    title: 'Data Management Assistant',
    org: 'University of Northern Iowa — College of Education',
    location: 'Cedar Falls, Iowa',
    period: 'Jul 2026 – Present',
    current: true,
    bullets: [
      'Analyze 8,000+ student records to identify performance trends over time, helping academic advisors develop targeted student-support and intervention strategies.',
      'Validate and reconcile approximately 400+ student records weekly across multiple source files, identifying incomplete or conflicting information before submission.',
      'Maintain 98% data accuracy, reducing downstream corrections and improving the reliability of institutional records.',
    ],
  },
  {
    title: 'Data Analyst & Software Engineer Intern',
    org: 'Advance Iowa',
    location: 'Cedar Falls, Iowa',
    period: 'Jun 2026 – Aug 2026',
    current: false,
    bullets: [
      'Cleaned, transformed, and integrated 70,000+ business records from four public and commercial sources using Excel, creating an analysis-ready dataset covering all 99 Iowa counties.',
      'Developed 10+ interactive Tableau dashboards and county-level heat maps that enabled stakeholders to analyze regional business-succession trends and guide strategic planning.',
      'Built an internal tracking and reporting system that automatically generates annual Excel and PDF reports, reducing manual data entry by 80% and saving 3 hours per day.',
    ],
  },
  {
    title: 'Backend Development Intern',
    org: 'VOPM Skunkworks',
    location: 'Santo Domingo, Dominican Republic',
    period: 'Sept 2023 – Nov 2023',
    current: false,
    bullets: [
      'Built Python and SQLite backend tools that tracked system events across services, replacing manual log review by the engineering team.',
      'Developed Cypress end-to-end tests covering critical application workflows, reducing manual QA effort by 30%.',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="section-wrap">
        <p className="section-kicker">Experience</p>
        <h2 className="section-title mb-4">Data & internships</h2>
        <p className="text-ink-500 max-w-2xl mb-12">
          From institutional analytics to production backend tooling&mdash;focused on clean data
          pipelines, dashboards, and measurable outcomes.
        </p>

        <div className="space-y-6">
          {roles.map((job, i) => (
            <Reveal key={job.org} delay={i * 90}>
              <article className="card-surface p-8 lg:p-10 relative transition-transform hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink-900">{job.org}</h3>
                    <p className="text-accent font-medium mt-1">{job.title}</p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 text-sm text-ink-400">
                      <span className="inline-flex items-center gap-1.5">
                        <FaMapMarkerAlt className="text-ink-300" />
                        {job.location}
                      </span>
                      <span className={job.current ? 'text-accent font-medium' : ''}>
                        {job.period}
                      </span>
                    </div>
                  </div>
                  {job.current && (
                    <span className="inline-flex self-start rounded-full bg-accent-light px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-dark border border-accent/20">
                      Current
                    </span>
                  )}
                </div>
                <ul className="mt-8 space-y-3 text-ink-500 leading-relaxed">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
