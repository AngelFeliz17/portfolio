import React from 'react'
import Reveal from './Reveal'

const About = () => {
  return (
    <section id="about" className="py-24 border-t border-ink-100">
      <div className="section-wrap">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-5">
            <p className="section-kicker">About</p>
            <h2 className="section-title">Code, curiosity, and community.</h2>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-7 space-y-6 text-lg text-ink-500 leading-relaxed">
            <p>
              I study Computer Science and Data Science at the University of Northern Iowa,
              where I work in data science and student-data analysis. I use SQL,
              Python, R, and Tableau to explore enrollment and student performance, build
              dashboards, and help teams make informed decisions.
            </p>
            <p>
              My undergraduate research focuses on classifying and analyzing animal footprints
              for paleontology using PyTorch, computer vision, and style transfer. I also build
              full-stack applications, including PantherX, a student marketplace with 100+
              registered users.
            </p>
            <p>
              Outside of debugging my own decisions, I play golf and chess, and I stay
              involved in community work through service and leadership. I am fluent in
              English and Spanish, and I am looking for teams where I can ship meaningful
              products, learn from sharp people, and remember to take breaks.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {[
                { label: 'GPA', value: '3.54' },
                { label: 'Focus', value: 'Data + Dev' },
                { label: 'Location', value: 'Iowa, USA' },
                { label: 'Languages', value: 'EN / ES' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="card-surface p-4 text-center transition-transform hover:-translate-y-1"
                >
                  <div className="num text-2xl font-semibold text-ink-900">{item.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-ink-400">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
