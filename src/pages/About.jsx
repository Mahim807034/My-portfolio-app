import React from 'react';
import portfolioData from '../data/portfolioData.json';

const About = ({ darkMode }) => {
  const { personalInfo } = portfolioData;

  return (
    <div className={`min-h-screen py-12 ${darkMode ? 'bg-gray-900' : 'bg-blue-800'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">
            About Me
          </h1>
          <div className={`w-24 h-1 mx-auto ${darkMode ? 'bg-blue-400' : 'bg-blue-300'}`}></div>
        </div>

        <div className={`rounded-lg shadow-lg p-8 transition-all duration-300 ${
          darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-blue-800 border border-blue-700'
        }`}>
          <div className="flex flex-col md:flex-row items-center mb-8">
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="w-48 h-48 rounded-full object-cover border-4 mb-6 md:mb-0 md:mr-8 transition-all duration-300"
              style={{
                borderColor: darkMode ? '#60a5fa' : '#93c5fd'
              }}
            />
            <div>
              <h2 className="text-2xl font-bold mb-2 text-white">
                {personalInfo.name}
              </h2>
              <p className={`text-lg mb-2 font-semibold transition-colors duration-300 ${
                darkMode ? 'text-blue-400' : 'text-blue-200'
              }`}>
                {personalInfo.title}
              </p>
              <p className="text-blue-100">
                {personalInfo.education}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                About
              </h3>
              <p className="leading-relaxed text-blue-100">
                {personalInfo.about}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Education & Training
              </h3>
              <div className="space-y-2">
                <p className="text-blue-100">
                  <strong className="text-white">Education:</strong> {personalInfo.education}
                </p>
                <p className="text-blue-100">
                  <strong className="text-white">Institute:</strong> {personalInfo.institute}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="text-blue-100">
                    <strong className="text-white">Email:</strong> 
                    <span className="ml-1">{personalInfo.email}</span>
                  </p>
                  <p className="text-blue-100">
                    <strong className="text-white">Phone:</strong> 
                    <span className="ml-1">{personalInfo.phone}</span>
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-blue-100">
                    <strong className="text-white">WhatsApp:</strong> 
                    <span className="ml-1">{personalInfo.whatsapp}</span>
                  </p>
                  <p className="text-blue-100">
                    <strong className="text-white">Address:</strong> 
                    <span className="ml-1">{personalInfo.address}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;