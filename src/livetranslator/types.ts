
export enum WorkflowStep {
  IDLE = 'IDLE',
  LISTENING = 'LISTENING',
  SEGMENTING = 'SEGMENTING',
  TRANSLATING = 'TRANSLATING',
  SPEAKING = 'SPEAKING',
  SAVING = 'SAVING'
}

export interface Segment {
  id: string;
  originalText: string;
  translatedText: string;
  timestamp: Date;
  status: 'pending' | 'completed' | 'failed';
}

export interface AudioStatus {
  hasHeadphones: boolean;
  isRecording: boolean;
  isPlaying: boolean;
  route: string;
}
