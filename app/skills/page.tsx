import { Code2 } from 'lucide-react';

const skillCategories = [
  {
    id: 'languages',
    title: 'Programming Languages',
    accent: 'emerald',
    skills: ['Python', 'C++', 'Java', 'SQL', 'HTML/CSS'],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    accent: 'teal',
    skills: ['React', 'Next.js', 'Vue.js', 'Flask', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    id: 'ai',
    title: 'AI & Machine Learning',
    accent: 'purple',
    skills: ['PyTorch', 'LangGraph', 'Pandas', 'OpenCV', 'Librosa'],
  },
  {
    id: 'databases',
    title: 'Databases',
    accent: 'blue',
    skills: ['MySQL', 'MongoDB', 'SQLite', 'Amazon Redshift'],
  },
  {
    id: 'tools',
    title: 'Tools',
    accent: 'orange',
    skills: ['Git', 'Ollama'],
  },
];

const accentClasses: Record<string, { icon: string; badge: string; border: string; header: string }> = {
  emerald: {
    icon: 'text-emerald-400',
    badge: 'bg-emerald-900/30 border-emerald-800/40 text-emerald-300',
    border: 'border-emerald-900/30 hover:border-emerald-700/50',
    header: 'text-emerald-400',
  },
  teal: {
    icon: 'text-teal-400',
    badge: 'bg-teal-900/30 border-teal-800/40 text-teal-300',
    border: 'border-teal-900/30 hover:border-teal-700/50',
    header: 'text-teal-400',
  },
  purple: {
    icon: 'text-purple-400',
    badge: 'bg-purple-900/30 border-purple-800/40 text-purple-300',
    border: 'border-purple-900/30 hover:border-purple-700/50',
    header: 'text-purple-400',
  },
  blue: {
    icon: 'text-blue-400',
    badge: 'bg-blue-900/30 border-blue-800/40 text-blue-300',
    border: 'border-blue-900/30 hover:border-blue-700/50',
    header: 'text-blue-400',
  },
  orange: {
    icon: 'text-orange-400',
    badge: 'bg-orange-900/30 border-orange-800/40 text-orange-300',
    border: 'border-orange-900/30 hover:border-orange-700/50',
    header: 'text-orange-400',
  },
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white pt-28 pb-24 px-6 lg:px-16">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-sm text-emerald-400 font-medium tracking-widest uppercase mb-4">
            Expertise
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">Skills</h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            I work across multiple layers of the stack — designing responsive frontends, building
            reliable backend systems, integrating machine learning models, and working with
            databases and cloud tools.
          </p>
        </div>

        {/* Skill Category Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((cat) => {
            const a = accentClasses[cat.accent];
            return (
              <div
                key={cat.id}
                className={`bg-slate-900/50 border ${a.border} rounded-2xl p-6 transition-colors`}
              >
                {/* Category header */}
                <div className="flex items-center gap-2.5 mb-5">
                  <div className={`p-1.5 bg-slate-800/60 rounded-lg`}>
                    <Code2 className={`w-4 h-4 ${a.icon}`} />
                  </div>
                  <h2 className={`font-semibold text-base ${a.header}`}>{cat.title}</h2>
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 text-sm border rounded-full font-medium ${a.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="mt-12 text-slate-500 text-sm text-center">
          Skills are listed based on practical project and internship experience.
        </p>
      </div>
    </main>
  );
}

