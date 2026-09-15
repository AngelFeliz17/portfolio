import React from 'react'
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaJava,
  FaRobot,
  FaTerminal,
  FaMagic,
  FaExchangeAlt,
} from 'react-icons/fa'
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiFastapi,
  SiNestjs,
  SiGit,
  SiMysql,
  SiPrisma,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiR,
  SiCplusplus,
  SiPowerbi,
  SiMicrosoftexcel,
  SiTableau,
  SiPytorch,
  SiNextdotjs,
} from 'react-icons/si'
import Reveal from './Reveal'

const categories = [
  {
    name: 'Data Analytics & Machine Learning',
    items: [
      { label: 'PyTorch', icon: SiPytorch },
      { label: 'Excel', icon: SiMicrosoftexcel },
      { label: 'Tableau', icon: SiTableau },
      { label: 'Power BI', icon: SiPowerbi },
      { label: 'SQL', icon: SiPostgresql },
      { label: 'Pandas', icon: SiPandas },
      { label: 'NumPy', icon: SiNumpy },
      { label: 'Scikit-learn', icon: SiScikitlearn },
    ],
  },
  {
    name: 'Databases',
    items: [
      { label: 'PostgreSQL', icon: SiPostgresql },
      { label: 'MySQL', icon: SiMysql },
      { label: 'MongoDB', icon: SiMongodb },
    ],
  },
  {
    name: 'Programming',
    items: [
      { label: 'Python', icon: FaPython },
      { label: 'R', icon: SiR },
      { label: 'TypeScript', icon: SiTypescript },
      { label: 'JavaScript', icon: SiJavascript },
      { label: 'Java', icon: FaJava },
      { label: 'C++', icon: SiCplusplus },
    ],
  },
  {
    name: 'Development',
    items: [
      { label: 'Next.js', icon: SiNextdotjs },
      { label: 'React', icon: FaReact },
      { label: 'Node.js', icon: FaNodeJs },
      { label: 'NestJS', icon: SiNestjs },
      { label: 'Express', icon: SiExpress },
      { label: 'FastAPI', icon: SiFastapi },
      { label: 'Prisma', icon: SiPrisma },
      { label: 'Tailwind CSS', icon: SiTailwindcss },
      { label: 'Docker', icon: FaDocker },
      { label: 'AWS', icon: FaAws },
      { label: 'Git', icon: SiGit },
      { label: 'REST APIs', icon: FaExchangeAlt },
    ],
  },
  {
    name: 'AI Tools',
    items: [
      { label: 'Claude Code', icon: FaRobot },
      { label: 'Codex', icon: FaTerminal },
      { label: 'Copilot', icon: FaMagic },
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="section-wrap">
        <p className="section-kicker">Skills</p>
        <h2 className="section-title mb-4">Technical toolkit</h2>
        <p className="text-ink-500 max-w-2xl mb-12">
          Languages, frameworks, and platforms I use to turn raw data into insights and ship
          full-stack products.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((cat, i) => (
            <Reveal key={cat.name} delay={i * 90}>
              <div className="card-surface p-6 lg:p-8 h-full transition-transform hover:-translate-y-1">
                <h3 className="font-display text-lg font-semibold text-ink-900 mb-5 pb-3 border-b border-ink-100">
                  {cat.name}
                </h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {cat.items.map(({ label, icon: Icon }) => (
                    <li
                      key={label}
                      className="flex items-center gap-2.5 rounded-lg border border-ink-100 bg-paper px-3 py-3 transition-all hover:border-accent/50 hover:-translate-y-0.5"
                    >
                      <Icon className="text-lg shrink-0 text-accent" aria-hidden />
                      <span className="text-sm font-medium text-ink-700 leading-tight">
                        {label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-ink-400 text-sm">
          Languages: <span className="text-ink-700">English</span> ·{' '}
          <span className="text-ink-700">Spanish</span>
        </p>
      </div>
    </section>
  )
}

export default Skills
