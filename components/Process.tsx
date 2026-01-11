import React from 'react';
import ScrollReveal from './ScrollReveal';

const steps = [
  {
    title: "1. Consult",
    description: "We dive deep into your workflows to find the exact bottlenecks costing you money.",
    icon: "🔍"
  },
  {
    title: "2. Build",
    description: "Our engineers create your custom AI agent and integrate it with your existing tools.",
    icon: "⚙️"
  },
  {
    title: "3. Launch",
    description: "You save time instantly while we monitor results and optimize for performance.",
    icon: "🚀"
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <ScrollReveal className="max-w-4xl mx-auto text-center mb-24">
          <span className="text-accent font-sans text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">The Roadmap</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-primary mb-6 leading-none">From Manual to Automatic in 14 Days.</h2>
          <p className="text-slateText text-lg font-normal max-w-xl mx-auto">A streamlined deployment process designed to minimize distraction and maximize ROI.</p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-primary/5 -translate-y-1/2 z-0"></div>
          
          {steps.map((step, idx) => (
            <ScrollReveal key={idx} delay={idx * 200} className="h-full">
              <div className="group relative z-10 p-10 bg-background/50 rounded-[2.5rem] hover:bg-white hover:shadow-xl border border-transparent hover:border-brand/10 transition-all duration-500 text-center h-full">
                <div className="text-4xl mb-6">{step.icon}</div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4 tracking-tight group-hover:text-brand transition-colors">{step.title}</h3>
                <p className="text-slateText text-sm leading-relaxed">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;