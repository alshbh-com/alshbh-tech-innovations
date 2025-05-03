
import React from 'react';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Services from '@/components/Services';
import FeaturedProject from '@/components/FeaturedProject';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-300 text-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FeaturedProject />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
