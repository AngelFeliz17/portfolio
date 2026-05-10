import React from 'react'

const About = () => {
  return (
    <section id="about" className="py-24 border-t border-slate-800/80">
      <div className="section-wrap">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="section-kicker">About</p>
            <h2 className="section-title">Code, curiosity, and community.</h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg text-slate-400 leading-relaxed">
            <p>
              I write code the way some people drink coffee—often, enthusiastically, and
              sometimes at 3&nbsp;a.m. I did not become a software engineer because it was
              trendy; I did it because nothing beats telling a computer what to do and having
              it listen… eventually.
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
                { label: 'Focus', value: 'ML & full-stack' },
                { label: 'Location', value: 'Iowa, USA' },
                { label: 'Languages', value: 'EN / ES' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="card-surface p-4 text-center"
                >
                  <div className="font-display text-2xl font-bold text-white">{item.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
