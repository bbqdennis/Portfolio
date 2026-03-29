import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Briefcase, Calendar, MapPin, Sparkles, Clock } from 'lucide-react'

const PROFILE = {
  name: 'Dennis Cheng',
  title: 'Applied AI & Automation System Designer',
  location: 'Manchester, United Kingdom',
  email: 'bbqdennis@yahoo.com.hk',
}

const EXPERIENCES = [
  {
    role: 'Full Stack Mobile Engineer (IoT & Live Streaming)',
    company: 'Dote',
    type: 'Contract',
    location: 'United Kingdom · Remote',
    period: 'Feb 2026 — Present',
    highlights: [
      'Leading development of a cross-platform Flutter mobile application focused on real-time IoT device interaction.',
      'Implemented low-latency live video streaming using WebRTC and AWS Kinesis Video Streams for continuous monitoring.',
      'Designed device-to-cloud communication pipelines using MQTT for real-time telemetry (temperature, humidity, device status).',
      'Developed BLE workflows for secure device pairing, provisioning (Wi-Fi setup), and local device control.',
      'Integrated AWS services (Kinesis, Lambda, S3) to build scalable streaming, processing, and storage infrastructure.',
      'Implemented secure communication using key-pair authentication and encryption for device and cloud interactions.',
      'Collaborated with hardware, backend, and product teams to deliver an integrated IoT ecosystem.',
    ],
    stack: ['Flutter', 'WebRTC', 'AWS Kinesis', 'MQTT', 'BLE', 'Lambda', 'S3', 'IoT'],
  },
  {
    role: 'Applied AI & Automation System Engineer',
    company: 'UK Daily Events (ukdailyevents.co.uk)',
    type: 'Self-employed',
    location: 'United Kingdom · Remote',
    period: 'Aug 2024 — Present · 1 yr 5 mos',
    highlights: [
      'Designed end-to-end AI automation and orchestration workflows to aggregate, classify, enrich, and publish event data from multiple sources.',
      'Built n8n-based automation pipelines to process structured and unstructured data with reliability, error handling, and retry mechanisms.',
      'Integrated LLMs to automate content enrichment, summarisation, localisation, and metadata generation within production workflows.',
      'Designed API-driven orchestration layers, including caching and monitoring, to support production stability and scalability.',
      'Automated multi-channel publishing workflows across web platforms, social channels, and internal systems.',
      'Led system design from early prototyping and validation through to recent public production deployment.',
    ],
    stack: ['Python', 'n8n', 'LLMs', 'Automation', 'Orchestration', 'APIs', 'Caching', 'Monitoring'],
  },
  {
    role: 'System Analyst – AI & Automation Systems',
    company: 'Virtual Gaming Technology Limited',
    type: 'Full-time',
    location: 'Hong Kong SAR · On-site',
    period: 'Sep 2023 — Jul 2024 · 11 mos',
    highlights: [
      'Designed and enhanced automation and system workflows across frontend, backend, and CI/CD pipelines.',
      'Applied Python and scripting to streamline development and operational processes.',
      'Contributed to system revamp initiatives, improving stability and delivery efficiency.',
      'Collaborated cross-functionally to define system workflows and automation logic.',
    ],
    stack: ['Python', 'CI/CD', 'Jenkins', 'Automation', 'APIs', 'System Design'],
  },
  {
    role: 'System Analyst – AI Automation & Orchestration',
    company: 'China Mobile Hong Kong',
    type: 'Full-time',
    location: 'Hong Kong SAR',
    period: 'Sep 2019 — Jul 2023 · 3 yrs 11 mos',
    highlights: [
      'Designed end-to-end AI orchestration systems that classify, route, and process customer inputs, operational requests, and internal workflows.',
      'Built LLM-powered chatbots and digital employees to automate customer support, document Q&A, complaint routing, and operational data queries.',
      'Implemented document embedding + vector database + semantic search using Python and LangChain to enable internal knowledge Q&A.',
      'Designed AI workflows to translate natural-language requests into SQL queries, automating operational reporting.',
      'Automated CI/CD, system monitoring, alerting, and packaging workflows for iOS and Android applications.',
      'Reduced manual operational workload significantly through decision automation and AI-driven routing systems.',
    ],
    stack: ['Python', 'ChatGPT / LLMs', 'LangChain', 'Vector DB', 'SQL', 'REST APIs', 'Jenkins', 'CI/CD', 'Automation Pipelines'],
  },
  {
    role: 'iOS Lead',
    company: 'PressLogic',
    type: 'Full-time',
    location: 'Hong Kong SAR',
    period: 'Jul 2017 — Aug 2019 · 2 yrs 2 mos',
    highlights: [
      'Led the iOS squad delivering high-traffic media apps with rigorous testing and release practices.',
      'Drove development workflow improvements, from code reviews to analytics rollouts.',
      'Researched new features and guided team direction across multiple product iterations.',
    ],
    stack: ['Swift', 'Objective-C', 'REST APIs', 'Jenkins', 'Google Analytics'],
  },
  {
    role: 'Senior Software Developer (R&D)',
    company: 'STAKK Factory Limited',
    type: 'Full-time',
    location: 'Hong Kong SAR',
    period: 'Oct 2016 — Jun 2017 · 9 mos',
    highlights: [
      'Built R&D prototypes for video, real-time comms, and immersive mobile experiences.',
      'Partnered with vendors to shape product ideas and proof-of-concepts.',
      'Maintained testing and delivery pipelines for experimental apps.',
    ],
    stack: ['Objective-C', 'OpenGL', 'WebRTC', 'Segment', 'Bitrise'],
  },
  {
    role: 'iOS Developer',
    company: 'Innermost Mobile',
    type: 'Full-time',
    location: 'Hong Kong SAR',
    period: 'Dec 2014 — Feb 2016 · 1 yr 3 mos',
    highlights: [
      'Delivered location-aware and hardware-integrated iOS apps from ideation to launch.',
      'Managed research, QA, and App Store submission workflows.',
      'Designed RESTful APIs and data flows to support new mobile services.',
    ],
    stack: ['Objective-C', 'Bluetooth', 'iBeacon', 'SQLite', 'API Design'],
  },
  {
    role: 'Senior iPhone Developer',
    company: 'Apollo Universal Holdings Limited',
    type: 'Full-time',
    location: 'Hong Kong SAR',
    period: 'Jan 2014 — Oct 2014 · 10 mos',
    highlights: [
      'Shipped iOS products end-to-end, leading a small team through delivery and maintenance.',
      'Oversaw testing, release, and backlog priorities with cross-functional partners.',
      'Implemented RESTful integrations with reliable offline storage.',
    ],
    stack: ['Objective-C', 'REST APIs', 'SQLite', 'Team Leadership', 'Testing'],
  },
  {
    role: 'Programmer',
    company: 'Comtrad Trading Limited',
    type: 'Full-time',
    location: 'Hong Kong SAR',
    period: 'Apr 2011 — Dec 2013 · 2 yrs 9 mos',
    highlights: [
      'Built iOS solutions for SDI Technologies with deep hardware integrations.',
      'Coordinated vendors, releases, and project milestones across global teams.',
      'Implemented sound and video processing features for entertainment experiences.',
    ],
    stack: ['Objective-C', 'MFi', 'Cocos2D', 'Audio/Video', 'Project Management'],
  },
  {
    role: 'Information Technical Officer',
    company: 'Electrical and Mechanical Services Department (EMSD), HKSAR Government',
    type: 'Full-time',
    location: 'Hong Kong SAR',
    period: 'Mar 2011 — Apr 2011 · 2 mos',
    highlights: [
      'Maintained government network and system infrastructure during a critical contract engagement.',
      'Provided rapid user support, imaging, and security updates across departmental sites.',
    ],
    stack: ['Windows 7', 'TCP/IP', 'LAN', 'System Maintenance'],
  },
  {
    role: 'Senior iPhone Developer (Team Lead)',
    company: 'GreenTomato',
    type: 'Full-time',
    location: 'Hong Kong SAR',
    period: 'Sep 2009 — Feb 2011 · 1 yr 6 mos',
    highlights: [
      'Led mobile delivery for clients including Hong Kong Disneyland, Yahoo! HK, and commercial brands.',
      'Directed team planning, releases, and stakeholder communication.',
      'Architected secure payment and authentication flows for high-traffic apps.',
    ],
    stack: ['Objective-C', 'REST APIs', 'XMPP', 'Team Leadership', 'Payments'],
  },
  {
    role: 'Programmer',
    company: 'Maxson Network Limited',
    type: 'Full-time',
    location: 'Hong Kong SAR',
    period: 'Aug 2007 — Dec 2009 · 2 yrs 5 mos',
    highlights: [
      'Developed enterprise software for HKJC, HKIA, and HSBC with cross-platform stacks.',
      'Handled deployment, production support, and infrastructure configuration.',
      'Administered Windows servers, Active Directory, and SQL databases.',
    ],
    stack: ['C#', 'ASP.NET', 'SQL Server', 'Windows Server', 'Shell Scripting'],
  },
  {
    role: 'Computer Technician',
    company: 'Hong Kong Public Central Library',
    type: 'Full-time',
    location: 'Hong Kong SAR',
    period: 'Apr 2006 — Jun 2007 · 1 yr 3 mos',
    highlights: [
      'Delivered frontline IT support across public library branches.',
      'Performed hardware rollouts, software testing, and ongoing maintenance routines.',
    ],
    stack: ['Windows', 'LAN/WAN', 'Ghost Imaging', 'User Support'],
  },
]

