import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const ROICalculator: React.FC = () => {
  const [hours, setHours] = useState(10);
  const hourlyRate = 50;
  const annualSavings = hours * hourlyRate * 52;

  return (
    <section id="roi-calculator" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <ScrollReveal className="max-w-4xl mx-auto bg-background/30 rounded-[3rem] p-10 md:p-16 border border-brand/5 shadow-sm text-center">
          <span className="text-accent font-sans text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">Efficiency Audit</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-primary mb-12 leading-none">Calculate Your AI Savings.</h2>
          
          <div className="space-y-12">
            <div className="space-y-6">
              <label className="block text-slateText text-lg font-medium">
                Manual Hours Spent Weekly: <span className="text-brand font-bold text-2xl ml-2">{hours}h</span>
              </label>
              <input 
                type="range" 
                min="1" 
                max="100" 
                value={hours} 
                onChange={(e) => setHours(parseInt(e.target.value))}
                className="w-full h-3 bg-white rounded-full appearance-none cursor-pointer accent-brand border border-primary/5"
              />
              <div className="flex justify-between text-[10px] text-accent/30 font-bold uppercase tracking-widest">
                <span>1 Hour</span>
                <span>100 Hours</span>
              </div>
            </div>

            <div className="pt-12 border-t border-primary/5">
              <p className="text-accent/60 uppercase tracking-[0.2em] font-bold text-[10px] mb-4">Estimated Annual Savings</p>
              <h3 className="text-6xl md:text-8xl font-heading font-bold tracking-tighter text-accent leading-none">
                ${annualSavings.toLocaleString()}
              </h3>
              <p className="mt-8 text-slateText text-base font-normal max-w-md mx-auto leading-relaxed">
                Based on a conservative ${hourlyRate}/hr internal cost. Imagine what you could do with that extra budget.
              </p>
            </div>

            <div className="pt-8">
              <a 
                href="#contact" 
                className="inline-block px-12 py-5 bg-brand text-white font-bold rounded-full shadow-lg shadow-brand/20 hover:scale-105 hover:brightness-105 active:scale-95 transition-all uppercase tracking-widest text-xs"
              >
                Reclaim My Time
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ROICalculator;