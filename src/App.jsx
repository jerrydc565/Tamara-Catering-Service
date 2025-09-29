import React from 'react'
import Header from './components/Header'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Service from './pages/Service';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';
function App() {
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