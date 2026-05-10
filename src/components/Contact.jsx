import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle, FaTimes } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [feedback, setFeedback] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()
    if (!formData.email || !formData.message || !formData.name) {
      setFeedback('Please complete all fields.')
      return
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => {
          setFeedback('Thanks — I will get back to you as soon as I can.')
          setFormData({ name: '', email: '', message: '' })
          setTimeout(() => setFeedback(''), 7000)
        },
        (error) => {
          setFeedback('Something went wrong. Please try again or email me directly.')
          console.error('EmailJS error:', error.text)
        }
      )
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const isSuccess =
    feedback.includes('Thanks') || feedback.includes('back to you')

  return (
    <section id="contact" className="py-24">
      <div className="section-wrap">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title mb-4">Let&apos;s talk</h2>
        <p className="text-slate-400 max-w-2xl mb-12">
          Have a role, project, or research idea? Send a message—I read every note.
        </p>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="card-surface p-6 flex gap-4">
              <div className="rounded-xl bg-teal-500/10 p-3 h-fit text-teal-400">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-white">Email</h3>
                <a
                  href="mailto:angelsfeliz@hotmail.com"
                  className="link-underline text-slate-400 mt-1 inline-block"
                >
                  angelsfeliz@hotmail.com
                </a>
              </div>
            </div>
            <div className="card-surface p-6 flex gap-4">
              <div className="rounded-xl bg-cyan-500/10 p-3 h-fit text-cyan-400">
                <FaPhone size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-white">Phone</h3>
                <a href="tel:+16692780843" className="link-underline text-slate-400 mt-1 inline-block">
                  (669) 278-0843
                </a>
              </div>
            </div>
            <div className="card-surface p-6 flex gap-4">
              <div className="rounded-xl bg-amber-500/10 p-3 h-fit text-amber-400">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-white">Location</h3>
                <p className="text-slate-400 mt-1">Cedar Falls, Iowa · United States</p>
              </div>
            </div>
          </div>

          <form onSubmit={sendEmail} className="card-surface p-8 lg:p-10">
            <div className="mb-5">
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-700 bg-ink-950/50 px-4 py-3 text-white placeholder:text-slate-600 focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                placeholder="Your name"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-slate-700 bg-ink-950/50 px-4 py-3 text-white placeholder:text-slate-600 focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-slate-700 bg-ink-950/50 px-4 py-3 text-white placeholder:text-slate-600 focus:border-teal-500/50 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
                placeholder="What would you like to work on?"
              />
            </div>

            {feedback && (
              <div
                className={`mb-5 rounded-xl border px-4 py-3 flex items-start gap-3 ${
                  isSuccess
                    ? 'border-teal-500/40 bg-teal-500/10 text-teal-100'
                    : 'border-red-500/40 bg-red-500/10 text-red-100'
                }`}
              >
                {isSuccess ? (
                  <FaCheckCircle className="mt-0.5 shrink-0 text-teal-400" />
                ) : (
                  <FaExclamationCircle className="mt-0.5 shrink-0 text-red-400" />
                )}
                <p className="text-sm font-medium flex-1">{feedback}</p>
                <button
                  type="button"
                  onClick={() => setFeedback('')}
                  className="text-slate-400 hover:text-white p-1"
                  aria-label="Dismiss"
                >
                  <FaTimes size={14} />
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 py-3.5 font-semibold text-ink-950 shadow-lg shadow-teal-500/15 hover:brightness-110 transition-all"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
