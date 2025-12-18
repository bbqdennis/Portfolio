
import React from 'react';
import { Headphones, Speaker, RefreshCw, AlertCircle } from 'lucide-react';
import { WorkflowStep, Language } from '../types';

interface Props {
  hasHeadphones: boolean;
  setHasHeadphones: (v: boolean) => void;
  currentStep: WorkflowStep;
  lang: Language;
}

const AudioLogicCard: React.FC<Props> = ({ hasHeadphones, setHasHeadphones, currentStep, lang }) => {
  const isPlaying = currentStep === WorkflowStep.SPEAKING;
  
  const content = {
    en: {
      title: "Audio Feedback Logic",
      sub: "Automatic Route Management",
      hp: "Headphones",
      sp: "Speaker",
      stt: "STT Status",
      sttSub: "Speech Recognition Engine",
      paused: "PAUSED",
      active: "ACTIVE",
      descPause: "STT is paused to avoid feedback (speaker loop).",
      descHp: "External audio detected: Simultaneous record/play enabled.",
      descListen: "Listening for voice...",
      note: "iOS audio session is set to .playAndRecord with specialized options for echo cancellation."
    },
    zh: {
      title: "音頻反饋邏輯",
      sub: "自動音訊路由管理",
      hp: "耳機模式",
      sp: "揚聲器模式",
      stt: "STT 狀態",
      sttSub: "語音辨識引擎",
      paused: "暫停錄音",
      active: "運作中",
      descPause: "已暫停錄音以避免揚聲器產生的回聲干擾。",
      descHp: "檢測到外部音訊設備：支持同時錄音與播放。",
      descListen: "正在監聽用戶聲音...",
      note: "iOS 音訊會話設置為 .playAndRecord，具備特定的回聲消除選項。"
    }
  }[lang];

  return (
    <div className="glass rounded-2xl p-6 relative overflow-hidden">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="font-semibold flex items-center gap-2">
            <RefreshCw className="text-blue-400" size={18} />
            {content.title}
          </h3>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">{content.sub}</p>
        </div>
        <button 
          onClick={() => setHasHeadphones(!hasHeadphones)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs transition-all ${hasHeadphones ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-400'}`}
        >
          {hasHeadphones ? <Headphones size={14} /> : <Speaker size={14} />}
          {hasHeadphones ? content.hp : content.sp}
        </button>
      </div>

      <div className="space-y-4">
        <div className={`p-4 rounded-xl border transition-all duration-300 ${isPlaying && !hasHeadphones ? 'bg-red-900/20 border-red-500/50' : 'bg-slate-800/50 border-slate-700'}`}>
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isPlaying ? 'bg-blue-600 animate-pulse' : 'bg-slate-700'}`}>
              <Speaker size={18} />
            </div>
            <div>
              <div className="text-sm font-bold">{content.stt}</div>
              <div className="text-[10px] text-slate-400">{content.sttSub}</div>
            </div>
            <div className="ml-auto">
              {isPlaying && !hasHeadphones ? (
                <span className="text-[10px] font-bold text-red-400 px-2 py-1 bg-red-400/10 rounded border border-red-400/20">{content.paused}</span>
              ) : (
                <span className="text-[10px] font-bold text-emerald-400 px-2 py-1 bg-emerald-400/10 rounded border border-emerald-400/20">{content.active}</span>
              )}
            </div>
          </div>
          <p className="text-[11px] text-slate-400 italic">
            {isPlaying && !hasHeadphones 
              ? content.descPause 
              : hasHeadphones ? content.descHp : content.descListen}
          </p>
        </div>

        <div className="bg-blue-900/10 border border-blue-500/20 p-3 rounded-xl flex items-start gap-3">
          <AlertCircle className="text-blue-400 shrink-0 mt-0.5" size={14} />
          <div className="text-[10px] text-slate-300 leading-relaxed">
            <span className="font-bold text-blue-300">{lang === 'en' ? 'Technical Note:' : '技術提示：'}</span> {content.note}
          </div>
        </div>
      </div>

      {isPlaying && (
        <div className="absolute bottom-0 left-0 w-full h-1 flex items-end gap-[1px]">
          {[...Array(40)].map((_, i) => (
            <div 
              key={i} 
              className="flex-1 bg-blue-500 transition-all duration-300" 
              style={{ height: `${Math.random() * 100}%` }} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AudioLogicCard;
