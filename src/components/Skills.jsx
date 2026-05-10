import React from 'react'
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaJava,
} from 'react-icons/fa'
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiFastapi,
  SiOpenai,
  SiGithub,
  SiMysql,
  SiPrisma,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiPostman,
  SiVercel,
  SiRender,
  SiCplusplus,
  SiPowerbi,
  SiMicrosoftexcel,
} from 'react-icons/si'

const categories = [
  {
    name: 'Programming',
    items: [
      { label: 'Python', icon: FaPython, color: 'text-sky-400' },
      { label: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
      { label: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
      { label: 'Java', icon: FaJava, color: 'text-orange-400' },
      { label: 'C++', icon: SiCplusplus, color: 'text-blue-500' },
    ],
  },
  {
    name: 'Frontend',
    items: [
      { label: 'React', icon: FaReact, color: 'text-cyan-400' },
      { label: 'React Native', icon: FaReact, color: 'text-cyan-300' },
      { label: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-400' },
    ],
  },
  {
    name: 'Backend',
    items: [
      { label: 'Node.js', icon: FaNodeJs, color: 'text-green-400' },
      { label: 'Express', icon: SiExpress, color: 'text-slate-300' },
      { label: 'FastAPI', icon: SiFastapi, color: 'text-emerald-400' },
      { label: 'Prisma', icon: SiPrisma, color: 'text-indigo-300' },
    ],
  },
  {
    name: 'Data',
    items: [
      { label: 'Pandas', icon: SiPandas, color: 'text-blue-300' },
      { label: 'NumPy', icon: SiNumpy, color: 'text-blue-500' },
      { label: 'Scikit-learn', icon: SiScikitlearn, color: 'text-orange-300' },
      { label: 'SQL', icon: SiPostgresql, color: 'text-cyan-300' },
    ],
  },
  {
    name: 'Databases',
    items: [
      { label: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
      { label: 'MySQL', icon: SiMysql, color: 'text-amber-400' },
      { label: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
    ],
  },
  {
    name: 'Cloud & tools',
    items: [
      { label: 'AWS', icon: FaAws, color: 'text-amber-500' },
      { label: 'Docker', icon: FaDocker, color: 'text-sky-400' },
      { label: 'GitHub', icon: SiGithub, color: 'text-slate-200' },
      { label: 'Postman', icon: SiPostman, color: 'text-orange-400' },
      { label: 'Vercel', icon: SiVercel, color: 'text-white' },
      { label: 'Render', icon: SiRender, color: 'text-emerald-400' },
    ],
  },
  {
    name: 'Other',
    items: [
      { label: 'OpenAI API', icon: SiOpenai, color: 'text-emerald-300' },
      { label: 'Power BI', icon: SiPowerbi, color: 'text-yellow-500' },
      { label: 'Excel', icon: SiMicrosoftexcel, color: 'text-green-500' },
    ],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="section-wrap">
        <p className="section-kicker">Skills</p>
        <h2 className="section-title mb-4">Technical toolkit</h2>
        <p className="text-slate-400 max-w-2xl mb-12">
          Languages, frameworks, and platforms I use to ship full-stack products and ML-backed
          features.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((cat) => (
            <div key={cat.name} className="card-surface p-6 lg:p-8">
              <h3 className="font-display text-lg font-bold text-white mb-5 pb-3 border-b border-slate-800">
                {cat.name}
              </h3>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {cat.items.map(({ label, icon: Icon, color }) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-slate-800/80 bg-ink-950/30 px-3 py-3 hover:border-teal-500/30 transition-colors"
                  >
                    <Icon className={`text-xl shrink-0 ${color}`} aria-hidden />
                    <span className="text-sm font-medium text-slate-300 leading-tight">
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-slate-500 text-sm">
          Languages: <span className="text-slate-400">English</span> ·{' '}
          <span className="text-slate-400">Spanish</span>
        </p>
      </div>
    </section>
  )
}

export default Skills
