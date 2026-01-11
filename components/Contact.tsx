import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    painPoint: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Request Received. We'll be in touch shortly!");
    setFormData({ name: '', email: '', company: '', painPoint: '' });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <ScrollReveal className="max-w-5xl mx-auto bg-background/30 rounded-[3rem] overflow-hidden border border-brand/5 shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 md:p-16 bg-accent text-white flex flex-col justify-center">
              <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight mb-8 leading-[1.1]">
                Let's Build <br />
                <span className="text-brand">Efficiency.</span>
              </h2>
              <p className="text-white/70 text-lg mb-12 font-normal leading-relaxed">
                Ready to reclaim your time? Fill out the form and we'll show you exactly how Vayuk can help.
              </p>
              <div className="space-y-6 text-sm font-sans tracking-widest uppercase opacity-60">
                <p>hello@vayuk.solutions</p>
                <p>+1 (555) 900-VAYUK</p>
              </div>
            </div>

            <div className="p-12 md:p-16 bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-sans font-bold text-accent/40 uppercase tracking-widest mb-2">Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-5 py-3.5 bg-background/50 border border-primary/5 rounded-2xl text-slateText font-sans text-sm outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-sans font-bold text-accent/40 uppercase tracking-widest mb-2">Business</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-5 py-3.5 bg-background/50 border border-primary/5 rounded-2xl text-slateText font-sans text-sm outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                      value={formData.company}
                      onChange={e => setFormData({...formData, company: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-sans font-bold text-accent/40 uppercase tracking-widest mb-2">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-5 py-3.5 bg-background/50 border border-primary/5 rounded-2xl text-slateText font-sans text-sm outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-sans font-bold text-accent/40 uppercase tracking-widest mb-2">Challenge</label>
                  <textarea 
                    rows={3}
                    required
                    placeholder="Tell us what's slowing you down..."
                    className="w-full px-5 py-3.5 bg-background/50 border border-primary/5 rounded-2xl text-slateText font-sans text-sm outline-none focus:ring-2 focus:ring-brand/20 transition-all resize-none"
                    value={formData.painPoint}
                    onChange={e => setFormData({...formData, painPoint: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-5 bg-brand text-white font-bold button-pill shadow-lg shadow-brand/20 hover:brightness-105 active:scale-[0.98] transition-all uppercase tracking-widest text-xs"
                >
                  Book My Strategy Call
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;