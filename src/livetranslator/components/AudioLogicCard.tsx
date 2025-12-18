
import React from 'react';
import { Headphones, Speaker, RefreshCw, AlertCircle } from 'lucide-react';
import { WorkflowStep } from '../types';

interface Props {
  hasHeadphones: boolean;
  setHasHeadphones: (v: boolean) => void;
  currentStep: WorkflowStep;
}

const AudioLogicCard: React.FC<Props> = ({ hasHeadphones, setHasHeadphones, currentStep }) => {
  const isPlaying = currentStep === WorkflowStep.SPEAKING;
  
  return (
    <div className="glass rounded-2xl p-6 relative overflow-hidden">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="font-semibold flex items-center gap-2">
            <RefreshCw className="text-blue-400" size={18} />
            Audio Feedback Logic
          </h3>
          <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Automatic Route Management</p>
        </div>
        <button 
          onClick={() => setHasHeadphones(!hasHeadphones)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs transition-all ${hasHeadphones ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-400'}`}
        >
          {hasHeadphones ? <Headphones size={14} /> : <Speaker size={14} />}
          {hasHeadphones ? 'Headphones' : 'Built-in Speaker'}
        </button>
      </div>

      <div className="space-y-4">
        <div className={`p-4 rounded-xl border transition-all duration-300 ${isPlaying && !hasHeadphones ? 'bg-red-900/20 border-red-500/50' : 'bg-slate-800/50 border-slate-700'}`}>
          <div className="flex items-center gap-3 mb-2">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isPlaying ? 'bg-blue-600 animate-pulse' : 'bg-slate-700'}`}>
              <Speaker size={18} />
            </div>
            <div>
              <div className="text-sm font-bold">STT Status</div>
              <div className="text-[10px] text-slate-400">Speech Recognition Engine</div>
            </div>
            <div className="ml-auto">
              {isPlaying && !hasHeadphones ? (
                <span className="text-[10px] font-bold text-red-400 px-2 py-1 bg-red-400/10 rounded border border-red-400/20">PAUSED</span>
              ) : (
                <span className="text-[10px] font-bold text-emerald-400 px-2 py-1 bg-emerald-400/10 rounded border border-emerald-400/20">ACTIVE</span>
              )}
            </div>
          </div>
          <p className="text-[11px] text-slate-400 italic">
            {isPlaying && !hasHeadphones 
              ? "STT is paused to avoid feedback (the app's speaker loop)." 
              : hasHeadphones ? "External audio detected: Can record and play simultaneously." : "Listening for voice..."}
          </p>
        </div>

        <div className="bg-blue-900/10 border border-blue-500/20 p-3 rounded-xl flex items-start gap-3">
          <AlertCircle className="text-blue-400 shrink-0 mt-0.5" size={14} />
          <div className="text-[10px] text-slate-300 leading-relaxed">
            <span className="font-bold text-blue-300">Technical Note:</span> iOS audio session is set to <code className="bg-slate-800 px-1 rounded">.playAndRecord</code> with options to mix with others or default to speaker when appropriate.
          </div>
        </div>
      </div>

      {/* Animated waves if playing */}
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
