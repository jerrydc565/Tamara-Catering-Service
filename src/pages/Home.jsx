import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutusSection from '../components/AboutusSection'
import ServiceComponent from '../components/ServiceComponent'
import WhyChooseUs from '../components/WhyChooseUs'
import RandomComponent from '../components/RandomComponent'
import { useEffect } from "react";
function Home() {
  // Always scroll to top when this component is rendered

  return (
    <div>
      <HeroSection />
      <AboutusSection />
      <ServiceComponent />
      <WhyChooseUs />
      <RandomComponent />
    </div>
  );
}

export default Home