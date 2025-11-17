import React from 'react';
import { Link } from 'react-router-dom';
import portfolioData from '../data/portfolioData.json';
import SkillCard from '../components/SkillCard';

const Skills = ({ darkMode }) => {
  const { skills } = portfolioData;

  return (
    <div className={`min-h-screen py-12 ${darkMode ? 'bg-gray-900' : 'bg-blue-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-white">
            My Skills
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-blue-100'
          }`}>
            Here are the technologies and tools I work with. Click on any skill to learn more about my experience and projects.
          </p>
          <div className={`w-24 h-1 mx-auto mt-4 ${
            darkMode ? 'bg-blue-400' : 'bg-blue-300'
          }`}></div>
        </div>

        <div className={`rounded-lg shadow-lg p-8 transition-all duration-300 ${
          darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-blue-800 border border-blue-700'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <SkillCard key={skill.id} skill={skill} darkMode={darkMode} />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className={`px-8 py-3 rounded-lg font-semibold transition-colors duration-300 ${
              darkMode 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            Interested in Working Together?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Skills;