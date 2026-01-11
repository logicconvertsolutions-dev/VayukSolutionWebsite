import React from 'react';
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
  return (
    <div className="min-h-screen flex flex-col font-sans">
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
    </div>
  );
};

export default App;