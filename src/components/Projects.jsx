import React, { useMemo, useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaExpand } from 'react-icons/fa'
import Reveal from './Reveal'
import TiltCard from './TiltCard'
import ProjectModal from './ProjectModal'
import studentMarketplaceImg from '../assets/projects/pantherx.webp'
import socialMediaImg from '../assets/projects/social-media.webp'
import posSystemImg from '../assets/projects/pos-system.svg'
import animalFootprintsImg from '../assets/projects/animal-footprints.svg'

const projects = [
  {
    title: 'Animal Footprint Analysis',
    status: 'In progress',
    period: 'Sep 2026 – Present',
    description:
      'Undergraduate machine learning research developing deep learning models to classify and analyze animal footprints for paleontological research using computer vision and style transfer. Building training datasets from online imagery and experimentally generated footprints across snow and soil.',
    tech: ['PyTorch', 'Deep Learning', 'Computer Vision', 'Style Transfer'],
    github: null,
    demo: null,
    image: animalFootprintsImg,
    imageAlt: 'Illustration of a footprint framed for computer vision analysis',
  },
  {
    title: 'PantherX — Student Marketplace',
    status: 'Shipped',
    period: 'Jul 2026',
    description:
      'Full-stack marketplace with secure authentication and relational data models supporting 100+ registered users. Backend services containerized with Docker for scalable deployment, plus an admin dashboard that turns marketplace data into interactive KPIs and charts for tracking user growth, listing activity, engagement, and reported content.',
    tech: ['Next.js', 'NestJS', 'PostgreSQL', 'Prisma', 'Docker'],
    github: 'https://github.com/AngelFeliz17/student_marketplace',
    demo: 'https://pantherx.vercel.app',
    image: studentMarketplaceImg,
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
    image: socialMediaImg,
  },
  {
    title: 'Point of Sale (POS) System',
    status: 'Shipped',
    description:
      'Sales and inventory system with CRUD for products, categories, and transactions; real-time stock updates and sales reporting for business insights.',
    tech: ['TypeScript', 'TypeORM', 'MySQL', 'Tailwind CSS'],
    github: null,
    demo: null,
    image: posSystemImg,
  },
]

const filters = ['All', ...Array.from(new Set(projects.flatMap((p) => p.tech)))]

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const visibleProjects = useMemo(
    () =>
      activeFilter === 'All'
        ? projects
        : projects.filter((p) => p.tech.includes(activeFilter)),
    [activeFilter]
  )

  return (
    <section id="projects" className="py-24 bg-paper-subtle border-y border-ink-100">
      <div className="section-wrap">
        <p className="section-kicker">Projects</p>
        <h2 className="section-title mb-4">Research &amp; projects</h2>
        <p className="text-ink-500 max-w-2xl mb-8">
          From animal-footprint research using deep learning to full-stack applications and
          analytics dashboards. Click a card to explore the work, or filter by technology below.
        </p>

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((tech) => (
            <button
              key={tech}
              type="button"
              onClick={() => setActiveFilter(tech)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                activeFilter === tech
                  ? 'border-accent bg-accent text-paper'
                  : 'border-ink-200 bg-paper text-ink-500 hover:border-accent/50 hover:text-ink-900'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, i) => (
            <Reveal key={project.title} delay={i * 80}>
              <TiltCard
                className="card-surface overflow-hidden h-full flex flex-col cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden border-b border-ink-100">
                  <img
                    src={project.image}
                    alt={project.imageAlt || `${project.title} preview`}
                    className="w-full aspect-[400/260] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-ink-900/0 group-hover:bg-ink-900/30 transition-colors">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-2 rounded-full bg-paper-card px-4 py-2 text-sm font-semibold text-ink-900">
                      <FaExpand size={12} />
                      Preview
                    </span>
                  </div>
                  <span
                    className={`absolute top-3 left-3 inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                      project.status === 'In progress'
                        ? 'bg-gold-light text-gold border border-gold/25'
                        : 'bg-accent-light text-accent-dark border border-accent/20'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-xl font-semibold text-ink-900">
                    {project.title}
                  </h3>
                  {project.period && (
                    <p className="mt-2 text-xs text-ink-400">{project.period}</p>
                  )}
                  <p className="text-ink-500 leading-relaxed mt-2 text-sm line-clamp-3 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span key={tech} className="tag-pill text-[11px] px-2 py-0.5">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="tag-pill text-[11px] px-2 py-0.5">
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>
                  <div
                    className="mt-5 flex flex-wrap gap-5"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900 hover:text-accent transition-colors"
                      >
                        <FaExternalLinkAlt className="text-ink-400" />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <p className="text-center text-ink-400 py-16">
            No projects use {activeFilter} yet&mdash;try another filter.
          </p>
        )}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}

export default Projects;
