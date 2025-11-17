import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import portfolioData from '../data/portfolioData.json';

const Footer = ({ darkMode }) => {
  const { personalInfo } = portfolioData;
  const currentYear = new Date().getFullYear();

  const handleEmailClick = () => {
    window.location.href = `mailto:${personalInfo.email}?subject=Portfolio%20Inquiry&body=Hello%20Mahim%2C%20I%20would%20like%20to%20get%20in%20touch%20with%20you.`;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${personalInfo.phone}`;
  };

  const handleWhatsAppClick = () => {
    const message = "Hello Mahim, I saw your portfolio and would like to connect with you.";
    window.open(`https://wa.me/${personalInfo.whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <footer className={`${darkMode ? 'bg-gray-800' : 'bg-gray-900'} text-white py-8`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Personal Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">{personalInfo.name}</h3>
            <p className="text-gray-300">{personalInfo.title}</p>
            <p className="text-gray-300 mt-2">{personalInfo.address}</p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div 
                className="flex items-center space-x-3 cursor-pointer group"
                onClick={handleEmailClick}
              >
                <div className="p-2 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors">
                  <FaEnvelope className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-gray-300 group-hover:text-white transition-colors">Email</p>
                  <p className="text-sm text-gray-400">{personalInfo.email}</p>
                </div>
              </div>

              <div 
                className="flex items-center space-x-3 cursor-pointer group"
                onClick={handlePhoneClick}
              >
                <div className="p-2 bg-green-600 rounded-lg group-hover:bg-green-700 transition-colors">
                  <FaPhone className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-gray-300 group-hover:text-white transition-colors">Phone</p>
                  <p className="text-sm text-gray-400">{personalInfo.phone}</p>
                </div>
              </div>

              <div 
                className="flex items-center space-x-3 cursor-pointer group"
                onClick={handleWhatsAppClick}
              >
                <div className="p-2 bg-green-500 rounded-lg group-hover:bg-green-600 transition-colors">
                  <FaWhatsapp className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-gray-300 group-hover:text-white transition-colors">WhatsApp</p>
                  <p className="text-sm text-gray-400">{personalInfo.whatsapp}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
            <div className="grid grid-cols-2 gap-3">
              <a 
                href={personalInfo.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <FaGithub className="text-xl text-white" />
                <span className="text-sm">GitHub</span>
              </a>
              <a 
                href={personalInfo.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <FaLinkedin className="text-xl text-white" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a 
                href={personalInfo.socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 p-3 bg-blue-400 hover:bg-blue-500 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <FaTwitter className="text-xl text-white" />
                <span className="text-sm">Twitter</span>
              </a>
              <a 
                href={personalInfo.socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <FaFacebook className="text-xl text-white" />
                <span className="text-sm">Facebook</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-300">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;