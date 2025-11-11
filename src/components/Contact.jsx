import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle, FaTimes } from 'react-icons/fa'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    if(!formData.email || !formData.message || !formData.name){
      setMessage("Please, complete all fields!");
      return;
    }

    emailjs
      .sendForm( import.meta.env.VITE_EMAILJS_SERVICE_ID,  import.meta.env.VITE_EMAILJS_TEMPLATE_ID, e.target, {
        publicKey:  import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          setMessage("Thanks, I will be contacting you as soon as possible!");
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => {
            setMessage('');
          }, 7000);
        },
        (error) => {
          setMessage("Sorry, there was an error sending your message. Please try again.");
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <FaEnvelope className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a
                    href="mailto:angelsfeliz@hotmail.con"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    angelsfeliz@hotmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <FaPhone className="text-purple-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    +1 (669) 278-0843
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-green-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">United States</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={sendEmail} className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="your.email@example.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>
            {message && (
              <div
                className={`mb-4 p-4 rounded-xl border-2 shadow-lg animate-slide-up ${
                  message.includes('Thanks') || message.includes('contacting')
                    ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-300 text-green-800'
                    : 'bg-gradient-to-r from-red-50 to-rose-50 border-red-300 text-red-800'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-3">
                    {message.includes('Thanks') || message.includes('contacting') ? (
                      <FaCheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={20} />
                    ) : (
                      <FaExclamationCircle className="text-red-600 mt-0.5 flex-shrink-0" size={20} />
                    )}
                    <p className="text-sm font-medium flex-1">{message}</p>
                  </div>
                  <button
                    onClick={() => setMessage('')}
                    className="ml-3 text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
                    aria-label="Close message"
                  >
                    <FaTimes size={16} />
                  </button>
                </div>
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact;