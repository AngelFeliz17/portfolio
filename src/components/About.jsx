import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 shadow-lg">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              I write code the same way some people drink coffee — constantly, enthusiastically,
              and sometimes at 3 A.M. with questionable decisions involved. I didn’t become a software engineer because it was trendy;
               I became one because nothing feels better than telling a computer what to do and it actually listens… eventually.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
              When I’m not debugging my own bad decisions, I’m playing golf, playing chess, 
              or doing community work through Freemasonry — which
               basically means I know how to dress formally while questioning the meaning of life. I speak English and Spanish, 
              and I’m looking for a place where I can build cool things, learn from smart people, and maybe even remember to take breaks.
              </p>
            </div>
          </div>

          <div className="animate-slide-up">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">3</h3>
                <p className="text-gray-600">Real World Projects</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-3xl font-bold text-purple-600 mb-2">1</h3>
                <p className="text-gray-600">Internships</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">500+</h3>
                <p className="text-gray-600">Hours of Coding</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                <h3 className="text-3xl font-bold text-purple-600 mb-2">10+</h3>
                <p className="text-gray-600">Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

