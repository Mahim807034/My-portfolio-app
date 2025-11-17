import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'react-icons/fa';
import * as SimpleIcons from 'react-icons/si';

const SkillCard = ({ skill, darkMode }) => {
  const IconComponent = Icons[skill.icon] || SimpleIcons[skill.icon];

  return (
    <div className={`rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-2 ${
      darkMode 
        ? 'bg-gray-800 border-gray-700 hover:border-blue-400' 
        : 'bg-blue-800 border-blue-700 hover:border-blue-300'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          {IconComponent && (
            <IconComponent className={`text-3xl ${
              darkMode ? 'text-blue-400' : 'text-blue-200'
            }`} />
          )}
          <h3 className="text-xl font-semibold text-white">
            {skill.name}
          </h3>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
          darkMode 
            ? 'bg-blue-900 text-blue-200' 
            : 'bg-blue-700 text-blue-100'
        }`}>
          {skill.level}%
        </span>
      </div>
      
      <div className={`w-full rounded-full h-2 mb-4 ${
        darkMode ? 'bg-gray-700' : 'bg-blue-700'
      }`}>
        <div 
          className={`h-2 rounded-full transition-all duration-1000 ${
            darkMode ? 'bg-blue-400' : 'bg-blue-300'
          }`}
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
      
      <p className={`mb-4 line-clamp-3 ${
        darkMode ? 'text-gray-300' : 'text-blue-100'
      }`}>
        {skill.description}
      </p>
      
      <div className="flex justify-between items-center">
        <span className={`text-sm ${
          darkMode ? 'text-gray-400' : 'text-blue-200'
        }`}>
          {skill.projects} projects
        </span>
        <Link
          to={`/skill/${skill.id}`}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
            darkMode 
              ? 'bg-blue-600 hover:bg-blue-700 text-white' 
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SkillCard;