import React, { useEffect } from 'react'
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa'

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-ink-900/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} preview`}
    >
      <div
        className="card-surface w-full max-w-2xl max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full aspect-[400/260] object-cover rounded-t-lg border-b border-ink-100"
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 rounded-full bg-paper-card/90 border border-ink-100 p-2 text-ink-700 hover:text-ink-900 hover:border-ink-900 transition-colors"
            aria-label="Close preview"
          >
            <FaTimes size={16} />
          </button>
        </div>

        <div className="p-8">
          <span
            className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
              project.status === 'In progress'
                ? 'bg-gold-light text-gold border border-gold/25'
                : 'bg-accent-light text-accent-dark border border-accent/20'
            }`}
          >
            {project.status}
          </span>
          <h3 className="font-display mt-3 text-2xl font-semibold text-ink-900">
            {project.title}
          </h3>
          <p className="text-ink-500 leading-relaxed mt-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.tech.map((tech) => (
              <span key={tech} className="tag-pill">
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark transition-colors"
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
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900 hover:text-accent transition-colors"
              >
                <FaExternalLinkAlt className="text-ink-400" />
                Live demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
