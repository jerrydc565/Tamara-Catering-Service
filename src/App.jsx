import React from 'react'
import { useState, useEffect } from "react";
import Header from './components/Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Service from './pages/Service';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';

function App() {
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
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/service' element={<Service />} />
          <Route path='/' element={<Home />} /> 
          <Route path='/gallery' element={<Gallery/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App