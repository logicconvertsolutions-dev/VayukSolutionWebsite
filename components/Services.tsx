import React from 'react';
import ScrollReveal from './ScrollReveal';

const serviceData = [
  {
    title: "Modern Websites",
    description: "High-performance sites designed to win more local customers. We don't just build pages; we build tools that sell for you 24/7.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "text-brand"
  },
  {
    title: "Business Software (SaaS)",
    description: "Custom tools built to run your operations smoothly as you scale. Manage your team, inventory, and customers in one clean place.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    color: "text-accent"
  },
  {
    title: "24/7 Automation",
    description: "Smart AI that works while you sleep—never miss a lead again. We handle the follow-ups so you can focus on the job.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "text-brand"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <ScrollReveal className="text-center mb-24">
          <span className="text-accent font-sans text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">What We Offer</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-primary mb-6 leading-none">Practical Solutions.</h2>
          <p className="text-slateText text-lg font-normal max-w-xl mx-auto leading-relaxed">No jargon. Just tools that help your business grow faster and run smoother.</p>
        </ScrollReveal>

        <div className="space-y-12">
          {serviceData.map((service, idx) => (
            <ScrollReveal key={idx} delay={idx * 150}>
              <div className="group flex flex-col md:flex-row items-center gap-10 p-10 bg-background/30 rounded-[2.5rem] hover:bg-white hover:shadow-sm border border-transparent hover:border-brand/10 transition-all duration-500">
                <div className={`flex-shrink-0 w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center ${service.color} group-hover:bg-brand group-hover:text-white transition-all`}>
                  {service.icon}
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-3 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-slateText text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;