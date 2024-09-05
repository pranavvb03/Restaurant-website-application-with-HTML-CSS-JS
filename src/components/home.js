import React from 'react';
import Hero from '../components/HeroSection';

function Home() {
  return (
    <div>
      <Hero />
      <p className="home-description">
        Welcome to Delicious Treats Restaurant, where we serve the best dishes in town. Explore our menu and find your next favorite dish.
      </p>
    </div>
  );
}

export default Home;
