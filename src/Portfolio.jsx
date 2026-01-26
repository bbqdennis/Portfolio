import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Globe, Sparkles, ExternalLink, Code2, Brain, Boxes, Cog, Rocket, Smartphone, Terminal, Bot, Database, Play } from 'lucide-react'

const PROFILE = {
  name: 'Dennis Cheng',
  title: 'Applied AI & Automation System Designer',
  location: 'Manchester, United Kingdom',
  tagline: 'I design AI-powered automation and orchestration systems that transform unstructured inputs into structured decisions and automated actions.',
  summary:
    'Applied AI & Automation System Designer with over a decade of engineering experience.\nSpecialising in recent years in designing and delivering AI-powered automation and orchestration systems across telecom, mobile platforms, and internal operations.\n\nFocused on transforming unstructured inputs into structured decisions and automated actions using LLMs, Python, and workflow automation.',
  links: {
    linkedin: 'https://www.linkedin.com/in/dennis-cheng-49628222/',
    github: 'https://github.com/bbqdennis',
    email: 'mailto:bbqdennis@yahoo.com.hk',
  },
}

const SKILLS = {
  Programming: ['Python', 'SQL', 'Shell Script'],
  'DevOps & Automation': ['Docker', 'CI/CD Pipelines', 'GitHub', 'n8n', 'Jenkins'],
  'Cloud & Database': ['AWS', 'SQL', 'Vector Databases'],
  'System Architecture': ['AI Orchestration', 'Decision Automation', 'Workflow Automation', 'API & System Design'],
  'Development Practices': ['System Thinking', 'Automation-First Development', 'Operational Optimisation'],
}

const PROJECTS = [
  { title: 'CustomRAG Text Search API — Deterministic Retrieval + Grounded Answering', href: 'https://github.com/bbqdennis/python-fastapi-customrag', description: 'FastAPI service that ingests files into MongoDB Atlas and returns deterministic, auditable search results. LLM answering is constrained to retrieved snippets to reduce hallucinations.', tags: ['Python', 'FastAPI', 'MongoDB Atlas', 'RAG', 'Information Retrieval', 'LLM'], icon: <Database className='h-5 w-5' /> },
  { title: 'Live Translator - Realtime speech translator', href: '/livetranslator', demoVideoHref: 'https://youtube.com/shorts/P4e2XgZsJFc', description: 'Real-time AI-powered speech translation system integrating native audio pipelines with LLM-based STT/TTS, supporting continuous input, Bluetooth routing, and low-latency orchestration.', tags: ['iOS', 'SwiftUI', 'STT', 'TTS', 'Gemini', 'Bluetooth'], icon: <Smartphone className='h-5 w-5' /> },
  { title: 'UK Daily Event — Activities for every family', href: 'https://ukdailyevents.co.uk', description: 'Automated content aggregation and filtering system designed to support daily decision-making for families. Curates the latest family-friendly happenings across the UK so parents can plan daily adventures effortlessly.', tags: ['Next.js', 'Events', 'Family'], icon: <Globe className='h-5 w-5' /> },
  { title: 'Tarot insights — Ask your question with Tarot Master', href: 'https://tarot-insight-eta.vercel.app', description: 'Generative AI web application demonstrating structured prompt design, controlled outputs, and decision-style responses via a clean UI.', tags: ['Next.js', 'Vercel', 'AI', 'UX'], icon: <Sparkles className='h-5 w-5' /> },
  { title: 'Mum All Known — Knowledge for the mum about the baby birth', href: 'https://mumallknown.netlify.app', description: 'Curated knowledge base for mums, focused on pregnancy and baby birth topics.', tags: ['Content', 'Search', 'Healthcare'], icon: <Database className='h-5 w-5' /> },
  { title: 'MSN Chat Viewer — View your MSN chat history', href: 'https://friendschatbot.netlify.app', description: 'Nostalgic utility to parse and browse old MSN chat logs right in the browser.', tags: ['Netlify', 'Parser', 'Frontend'], icon: <Terminal className='h-5 w-5' /> },
]

