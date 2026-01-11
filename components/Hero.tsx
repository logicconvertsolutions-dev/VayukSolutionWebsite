import React from 'react';
import ScrollReveal from './ScrollReveal';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 overflow-hidden bg-background">
      {/* Soft Brand Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <ScrollReveal className="flex flex-col items-center text-center">
          <div className="inline-block px-4 py-1.5 mb-8 bg-white border border-brand/10 rounded-full font-sans text-xs font-bold tracking-widest text-accent uppercase shadow-sm">
            The Efficiency Engine
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight text-primary leading-[1.1] mb-8 max-w-4xl">
            We Automate Your <br />
            <span className="text-brand">Business</span> While You Sleep.
          </h1>
          
          <p className="text-lg md:text-xl text-slateText mb-12 max-w-2xl leading-relaxed">
            Vayuk Solutions builds simple software that handles your daily chores. 
            Stop chasing leads and start closing them automatically.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#ai-optimizer" 
              onClick={(e) => handleNavClick(e, 'ai-optimizer')}
              className="w-full sm:w-auto px-10 py-5 bg-brand text-white font-bold button-pill shadow-lg shadow-brand/20 hover:scale-105 hover:brightness-105 active:scale-95 text-center transition-all uppercase tracking-widest text-xs"
            >
              Start My Free Audit
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')}
              className="w-full sm:w-auto px-10 py-5 bg-white text-accent font-bold button-pill border border-accent/5 hover:bg-white/50 shadow-sm text-center transition-all uppercase tracking-widest text-xs"
            >
              Explore Solutions
            </a>
          </div>
          
          <div className="mt-24 w-full max-w-5xl">
            <div className="bg-white p-2 rounded-[2rem] shadow-sm border border-brand/5">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
                  alt="Streamlined Workflow" 
                  className="w-full rounded-[1.8rem] opacity-90 shadow-inner"
                />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;