import React, { useCallback, useEffect, useState } from 'react'
import Portfolio from './Portfolio.jsx'
import ExperienceTimeline from './ExperienceTimeline.jsx'
import LiveTranslatorPage from './livetranslator/EmbeddedPage.jsx'

const DEFAULT_ROUTE = '/'
const ROUTES = new Set([DEFAULT_ROUTE, '/experience', '/livetranslator'])

const normalizePath = () => (ROUTES.has(window.location.pathname) ? window.location.pathname : DEFAULT_ROUTE)

export default function App() {
  const [path, setPath] = useState(normalizePath)

  useEffect(() => {
    const handlePopState = () => setPath(normalizePath())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigate = useCallback((nextPath) => {
    const target = ROUTES.has(nextPath) ? nextPath : DEFAULT_ROUTE
    if (target === window.location.pathname) {
      setPath(target)
      return
    }
    window.history.pushState({}, '', target)
    setPath(target)
  }, [])

  if (path === '/experience') {
    return <ExperienceTimeline onNavigate={navigate} />
  }

  if (path === '/livetranslator') {
    return <LiveTranslatorPage onNavigate={navigate} />
  }

  return <Portfolio onNavigate={navigate} />
}
