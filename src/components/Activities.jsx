import React from 'react'
import { FaHandsHelping, FaUsers, FaUniversity } from 'react-icons/fa'

const activities = [
  {
    icon: FaUsers,
    title: 'DeMolay International — Cedar Rapids Chapter',
    role: 'Master Councilor (president equivalent)',
    location: 'Cedar Rapids, Iowa',
    period: 'Jul 2025 – Jan 2026',
    bullets: [
      'Directed a youth fraternal organization focused on leadership development, overseeing chapter operations and mentoring members.',
      'Organized community service projects and events, strengthening teamwork and organizational impact.',
    ],
  },
  {
    icon: FaUniversity,
    title: 'Global Student Association — Kirkwood Community College',
    role: 'President',
    location: 'Cedar Rapids, Iowa',
    period: 'Aug 2025 – Dec 2025',
    bullets: [
      'Responsible for planning cultural and community events that promote inclusion and diversity among international and local students.',
    ],
  },
  {
    icon: FaHandsHelping,
    title: 'Church of Jesus Christ of Latter-day Saints — Tower Terrace Ward',
    role: 'Ministering Volunteer',
    location: 'Cedar Rapids, Iowa',
    period: 'Since 2023',
    bullets: [
      'Provide mentorship and community support through regular ministering visits.',
      'Collaborate with leaders to strengthen community ties and support families in need.',
    ],
  },
]

const Activities = () => {
  return (
    <section id="activities" className="py-24 bg-ink-900/40 border-y border-slate-800/80">
      <div className="section-wrap">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <p className="section-kicker">Activities & leadership</p>
            <h2 className="section-title">Community</h2>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-sm">
              Campus and community roles focused on leadership, inclusion, and service.
            </p>
          </div>
          <div className="lg:col-span-8 space-y-6">
            {activities.map((item) => (
              <article
                key={item.title}
                className="card-surface p-8 lg:p-10 flex flex-col sm:flex-row gap-6"
              >
                <div className="rounded-2xl bg-teal-500/10 p-4 h-fit text-teal-400">
                  <item.icon size={28} aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-xl font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-teal-400/90 font-medium mt-1">{item.role}</p>
                  <p className="text-sm text-slate-500 mt-2">
                    {item.location} · {item.period}
                  </p>
                  <ul className="mt-6 space-y-3 text-slate-400 leading-relaxed">
                    {item.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500/80" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Activities
