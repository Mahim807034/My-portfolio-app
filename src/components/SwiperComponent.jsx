import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import portfolioData from '../data/portfolioData.json';

const SwiperComponent = ({ darkMode }) => {
  const { projects } = portfolioData;

  return (
    <div className={`py-12 ${darkMode ? 'bg-gray-800' : 'bg-[#1A3CB8]'}`}>
      <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0"> {/* Remove side padding */}
        <h2 className={`text-3xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-white'}`}>
          Featured Projects
        </h2>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
          style={{ height: '300px' }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className={`relative h-full w-full ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                {/* Full Screen Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 from-black/70 via-black/40 to-transparent"></div>
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="max-w-4xl mx-auto">
                    {/* Status Badge */}
                    <div className="flex justify-between items-start mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === 'Completed' 
                          ? 'bg-green-500 text-white'
                          : 'bg-yellow-500 text-white'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    
                    {/* Project Title */}
                    <h3 className="text-2xl font-bold mb-2">
                      {project.title}
                    </h3>
                    
                    {/* Project Description */}
                    <p className="text-gray-200 mb-4 text-sm max-w-2xl">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium border border-white/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Buttons */}
                    <div className="flex space-x-3">
                      <Link
                        to={`/project/${project.id}`}
                        className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                      >
                        View Details
                      </Link>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-white text-white hover:bg-white hover:text-blue-600 px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComponent;