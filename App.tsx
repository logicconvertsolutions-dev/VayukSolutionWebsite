import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import AutomationSpotlight from './components/AutomationSpotlight';
import AIEdge from './components/AIEdge';
import ROICalculator from './components/ROICalculator';
import PainPointAnalyzer from './components/PainPointAnalyzer';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 800);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <AutomationSpotlight />
        <AIEdge />
        <ROICalculator />
        <PainPointAnalyzer />
        <Process />
        <Contact />
      </main>
      <Footer />

      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-[100] p-4 bg-brand text-white rounded-full shadow-2xl transition-all duration-500 hover:scale-110 active:scale-90 ${
          showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default App;