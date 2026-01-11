import React from 'react';
import ScrollReveal from './ScrollReveal';

const AIEdge: React.FC = () => {
  return (
    <section id="ai-edge" className="section-padding bg-accent overflow-hidden relative">
      {/* Decorative Brand Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <ScrollReveal>
              <span className="text-brand font-sans text-[10px] tracking-[0.4em] uppercase font-bold mb-6 block">The Tech Advantage</span>
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-12 text-white tracking-tight leading-none">
                The Result of <br />
                <span className="text-brand">Better Systems.</span>
              </h2>
              
              <div className="space-y-10">
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-bold text-white mb-2 uppercase tracking-wide">Save 10+ Hours/Week</h4>
                    <p className="text-white/60 font-sans text-sm leading-relaxed">Kill the manual data entry. We sync your leads, invoices, and schedules automatically.</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-bold text-white mb-2 uppercase tracking-wide">Instant Response Time</h4>
                    <p className="text-white/60 font-sans text-sm leading-relaxed">Our AI agents engage your customers the second they reach out, 24/7/365.</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-300">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-heading font-bold text-white mb-2 uppercase tracking-wide">Predictable Growth</h4>
                    <p className="text-white/60 font-sans text-sm leading-relaxed">Turn guesswork into data. Scale with precision using our intelligent dashboarding.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:w-1/2 relative">
             <ScrollReveal delay={300}>
                <div className="p-4 bg-white/5 rounded-[3rem] border border-white/10 shadow-2xl backdrop-blur-sm overflow-hidden group">
                  <div className="relative rounded-[2.2rem] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop" 
                      alt="Data Intelligence" 
                      className="w-full opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-accent/80 to-transparent"></div>
                  </div>
                </div>
             </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIEdge;