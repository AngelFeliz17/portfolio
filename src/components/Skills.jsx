import React from 'react'
import {
  FaReact,
  FaNodeJs,
  FaPython,
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
} from 'react-icons/si'

const Skills = () => {
  const skills = [
    { name: 'React', icon: FaReact, color: 'text-blue-500' },
    { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-600' },
    { name: 'Python', icon: FaPython, color: 'text-blue-400' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700' },
    { name: 'Express', icon: SiExpress, color: 'text-gray-800' },
    { name: 'GitHub', icon: SiGithub, color: 'text-gray-800' },
    { name: 'FastAPI', icon: SiFastapi, color: 'text-green-500' },
    { name: 'OpenAI', icon: SiOpenai, color: 'text-gray-800' },
  ]

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Skills & Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <skill.icon
                className={`${skill.color} text-5xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

