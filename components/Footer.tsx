import React from 'react';
import { BrandLogo } from './Navbar';

interface FooterProps {
  setView: (view: any) => void;
}

const Footer: React.FC<FooterProps> = ({ setView }) => {
  const handleHomeNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setView('home');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const footerLinks = [
    { name: 'About', id: 'about' },
    { name: 'Solutions', id: 'services' },
    { name: 'Case Study', id: 'automation-spotlight' },
    { name: 'Method', id: 'process' },
    { name: 'ROI Tool', id: 'roi-calculator' },
    { name: 'Free Audit', id: 'ai-optimizer' },
  ];

  return (
    <footer className="py-24 bg-accent text-white border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-12 text-center">
          
          <div className="flex flex-col items-center gap-4">
            <button 
              onClick={() => setView('home')}
              className="transition-transform hover:scale-105 active:scale-95"
            >
              <BrandLogo className="h-20" grayscale />
            </button>
            <div className="flex flex-col items-center leading-none mt-6">
              <span className="text-3xl font-heading font-bold tracking-tighter text-white uppercase">
                VAYUK <span className="text-brand">SOLUTIONS</span>
              </span>
              <span className="text-xs font-sans font-medium uppercase tracking-[0.5em] text-white/30 mt-2">
                AI-Driven Growth
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-[11px] font-sans font-bold text-white/40 uppercase tracking-[0.2em]">
            {footerLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                onClick={(e) => handleHomeNavClick(e, link.id)}
                className="hover:text-brand transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="h-px w-24 bg-white/10"></div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-[10px] font-sans text-white/20 uppercase tracking-[0.4em]">
              © {new Date().getFullYear()} VAYUK SOLUTIONS — AUTOMATING THE FUTURE OF SMEs.
            </div>
            <div className="flex gap-6 text-[9px] font-bold uppercase tracking-widest text-white/30">
              <button onClick={() => { setView('privacy'); window.scrollTo(0, 0); }} className="hover:text-brand transition-colors">Privacy Policy</button>
              <button onClick={() => { setView('terms'); window.scrollTo(0, 0); }} className="hover:text-brand transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;