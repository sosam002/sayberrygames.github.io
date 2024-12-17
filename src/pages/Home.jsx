import React from 'react';
import Hero from '../components/Hero/Hero';
import ProgramFeatures from '../components/Features/ProgramFeatures';
import CodingPractices from '../components/Features/CodingPractices';

const Home = () => {
  return (
    <>
      <Hero />
      <CodingPractices />
      <ProgramFeatures />
    </>
  );
};

export default Home;