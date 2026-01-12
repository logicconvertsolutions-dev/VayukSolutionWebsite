import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

const PainPointAnalyzer: React.FC = () => {
  const [painPoint, setPainPoint] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const analyzePain = async () => {
    if (!painPoint.trim()) return;
    
    // Safety check for API Key in browser environment
    if (typeof window !== 'undefined' && (window as any).aistudio) {
      const hasKey = await (window as any).aistudio.hasSelectedApiKey();
      if (!hasKey && !process.env.API_KEY) {
        setErrorMsg("API Key required. Opening selection dialog...");
        await (window as any).aistudio.openSelectKey();
        return;
      }
    }

    setLoading(true);
    setResult(null);
    setErrorMsg(null);

    try {
      // Create new instance right before call as per best practices
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Analyze this SME business pain point and suggest an AI solution. Professional, simple, focused on time-saving for a non-tech owner. Output must be valid JSON: "${painPoint}"`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              summary: { type: Type.STRING },
              aiSolution: { type: Type.STRING },
              estimatedROI: { type: Type.STRING },
              implementationEase: { type: Type.STRING }
            },
            required: ["summary", "aiSolution", "estimatedROI", "implementationEase"]
          }
        }
      });

      const rawText = response.text;
      if (!rawText) throw new Error("EMPTY_RESPONSE");
      setResult(JSON.parse(rawText.trim()));

    } catch (error: any) {
      console.error("Vayuk Analysis Error:", error);
      
      const isKeyError = error?.message?.includes("Requested entity was not found.") || 
                        error?.message?.includes("API_KEY_INVALID") ||
                        error?.message?.includes("403") ||
                        error?.message?.includes("401");

      if (isKeyError) {
        setErrorMsg("Connection issue. Please verify your API key.");
        if (typeof window !== 'undefined' && (window as any).aistudio) {
          await (window as any).aistudio.openSelectKey();
        }
      } else {
        setErrorMsg(`Analysis Error: ${error?.message || "Something went wrong. Please try again."}`);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLeadCapture = () => {
    const event = new CustomEvent('vayuk-lead-capture', { 
      detail: { 
        challenge: painPoint,
        solution: result?.summary 
      } 
    });
    window.dispatchEvent(event);

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="ai-optimizer" className="section-padding bg-background/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-8 md:p-12 shadow-sm border border-brand/5">
          <div className="text-center mb-12">
            <span className="text-accent font-sans text-[10px] tracking-[0.4em] uppercase font-bold mb-4 block">AI Optimizer</span>
            <h3 className="text-3xl md:text-5xl font-heading font-bold tracking-tight text-primary mb-4 leading-none text-center">Free ROI Check.</h3>
            <p className="text-slateText text-base max-w-lg mx-auto">What's the #1 thing slowing your business down today?</p>
          </div>

          <div className="flex flex-col md:flex-row gap-3 mb-6">
            <input 
              type="text" 
              placeholder="e.g., Manually scheduling service calls takes 4 hours a day..."
              className="flex-grow px-6 py-4 bg-background/50 border border-primary/5 rounded-2xl text-slateText font-sans text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 transition-all placeholder:text-slateText/30"
              value={painPoint}
              onChange={(e) => setPainPoint(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && analyzePain()}
            />
            <button 
              onClick={analyzePain}
              disabled={loading || !painPoint.trim()}
              className="px-8 py-4 bg-accent text-white font-bold rounded-2xl hover:brightness-110 disabled:opacity-50 transition-all font-sans text-sm uppercase tracking-widest shadow-lg active:scale-95 flex items-center justify-center min-w-[140px]"
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : 'Analyze ROI'}
            </button>
          </div>

          {errorMsg && (
            <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex flex-col items-center justify-center gap-3 animate-in fade-in duration-300">
              <p className="text-red-600 text-xs font-sans font-medium text-center">{errorMsg}</p>
              <button 
                onClick={() => (window as any).aistudio?.openSelectKey()}
                className="text-[9px] text-red-700 font-bold uppercase tracking-widest border-b border-red-200 hover:border-red-500 transition-colors"
              >
                Configure Connection
              </button>
            </div>
          )}

          {result && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-8 bg-background/50 rounded-[2rem] border border-primary/5">
                  <h4 className="text-[10px] font-sans font-bold text-accent uppercase tracking-widest mb-4">AI Strategy</h4>
                  <p className="text-primary font-bold mb-3 font-heading text-lg leading-tight">{result.summary}</p>
                  <p className="text-slateText text-sm leading-relaxed">{result.aiSolution}</p>
                </div>
                <div className="grid grid-rows-2 gap-4">
                  <div className="p-8 bg-brand text-white rounded-[2rem] shadow-md flex flex-col justify-center">
                    <h4 className="text-[10px] font-sans font-bold text-white/60 uppercase tracking-widest mb-1">Projected Impact</h4>
                    <p className="text-3xl font-heading font-bold tracking-tight">{result.estimatedROI}</p>
                  </div>
                  <div className="p-8 bg-accent text-white rounded-[2rem] shadow-md flex flex-col justify-center">
                    <h4 className="text-[10px] font-sans font-bold text-white/60 uppercase tracking-widest mb-1">Time to Value</h4>
                    <p className="text-2xl font-heading font-bold tracking-tight uppercase">{result.implementationEase}</p>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={handleLeadCapture}
                className="w-full py-5 bg-brand/10 border border-brand/20 text-brand font-bold rounded-2xl hover:bg-brand hover:text-white transition-all duration-300 font-sans text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3"
              >
                <span>Generate Implementation Plan</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PainPointAnalyzer;