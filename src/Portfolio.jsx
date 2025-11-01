import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Globe, Sparkles, ExternalLink, Code2, Brain, Boxes, Cog, Rocket, Smartphone, Terminal, Bot, Database } from 'lucide-react'

const PROFILE = {
  name: 'Dennis Cheng',
  title: 'System Analyst · iOS Developer · Prompt Engineer',
  location: 'Manchester, United Kingdom',
  tagline: 'Building reliable apps, AI automations, and CI/CD that ship fast and scale gracefully.',
  summary:
    'Experienced System Analyst with 10+ years across system design, mobile & backend, micro-services, automation, DevOps, AI workflow, NLP and Prompt Engineering. Proven track record in analyzing business requirements, optimizing system performance, and leading development teams. Specialized in CI/CD, API design, cloud architecture, and chatbot development using Python, LangChain, Swift, Docker, and Jenkins.',
  links: {
    linkedin: 'https://www.linkedin.com/in/dennis-cheng-49628222/',
    github: 'https://github.com/bbqdennis',
    email: 'mailto:bbqdennis@yahoo.com.hk',
  },
}

const SKILLS = {
  Programming: ['Python', 'SwiftUI', 'Swift', 'Objective-C', 'Shell Script', 'SQL', 'PHP', 'Dart', 'Flutter'],
  'DevOps & Automation': ['Jenkins', 'Docker', 'CI/CD Pipelines', 'JIRA', 'Fastlane', 'GitHub', 'n8n'],
  'Cloud & Database': ['AWS', 'Firebase', 'SQL Server', 'Oracle', 'VectorDB'],
  'System Architecture': ['Micro-services', 'API Design', 'AI Automation', 'NLP'],
  'Development Practices': ['Agile (Scrum)', 'Test-Driven Development (TDD)', 'System Optimization'],
}

const PROJECTS = [
  { title: 'Tarot insights — Ask your question with Tarot Master', href: 'https://tarot-insight-eta.vercel.app', description: 'Generative AI web app offering tarot-style insights with a clean, responsive UI.', tags: ['Next.js', 'Vercel', 'AI', 'UX'], icon: <Sparkles className='h-5 w-5' /> },
  { title: 'MSN Chat Viewer — View your MSN chat history', href: 'https://friendschatbot.netlify.app', description: 'Nostalgic utility to parse and browse old MSN chat logs right in the browser.', tags: ['Netlify', 'Parser', 'Frontend'], icon: <Terminal className='h-5 w-5' /> },
  { title: 'Mum All Known — Knowledge for the mum about the baby birth', href: 'https://mumallknown.netlify.app', description: 'Curated knowledge base for mums, focused on pregnancy and baby birth topics.', tags: ['Content', 'Search', 'Healthcare'], icon: <Database className='h-5 w-5' /> },
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

export default function Portfolio() {
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
                <h1 className='text-3xl md:text-5xl font-bold tracking-tight leading-tight'>Hi, I'm Dennis — I design systems, craft iOS apps, and automate with AI.</h1>
                <p className='mt-4 text-neutral-600 text-base md:text-lg'>{PROFILE.tagline}</p>
                <div className='flex flex-wrap items-center gap-3 mt-6'>
                  <Pill><MapPin className='h-3.5 w-3.5 mr-1' /> {PROFILE.location}</Pill>
                  <Pill>iOS · Flutter · Python · LangChain</Pill>
                  <Pill>CI/CD · Docker · Jenkins</Pill>
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
      <Section id='about' title='About' icon={<Brain className='h-5 w-5' />} description='System Analyst with hands-on iOS & Flutter delivery, plus production-grade AI workflows.'>
        <div className='grid md:grid-cols-3 gap-6'>
          {[
            { icon: <Code2 className='h-5 w-5' />, title: 'What I Do', points: ['Architect micro-services & APIs for real-world products.', 'Ship iOS apps (Swift/SwiftUI/Objective‑C) and Flutter apps.', 'Build AI automations, chatbots, and NLP pipes (Python, LangChain).', 'Set up CI/CD with Jenkins, Fastlane, Docker & GitHub Actions.']},
            { icon: <Boxes className='h-5 w-5' />, title: 'How I Work', points: ['Translate business goals into technical plans & milestones.', 'Lead by prototypes, iterate with feedback, measure with metrics.', 'Pragmatic TDD, automation-first mindset, and clean releases.', 'Coach teams on best practices & developer experience.']},
            { icon: <Rocket className='h-5 w-5' />, title: 'What I’m After', points: ['Senior/Lead roles in iOS, Mobile, or Platform Engineering.', 'Product teams that value velocity, reliability, and craft.', 'Opportunities to blend mobile, backend, and ML/AI automation.']},
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
                  <a href={p.href} target='_blank' rel='noreferrer' className='inline-flex items-center text-sm font-medium underline underline-offset-4'>
                    <ExternalLink className='h-4 w-4 mr-2' /> Visit project
                  </a>
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
          </div>
        </div>
      </footer>
    </div>
  )
}
