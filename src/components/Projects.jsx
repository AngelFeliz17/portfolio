import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
  {
    title: 'Student Marketplace',
    status: 'In progress',
    description:
      'Full-stack marketplace with secure authentication, relational data models, and OpenAI-powered content insights. Backend containerized for scalable deployment.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Prisma', 'OpenAI API', 'Docker'],
    github: 'https://github.com/AngelFeliz17/student_marketplace',
    demo: null,
    accent: 'from-violet-500/30 to-fuchsia-500/20',
  },
  {
    title: 'Social Media Platform',
    status: 'Shipped',
    description:
      'Full-stack social app with JWT auth, protected routes, Cloudinary media, real-time notifications for likes and comments, and OpenAI for image descriptions and content analysis.',
    tech: [
      'React',
      'TypeScript',
      'Vite',
      'Node.js',
      'Express',
      'MongoDB',
      'Tailwind CSS',
      'Cloudinary',
      'OpenAI API',
    ],
    github: 'https://github.com/AngelFeliz17/BestSocialApp',
    demo: 'https://best-social-app.vercel.app/',
    accent: 'from-cyan-500/30 to-teal-500/20',
  },
  {
    title: 'Point of Sale (POS) System',
    status: 'Shipped',
    description:
      'Sales and inventory system with CRUD for products, categories, and transactions; real-time stock updates and sales reporting for business insights.',
    tech: ['TypeScript', 'TypeORM', 'MySQL', 'Tailwind CSS'],
    github: null,
    demo: null,
    accent: 'from-amber-500/25 to-orange-500/15',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-ink-900/40 border-y border-slate-800/80">
      <div className="section-wrap">
        <p className="section-kicker">Projects</p>
        <h2 className="section-title mb-4">Personal projects</h2>
        <p className="text-slate-400 max-w-2xl mb-12">
          Selected work spanning full-stack web apps, APIs, and data-heavy features—built for
          clarity, security, and maintainability.
        </p>

        <div className="grid gap-8 lg:grid-cols-1">
          {projects.map((project) => (
            <article
              key={project.title}
              className="card-surface overflow-hidden flex flex-col lg:flex-row"
            >
              <div
                className={`lg:w-2/5 min-h-[140px] bg-gradient-to-br ${project.accent} relative`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.5),transparent)]" />
                <div className="relative h-full flex flex-col justify-end p-8">
                  <span
                    className={`inline-flex self-start rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                      project.status === 'In progress'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-teal-500/15 text-teal-300 border border-teal-500/25'
                    }`}
                  >
                    {project.status}
                  </span>
                  <h3 className="font-display mt-4 text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
              <div className="flex-1 p-8 lg:p-10 flex flex-col">
                <p className="text-slate-400 leading-relaxed flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-slate-700/80 bg-ink-950/40 px-2.5 py-1 text-xs font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors"
                    >
                      <FaGithub />
                      {project.title === 'Student Marketplace' ? 'GitHub profile' : 'Source'}
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-teal-300 transition-colors"
                    >
                      <FaExternalLinkAlt className="text-slate-500" />
                      Live demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
