import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-blue-700 hover:bg-blue-600 text-white transition-colors duration-300"
    >
      {darkMode ? (
        <FaSun className="text-yellow-300 text-xl" />
      ) : (
        <FaMoon className="text-white text-xl" />
      )}
    </button>
  );
};

export default DarkModeToggle;