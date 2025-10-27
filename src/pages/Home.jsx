import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutusSection from '../components/AboutusSection'
import ServiceComponent from '../components/ServiceComponent'
import WhyChooseUs from '../components/WhyChooseUs'
import RandomComponent from '../components/RandomComponent'
import { useEffect, useState } from "react";
function Home() {
  // Always scroll to top when this component is rendered
const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulate a 3-second loading time

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  if (isLoading) {
    return (
      <div className=" flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-[#FFBB00] mb-4 "></div>
          <h2 className="text-2xl font-semibold text-[#FFBB00]">Loading...</h2>
        </div>
      </div>
    );
  }
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