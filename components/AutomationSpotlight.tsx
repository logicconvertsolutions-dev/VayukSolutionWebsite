import React from 'react';
import ScrollReveal from './ScrollReveal';

const AutomationSpotlight: React.FC = () => {
  return (
    <section id="automation-spotlight" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <span className="text-brand font-sans text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">Case Study</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight text-primary mb-8 leading-[1.1]">Never Miss a <br /> Quote Again.</h2>
            <p className="text-slateText text-lg mb-8 leading-relaxed">
              When you're out on a job and miss a call, Vayuk AI instantly texts the customer, offers a quick quote, and keeps the lead warm. 
            </p>
            <p className="text-primary font-bold text-xl font-heading uppercase tracking-widest italic opacity-80 mb-12">
              Simple. Fast. Efficient.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center text-brand flex-shrink-0 mt-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                </div>
                <p className="text-slateText">Auto-reply missed calls in under 5 seconds.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center text-brand flex-shrink-0 mt-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                </div>
                <p className="text-slateText">Let customers book directly from their phone.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center text-brand flex-shrink-0 mt-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                </div>
                <p className="text-slateText">Sync everything to your calendar automatically.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300} className="relative group">
            <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-brand/5 relative z-10">
              <div className="bg-background rounded-[2rem] p-6 space-y-5 font-sans border border-primary/5">
                <div className="flex justify-start">
                  <div className="bg-white text-slateText px-4 py-2.5 rounded-2xl rounded-tl-none text-sm border border-primary/5 shadow-sm">
                    "Hey, are you free for a HVAC repair tomorrow?"
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-brand text-white px-4 py-2.5 rounded-2xl rounded-tr-none text-sm shadow-md animate-pulse">
                    "Hi! We're on a site visit right now. Want 10% off if you book online? Link: vayuk.link/hvac"
                  </div>
                </div>
                <div className="flex justify-start pt-2">
                  <div className="bg-white text-slateText px-4 py-2.5 rounded-2xl rounded-tl-none text-sm border border-primary/5 shadow-sm">
                    "Awesome, just booked 9 AM. See you then!"
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-8 border-t border-primary/5 flex items-center justify-around">
                <div className="text-center">
                  <p className="text-2xl font-heading font-bold text-brand">0.5s</p>
                  <p className="text-[10px] text-accent/50 uppercase tracking-widest font-bold">Time Saved</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-heading font-bold text-accent">+40%</p>
                  <p className="text-[10px] text-accent/50 uppercase tracking-widest font-bold">New Jobs</p>
                </div>
              </div>
            </div>
            <div className="absolute -inset-4 bg-brand/5 rounded-[4rem] blur-2xl group-hover:bg-brand/10 transition-colors"></div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AutomationSpotlight;