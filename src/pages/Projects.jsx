// Projects.js - এই component automatically নতুন project show করবে
import React from 'react';
import { Link } from 'react-router-dom';
import portfolioData from '../data/portfolioData.json';

const Projects = ({ darkMode }) => {
  const { projects } = portfolioData;

  return (
    <div className={`min-h-screen py-12 ${darkMode ? 'bg-gray-900' : 'bg-blue-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">
            My Projects
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-blue-100'
          }`}>
            Here are some of the projects I've worked on. Each project represents my skills and dedication to creating quality applications.
          </p>
          <div className={`w-24 h-1 mx-auto mt-4 ${
            darkMode ? 'bg-blue-400' : 'bg-blue-300'
          }`}></div>
        </div>

        <div className={`rounded-lg shadow-lg p-8 transition-all duration-300 ${
          darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-blue-800 border border-blue-700'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className={`rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 hover:border-blue-400' 
                  : 'bg-blue-700 border-blue-600 hover:border-blue-300'
              }`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <span className={`px-2 py-1 text-xs rounded-full ${
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
                  
                  <p className={`mb-4 ${
                    darkMode ? 'text-gray-300' : 'text-blue-100'
                  }`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 rounded text-xs ${
                          darkMode 
                            ? 'bg-blue-900 text-blue-200' 
                            : 'bg-blue-600 text-blue-100'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className={`px-2 py-1 rounded text-xs ${
                        darkMode 
                          ? 'bg-gray-600 text-gray-300' 
                          : 'bg-blue-500 text-blue-100'
                      }`}>
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex space-x-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 text-center py-2 px-4 rounded-lg transition-colors duration-300 ${
                        darkMode 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}
                    >
                      Live Demo
                    </a>
                    <Link
                      to={`/project/${project.id}`}
                      className={`flex-1 text-center py-2 px-4 rounded-lg transition-colors duration-300 ${
                        darkMode 
                          ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                          : 'bg-blue-700 hover:bg-blue-600 text-white'
                      }`}
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;