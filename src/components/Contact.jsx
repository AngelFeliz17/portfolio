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
        <p className="text-ink-500 max-w-2xl mb-12">
          Have a role, project, or research idea? Send a message&mdash;I read every note.
        </p>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="card-surface p-6 flex gap-4">
              <div className="rounded-lg bg-accent-light p-3 h-fit text-accent">
                <FaEnvelope size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-ink-900">Email</h3>
                <a
                  href="mailto:angelsfeliz@hotmail.com"
                  className="link-underline mt-1 inline-block"
                >
                  angelsfeliz@hotmail.com
                </a>
              </div>
            </div>
            <div className="card-surface p-6 flex gap-4">
              <div className="rounded-lg bg-accent-light p-3 h-fit text-accent">
                <FaPhone size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-ink-900">Phone</h3>
                <a href="tel:+16692780843" className="link-underline mt-1 inline-block">
                  (669) 278-0843
                </a>
              </div>
            </div>
            <div className="card-surface p-6 flex gap-4">
              <div className="rounded-lg bg-gold-light p-3 h-fit text-gold">
                <FaMapMarkerAlt size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-ink-900">Location</h3>
                <p className="text-ink-500 mt-1">Cedar Falls, Iowa · United States</p>
              </div>
            </div>
          </div>

          <form onSubmit={sendEmail} className="card-surface p-8 lg:p-10">
            <div className="mb-5">
              <label htmlFor="name" className="block text-sm font-medium text-ink-500 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-ink-200 bg-paper px-4 py-3 text-ink-900 placeholder:text-ink-300 focus:border-accent focus:ring-2 focus:ring-accent/15 outline-none transition-all"
                placeholder="Your name"
              />
            </div>
            <div className="mb-5">
              <label htmlFor="email" className="block text-sm font-medium text-ink-500 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-ink-200 bg-paper px-4 py-3 text-ink-900 placeholder:text-ink-300 focus:border-accent focus:ring-2 focus:ring-accent/15 outline-none transition-all"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-ink-500 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full resize-none rounded-lg border border-ink-200 bg-paper px-4 py-3 text-ink-900 placeholder:text-ink-300 focus:border-accent focus:ring-2 focus:ring-accent/15 outline-none transition-all"
                placeholder="What would you like to work on?"
              />
            </div>

            {feedback && (
              <div
                className={`mb-5 rounded-lg border px-4 py-3 flex items-start gap-3 ${
                  isSuccess
                    ? 'border-accent/30 bg-accent-light text-accent-dark'
                    : 'border-red-300 bg-red-50 text-red-700'
                }`}
              >
                {isSuccess ? (
                  <FaCheckCircle className="mt-0.5 shrink-0 text-accent" />
                ) : (
                  <FaExclamationCircle className="mt-0.5 shrink-0 text-red-500" />
                )}
                <p className="text-sm font-medium flex-1">{feedback}</p>
                <button
                  type="button"
                  onClick={() => setFeedback('')}
                  className="text-ink-400 hover:text-ink-900 p-1"
                  aria-label="Dismiss"
                >
                  <FaTimes size={14} />
                </button>
              </div>
            )}

            <button type="submit" className="btn-primary w-full py-3.5">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
