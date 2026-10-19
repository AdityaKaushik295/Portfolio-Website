import Link from 'next/link';
import { GraduationCap, Trophy, BookOpen, Code2, ExternalLink } from 'lucide-react';

const education = [
  {
    institution: 'R V College of Engineering',
    degree: 'B.E. in Artificial Intelligence and Machine Learning',
    location: 'Bengaluru, India',
    duration: '2023 – 2027',
    cgpa: '9.37',
    tag: 'B.E.',
  },
  {
    institution: 'Indian Institute of Technology Madras',
    degree: 'B.S. in Data Science and Applications',
    location: '',
    duration: '2024 – Present',
    cgpa: '8.69',
    projectCgpa: '9.25',
    tag: 'B.S.',
  },
];

const skillCategories = [
  { category: 'Programming Languages', items: ['Python', 'C++', 'Java', 'SQL', 'HTML/CSS'] },
  { category: 'Frameworks & Libraries', items: ['React', 'Next.js', 'Vue.js', 'Flask', 'Tailwind CSS', 'Bootstrap'] },
  { category: 'AI & Machine Learning', items: ['PyTorch', 'LangGraph', 'Pandas', 'OpenCV', 'Librosa'] },
  { category: 'Databases', items: ['MySQL', 'MongoDB', 'SQLite', 'Amazon Redshift'] },
  { category: 'Tools', items: ['Git', 'Ollama'] },
];

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-20">
      <h2 className="text-3xl font-bold text-emerald-400 mb-8 flex items-center gap-3">
        {title}
        <span className="flex-1 h-px bg-emerald-900/50" />
      </h2>
      {children}
    </section>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white pt-28 pb-24 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">

        <div className="mb-20">
          <p className="text-sm text-emerald-400 font-medium tracking-widest uppercase mb-4">About Me</p>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">Aditya Kaushik</h1>
          <div className="space-y-4 text-slate-300 text-lg leading-relaxed max-w-3xl">
            <p>I am an Artificial Intelligence and Machine Learning undergraduate at R V College of Engineering, with an additional focus on Data Science through the Indian Institute of Technology Madras.</p>
            <p>My interests span full-stack software engineering, machine learning, speech processing, cloud technologies, and building intelligent applications.</p>
            <p>I enjoy working across the stack — from designing user-facing interfaces to developing backend systems and integrating machine learning models into practical applications. I am particularly drawn to scalable software, applied AI, and solving challenging engineering problems.</p>
          </div>
        </div>

        <Section id="education" title="Education">
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.institution} className="bg-slate-900/50 border border-emerald-900/30 rounded-xl p-6 hover:border-emerald-700/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-emerald-900/30 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                      <span className="px-2 py-0.5 text-xs bg-emerald-900/40 text-emerald-300 border border-emerald-800/40 rounded-full">{edu.tag}</span>
                    </div>
                    <p className="text-emerald-300 font-medium mb-2">{edu.degree}</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-slate-400">
                      {edu.location && <span>{edu.location}</span>}
                      <span>{edu.duration}</span>
                      <span>CGPA: <strong className="text-white">{edu.cgpa}</strong></span>
                      {'projectCgpa' in edu && edu.projectCgpa && (<span>Project CGPA: <strong className="text-white">{edu.projectCgpa}</strong></span>)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Technical Skills">
          <div className="grid sm:grid-cols-2 gap-5">
            {skillCategories.map(({ category, items }) => (
              <div key={category} className="bg-slate-900/50 border border-emerald-900/30 rounded-xl p-5 hover:border-emerald-700/40 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Code2 className="w-4 h-4 text-emerald-400" />
                  <h3 className="text-emerald-400 font-semibold text-sm">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (<span key={item} className="px-3 py-1 text-sm bg-slate-800/60 border border-slate-700/40 text-slate-300 rounded-full">{item}</span>))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="cp" title="Competitive Programming">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 border border-emerald-900/30 rounded-xl p-6 hover:border-emerald-700/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-orange-900/30 rounded-lg"><Trophy className="w-5 h-5 text-orange-400" /></div>
                <h3 className="text-xl font-bold text-white">LeetCode</h3>
              </div>
              <div className="space-y-2 text-sm text-slate-400 mb-5">
                <div className="flex justify-between"><span>Maximum Rating</span><strong className="text-white">1732</strong></div>
                <div className="flex justify-between"><span>Problems Solved</span><strong className="text-emerald-400">300+</strong></div>
              </div>
              <a href="https://leetcode.com/u/adityakk295/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-emerald-400 hover:text-emerald-300 transition">View Profile <ExternalLink className="w-3.5 h-3.5" /></a>
            </div>
            <div className="bg-slate-900/50 border border-emerald-900/30 rounded-xl p-6 hover:border-emerald-700/40 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-900/30 rounded-lg"><Trophy className="w-5 h-5 text-blue-400" /></div>
                <h3 className="text-xl font-bold text-white">Codeforces</h3>
              </div>
              <div className="space-y-2 text-sm text-slate-400 mb-5">
                <div className="flex justify-between"><span>Maximum Rating</span><strong className="text-white">1340</strong></div>
                <div className="flex justify-between"><span>Rank</span><strong className="text-blue-400">Pupil</strong></div>
                <div className="flex justify-between"><span>Problems Solved</span><strong className="text-emerald-400">200+</strong></div>
              </div>
              <a href="https://codeforces.com/profile/aditya_kk" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-emerald-400 hover:text-emerald-300 transition">View Profile <ExternalLink className="w-3.5 h-3.5" /></a>
            </div>
          </div>
        </Section>

        <Section id="achievements" title="Achievements">
          <div className="space-y-5">
            <div className="bg-slate-900/50 border border-emerald-900/30 rounded-xl p-6 hover:border-emerald-700/40 transition-colors flex gap-4">
              <div className="mt-0.5 p-2 bg-yellow-900/30 rounded-lg shrink-0"><Trophy className="w-5 h-5 text-yellow-400" /></div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">WHITEHACK 1.0 — Winner</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Built Hatch, a hackathon management platform used to manage the WHITEHACK 1.0 workflow, from registrations and team formation through submissions and evaluations.</p>
              </div>
            </div>
            <div className="bg-slate-900/50 border border-emerald-900/30 rounded-xl p-6 hover:border-emerald-700/40 transition-colors flex gap-4">
              <div className="mt-0.5 p-2 bg-emerald-900/30 rounded-lg shrink-0"><Trophy className="w-5 h-5 text-emerald-400" /></div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Course Top Performer — IIT Madras</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Recognized among the top performers in the BS Data Science and Applications program at the Indian Institute of Technology Madras.</p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="publication" title="Publication & Certification">
          <div className="space-y-5">
            <div className="bg-slate-900/50 border border-emerald-900/30 rounded-xl p-6 hover:border-emerald-700/40 transition-colors flex gap-4">
              <div className="mt-0.5 p-2 bg-purple-900/30 rounded-lg shrink-0"><BookOpen className="w-5 h-5 text-purple-400" /></div>
              <div>
                <span className="text-xs text-emerald-400 font-medium uppercase tracking-wider">Publication · May 2025</span>
                <h3 className="text-lg font-bold text-white mt-1 mb-1">Slime Mould Algorithm</h3>
                <p className="text-slate-400 text-sm">Published in <em>METSZET</em>, May 2025.</p>
              </div>
            </div>
            <div className="bg-slate-900/50 border border-emerald-900/30 rounded-xl p-6 hover:border-emerald-700/40 transition-colors flex gap-4">
              <div className="mt-0.5 p-2 bg-teal-900/30 rounded-lg shrink-0"><Trophy className="w-5 h-5 text-teal-400" /></div>
              <div>
                <span className="text-xs text-emerald-400 font-medium uppercase tracking-wider">Certification</span>
                <h3 className="text-lg font-bold text-white mt-1 mb-1">NPTEL – Data Science for Engineers</h3>
                <p className="text-slate-400 text-sm">Silver Elite, Top 5 percentile.</p>
              </div>
            </div>
          </div>
        </Section>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/experience" className="px-8 py-4 bg-emerald-500 rounded-full font-semibold text-[#020617] hover:bg-emerald-400 transition">View Experience →</Link>
          <Link href="/projects" className="px-8 py-4 border border-emerald-400 rounded-full text-emerald-300 hover:bg-emerald-400/10 transition">View Projects →</Link>
        </div>

      </div>
    </main>
  );
}
