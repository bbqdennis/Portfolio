import React from 'react'
import { ArrowLeft } from 'lucide-react'
import LiveTranslatorApp from './App'
import './embedded.css'

export default function EmbeddedPage({ onNavigate }) {
  return (
    <div className='livetranslator-page min-h-screen'>
      <header className='sticky top-0 z-40 border-b border-slate-800 bg-slate-950/80 backdrop-blur'>
        <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-3'>
          <button
            type='button'
            onClick={() => onNavigate?.('/')}
            className='inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/40 px-3 py-2 text-sm text-slate-200 hover:bg-slate-900'
          >
            <ArrowLeft className='h-4 w-4' />
            Back to portfolio
          </button>
          <a
            href='#'
            onClick={(event) => {
              event.preventDefault()
              onNavigate?.('/experience')
            }}
            className='text-sm text-slate-300 hover:text-white'
          >
            Experience
          </a>
        </div>
      </header>

      <LiveTranslatorApp />
    </div>
  )
}

