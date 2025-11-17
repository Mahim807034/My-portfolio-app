import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import portfolioData from '../data/portfolioData.json';

const Contact = ({ darkMode }) => {
  const { personalInfo } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className={`min-h-screen py-12 ${darkMode ? 'bg-gray-900' : 'bg-blue-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Get In Touch
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-blue-100'
          }`}>
            I'm always interested in new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className={`w-24 h-1 mx-auto mt-4 ${
            darkMode ? 'bg-blue-400' : 'bg-blue-300'
          }`}></div>
        </div>

        <div className={`rounded-lg shadow-lg p-8 transition-all duration-300 ${
          darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-blue-800 border border-blue-700'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full ${
                    darkMode ? 'bg-blue-900' : 'bg-blue-700'
                  }`}>
                    <FaEnvelope className={`text-xl ${
                      darkMode ? 'text-blue-400' : 'text-blue-200'
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className={`hover:text-blue-300 transition-colors duration-300 ${
                        darkMode ? 'text-gray-300' : 'text-blue-100'
                      }`}
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full ${
                    darkMode ? 'bg-green-900' : 'bg-green-700'
                  }`}>
                    <FaPhone className={`text-xl ${
                      darkMode ? 'text-green-400' : 'text-green-200'
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className={`hover:text-blue-300 transition-colors duration-300 ${
                        darkMode ? 'text-gray-300' : 'text-blue-100'
                      }`}
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full ${
                    darkMode ? 'bg-green-900' : 'bg-green-700'
                  }`}>
                    <FaWhatsapp className={`text-xl ${
                      darkMode ? 'text-green-400' : 'text-green-200'
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">WhatsApp</h3>
                    <span className={`${
                      darkMode ? 'text-gray-300' : 'text-blue-100'
                    }`}>
                      {personalInfo.whatsapp}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full ${
                    darkMode ? 'bg-red-900' : 'bg-red-700'
                  }`}>
                    <FaMapMarkerAlt className={`text-xl ${
                      darkMode ? 'text-red-400' : 'text-red-200'
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Address</h3>
                    <span className={`${
                      darkMode ? 'text-gray-300' : 'text-blue-100'
                    }`}>
                      {personalInfo.address}
                    </span>
                  </div>
                </div>
              </div>

              <div className={`mt-8 p-6 rounded-lg shadow-lg border-2 ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600' 
                  : 'bg-blue-700 border-blue-600'
              }`}>
                <h3 className="text-lg font-semibold mb-3 text-white">
                  Availability
                </h3>
                <p className={`${
                  darkMode ? 'text-gray-300' : 'text-blue-100'
                }`}>
                  I'm currently available for freelance projects and full-time opportunities. 
                  Don't hesitate to reach out if you have any questions or want to collaborate!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`rounded-lg shadow-lg p-8 border-2 ${
              darkMode 
                ? 'bg-gray-700 border-gray-600' 
                : 'bg-blue-700 border-blue-600'
            }`}>
              <h2 className="text-2xl font-bold mb-6 text-white">
                Send Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-white">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${
                        darkMode 
                          ? 'bg-gray-600 border-gray-500 text-white focus:ring-blue-400' 
                          : 'bg-blue-600 border-blue-500 text-white focus:ring-blue-300'
                      }`}
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-white">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${
                        darkMode 
                          ? 'bg-gray-600 border-gray-500 text-white focus:ring-blue-400' 
                          : 'bg-blue-600 border-blue-500 text-white focus:ring-blue-300'
                      }`}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-white">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${
                      darkMode 
                        ? 'bg-gray-600 border-gray-500 text-white focus:ring-blue-400' 
                        : 'bg-blue-600 border-blue-500 text-white focus:ring-blue-300'
                    }`}
                    placeholder="Enter subject"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-white">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-colors duration-300 ${
                      darkMode 
                        ? 'bg-gray-600 border-gray-500 text-white focus:ring-blue-400' 
                        : 'bg-blue-600 border-blue-500 text-white focus:ring-blue-300'
                    }`}
                    placeholder="Enter your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                    darkMode 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;