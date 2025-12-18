
import React, { useState, useEffect, useCallback } from 'react';
import { 
  Mic, 
  Settings, 
  History, 
  Plus, 
  ArrowRightLeft, 
  Cpu, 
  Globe, 
  Volume2, 
  HardDrive,
  Headphones,
  Speaker,
  Play,
  RefreshCcw
} from 'lucide-react';
import FlowDiagram from './components/FlowDiagram';
import DeviceSimulator from './components/DeviceSimulator';
import AudioLogicCard from './components/AudioLogicCard';
import { WorkflowStep, Segment } from './types';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<WorkflowStep>(WorkflowStep.IDLE);
  const [segments, setSegments] = useState<Segment[]>([]);
  const [hasHeadphones, setHasHeadphones] = useState(false);
  const [partialTranscript, setPartialTranscript] = useState("");

  const startDemo = useCallback(() => {
    if (currentStep !== WorkflowStep.IDLE) return;
    
    // 1. 用戶開始說話 (Native STT Listening)
    setCurrentStep(WorkflowStep.LISTENING);
    setPartialTranscript("Hello, how are you doing today?");
    
    // 2. 檢測到停頓 (Segmentation / VAD)
    setTimeout(() => {
      setCurrentStep(WorkflowStep.SEGMENTING);
    }, 2000);

    // 3. 發送到 Gemini 翻譯 (Cloud Translation)
    setTimeout(() => {
      setCurrentStep(WorkflowStep.TRANSLATING);
    }, 4000);

    // 4. TTS 轉換並自動播放 (Native TTS Speaking)
    setTimeout(() => {
      const newSegment: Segment = {
        id: Math.random().toString(36).substr(2, 9),
        originalText: "Hello, how are you doing today?",
        translatedText: "你好，你今天過得怎麼樣？",
        timestamp: new Date(),
        status: 'completed'
      };
      setSegments(prev => [newSegment, ...prev]);
      setPartialTranscript("");
      setCurrentStep(WorkflowStep.SPEAKING);
    }, 6500);

    // 回到閒置或繼續監聽
    setTimeout(() => {
      setCurrentStep(WorkflowStep.IDLE);
    }, 10000);
  }, [currentStep]);

  const resetDemo = () => {
    setCurrentStep(WorkflowStep.IDLE);
    setPartialTranscript("");
    setSegments([]);
  };

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center">
      <header className="w-full max-w-6xl flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            LiveTranslator
          </h1>
          <p className="text-slate-400 text-sm">iOS Real-time Translation Technical Flow</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={resetDemo}
            className="px-4 py-2 text-sm text-slate-300 hover:text-white border border-slate-700 rounded-lg transition-colors flex items-center gap-2"
          >
            <RefreshCcw size={16} />
            Reset
          </button>
          <button 
            onClick={startDemo}
            disabled={currentStep !== WorkflowStep.IDLE}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-semibold flex items-center gap-2 transition-all transform active:scale-95 shadow-lg shadow-blue-500/20"
          >
            <Play size={18} fill="currentColor" />
            啟動全流程演示
          </button>
        </div>
      </header>

      <main className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 flex flex-col gap-6">
          <section className="glass rounded-3xl p-8 overflow-hidden min-h-[500px] relative border-white/5">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-xl font-semibold flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Cpu className="text-blue-400" size={18} />
                </div>
                技術架構與數據流向
              </h2>
              <div className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[10px] text-slate-400 font-mono">
                STATUS: {currentStep}
              </div>
            </div>
            <FlowDiagram currentStep={currentStep} />
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AudioLogicCard 
              hasHeadphones={hasHeadphones} 
              setHasHeadphones={setHasHeadphones}
              currentStep={currentStep}
            />
            <div className="glass rounded-3xl p-8 border-white/5">
              <h3 className="font-semibold mb-6 flex items-center gap-2">
                <HardDrive className="text-emerald-400" size={18} />
                持久化存儲層
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-800/40 rounded-2xl border border-slate-700/50 group hover:border-blue-500/50 transition-colors">
                  <div className="font-bold text-slate-200 text-sm">iOS Keychain</div>
                  <div className="text-slate-400 text-xs mt-1">加密存儲 Gemini API Key，確保密鑰安全不外洩。</div>
                </div>
                <div className="p-4 bg-slate-800/40 rounded-2xl border border-slate-700/50 group hover:border-indigo-500/50 transition-colors">
                  <div className="font-bold text-slate-200 text-sm">UserDefaults (JSON)</div>
                  <div className="text-slate-400 text-xs mt-1">存儲歷史對話記錄與當前草稿，實現 App 重啟恢復。</div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="lg:col-span-4 flex flex-col items-center">
          <DeviceSimulator 
            currentStep={currentStep} 
            segments={segments} 
            partialTranscript={partialTranscript}
          />
        </div>
      </main>

      <footer className="mt-16 py-8 border-t border-slate-800 w-full text-slate-500 text-xs text-center max-w-4xl">
        <p>基於 SwiftUI + MVVM 架構設計。展示 Apple Speech (STT)、Google Gemini (LLM) 與 AVSpeechSynthesizer (TTS) 的協同工作流。</p>
      </footer>
    </div>
  );
};

export default App;
