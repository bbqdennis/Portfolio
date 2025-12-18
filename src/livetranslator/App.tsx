
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
  RefreshCcw,
  Languages
} from 'lucide-react';
import FlowDiagram from './components/FlowDiagram';
import DeviceSimulator from './components/DeviceSimulator';
import AudioLogicCard from './components/AudioLogicCard';
import { WorkflowStep, Segment, Language } from './types';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<WorkflowStep>(WorkflowStep.IDLE);
  const [segments, setSegments] = useState<Segment[]>([]);
  const [hasHeadphones, setHasHeadphones] = useState(false);
  const [partialTranscript, setPartialTranscript] = useState("");
  
  // 語言設置：預設根據瀏覽器語言，非中即英
  const [lang, setLang] = useState<Language>(() => {
    const browserLang = navigator.language.toLowerCase();
    return (browserLang.includes('zh') || browserLang.includes('hk') || browserLang.includes('tw')) ? 'zh' : 'en';
  });

  const t = {
    en: {
      title: "LiveTranslator",
      subtitle: "iOS Real-time Translation Technical Flow",
      reset: "Reset",
      launch: "Launch Full Demo",
      archTitle: "Architecture & Data Flow",
      storageTitle: "Persistence Layers",
      keychain: "iOS Keychain",
      keychainDesc: "Securely store Gemini API Key with hardware encryption.",
      userDefaults: "UserDefaults (JSON)",
      userDefaultsDesc: "Stores conversation history and drafts for session recovery.",
      footer: "Built with SwiftUI + MVVM. Showcasing coordination between Apple Speech, Google Gemini, and AVSpeechSynthesizer.",
      langBtn: "Switch to 中文",
      status: "STATUS",
      flow1: "User Speaks",
      flow1Desc: "Capture and real-time recognition",
      flow2: "Pause Detection",
      flow2Desc: "Determine silence to complete sentence",
      flow3: "Cloud Translation",
      flow3Desc: "Gemini multi-semantic conversion",
      flow4: "Auto Play",
      flow4Desc: "Synthesize and output natural voice"
    },
    zh: {
      title: "即時翻譯器",
      subtitle: "iOS 即時翻譯技術流程展示",
      reset: "重設",
      launch: "啟動全流程演示",
      archTitle: "技術架構與數據流向",
      storageTitle: "持久化存儲層",
      keychain: "iOS Keychain",
      keychainDesc: "加密存儲 Gemini API Key，確保密鑰安全不外洩。",
      userDefaults: "UserDefaults (JSON)",
      userDefaultsDesc: "存儲歷史對話記錄與當前草稿，實現 App 重啟恢復。",
      footer: "基於 SwiftUI + MVVM 架構設計。展示 Apple Speech (STT)、Google Gemini (LLM) 與 AVSpeechSynthesizer (TTS) 的協同工作流。",
      langBtn: "切換至 English",
      status: "狀態",
      flow1: "用戶說話",
      flow1Desc: "收音並進行即時辨識",
      flow2: "斷句檢測",
      flow2Desc: "判斷說話停頓完成句子",
      flow3: "雲端翻譯",
      flow3Desc: "Gemini 進行多語意轉換",
      flow4: "自動播放",
      flow4Desc: "合成流利語音並輸出"
    }
  }[lang];

  const startDemo = useCallback(() => {
    if (currentStep !== WorkflowStep.IDLE) return;
    
    setCurrentStep(WorkflowStep.LISTENING);
    setPartialTranscript(lang === 'en' ? "Hello, how are you doing today?" : "你好，你今天過得怎麼樣？");
    
    setTimeout(() => {
      setCurrentStep(WorkflowStep.SEGMENTING);
    }, 2000);

    setTimeout(() => {
      setCurrentStep(WorkflowStep.TRANSLATING);
    }, 4000);

    setTimeout(() => {
      const newSegment: Segment = {
        id: Math.random().toString(36).substr(2, 9),
        originalText: lang === 'en' ? "Hello, how are you doing today?" : "你好，你今天過得怎麼樣？",
        translatedText: lang === 'en' ? "你好，你今天過得怎麼樣？" : "Hello, how are you doing today?",
        timestamp: new Date(),
        status: 'completed'
      };
      setSegments(prev => [newSegment, ...prev]);
      setPartialTranscript("");
      setCurrentStep(WorkflowStep.SPEAKING);
    }, 6500);

    setTimeout(() => {
      setCurrentStep(WorkflowStep.IDLE);
    }, 10000);
  }, [currentStep, lang]);

  const resetDemo = () => {
    setCurrentStep(WorkflowStep.IDLE);
    setPartialTranscript("");
    setSegments([]);
  };

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'zh' : 'en');
  };

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center">
      <header className="w-full max-w-6xl flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            {t.title}
          </h1>
          <p className="text-slate-400 text-sm">{t.subtitle}</p>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={toggleLang}
            className="px-4 py-2 text-sm text-blue-300 hover:text-white border border-blue-900/30 bg-blue-900/10 rounded-lg transition-colors flex items-center gap-2"
          >
            <Languages size={16} />
            {t.langBtn}
          </button>
          <button 
            onClick={resetDemo}
            className="px-4 py-2 text-sm text-slate-300 hover:text-white border border-slate-700 rounded-lg transition-colors flex items-center gap-2"
          >
            <RefreshCcw size={16} />
            {t.reset}
          </button>
          <button 
            onClick={startDemo}
            disabled={currentStep !== WorkflowStep.IDLE}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-semibold flex items-center gap-2 transition-all transform active:scale-95 shadow-lg shadow-blue-500/20"
          >
            <Play size={18} fill="currentColor" />
            {t.launch}
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
                {t.archTitle}
              </h2>
              <div className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-[10px] text-slate-400 font-mono">
                {t.status}: {currentStep}
              </div>
            </div>
            <FlowDiagram currentStep={currentStep} lang={lang} t={t} />
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AudioLogicCard 
              hasHeadphones={hasHeadphones} 
              setHasHeadphones={setHasHeadphones}
              currentStep={currentStep}
              lang={lang}
            />
            <div className="glass rounded-3xl p-8 border-white/5">
              <h3 className="font-semibold mb-6 flex items-center gap-2">
                <HardDrive className="text-emerald-400" size={18} />
                {t.storageTitle}
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-800/40 rounded-2xl border border-slate-700/50 group hover:border-blue-500/50 transition-colors">
                  <div className="font-bold text-slate-200 text-sm">{t.keychain}</div>
                  <div className="text-slate-400 text-xs mt-1">{t.keychainDesc}</div>
                </div>
                <div className="p-4 bg-slate-800/40 rounded-2xl border border-slate-700/50 group hover:border-indigo-500/50 transition-colors">
                  <div className="font-bold text-slate-200 text-sm">{t.userDefaults}</div>
                  <div className="text-slate-400 text-xs mt-1">{t.userDefaultsDesc}</div>
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
            lang={lang}
          />
        </div>
      </main>

      <footer className="mt-16 py-8 border-t border-slate-800 w-full text-slate-500 text-xs text-center max-w-4xl">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
};

export default App;
