import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-lg font-semibold text-white mb-2">Portfolio</p>
            <p className="text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/AngelFeliz17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/angel-feliz-694208376/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:angelsfeliz@hotmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