const GPTS = [
  { title: 'Image Prompt Creator', href: 'https://chatgpt.com/g/g-67d45e5ca4148191b00ff38aba52ddea-image-prompt-creator', description: 'Create perfect image prompts with style, lighting, and composition suggestions.' },
  { title: 'Image Prompt Character', href: 'https://chatgpt.com/g/g-67e97b4be1a48191be2ce31acd63414b-image-prompt-character', description: 'Generate character-based image prompts with detailed appearance and emotion settings.' },
  { title: 'Image Prompt Copier', href: 'https://chatgpt.com/g/g-67e68e37c3108191afd953fd60434c91-image-prompt-copier', description: 'Duplicate and remix existing image prompts with consistent art style.' },
  { title: 'Image To Prompt', href: 'https://chatgpt.com/g/g-67daea0ba34881919c3d114016ffa11e-image-to-prompt', description: 'Analyze an image and output a descriptive prompt that replicates its style.' },
  { title: 'Text Prompt Creator', href: 'https://chatgpt.com/g/g-68126f10287881919daef2294695127d-text-prompt-creator', description: 'Craft detailed text prompts for writing, storytelling, or creative generation.' },
  { title: 'Video Prompt Creator', href: 'https://chatgpt.com/g/g-67eae0a4b8948191b92e2cbf0e677ec9-video-prompt-creator', description: 'Generate cinematic video creation prompts for storytelling or Sora 2 AI.' },
  { title: 'Shorts Video Prompt Creator', href: 'https://chatgpt.com/g/g-69060feb3de881919139fb4ae9986ee7-shorts-video-prompt-creator', description: 'Design creative short-form video prompts for quick and engaging Sora 2 shorts.' },
  { title: 'App Project Creator', href: 'https://chatgpt.com/g/g-6803777073d4819185c5965fd85b22da-app-project-creator', description: 'Create full app project specs and step-by-step implementation instructions.' },
  { title: 'Trading Master', href: 'https://chatgpt.com/g/g-68e37da196b4819198205168f7ee6f71-trading-master', description: 'Analyze market data and generate trading predictions and strategy insights.' },
  { title: 'SwiftUI Master', href: 'https://chatgpt.com/g/g-6751c9a859fc8191a799f4449e3a1f99-swiftui-master', description: 'Write Apple-standard SwiftUI code for professional app development.' },
]

const LINKS = [
  { label: 'LinkedIn', href: PROFILE.links.linkedin, icon: <Linkedin className='h-4 w-4' /> },
  { label: 'GitHub', href: PROFILE.links.github, icon: <Github className='h-4 w-4' /> },
  { label: 'PromptBase', href: 'https://promptbase.com/profile/bbqdennis', icon: <Globe className='h-4 w-4' /> },
  { label: 'Etsy', href: 'https://www.etsy.com/uk/shop/CreateWithHeartShop', icon: <Globe className='h-4 w-4' /> },
  { label: 'RedBubble', href: 'https://www.redbubble.com/people/bbqdennis', icon: <Globe className='h-4 w-4' /> },
  { label: 'YouTube', href: 'https://www.youtube.com/@promptbase_mjgirl', icon: <Globe className='h-4 w-4' /> },
  { label: 'Instagram', href: 'https://www.instagram.com/promptbase_mjgirl', icon: <Globe className='h-4 w-4' /> },
]

const Section = ({ id, title, icon, children, description }) => (
  <section id={id} className='scroll-mt-24'>
    <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
      <div className='flex items-center gap-3 mb-6'>
        <span className='p-2 rounded-2xl bg-muted shadow-sm'>{icon}</span>
        <div>
          <h2 className='text-2xl md:text-3xl font-semibold tracking-tight'>{title}</h2>
          {description && <p className='text-neutral-600 text-sm md:text-base mt-1'>{description}</p>}
        </div>
      </div>
      {children}
    </div>
  </section>
)

const Pill = ({ children }) => (
  <span className='inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm font-medium'>{children}</span>
)

