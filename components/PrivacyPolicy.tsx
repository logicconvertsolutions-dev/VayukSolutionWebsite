import React from 'react';
import ScrollReveal from './ScrollReveal';

const PrivacyPolicy: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <section className="pt-40 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <ScrollReveal>
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-brand font-bold text-xs uppercase tracking-widest mb-12 hover:translate-x-[-4px] transition-transform"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            Return to Home
          </button>
          
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary mb-6 tracking-tight">Privacy Policy</h1>
          <p className="text-slateText/60 font-sans text-sm mb-12 uppercase tracking-[0.2em]">Effective Date: October 24, 2023</p>

          <div className="prose prose-slate max-w-none space-y-8 text-slateText leading-relaxed">
            <div>
              <h2 className="text-2xl font-heading font-bold text-accent mb-4">1. Introduction</h2>
              <p>Vayuk Solutions ("we", "us", or "our") is committed to protecting the privacy and security of the personal information of our clients and website visitors. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information in accordance with the <strong>Personal Information Protection and Electronic Documents Act (PIPEDA)</strong> and applicable provincial privacy laws in Canada.</p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-accent mb-4">2. Information We Collect</h2>
              <p>We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services. This includes:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Contact Data:</strong> Name, email address, phone number, city, and province.</li>
                <li><strong>Business Data:</strong> Company name, industry, and descriptions of business challenges.</li>
                <li><strong>Usage Data:</strong> Information provided through our AI ROI Tool and lead capture forms.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-accent mb-4">3. Use of Third-Party Services</h2>
              <p>To provide our services efficiently, we utilize the following third-party processors:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Salesforce:</strong> We use Salesforce Web-to-Lead to store and manage your inquiries. Data submitted through our contact forms is sent directly to Salesforce servers.</li>
                <li><strong>Google Gemini AI:</strong> When you use our "AI Optimizer," your business challenges are processed by Google's Generative AI to provide insights. We do not send your personal identifiers (like name/email) to the AI model; only the business context you provide.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-accent mb-4">4. How We Use Your Information</h2>
              <p>We use your information for the following purposes:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>To provide, operate, and maintain our website and services.</li>
                <li>To improve, personalize, and expand our digital transformation offerings.</li>
                <li>To communicate with you regarding your inquiries (Salesforce sync).</li>
                <li>To analyze efficiency gaps using our AI modeling tools.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-accent mb-4">5. Consent</h2>
              <p>By using our website and submitting forms, you consent to the collection and use of your information as described in this policy. You may withdraw your consent at any time, subject to legal or contractual restrictions.</p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-accent mb-4">6. Data Security and Retention</h2>
              <p>We implement industry-standard technical and organizational security measures (including SSL encryption) to protect your data. We retain your personal information only as long as necessary to fulfill the purposes for which it was collected or as required by Canadian law.</p>
            </div>

            <div>
              <h2 className="text-2xl font-heading font-bold text-accent mb-4">7. Your Rights (PIPEDA)</h2>
              <p>Under Canadian law, you have the right to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Access the personal information we hold about you.</li>
                <li>Request the correction of inaccurate or incomplete information.</li>
                <li>Request the deletion of your data from our CRM (Salesforce).</li>
              </ul>
              <p className="mt-4">To exercise these rights, please contact our Privacy Officer at <strong>hello@vayuk.solutions</strong>.</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PrivacyPolicy;