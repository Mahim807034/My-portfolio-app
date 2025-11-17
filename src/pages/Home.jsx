import React from 'react';
import Banner from '../components/Banner';
import SwiperComponent from '../components/SwiperComponent';

const Home = ({ darkMode }) => {
  return (
    <div className="min-h-screen">
      <Banner darkMode={darkMode} />
      <SwiperComponent darkMode={darkMode} />
    </div>
  );
};

export default Home;