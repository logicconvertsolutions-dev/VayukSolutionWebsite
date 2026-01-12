import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

const PainPointAnalyzer: React.FC = () => {
  const [painPoint, setPainPoint] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const analyzePain = async () => {
    if (!painPoint.trim()) return;
    
    setLoading(true);
    setResult(null);
    setErrorMsg(null);

    try {
      // Direct initialization using the environment variable
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Analyze this SME business pain point and suggest an AI solution. Professional, simple, focused on time-saving for a non-tech owner: "${painPoint}"`,
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

      if (response.text) {
        setResult(JSON.parse(response.text));
      }
    } catch (error: any) {
      console.error("Analysis Error:", error);
      
      if (error?.message?.includes("API_KEY")) {
        setErrorMsg("System Configuration Error: API Key not found. Please check Vercel environment variables.");
      } else {
        setErrorMsg("The AI service is currently busy. Please try again in a moment.");
      }
      
      setResult({
        summary: "Analysis Error",
        aiSolution: "We couldn't generate a report right now. Please ensure your API_KEY is correctly set in Vercel Settings.",
        estimatedROI: "N/A",
        implementationEase: "N/A"
      });
    } finally {
      setLoading(false);
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
              placeholder="e.g., Calling back customers takes all evening..."
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
              ) : 'Check ROI'}
            </button>
          </div>

          {errorMsg && (
            <p className="text-red-500 text-xs font-sans mb-6 text-center animate-pulse">{errorMsg}</p>
          )}

          {result && (
            <div className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="p-8 bg-background/50 rounded-[2rem] border border-primary/5">
                <h4 className="text-[10px] font-sans font-bold text-accent uppercase tracking-widest mb-4">Solution</h4>
                <p className="text-primary font-bold mb-3 font-heading text-lg">{result.summary}</p>
                <p className="text-slateText text-sm leading-relaxed">{result.aiSolution}</p>
              </div>
              <div className="grid grid-rows-2 gap-4">
                <div className="p-8 bg-brand text-white rounded-[2rem] shadow-md">
                  <h4 className="text-[10px] font-sans font-bold text-white/60 uppercase tracking-widest mb-1">Impact</h4>
                  <p className="text-3xl font-heading font-bold tracking-tight">{result.estimatedROI}</p>
                </div>
                <div className="p-8 bg-accent text-white rounded-[2rem] shadow-md">
                  <h4 className="text-[10px] font-sans font-bold text-white/60 uppercase tracking-widest mb-1">Setup Speed</h4>
                  <p className="text-2xl font-heading font-bold tracking-tight uppercase">{result.implementationEase}</p>
                </div>
              </div>
            </div>
          )}
          
          <div className="mt-8 text-center">
            <p className="text-[9px] text-slateText/40 uppercase tracking-widest">
              Powered by Vayuk Intelligence Engine • Optimized with Gemini 3 Pro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPointAnalyzer;