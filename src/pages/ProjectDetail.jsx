import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import portfolioData from '../data/portfolioData.json';

const ProjectDetail = ({ darkMode }) => {
  const { id } = useParams();
  const { projects } = portfolioData;
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-blue-800'}`}>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-white">
            Project Not Found
          </h1>
          <Link
            to="/projects"
            className={`inline-flex items-center px-6 py-2 rounded-lg transition-colors duration-300 ${
              darkMode 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            <FaArrowLeft className="mr-2" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen py-12 ${darkMode ? 'bg-gray-900' : 'bg-blue-800'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/projects"
          className={`inline-flex items-center mb-6 transition-colors duration-300 ${
            darkMode ? 'text-gray-300 hover:text-white' : 'text-blue-100 hover:text-blue-200'
          }`}
        >
          <FaArrowLeft className="mr-2" />
          Back to Projects
        </Link>

        <div className={`rounded-lg shadow-lg overflow-hidden border-2 transition-all duration-300 ${
          darkMode 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-blue-800 border-blue-700'
        }`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 md:h-80 object-cover"
          />
          
          <div className="p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2 text-white">
                  {project.title}
                </h1>
                <div className="flex items-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'Completed' 
                      ? darkMode 
                        ? 'bg-green-900 text-green-200' 
                        : 'bg-green-700 text-green-100'
                      : darkMode 
                        ? 'bg-yellow-900 text-yellow-200' 
                        : 'bg-yellow-700 text-yellow-100'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>
              
              <div className="flex space-x-3 mt-4 md:mt-0">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-300 ${
                    darkMode 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center px-4 py-2 rounded-lg transition-colors duration-300 ${
                    darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                      : 'bg-blue-700 hover:bg-blue-600 text-white'
                  }`}
                >
                  <FaGithub className="mr-2" />
                  GitHub
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3 text-white">
                  Project Overview
                </h2>
                <p className={`leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-blue-100'
                }`}>
                  {project.detailedDescription}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-white">
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-3 py-2 rounded-lg text-sm font-medium ${
                        darkMode 
                          ? 'bg-blue-900 text-blue-200' 
                          : 'bg-blue-700 text-blue-100'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 text-white">
                  Key Features
                </h2>
                <ul className={`grid grid-cols-1 md:grid-cols-2 gap-2 ${
                  darkMode ? 'text-gray-300' : 'text-blue-100'
                }`}>
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className={`w-2 h-2 rounded-full mr-3 ${
                        darkMode ? 'bg-blue-400' : 'bg-blue-300'
                      }`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;