import React from 'react';
import ScrollReveal from './ScrollReveal';

const expertise = [
  {
    title: "AI Engineering",
    desc: "Developing custom Large Language Model (LLM) integrations that understand your specific business context.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "Process Architecture",
    desc: "Mapping complex manual workflows and redesigning them for maximum digital speed and reliability.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    )
  },
  {
    title: "SME Strategy",
    desc: "Helping business owners transition from 'working in' the business to 'working on' the business through tech.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
];

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <ScrollReveal>
            <span className="text-brand font-sans text-[10px] tracking-[0.4em] uppercase font-bold mb-6 block">Our Story</span>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-8 tracking-tight leading-[1.1]">
              Human Ingenuity, <br />
              <span className="text-brand">Automated.</span>
            </h2>
            <div className="space-y-6 text-slateText text-lg leading-relaxed">
              <p>
                Vayuk Solutions was founded on a simple realization: the tools being built for Silicon Valley giants weren't trickling down to the local businesses that power our economy.
              </p>
              <p>
                We saw skilled tradespeople, contractors, and agency owners spending 40% of their week on "digital admin"—the repetitive tasks that don't generate revenue but keep the lights on.
              </p>
              <p className="font-bold text-accent">
                Our mission is to give that time back. We build the "Efficiency Engine" that handles the noise, so you can focus on the craft.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            <ScrollReveal delay={200}>
              <div className="space-y-6">
                {expertise.map((item, idx) => (
                  <div key={idx} className="p-8 bg-background/40 rounded-[2.5rem] border border-primary/5 hover:border-brand/20 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                    <div className="flex items-center gap-5 mb-4">
                      <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand shadow-sm group-hover:bg-brand group-hover:text-white transition-all duration-300">
                        {item.icon}
                      </div>
                      <h4 className="text-xl font-heading font-bold text-primary tracking-tight">{item.title}</h4>
                    </div>
                    <p className="text-slateText text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            
            {/* Background Decorative Element */}
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-brand/5 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;