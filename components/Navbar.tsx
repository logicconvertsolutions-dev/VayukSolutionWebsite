import React, { useState, useEffect } from 'react';

export const BrandLogo: React.FC<{ className?: string; grayscale?: boolean }> = ({ className = "h-10", grayscale = false }) => (
  <svg viewBox="0 0 350 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <title>Vayuk Solutions</title>
    {/* Motion lines on the left - Brand color */}
    <g className={grayscale ? "opacity-30" : ""}>
      <rect x="94" y="67" width="45" height="6.5" rx="3.25" fill={grayscale ? "#94a3b8" : "#10B981"} />
      <rect x="110" y="78" width="35" height="6.5" rx="3.25" fill={grayscale ? "#94a3b8" : "#10B981"} />
      <rect x="94" y="89" width="55" height="6.5" rx="3.25" fill={grayscale ? "#94a3b8" : "#10B981"} />
      <rect x="105" y="100" width="50" height="6.5" rx="3.25" fill={grayscale ? "#94a3b8" : "#10B981"} />
      <rect x="108" y="111" width="45" height="6.5" rx="3.25" fill={grayscale ? "#94a3b8" : "#10B981"} />
      <rect x="134" y="122" width="25" height="6.5" rx="3.25" fill={grayscale ? "#94a3b8" : "#10B981"} />
    </g>
    
    <path 
      d="M168.5 67L215 170H234L281 67H253L224.5 135L196.5 67H168.5Z" 
      fill={grayscale ? "#64748b" : "#1E1B4B"} 
    />
    
    <g className={grayscale ? "opacity-30" : ""}>
      <path d="M260 85L295 67H315" stroke={grayscale ? "#94a3b8" : "#10B981"} strokeWidth="6" strokeLinecap="round" />
      <circle cx="323" cy="67" r="7" fill={grayscale ? "#94a3b8" : "#10B981"} />
      <path d="M255 110L285 95H320" stroke={grayscale ? "#94a3b8" : "#10B981"} strokeWidth="6" strokeLinecap="round" />
      <circle cx="328" cy="95" r="7" fill={grayscale ? "#94a3b8" : "#10B981"} />
      <path d="M245 135L290 120H325" stroke={grayscale ? "#94a3b8" : "#10B981"} strokeWidth="6" strokeLinecap="round" />
      <circle cx="333" cy="120" r="7" fill={grayscale ? "#94a3b8" : "#10B981"} />
      <path d="M230 160L275 145H310" stroke={grayscale ? "#94a3b8" : "#10B981"} strokeWidth="6" strokeLinecap="round" />
      <circle cx="318" cy="145" r="7" fill={grayscale ? "#94a3b8" : "#10B981"} />
    </g>
  </svg>
);

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Method', id: 'process' },
    { name: 'ROI Tool', id: 'roi-calculator' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-xl border-b border-primary/5 py-3 shadow-md' : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center group relative z-[60]">
            <BrandLogo className={`transition-all duration-500 ${isScrolled ? 'h-10' : 'h-12'}`} />
            <div className="flex flex-col leading-none ml-1">
              <span className="text-xl md:text-2xl font-heading font-bold tracking-tighter text-accent uppercase">
                VAYUK <span className="text-brand">SOLUTIONS</span>
              </span>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10 text-[11px] font-sans font-bold uppercase tracking-[0.15em] text-accent/70">
            {/* About Link */}
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="hover:text-brand transition-colors">About</a>
            
            {/* Solutions Dropdown */}
            <div 
              className="relative py-2"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="flex items-center gap-1.5 hover:text-brand transition-colors uppercase">
                Solutions
                <svg className={`w-3 h-3 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showDropdown && (
                <div className="absolute top-full -left-4 w-72 bg-white border border-primary/5 shadow-2xl rounded-2xl py-5 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="px-6 mb-2">
                    <span className="text-[9px] text-brand/50 uppercase tracking-[0.3em]">Services</span>
                  </div>
                  <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="block px-6 py-3 hover:bg-background hover:text-brand transition-colors border-l-4 border-transparent hover:border-brand font-bold text-accent">Business Software</a>
                  <a href="#automation-spotlight" onClick={(e) => handleNavClick(e, 'automation-spotlight')} className="block px-6 py-3 hover:bg-background hover:text-brand transition-colors border-l-4 border-transparent hover:border-brand font-bold text-accent">HVAC Case Study</a>
                  <a href="#ai-edge" onClick={(e) => handleNavClick(e, 'ai-edge')} className="block px-6 py-3 hover:bg-background hover:text-brand transition-colors border-l-4 border-transparent hover:border-brand font-bold text-accent">Tech Advantages</a>
                  
                  <div className="mx-6 my-3 h-px bg-primary/5"></div>
                  
                  <div className="px-6 mb-2">
                    <span className="text-[9px] text-brand/50 uppercase tracking-[0.3em]">Free Tools</span>
                  </div>
                  <a href="#ai-optimizer" onClick={(e) => handleNavClick(e, 'ai-optimizer')} className="block px-6 py-3 hover:bg-background hover:text-brand transition-colors border-l-4 border-transparent hover:border-brand font-bold text-accent">Free ROI Audit</a>
                </div>
              )}
            </div>
            
            {/* Direct Links */}
            {navLinks.slice(1).map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                onClick={(e) => handleNavClick(e, link.id)} 
                className="hover:text-brand transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Primary CTA */}
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="px-8 py-3.5 bg-brand text-white rounded-full font-bold hover:brightness-105 transition-all shadow-lg shadow-brand/20 active:scale-95 text-[10px] tracking-widest ml-4">
              BOOK AN AUDIT
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden relative z-[60] text-accent p-2 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end overflow-hidden">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 translate-y-[9px] rotate-45' : 'w-6'}`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 translate-x-2' : 'w-4'}`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -translate-y-[9px] -rotate-45' : 'w-5'}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[55] md:hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
      }`}>
        <div 
          className={`absolute inset-0 bg-accent/95 backdrop-blur-xl transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        <div className={`relative h-full flex flex-col items-center justify-center p-8 transition-all duration-500 ease-out ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'
        }`}>
          <div className="space-y-6 text-center">
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="block text-3xl font-heading font-bold text-white hover:text-brand transition-colors">Home</a>
            <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="block text-3xl font-heading font-bold text-white hover:text-brand transition-colors">About</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="block text-3xl font-heading font-bold text-white hover:text-brand transition-colors">Solutions</a>
            <a href="#process" onClick={(e) => handleNavClick(e, 'process')} className="block text-3xl font-heading font-bold text-white hover:text-brand transition-colors">Method</a>
            <a href="#roi-calculator" onClick={(e) => handleNavClick(e, 'roi-calculator')} className="block text-3xl font-heading font-bold text-white hover:text-brand transition-colors">ROI Tool</a>
            
            <div className="pt-8">
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="inline-block px-10 py-5 bg-brand text-white font-bold rounded-full shadow-lg shadow-brand/20 active:scale-95 transition-all uppercase tracking-widest text-xs"
              >
                Book Free Audit
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;