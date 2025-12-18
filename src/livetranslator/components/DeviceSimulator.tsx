
import React from 'react';
import { WorkflowStep, Segment, Language } from '../types';
import { 
  Mic, 
  Settings, 
  Plus, 
  History, 
  ChevronRight,
  Bluetooth,
  Wifi,
  Battery
} from 'lucide-react';

interface Props {
  currentStep: WorkflowStep;
  segments: Segment[];
  partialTranscript: string;
  lang: Language;
}

const DeviceSimulator: React.FC<Props> = ({ currentStep, segments, partialTranscript, lang }) => {
  const labels = {
    en: {
      appName: "LiveTranslator",
      start: "Tap mic to start translating",
      listening: "LISTENING...",
      segmenting: "DETECTING PAUSE...",
      translating: "TRANSLATING...",
      speaking: "SPEAKING...",
      ready: "READY",
      lang1: "English (US)",
      lang2: "Traditional Chinese"
    },
    zh: {
      appName: "即時翻譯器",
      start: "點擊麥克風開始翻譯",
      listening: "正在監聽...",
      segmenting: "偵測停頓中...",
      translating: "正在翻譯...",
      speaking: "正在播報...",
      ready: "準備就緒",
      lang1: "英文 (美國)",
      lang2: "繁體中文"
    }
  }[lang];

  return (
    <div className="relative w-[320px] h-[640px] bg-slate-900 border-[8px] border-slate-800 rounded-[40px] shadow-2xl overflow-hidden flex flex-col">
      <div className="h-10 w-full px-8 flex justify-between items-center bg-transparent">
        <span className="text-[10px] font-bold text-white">9:41</span>
        <div className="flex gap-1 items-center">
          <Wifi size={10} className="text-white" />
          <Bluetooth size={10} className="text-white" />
          <Battery size={10} className="text-white" />
        </div>
      </div>

      <div className="px-5 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
            <Mic size={16} className="text-white" />
          </div>
          <span className="font-bold text-sm">{labels.appName}</span>
        </div>
        <div className="flex gap-3">
          <History size={18} className="text-slate-400" />
          <Settings size={18} className="text-slate-400" />
        </div>
      </div>

      <div className="px-5 mb-4">
        <div className="bg-slate-800 rounded-xl p-2 flex items-center justify-between">
          <div className="flex-1 text-center text-[10px] font-semibold py-1">{labels.lang1}</div>
          <div className="w-px h-4 bg-slate-700" />
          <div className="flex-1 text-center text-[10px] font-semibold py-1 text-blue-400">{labels.lang2}</div>
        </div>
      </div>

      <div className="flex-1 px-4 overflow-y-auto space-y-4 pb-4 scroll-smooth">
        {segments.map((seg) => (
          <div key={seg.id} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
            <div className="text-[10px] text-slate-500 mb-1">{seg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</div>
            <div className="bg-slate-800/80 rounded-2xl p-3 border border-slate-700">
              <div className="text-sm text-slate-100 mb-2">{seg.originalText}</div>
              <div className="text-sm font-medium text-blue-300 border-t border-slate-700 pt-2">{seg.translatedText}</div>
            </div>
          </div>
        ))}

        {partialTranscript && (
          <div className="bg-blue-900/20 border border-blue-800/50 rounded-2xl p-3">
            <div className="text-sm text-blue-200 animate-pulse">{partialTranscript}</div>
          </div>
        )}

        {segments.length === 0 && !partialTranscript && (
          <div className="h-full flex flex-col items-center justify-center text-slate-500 opacity-50">
            <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4">
              <Mic size={32} />
            </div>
            <p className="text-[10px] text-center">{labels.start}</p>
          </div>
        )}
      </div>

      <div className="p-6 bg-slate-900/90 backdrop-blur-md border-t border-slate-800">
        <div className="flex justify-center items-center gap-8 mb-4">
          <button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
            <Plus size={20} />
          </button>
          
          <div className={`relative ${currentStep === WorkflowStep.LISTENING ? 'pulse-animation' : ''}`}>
            <button className={`w-16 h-16 rounded-full flex items-center justify-center transition-all shadow-lg ${currentStep === WorkflowStep.LISTENING ? 'bg-red-500 scale-110 shadow-red-500/20' : 'bg-blue-600'}`}>
              <Mic size={28} className="text-white" />
            </button>
          </div>

          <button className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="text-[10px] text-center text-slate-500 font-bold tracking-wider">
          {currentStep === WorkflowStep.LISTENING && labels.listening}
          {currentStep === WorkflowStep.SEGMENTING && labels.segmenting}
          {currentStep === WorkflowStep.TRANSLATING && labels.translating}
          {currentStep === WorkflowStep.SPEAKING && labels.speaking}
          {currentStep === WorkflowStep.IDLE && labels.ready}
        </div>
      </div>

      <div className="h-1.5 w-32 bg-slate-800 rounded-full mx-auto mb-2" />
    </div>
  );
};

export default DeviceSimulator;
