import { Briefcase, MapPin, Calendar, Code2 } from 'lucide-react';

const experiences = [
  {
    id: 'srib',
    org: 'Samsung R&D Institute India (SRIB)',
    orgSub: null,
    role: 'Developer Intern',
    location: 'Bengaluru, India',
    duration: 'May 2026 – July 2026',
    type: 'Industry',
    color: 'from-blue-900/40 to-slate-900',
    accent: 'blue' as const,
    highlights: [
      {
        title: 'AI Campaign Recommendation Assistant',
        points: [
          'Engineered an AI-powered campaign recommendation assistant using LangGraph, SQL, and Amazon Redshift APIs.',
          'Retrieved historical sales, product, and customer data to generate campaign recommendations through an internally hosted LLM.',
        ],
      },
      {
        title: 'Voice-Based Telesales Agent',
        points: [
          'Developed a voice-based telesales agent for Samsung Finance Plus.',
          'Integrated Whisper for speech-to-text, Piper for text-to-speech, Silero VAD for voice activity detection, and Ollama-hosted LLMs for conversational smartphone financing.',
        ],
      },
    ],
    tech: ['LangGraph', 'SQL', 'Amazon Redshift', 'LLMs', 'Whisper', 'Piper', 'Silero VAD', 'Ollama'],
  },
  {
    id: 'prism',
    org: 'Samsung PRISM',
    orgSub: 'Samsung R&D Institute India',
    role: 'Research Collaborator',
    location: 'Bengaluru, India',
    duration: 'May 2025 – January 2026',
    type: 'Research',
    color: 'from-teal-900/40 to-slate-900',
    accent: 'teal' as const,
    highlights: [
      {
        title: 'Speech Processing Research',
        points: [
          'Developed a speech-processing pipeline using Python, Librosa, and PyTorch.',
          'Worked with the AMI corpus containing more than 100 hours of audio.',
          'Extracted acoustic features and trained multiple deep-learning models to distinguish near-field speech from far-field speech.',
        ],
      },
    ],
    tech: ['Python', 'Librosa', 'PyTorch', 'Digital Signal Processing', 'Deep Learning', 'Speech Processing'],
  },
  {
    id: 'wirin',
    org: 'WIRIN – The WIPOD',
    orgSub: 'Collaboration: IISc and Wipro',
    role: 'Project Associate',
    location: 'Bengaluru, India',
    duration: 'April 2024 – December 2024',
    type: 'Industry',
    color: 'from-emerald-900/40 to-slate-900',
    accent: 'emerald' as const,
    highlights: [
      {
        title: 'Frontend Development & Performance',
        points: [
          'Transformed more than 25 design screens into reusable React and Tailwind CSS components.',
          'Integrated Flask APIs and WebSockets for real-time functionality.',
          'Reduced page-load time by 30% through targeted optimizations.',
        ],
      },
    ],
    tech: ['React', 'Tailwind CSS', 'Flask', 'WebSockets'],
  },
];

const accentMap = {
  blue: { text: 'text-blue-400', bg: 'bg-blue-900/30', border: 'border-blue-800/40', dot: 'bg-blue-400' },
  teal: { text: 'text-teal-400', bg: 'bg-teal-900/30', border: 'border-teal-800/40', dot: 'bg-teal-400' },
  emerald: { text: 'text-emerald-400', bg: 'bg-emerald-900/30', border: 'border-emerald-800/40', dot: 'bg-emerald-400' },
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white pt-28 pb-24 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <p className="text-sm text-emerald-400 font-medium tracking-widest uppercase mb-4">Work History</p>
          <h1 className="text-5xl lg:text-6xl font-bold text-white">Experience</h1>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-emerald-900/40 hidden sm:block" aria-hidden="true" />
          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const a = accentMap[exp.accent];
              return (
                <article key={exp.id} className="relative sm:pl-20">
                  <div className="hidden sm:flex absolute left-0 top-6 w-12 h-12 rounded-full bg-slate-950 border-2 border-emerald-800/60 items-center justify-center z-10">
                    <Briefcase className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className={`bg-gradient-to-br ${exp.color} border border-emerald-900/30 rounded-2xl overflow-hidden`}>
                    <div className="p-6 pb-4 border-b border-emerald-900/20">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full bg-slate-800/60 border ${a.border} ${a.text}`}>{exp.type}</span>
                        <span className="text-slate-500 text-xs">#{String(idx + 1).padStart(2, '0')}</span>
                      </div>
                      <h2 className="text-2xl font-bold text-white mb-0.5">{exp.org}</h2>
                      {exp.orgSub && (<p className="text-slate-500 text-sm mb-2">{exp.orgSub}</p>)}
                      <p className={`font-semibold text-lg ${a.text} mb-3`}>{exp.role}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                        <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{exp.location}</span>
                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{exp.duration}</span>
                      </div>
                    </div>
                    <div className="p-6 space-y-6">
                      {exp.highlights.map((h) => (
                        <div key={h.title}>
                          <h3 className="text-base font-semibold text-slate-200 mb-3">{h.title}</h3>
                          <ul className="space-y-2">
                            {h.points.map((point, i) => (
                              <li key={i} className="flex gap-2.5 text-slate-400 text-sm leading-relaxed">
                                <span className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full ${a.dot}`} />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Code2 className="w-4 h-4 text-slate-500" />
                          <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Technologies</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((t) => (<span key={t} className="px-2.5 py-0.5 text-xs bg-slate-800/60 border border-slate-700/40 text-slate-300 rounded-full">{t}</span>))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
