import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gray-900">Hi, I'm </span>
            <span className="text-gradient">Angel Feliz</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4">
            Full Stack Developer
          </p>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-8">
          I don’t just build software, I build solutions people actually want to use.
          </p>

          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/AngelFeliz17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/angel-feliz-694208376/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="mailto:angelsfeliz@hotmail.com"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
              aria-label="Email"
            >
              <FaEnvelope size={32} />
            </a>
          </div>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <a href="#about" className="text-gray-400 hover:text-blue-600">
              <FaArrowDown size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

