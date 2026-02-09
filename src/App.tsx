import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CTA from './components/sections/CTA';
import DocumentTypes from './components/sections/DocumentTypes';
import Features from './components/sections/Features';
import Hero from './components/sections/Hero';
import Products from './components/sections/Products';
import Security from './components/sections/Security';
import WhyChoose from './components/sections/WhyChoose';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Products />
        <DocumentTypes />
        <WhyChoose />
        <Security />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
