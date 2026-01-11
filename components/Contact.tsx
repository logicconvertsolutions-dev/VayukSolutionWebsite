import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    painPoint: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
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
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <span>hello@vayuk.solutions</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <span>+1 (555) 900-VAYUK</span>
                </div>
              </div>
            </div>

            <div className="p-12 md:p-16 bg-white flex items-center justify-center">
              {isSubmitted ? (
                <div className="text-center space-y-6 animate-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center mx-auto text-brand">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-accent uppercase tracking-tight">Strategy Call Booked!</h3>
                  <p className="text-slateText">We've received your inquiry. One of our efficiency engineers will reach out to you within 24 hours.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-brand font-bold uppercase tracking-widest text-[10px] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="w-full space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-sans font-bold text-accent/40 uppercase tracking-widest mb-2">Name</label>
                      <input 
                        type="text" 
                        required
                        disabled={isSubmitting}
                        className="w-full px-5 py-3.5 bg-background/50 border border-primary/5 rounded-2xl text-slateText font-sans text-sm outline-none focus:ring-2 focus:ring-brand/20 transition-all disabled:opacity-50"
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-sans font-bold text-accent/40 uppercase tracking-widest mb-2">Business</label>
                      <input 
                        type="text" 
                        required
                        disabled={isSubmitting}
                        className="w-full px-5 py-3.5 bg-background/50 border border-primary/5 rounded-2xl text-slateText font-sans text-sm outline-none focus:ring-2 focus:ring-brand/20 transition-all disabled:opacity-50"
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
                      disabled={isSubmitting}
                      className="w-full px-5 py-3.5 bg-background/50 border border-primary/5 rounded-2xl text-slateText font-sans text-sm outline-none focus:ring-2 focus:ring-brand/20 transition-all disabled:opacity-50"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-sans font-bold text-accent/40 uppercase tracking-widest mb-2">Challenge</label>
                    <textarea 
                      rows={3}
                      required
                      disabled={isSubmitting}
                      placeholder="Tell us what's slowing you down..."
                      className="w-full px-5 py-3.5 bg-background/50 border border-primary/5 rounded-2xl text-slateText font-sans text-sm outline-none focus:ring-2 focus:ring-brand/20 transition-all resize-none disabled:opacity-50"
                      value={formData.painPoint}
                      onChange={e => setFormData({...formData, painPoint: e.target.value})}
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 bg-brand text-white font-bold button-pill shadow-lg shadow-brand/20 hover:brightness-105 active:scale-[0.98] transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : 'Book My Strategy Call'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Contact;