export default function Portfolio({ onNavigate }) {
  return (
    <div className='min-h-screen bg-gradient-to-b from-white via-white to-muted/30 text-foreground'>
      {/* NAVBAR */}
      <header className='sticky top-0 z-40 backdrop-blur bg-white/70 border-b'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <div className='h-9 w-9 rounded-2xl grid place-items-center bg-primary/10'>
              <Sparkles className='h-5 w-5' />
            </div>
            <div className='leading-tight'>
              <div className='font-semibold'>{PROFILE.name}</div>
              <div className='text-xs text-neutral-600'>{PROFILE.title}</div>
            </div>
          </div>
          <nav className='hidden md:flex items-center gap-3'>
            {[['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['GPTs', '#gpts'], ['Links', '#links'], ['Contact', '#contact']].map(([label, href]) => (
              <a key={label} href={href} className='text-sm text-foreground/80 hover:text-foreground transition-colors'>
                {label}
              </a>
            ))}
            <a
              href='/experience'
              className='text-sm text-foreground/80 hover:text-foreground transition-colors'
              onClick={(event) => {
                event.preventDefault()
                onNavigate?.('/experience')
              }}
            >
              Experience
            </a>
            <a href={PROFILE.links.github} target='_blank' rel='noreferrer' className='ml-2 inline-flex items-center rounded-2xl border px-3 py-1.5 text-sm hover:bg-muted'>
              <Github className='h-4 w-4 mr-2' /> Source
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className='relative overflow-hidden'>
        <div className='absolute inset-0 -z-10 opacity-30 pointer-events-none'></div>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20'>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-6'>
              <div className='max-w-3xl'>
                <h1 className='text-3xl md:text-5xl font-bold tracking-tight leading-tight'>Hi, I'm Dennis — I design applied AI & automation systems.</h1>
                <p className='mt-4 text-neutral-600 text-base md:text-lg'>{PROFILE.tagline}</p>
                <div className='flex flex-wrap items-center gap-3 mt-6'>
                  <Pill><MapPin className='h-3.5 w-3.5 mr-1' /> {PROFILE.location}</Pill>
                  <Pill>AI Orchestration · Automation · System Design</Pill>
                  <Pill>LLMs · Python · Workflow Automation</Pill>
                </div>
                <div className='flex gap-3 mt-6'>
                  <a href={PROFILE.links.linkedin} target='_blank' rel='noreferrer' className='inline-flex items-center rounded-2xl bg-primary text-white px-4 py-2 text-sm hover:opacity-90'>
                    <Linkedin className='h-4 w-4 mr-2' /> Connect
                  </a>
                  <a href={PROFILE.links.github} target='_blank' rel='noreferrer' className='inline-flex items-center rounded-2xl bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-800'>
                    <Github className='h-4 w-4 mr-2' /> GitHub
                  </a>
                  <a href={PROFILE.links.email} className='inline-flex items-center rounded-2xl border px-4 py-2 text-sm hover:bg-muted'>
                    <Mail className='h-4 w-4 mr-2' /> Email
                  </a>
                  <a
                    href='/experience'
                    className='inline-flex items-center rounded-2xl border px-4 py-2 text-sm hover:bg-muted'
                    onClick={(event) => {
                      event.preventDefault()
                      onNavigate?.('/experience')
                    }}
                  >
                    <Sparkles className='h-4 w-4 mr-2' /> Experience timeline
                  </a>
                </div>
              </div>
              <div className='w-full md:w-80 rounded-3xl shadow-xl border bg-white p-5'>
                <div className='mb-2 text-lg font-semibold'>Professional Summary</div>
                <div className='text-sm text-neutral-700'>Snapshot</div>
                <p className='mt-3 text-sm leading-relaxed text-foreground/80'>{PROFILE.summary}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id='about' title='About' icon={<Brain className='h-5 w-5' />} description='Applied AI & Automation System Designer focused on production-grade decision automation and system orchestration.'>
        <div className='grid md:grid-cols-3 gap-6'>
          {[
            { icon: <Code2 className='h-5 w-5' />, title: 'What I Do', points: ['Design AI-powered automation and orchestration systems for real-world operations.', 'Transform unstructured inputs (text, documents, requests, data) into structured decisions and automated actions.', 'Architect system workflows across frontend, backend, databases, and internal tools.', 'Build and integrate LLM-based systems using Python and workflow automation.']},
            { icon: <Boxes className='h-5 w-5' />, title: 'How I Work', points: ['Translate business problems into system-level automation designs.', 'Design workflows that prioritise reliability, clarity, and maintainability.', 'Iterate with stakeholders using measurable operational impact.', 'Apply automation-first and system-thinking principles in delivery.']},
            { icon: <Rocket className='h-5 w-5' />, title: 'What I’m After', points: ['Applied AI, Automation, or Internal Tools roles.', 'Teams solving real operational problems with AI and automation.', 'Environments that value system thinking, reliability, and pragmatic AI.']},
          ].map((card) => (
            <div key={card.title} className='rounded-3xl border bg-white p-5'>
              <div className='flex items-center gap-2 text-lg font-semibold'>{card.icon} {card.title}</div>
              <ul className='mt-3 text-sm space-y-2 list-disc pl-5'>
                {card.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* SKILLS */}
      <Section id='skills' title='Technical Skills' icon={<Cog className='h-5 w-5' />}>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {Object.entries(SKILLS).map(([group, items]) => (
            <div key={group} className='rounded-3xl border bg-white p-5'>
              <div className='text-lg font-semibold'>{group}</div>
              <div className='flex flex-wrap gap-2 mt-3'>
                {items.map((skill) => <span key={skill} className='rounded-full bg-muted px-3 py-1 text-sm'>{skill}</span>)}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id='projects' title='Working Samples' icon={<Smartphone className='h-5 w-5' />}>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {PROJECTS.map((p) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              <div className='h-full rounded-3xl border bg-white hover:shadow-lg transition-shadow'>
                <div className='p-5 border-b'>
                  <div className='flex items-center gap-2 text-lg font-semibold'>{p.icon}<span>{p.title}</span></div>
                  <div className='text-sm text-neutral-600'>{p.description}</div>
                </div>
                <div className='p-5'>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {p.tags.map((t) => <span key={t} className='rounded-full border px-2 py-0.5 text-xs'>{t}</span>)}
                  </div>
                  <div className='flex items-center gap-5'>
                    <a
                      href={p.href}
                      target={p.href.startsWith('/') ? undefined : '_blank'}
                      rel={p.href.startsWith('/') ? undefined : 'noreferrer'}
                      className='inline-flex items-center text-sm font-medium underline underline-offset-4'
                      onClick={(event) => {
                        if (!p.href.startsWith('/')) return
                        event.preventDefault()
                        onNavigate?.(p.href)
                      }}
                    >
                      <ExternalLink className='h-4 w-4 mr-2' /> Visit project
                    </a>
                    {p.demoVideoHref && (
                      <a
                        href={p.demoVideoHref}
                        target='_blank'
                        rel='noreferrer'
                        className='inline-flex items-center text-sm font-medium underline underline-offset-4'
                      >
                        <Play className='h-4 w-4 mr-2' /> Demo Video
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* GPTs */}
      <Section id='gpts' title='GPTs' icon={<Bot className='h-5 w-5' />}>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {GPTS.map((g) => (
            <div key={g.title} className='rounded-3xl border bg-white'>
              <div className='p-5 border-b'>
                <div className='text-base font-semibold'>{g.title}</div>
                {g.description && <div className='text-sm text-neutral-600 mt-1'>{g.description}</div>}
              </div>
              <div className='p-5'>
                <a href={g.href} target='_blank' rel='noreferrer' className='inline-flex items-center text-sm font-medium underline underline-offset-4'>
                  <ArrowUpRight className='h-4 w-4 mr-2' /> Open
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* LINKS */}
      <Section id='links' title='Links' icon={<Globe className='h-5 w-5' />}>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {LINKS.map((l) => (
            <a key={l.label} href={l.href} target='_blank' rel='noreferrer' className='rounded-3xl border bg-white hover:shadow-md transition-shadow h-full'>
              <div className='p-4 flex items-center gap-3'>
                <span className='p-2 rounded-xl bg-muted'>{l.icon}</span>
                <span className='font-medium'>{l.label}</span>
              </div>
            </a>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id='contact' title='Contact' icon={<Mail className='h-5 w-5' />}>
        <div className='text-center py-10'>
          <a
            href='mailto:bbqdennis@yahoo.com.hk?subject=Hello%20Dennis&body=Hi%20Dennis%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.'
            className='inline-flex items-center gap-2 text-lg font-medium text-primary underline underline-offset-4'
          >
            <Mail className='h-5 w-5' /> bbqdennis@yahoo.com.hk
          </a>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className='border-t'>
        <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-600 flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
          <div>© {new Date().getFullYear()} {PROFILE.name}. Built with React, Tailwind, and Vite.</div>
          <div className='flex items-center gap-4'>
            <a className='hover:underline' href='#about'>About</a>
            <a className='hover:underline' href='#skills'>Skills</a>
            <a className='hover:underline' href='#projects'>Projects</a>
            <a className='hover:underline' href='#gpts'>GPTs</a>
            <a className='hover:underline' href='#links'>Links</a>
            <a className='hover:underline' href='#contact'>Contact</a>
            <a
              className='hover:underline'
              href='/experience'
              onClick={(event) => {
                event.preventDefault()
                onNavigate?.('/experience')
              }}
            >
              Experience
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
