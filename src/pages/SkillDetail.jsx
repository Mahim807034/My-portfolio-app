import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import * as Icons from 'react-icons/fa';
import * as SimpleIcons from 'react-icons/si';
import portfolioData from '../data/portfolioData.json';

const SkillDetails = ({ darkMode }) => {
  const { id } = useParams();
  const { skills, projects } = portfolioData;
  const skill = skills.find(s => s.id === parseInt(id));

  // Get the icon component
  const IconComponent = skill ? Icons[skill.icon] || SimpleIcons[skill.icon] : null;

  if (!skill) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-blue-800'}`}>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-white">
            Skill Not Found
          </h1>
          <Link
            to="/skills"
            className={`inline-flex items-center px-6 py-2 rounded-lg transition-colors duration-300 ${
              darkMode 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            <FaArrowLeft className="mr-2" />
            Back to Skills
          </Link>
        </div>
      </div>
    );
  }

  // Filter projects that use this skill
  const relatedProjects = projects.filter(project => 
    project.technologies.includes(skill.name)
  );

  return (
    <div className={`min-h-screen py-12 ${darkMode ? 'bg-gray-900' : 'bg-blue-800'}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/skills"
          className={`inline-flex items-center mb-6 transition-colors duration-300 ${
            darkMode ? 'text-gray-300 hover:text-white' : 'text-blue-100 hover:text-blue-200'
          }`}
        >
          <FaArrowLeft className="mr-2" />
          Back to Skills
        </Link>

        <div className={`rounded-lg shadow-lg p-8 border-2 transition-all duration-300 ${
          darkMode 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-blue-800 border-blue-700'
        }`}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className={`text-4xl ${
                darkMode ? 'text-blue-400' : 'text-blue-200'
              }`}>
                {IconComponent && <IconComponent />}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">
                  {skill.name}
                </h1>
                <p className={`mt-2 ${
                  darkMode ? 'text-gray-300' : 'text-blue-100'
                }`}>
                  {skill.description}
                </p>
              </div>
            </div>
            <span className={`px-4 py-2 rounded-full text-lg font-bold ${
              darkMode 
                ? 'bg-blue-900 text-blue-200' 
                : 'bg-blue-700 text-blue-100'
            }`}>
              {skill.level}%
            </span>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                Skill Level
              </h2>
              <div className={`w-full rounded-full h-3 ${
                darkMode ? 'bg-gray-700' : 'bg-blue-700'
              }`}>
                <div 
                  className={`h-3 rounded-full transition-all duration-1000 ${
                    darkMode ? 'bg-blue-400' : 'bg-blue-300'
                  }`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                Projects Using {skill.name}
              </h2>
              {relatedProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {relatedProjects.map(project => (
                    <Link
                      key={project.id}
                      to={`/project/${project.id}`}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 ${
                        darkMode 
                          ? 'bg-gray-700 border-gray-600 hover:border-blue-400' 
                          : 'bg-blue-700 border-blue-600 hover:border-blue-300'
                      }`}
                    >
                      <h3 className="text-white font-semibold mb-2">
                        {project.title}
                      </h3>
                      <p className={`text-sm ${
                        darkMode ? 'text-gray-300' : 'text-blue-100'
                      }`}>
                        {project.description.substring(0, 100)}...
                      </p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className={`px-2 py-1 text-xs rounded ${
                              darkMode 
                                ? 'bg-blue-900 text-blue-200' 
                                : 'bg-blue-600 text-blue-100'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <p className={`${
                  darkMode ? 'text-gray-300' : 'text-blue-100'
                }`}>
                  No projects found using this skill.
                </p>
              )}
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">
                Experience
              </h2>
              <p className={`${
                darkMode ? 'text-gray-300' : 'text-blue-100'
              }`}>
                I have worked on {relatedProjects.length} projects using {skill.name} and have achieved {skill.level}% proficiency through practical implementation and continuous learning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;