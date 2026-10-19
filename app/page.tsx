"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import HeroSVG from "../components/svg_codes/hero_svg";

const useTypingEffect = (text: string, speed = 80) => {
  const [value, setValue] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (value.length < text.length) {
      const t = setTimeout(() => setValue(text.slice(0, value.length + 1)), speed);
      return () => clearTimeout(t);
    } else { setDone(true); }
  }, [value, text, speed]);
  return { value, done };
};

const AnimatedOrbs = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-400/18 rounded-full blur-3xl animate-float-slow" />
    <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-emerald-600/12 rounded-full blur-3xl animate-float-slower" />
    <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-300/10 rounded-full blur-2xl animate-pulse-slow" />
  </div>
);

const GeometricVisual = () => (
  <div className="relative w-full max-w-lg aspect-square">
    <div className="absolute inset-0 border-2 border-emerald-400/30 rounded-full animate-spin-slow" />
    <div className="absolute inset-8 border-2 border-emerald-600/25 rounded-full animate-spin-reverse" />
    <div className="absolute inset-16 bg-linear-to-br from-emerald-400/20 to-emerald-600/15 animate-pulse-slow" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
  </div>
);

const GradientSection = ({ children }: { children: React.ReactNode }) => (
  <div className="relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_65%_25%,rgba(34,197,94,0.32),transparent_65%)]" />
    <div className="absolute inset-0 bg-linear-to-br from-[#0b1f2a]/90 via-[#020617]/70 to-[#020617]" />
    <div className="relative z-10">{children}</div>
  </div>
);

const ProjectVisual = ({ title, color }: { title: string; color: string }) => (
  <div className={`w-full h-48 flex items-center justify-center bg-gradient-to-br ${color} relative overflow-hidden`}>
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-4 right-4 w-24 h-24 border border-white/30 rounded-full" />
      <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/20 rounded-full" />
    </div>
    <span className="text-white/70 font-semibold text-lg text-center px-4">{title}</span>
  </div>
);

export default function HomePage() {
  const { value, done } = useTypingEffect("Hi, I am Aditya Kaushik");

  const previewProjects = [
    { title: "Quarks Finance", desc: "A full-stack investment platform for NSE India retail investors, featuring portfolio tracking, investment simulations, and strategy backtesting.", tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Python", "SQLite"], color: "from-emerald-900/60 via-slate-900 to-slate-900" },
    { title: "Hatch", desc: "A hackathon management platform that streamlines registrations, team formation, submissions, evaluations, and event administration.", tech: ["Flask", "MongoDB", "TypeScript"], color: "from-teal-900/60 via-slate-900 to-slate-900" },
  ];

  return (
    <main className="relative overflow-hidden bg-[#020617]">
      <GradientSection>
        <AnimatedOrbs />
        <section className="min-h-screen flex items-center px-6 lg:px-16">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold min-h-20">
                <span className="text-emerald-400">{value}</span>
                {!done && (<span className="inline-block w-1 h-10 ml-1 bg-emerald-400 animate-blink" />)}
              </h1>
              <p className="text-2xl text-emerald-300 font-semibold">Full Stack Engineer · AI Enthusiast · Cloud Architect</p>
              <p className="text-slate-300 max-w-xl">Transforming ideas into scalable, production-ready software with strong system design and clean architecture.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-8 py-4 bg-emerald-500 rounded-full font-semibold text-[#020617] hover:bg-emerald-400 transition">Hire Me</Link>
                <Link href="/projects" className="px-8 py-4 border border-emerald-400 rounded-full text-emerald-300 hover:bg-emerald-400/10 transition">View Projects →</Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <GeometricVisual />
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none translate-x-84 translate-y-5">
                <HeroSVG className="w-90 h-90 opacity-90"/>
              </div>
            </div>
          </div>
        </section>
      </GradientSection>

      <section className="py-24 px-6 lg:px-16 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-emerald-400 mb-6">About Me</h2>
        <p className="text-slate-300 text-lg leading-relaxed mb-6">I am a Full Stack Engineer with a strong focus on building scalable, production-ready applications across frontend, backend, and cloud systems. I enjoy solving complex engineering problems and building practical software that combines clean architecture with useful functionality.</p>
        <Link href="/about" className="inline-flex items-center gap-2 text-emerald-400 font-medium hover:text-emerald-300 transition">Read more about me →</Link>
      </section>

      <GradientSection>
        <section className="py-24 px-6 lg:px-16 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-emerald-400 mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {previewProjects.map((p) => (
              <div key={p.title} className="bg-slate-900/50 border border-emerald-900/30 rounded-xl overflow-hidden">
                <ProjectVisual title={p.title} color={p.color} />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tech.map((t) => (<span key={t} className="px-2.5 py-0.5 text-xs bg-emerald-900/30 border border-emerald-800/40 text-emerald-300 rounded-full">{t}</span>))}
                  </div>
                  <Link href="/projects" className="inline-block px-6 py-2 rounded-full bg-emerald-500/10 border border-emerald-500 text-emerald-400 font-medium hover:bg-emerald-500/20 transition">View Project</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/projects" className="px-8 py-4 bg-emerald-500 rounded-full font-semibold text-[#020617] hover:bg-emerald-400 transition">See all projects →</Link>
          </div>
        </section>
      </GradientSection>

      <section className="relative py-24 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-6">Skills</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">I work across multiple layers of the stack — designing responsive frontends, building reliable backend systems, working with databases, and deploying scalable applications.</p>
          <div className="space-y-4 mb-8">
            {[
              { label: 'Languages', skills: ['Python', 'C++', 'Java', 'SQL', 'HTML/CSS'] },
              { label: 'Frameworks & Libraries', skills: ['React', 'Next.js', 'Vue.js', 'Flask', 'Tailwind CSS', 'Bootstrap'] },
              { label: 'AI & ML', skills: ['PyTorch', 'LangGraph', 'Pandas', 'OpenCV', 'Librosa'] },
              { label: 'Databases', skills: ['MySQL', 'MongoDB', 'SQLite', 'Amazon Redshift'] },
              { label: 'Tools', skills: ['Git', 'Ollama'] },
            ].map(({ label, skills }) => (
              <div key={label} className="flex flex-wrap items-start gap-x-4 gap-y-2">
                <span className="text-emerald-400 font-medium w-52 shrink-0">{label}:</span>
                <span className="text-slate-400">{skills.join(', ')}</span>
              </div>
            ))}
          </div>
          <Link href="/skills" className="inline-flex items-center gap-2 text-emerald-400 font-medium hover:text-emerald-300 transition">View full skill set →</Link>
        </div>
      </section>

      <GradientSection>
        <section className="py-24 px-6 lg:px-16 text-center">
          <h2 className="text-4xl font-bold text-emerald-400 mb-4">Contact</h2>
          <p className="text-white text-2xl font-semibold">Aditya Kaushik</p>
          <p className="text-slate-400 mb-8">aditya.kkmj@gmail.com</p>
          <Link href="/contact" className="px-8 py-4 bg-emerald-500 rounded-full font-semibold text-[#020617] hover:bg-emerald-400 transition">Get in touch →</Link>
        </section>
      </GradientSection>

      <div className="h-24" />
    </main>
  );
}
