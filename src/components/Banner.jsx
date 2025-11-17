import React from 'react';
import { Link } from 'react-router-dom';
import portfolioData from '../data/portfolioData.json';

const Banner = ({ darkMode }) => {
  const { personalInfo } = portfolioData;

  return (
    <div className={`min-h-screen flex items-center ${darkMode ? 'bg-gray-900' : 'bg-blue-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        {/* Mobile: Image First */}
        <div className="flex flex-col items-center lg:hidden">
          {/* Image - Top on Mobile */}
          <div className="mb-8">
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="w-64 h-64 rounded-full object-cover border-4 mx-auto"
              style={{
                borderColor: darkMode ? '#374151' : '#1e40af'
              }}
            />
          </div>
          
          {/* Text Content - Bottom on Mobile */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Hello, I'm {personalInfo.name}
            </h1>
            
            <div className={`w-24 h-1 mx-auto mb-4 ${darkMode ? 'bg-blue-400' : 'bg-blue-300'}`}></div>
            
            <p className={`text-xl mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-200'}`}>
              {personalInfo.title}
            </p>
            
            <p className={`text-lg mb-4 ${darkMode ? 'text-gray-300' : 'text-blue-100'}`}>
              {personalInfo.education}
            </p>

            <p className={`text-lg leading-relaxed mb-6 ${darkMode ? 'text-gray-300' : 'text-blue-100'}`}>
              {personalInfo.about.split('.')[0]}.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                  darkMode 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                Get In Touch
              </Link>
              <Link
                to="/projects"
                className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 border-2 ${
                  darkMode 
                    ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white' 
                    : 'border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-800'
                }`}
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop: Normal Layout */}
        <div className="hidden lg:flex flex-row items-center justify-between gap-12">
          {/* Text Content - Left on Desktop */}
          <div className="w-1/2 text-left">
            <div className="space-y-6">
              <h1 className="text-6xl font-bold text-white mb-4">
                Hello, I'm {personalInfo.name}
              </h1>
              
              <div className={`w-24 h-1 mb-4 ${darkMode ? 'bg-blue-400' : 'bg-blue-300'}`}></div>
              
              <p className={`text-2xl mb-2 ${darkMode ? 'text-blue-300' : 'text-blue-200'}`}>
                {personalInfo.title}
              </p>
              
              <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-blue-100'}`}>
                {personalInfo.education}
              </p>

              <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-blue-100'}`}>
                {personalInfo.about.split('.')[0]}.
              </p>

              <div className="flex gap-4">
                <Link
                  to="/contact"
                  className={`px-8 py-3 rounded-lg font-semibold transition-colors duration-300 ${
                    darkMode 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  Get In Touch
                </Link>
                <Link
                  to="/projects"
                  className={`px-8 py-3 rounded-lg font-semibold transition-colors duration-300 border-2 ${
                    darkMode 
                      ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white' 
                      : 'border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-800'
                  }`}
                >
                  View Projects
                </Link>
              </div>
            </div>
          </div>

          {/* Image - Right on Desktop */}
          <div className="w-1/2 flex justify-center">
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="w-80 h-80 rounded-full object-cover border-4"
              style={{
                borderColor: darkMode ? '#374151' : '#1e40af'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;