const Section = ({ title, icon, children, description }) => (
  <section className='scroll-mt-24'>
    <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
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

export default function ExperienceTimeline({ onNavigate }) {
  return (
    <div className='min-h-screen bg-gradient-to-b from-white via-white to-muted/30 text-foreground'>
      <header className='sticky top-0 z-40 backdrop-blur bg-white/70 border-b'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between'>
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
            <a
              href='/'
              className='text-sm text-foreground/80 hover:text-foreground transition-colors'
              onClick={(event) => {
                event.preventDefault()
                onNavigate?.('/')
              }}
            >
              Portfolio
            </a>
            <a href={`mailto:${PROFILE.email}`} className='text-sm text-foreground/80 hover:text-foreground transition-colors'>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className='relative overflow-hidden'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20'>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className='max-w-3xl space-y-6'>
              <div className='inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-sm font-medium'>
                <Sparkles className='h-4 w-4' /> Experience Timeline
              </div>
              <h1 className='text-3xl md:text-5xl font-bold tracking-tight leading-tight'>17+ years of engineering experience across mobile platforms, systems, and automation.</h1>
              <p className='text-neutral-600 text-base md:text-lg'>
                From hands-on mobile delivery to system analysis, CI/CD, and, in recent years, applied AI automation, this timeline reflects the engineering journey that shaped how I design reliable, production-ready systems.
              </p>
              <div className='flex flex-wrap items-center gap-3'>
                <Pill><MapPin className='h-3.5 w-3.5 mr-1' /> {PROFILE.location}</Pill>
                <Pill><Briefcase className='h-3.5 w-3.5 mr-1' /> Systems · AI Automation · Orchestration · Mobile (Background)</Pill>
                <Pill><Clock className='h-3.5 w-3.5 mr-1' /> 2006 — Present</Pill>
              </div>
              <div className='flex gap-3 pt-2'>
                <a
                  href='/'
                  className='inline-flex items-center rounded-2xl border px-4 py-2 text-sm hover:bg-muted'
                  onClick={(event) => {
                    event.preventDefault()
                    onNavigate?.('/')
                  }}
                >
                  <ArrowLeft className='h-4 w-4 mr-2' /> Back to portfolio
                </a>
                <a href={`mailto:${PROFILE.email}`} className='inline-flex items-center rounded-2xl bg-primary text-white px-4 py-2 text-sm hover:opacity-90'>
                  <Sparkles className='h-4 w-4 mr-2' /> Start a project
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Section
        title='Career Milestones'
        icon={<Briefcase className='h-5 w-5' />}
        description='Key roles, responsibilities, and the focus areas that defined each chapter.'
      >
        <ol className='relative border-s border-neutral-200'>
          {EXPERIENCES.map((exp, index) => (
            <motion.li
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className='ms-6 pb-10 last:pb-0'
            >
              <span className='absolute -left-3 top-3 h-6 w-6 rounded-full border-2 border-primary bg-white grid place-items-center'>
                <Briefcase className='h-3.5 w-3.5 text-primary' />
              </span>
              <div className='rounded-3xl border bg-white shadow-sm p-5 md:p-6'>
                <div className='flex flex-wrap items-baseline gap-x-3 gap-y-1'>
                  <div className='text-lg font-semibold'>{exp.role}</div>
                  <div className='text-sm text-neutral-600'>@ {exp.company}</div>
                </div>
                <div className='mt-2 flex flex-wrap items-center gap-4 text-sm text-neutral-600'>
                  <span className='inline-flex items-center gap-1'>
                    <Calendar className='h-4 w-4' /> {exp.period}
                  </span>
                  <span className='inline-flex items-center gap-1'>
                    <MapPin className='h-4 w-4' /> {exp.location}
                  </span>
                  {exp.type && <span className='inline-flex items-center gap-1'>
                    <Sparkles className='h-4 w-4' /> {exp.type}
                  </span>}
                </div>
                <ul className='mt-4 space-y-2 text-sm text-neutral-700 list-disc pl-5'>
                  {exp.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className='mt-4 flex flex-wrap gap-2'>
                  {exp.stack.map((skill) => (
                    <span key={skill} className='rounded-full bg-muted px-3 py-1 text-xs font-medium'>{skill}</span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </Section>

      <footer className='border-t'>
        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-neutral-600 flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
          <div>© {new Date().getFullYear()} {PROFILE.name}. Experience timeline designed in React & Tailwind.</div>
          <div className='flex items-center gap-4'>
            <a
              className='hover:underline'
              href='/'
              onClick={(event) => {
                event.preventDefault()
                onNavigate?.('/')
              }}
            >
              Portfolio
            </a>
            <a className='hover:underline' href={`mailto:${PROFILE.email}`}>Email</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
