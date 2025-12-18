
import React from 'react';
import { WorkflowStep, Language } from '../types';
import { 
  Mic, 
  Cpu, 
  Globe, 
  Volume2, 
} from 'lucide-react';

interface Props {
  currentStep: WorkflowStep;
  lang: Language;
  t: any;
}

const Node: React.FC<{ 
  active: boolean; 
  icon: React.ReactNode; 
  label: string; 
  sub: string;
  color: string;
  isCloud?: boolean;
}> = ({ active, icon, label, sub, color, isCloud }) => (
  <div className={`relative flex flex-col items-center transition-all duration-500 z-10 ${active ? 'scale-110' : 'opacity-40 grayscale'}`}>
    <div className={`w-20 h-20 rounded-[24px] flex flex-col items-center justify-center shadow-2xl border-2 transition-all duration-300 ${active ? color : 'bg-slate-800 border-slate-700'}`}>
      {icon}
      {isCloud && active && <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full animate-ping" />}
    </div>
    <div className="mt-4 text-center">
      <div className={`text-sm font-bold transition-colors ${active ? 'text-white' : 'text-slate-500'}`}>{label}</div>
      <div className="text-[10px] uppercase tracking-tighter text-slate-400 font-medium">{sub}</div>
    </div>
  </div>
);

const FlowDiagram: React.FC<Props> = ({ currentStep, lang, t }) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center py-8 relative">
      <div className="absolute top-1/2 left-10 right-10 h-[2px] bg-slate-800 -translate-y-12 z-0" />

      <div className="w-full flex items-center justify-between px-4 md:px-12 relative z-10">
        <Node 
          active={currentStep === WorkflowStep.LISTENING || currentStep === WorkflowStep.SEGMENTING} 
          icon={<Mic className={currentStep === WorkflowStep.LISTENING ? 'text-white animate-bounce' : 'text-slate-400'} size={32} />} 
          label="Native STT" 
          sub={lang === 'en' ? "Apple Speech Recognition" : "iOS 語音辨識"} 
          color="bg-blue-600 border-blue-400 shadow-blue-500/20"
        />

        <Node 
          active={currentStep === WorkflowStep.SEGMENTING} 
          icon={<Cpu className={currentStep === WorkflowStep.SEGMENTING ? 'text-white animate-spin-slow' : 'text-slate-400'} size={32} />} 
          label="Silence VAD" 
          sub={lang === 'en' ? "Segment Logic" : "自動斷句邏輯"} 
          color="bg-indigo-600 border-indigo-400 shadow-indigo-500/20"
        />

        <Node 
          active={currentStep === WorkflowStep.TRANSLATING} 
          icon={<Globe className={currentStep === WorkflowStep.TRANSLATING ? 'text-white animate-pulse' : 'text-slate-400'} size={32} />} 
          label="Gemini API" 
          sub={lang === 'en' ? "LLM Translation" : "LLM 智慧翻譯"} 
          color="bg-violet-600 border-violet-400 shadow-violet-500/20"
          isCloud
        />

        <Node 
          active={currentStep === WorkflowStep.SPEAKING} 
          icon={<Volume2 className={currentStep === WorkflowStep.SPEAKING ? 'text-white animate-pulse' : 'text-slate-400'} size={32} />} 
          label="Native TTS" 
          sub={lang === 'en' ? "AVSpeechSynthesizer" : "iOS 語音合成"} 
          color="bg-emerald-600 border-emerald-400 shadow-emerald-500/20"
        />
      </div>

      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {currentStep !== WorkflowStep.IDLE && (
          <circle r="4" fill="#60a5fa" filter="url(#glow)">
            <animateMotion 
              dur="1.5s" 
              repeatCount="indefinite"
              path={
                currentStep === WorkflowStep.LISTENING ? "M 80,180 Q 120,180 150,180" :
                currentStep === WorkflowStep.SEGMENTING ? "M 150,180 Q 250,180 350,180" :
                currentStep === WorkflowStep.TRANSLATING ? "M 350,180 Q 450,150 550,180 Q 450,210 350,180" :
                currentStep === WorkflowStep.SPEAKING ? "M 550,180 Q 650,180 750,180" : ""
              }
            />
          </circle>
        )}
      </svg>

      <div className="mt-16 w-full max-w-4xl grid grid-cols-4 gap-4 px-4 text-center">
        <div className={`transition-all duration-300 ${currentStep === WorkflowStep.LISTENING ? 'opacity-100 scale-105' : 'opacity-30'}`}>
          <div className="h-1 bg-blue-500 mb-2 rounded-full" />
          <p className="text-[11px] font-bold text-blue-400">{t.flow1}</p>
          <p className="text-[10px] text-slate-400">{t.flow1Desc}</p>
        </div>
        <div className={`transition-all duration-300 ${currentStep === WorkflowStep.SEGMENTING ? 'opacity-100 scale-105' : 'opacity-30'}`}>
          <div className="h-1 bg-indigo-500 mb-2 rounded-full" />
          <p className="text-[11px] font-bold text-indigo-400">{t.flow2}</p>
          <p className="text-[10px] text-slate-400">{t.flow2Desc}</p>
        </div>
        <div className={`transition-all duration-300 ${currentStep === WorkflowStep.TRANSLATING ? 'opacity-100 scale-105' : 'opacity-30'}`}>
          <div className="h-1 bg-violet-500 mb-2 rounded-full" />
          <p className="text-[11px] font-bold text-violet-400">{t.flow3}</p>
          <p className="text-[10px] text-slate-400">{t.flow3Desc}</p>
        </div>
        <div className={`transition-all duration-300 ${currentStep === WorkflowStep.SPEAKING ? 'opacity-100 scale-105' : 'opacity-30'}`}>
          <div className="h-1 bg-emerald-500 mb-2 rounded-full" />
          <p className="text-[11px] font-bold text-emerald-400">{t.flow4}</p>
          <p className="text-[10px] text-slate-400">{t.flow4Desc}</p>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FlowDiagram;
