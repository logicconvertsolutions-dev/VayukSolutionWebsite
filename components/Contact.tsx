import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';

const stateData: Record<string, { code: string; name: string }[]> = {
  CA: [
    { code: 'AB', name: 'Alberta' },
    { code: 'BC', name: 'British Columbia' },
    { code: 'MB', name: 'Manitoba' },
    { code: 'NB', name: 'New Brunswick' },
    { code: 'NL', name: 'Newfoundland and Labrador' },
    { code: 'NS', name: 'Nova Scotia' },
    { code: 'ON', name: 'Ontario' },
    { code: 'PE', name: 'Prince Edward Island' },
    { code: 'QC', name: 'Quebec' },
    { code: 'SK', name: 'Saskatchewan' },
    { code: 'NT', name: 'Northwest Territories' },
    { code: 'NU', name: 'Nunavut' },
    { code: 'YT', name: 'Yukon' },
  ],
  US: [
    { code: 'AL', name: 'Alabama' }, { code: 'AK', name: 'Alaska' }, { code: 'AZ', name: 'Arizona' },
    { code: 'AR', name: 'Arkansas' }, { code: 'CA', name: 'California' }, { code: 'CO', name: 'Colorado' },
    { code: 'CT', name: 'Connecticut' }, { code: 'DE', name: 'Delaware' }, { code: 'FL', name: 'Florida' },
    { code: 'GA', name: 'Georgia' }, { code: 'HI', name: 'Hawaii' }, { code: 'ID', name: 'Idaho' },
    { code: 'IL', name: 'Illinois' }, { code: 'IN', name: 'Indiana' }, { code: 'IA', name: 'Iowa' },
    { code: 'KS', name: 'Kansas' }, { code: 'KY', name: 'Kentucky' }, { code: 'LA', name: 'Louisiana' },
    { code: 'ME', name: 'Maine' }, { code: 'MD', name: 'Maryland' }, { code: 'MA', name: 'Massachusetts' },
    { code: 'MI', name: 'Michigan' }, { code: 'MN', name: 'Minnesota' }, { code: 'MS', name: 'Mississippi' },
    { code: 'MO', name: 'Missouri' }, { code: 'MT', name: 'Montana' }, { code: 'NE', name: 'Nebraska' },
    { code: 'NV', name: 'Nevada' }, { code: 'NH', name: 'New Hampshire' }, { code: 'NJ', name: 'New Jersey' },
    { code: 'NM', name: 'New Mexico' }, { code: 'NY', name: 'New York' }, { code: 'NC', name: 'North Carolina' },
    { code: 'ND', name: 'North Dakota' }, { code: 'OH', name: 'Ohio' }, { code: 'OK', name: 'Oklahoma' },
    { code: 'OR', name: 'Oregon' }, { code: 'PA', name: 'Pennsylvania' }, { code: 'RI', name: 'Rhode Island' },
    { code: 'SC', name: 'South Carolina' }, { code: 'SD', name: 'South Dakota' }, { code: 'TN', name: 'Tennessee' },
    { code: 'TX', name: 'Texas' }, { code: 'UT', name: 'Utah' }, { code: 'VT', name: 'Vermont' },
    { code: 'VA', name: 'Virginia' }, { code: 'WA', name: 'Washington' }, { code: 'WV', name: 'West Virginia' },
    { code: 'WI', name: 'Wisconsin' }, { code: 'WY', name: 'Wyoming' }
  ]
};

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPreFilled, setIsPreFilled] = useState(false);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    company: '',
    city: '',
    country_code: '',
    state_code: '',
    description: ''
  });

  useEffect(() => {
    const handlePreFill = (e: any) => {
      const { challenge, solution } = e.detail;
      setFormData(prev => ({
        ...prev,
        description: `Original Challenge: ${challenge}\nProposed AI Solution: ${solution}`
      }));
      setIsPreFilled(true);
    };

    window.addEventListener('vayuk-lead-capture', handlePreFill);
    return () => window.removeEventListener('vayuk-lead-capture', handlePreFill);
  }, []);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      country_code: e.target.value,
      state_code: '' // Reset state when country changes
    });
  };

  const handleFormSubmit = () => {
    setIsSubmitting(true);
    // Because we are targeting a hidden iframe, the page won't reload.
    // We show our local success state after a brief simulated delay.
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <ScrollReveal className="max-w-6xl mx-auto bg-background/30 rounded-[3rem] overflow-hidden border border-brand/5 shadow-sm">
          <div className="grid lg:grid-cols-5">
            {/* Sidebar Info */}
            <div className="lg:col-span-2 p-12 md:p-16 bg-accent text-white flex flex-col justify-center">
              <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight mb-8 leading-[1.1]">
                Connect to <br />
                <span className="text-brand">Growth.</span>
              </h2>
              <p className="text-white/70 text-lg mb-12 font-normal leading-relaxed">
                Your inquiry goes directly to our team. Expect a roadmap in your inbox within 24 hours.
              </p>
              <div className="space-y-6 text-sm font-sans tracking-widest uppercase opacity-60">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <span>hello@vayuk.solutions</span>
                </div>
              </div>
            </div>

            {/* Form Area */}
            <div className="lg:col-span-3 p-12 md:p-16 bg-white relative">
              {/* Hidden Iframe to catch the Salesforce redirect and prevent blank screen */}
              <iframe 
                name="salesforce_iframe" 
                id="salesforce_iframe" 
                style={{ display: 'none', width: 0, height: 0, border: 0 }}
                title="hidden_submission_frame"
              ></iframe>

              {isSubmitted ? (
                <div className="text-center space-y-6 animate-in zoom-in duration-500 py-12">
                  <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center mx-auto text-brand">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-accent uppercase tracking-tight">Message Received</h3>
                  <p className="text-slateText">Thank you for reaching out. Your inquiry has been successfully received, and our team will get back to you shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-brand font-bold uppercase tracking-widest text-[10px] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form 
                  action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00Dfj00000EdkED" 
                  method="POST"
                  target="salesforce_iframe"
                  onSubmit={handleFormSubmit}
                  className="w-full space-y-5"
                >
                  {/* Salesforce Hidden Fields */}
                  <input type="hidden" name="oid" value="00Dfj00000EdkED" />
                  <input type="hidden" name="retURL" value={window.location.origin} />

                  {isPreFilled && (
                    <div className="p-4 bg-brand/5 border border-brand/10 rounded-2xl mb-2 flex items-center gap-3 animate-in slide-in-from-top-2">
                      <div className="w-2 h-2 bg-brand rounded-full animate-pulse"></div>
                      <p className="text-[10px] font-bold text-brand uppercase tracking-widest">AI Audit Data Included</p>
                    </div>
                  )}
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first_name" className="block text-[10px] font-sans font-bold text-accent/40 uppercase tracking-widest mb-1.5">First Name</label>
                      <input 
                        id="first_name"
                        name="first_name"
                        type="text" 
                        required
                        maxLength={40}
                        className="w-full px-5 py-3 bg-background/50 border border-primary/5 rounded-xl text-slateText font-sans text-sm outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                        value={formData.first_name}
                        onChange={e => setFormData({...formData, first_name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label htmlFor="last_name" className="block text-[10px] font-sans font-bold text-accent/40 uppercase tracking-widest mb-1.5">Last Name</label>
                      <input 
                        id="last_name"
                        name="last_name"
                        type="text" 
                        required
                        maxLength={80}
                        className="w-full px-5 py-3 bg-background/50 border border-primary/5 rounded-xl text-slateText font-sans text-sm outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                        value={formData.last_name}
                        onChange={e => setFormData({...formData, last_name: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-[10px] font-sans font-bold text-accent/40 uppercase tracking-widest mb-1.5">Email</label>
                      <input 
                        id="email"
                        name="email"
                        type="email" 
                        required
                        maxLength={80}
                        className="w-full px-5 py-3 bg-background/50 border border-primary/5 rounded-xl text-slateText font-sans text-sm outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-[10px] font-sans font-bold text-accent/40 uppercase tracking-widest mb-1.5">Company</label>
                      <input 
                        id="company"
                        name="company"
                        type="text" 
                        required
                        maxLength={40}
                        className="w-full px-5 py-3 bg-background/50 border border-primary/5 rounded-xl text-slateText font-sans text-sm outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                        value={formData.company}
                        onChange={e => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-[10px] font-sans font-bold text-accent/40 uppercase tracking-widest mb-1.5">City</label>
                      <input 
                        id="city"
                        name="city"
                        type="text" 
                        maxLength={40}
                        className="w-full px-5 py-3 bg-background/50 border border-primary/5 rounded-xl text-slateText font-sans text-sm outline-none focus:ring-2 focus:ring-brand/20 transition-all"
                        value={formData.city}
                        onChange={e => setFormData({...formData, city: e.target.value})}
                      />
                    </div>
                    <div>
                      <label htmlFor="country_code" className="block text-[10px] font-sans font-bold text-accent/40 uppercase tracking-widest mb-1.5">Country</label>
                      <select 
                        id="country_code" 
                        name="country_code"
                        required
                        className="w-full px-5 py-3 bg-background/50 border border-primary/5 rounded-xl text-slateText font-sans text-sm outline-none focus:ring-2 focus:ring-brand/20 transition-all appearance-none"
                        value={formData.country_code}
                        onChange={handleCountryChange}
                      >
                        <option value="">Select...</option>
                        <option value="CA">Canada</option>
                        <option value="US">United States</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="state_code" className="block text-[10px] font-sans font-bold text-accent/40 uppercase tracking-widest mb-1.5">State/Province</label>
                      <select 
                        id="state_code" 
                        name="state_code"
                        disabled={!formData.country_code}
                        className="w-full px-5 py-3 bg-background/50 border border-primary/5 rounded-xl text-slateText font-sans text-sm outline-none focus:ring-2 focus:ring-brand/20 transition-all appearance-none disabled:opacity-50"
                        value={formData.state_code}
                        onChange={e => setFormData({...formData, state_code: e.target.value})}
                      >
                        <option value="">Select...</option>
                        {formData.country_code && stateData[formData.country_code]?.map((state) => (
                          <option key={state.code} value={state.code}>
                            {state.name} ({state.code})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-[10px] font-sans font-bold text-accent/40 uppercase tracking-widest mb-1.5">Message</label>
                    <textarea 
                      id="description"
                      name="description"
                      rows={3}
                      placeholder="How can we help your business today?"
                      className="w-full px-5 py-3 bg-background/50 border border-primary/5 rounded-xl text-slateText font-sans text-sm outline-none focus:ring-2 focus:ring-brand/20 transition-all resize-none"
                      value={formData.description}
                      onChange={e => setFormData({...formData, description: e.target.value})}
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-5 bg-brand text-white font-bold button-pill shadow-lg shadow-brand/20 hover:brightness-105 active:scale-[0.98] transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : 'Send Message'}
                  </button>
                  <p className="text-center text-[8px] text-slateText/40 uppercase tracking-[0.2em] font-medium">
                    Secure Submission
                  </p>
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