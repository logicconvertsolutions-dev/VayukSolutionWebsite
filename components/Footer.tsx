import React from 'react';
import { BrandLogo } from './Navbar';

const Footer: React.FC = () => {
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

  const downloadLogo = () => {
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 200" fill="none"><rect x="94" y="67" width="45" height="6.5" rx="3.25" fill="#10B981" /><rect x="110" y="78" width="35" height="6.5" rx="3.25" fill="#10B981" /><rect x="94" y="89" width="55" height="6.5" rx="3.25" fill="#10B981" /><rect x="105" y="100" width="50" height="6.5" rx="3.25" fill="#10B981" /><rect x="108" y="111" width="45" height="6.5" rx="3.25" fill="#10B981" /><rect x="134" y="122" width="25" height="6.5" rx="3.25" fill="#10B981" /><path d="M168.5 67L215 170H234L281 67H253L224.5 135L196.5 67H168.5Z" fill="#1E1B4B" /><path d="M260 85L295 67H315" stroke="#10B981" stroke-width="6" stroke-linecap="round" /><circle cx="323" cy="67" r="7" fill="#10B981" /><path d="M255 110L285 95H320" stroke="#10B981" stroke-width="6" stroke-linecap="round" /><circle cx="328" cy="95" r="7" fill="#10B981" /><path d="M245 135L290 120H325" stroke="#10B981" stroke-width="6" stroke-linecap="round" /><circle cx="333" cy="120" r="7" fill="#10B981" /><path d="M230 160L275 145H310" stroke="#10B981" stroke-width="6" stroke-linecap="round" /><circle cx="318" cy="145" r="7" fill="#10B981" /></svg>`;
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'vayuk-solutions-logo.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className="transition-transform hover:scale-105 active:scale-95"
            >
              <BrandLogo className="h-20" grayscale />
            </a>
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
                onClick={(e) => handleNavClick(e, link.id)}
                className="hover:text-brand transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={downloadLogo}
              className="px-6 py-2 border border-white/10 rounded-full text-[9px] font-bold uppercase tracking-[0.3em] hover:bg-white/5 transition-colors flex items-center gap-2"
            >
              <svg className="w-3 h-3 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Logo (SVG)
            </button>
            <div className="h-px w-24 bg-white/10"></div>
          </div>

          <div className="text-[10px] font-sans text-white/20 uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} VAYUK SOLUTIONS — AUTOMATING THE FUTURE OF SMEs.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;