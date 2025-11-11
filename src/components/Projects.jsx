import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Social Media',
      description:
        'Developed a full-stack social media platform with automated image description generation.',
      tech: ['React', 'Node.js', 'MongoDB', 'Cloudinary', 'OpenAI'],
      github: 'https://github.com/AngelFeliz17/BestSocialApp',
      demo: 'https://best-social-app.vercel.app/',
      image: 'bg-gradient-to-br from-blue-400 to-purple-500',
    },
    {
      title: 'Task Planner (To-do list)',
      description:
        'Built a full-stack to-do list application, with file upload functionality.',
      tech: ['React', 'FastAPI', 'PostgreSQL', 'Tailwind CSS', 'Cloudinary', ],
      github: 'https://github.com/AngelFeliz17/todo-list',
      demo: 'https://todo-list-jade-one-26.vercel.app',
      image: 'bg-gradient-to-br from-green-400 to-blue-500',
    },
    {
      title: 'Point of Sale (POS) System',
      description:
        'Built a sales and inventory management system',
      tech: ['React', 'TypeORM', 'MySQL', 'Typescript'],
      github: '',
      demo: '',
      image: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    }
  ]

  return (
    <section
      id="projects"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-48 ${project.image} relative`}>
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {
                  project.demo !== '' ? (
                    <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                </div>
                  ) : null
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

