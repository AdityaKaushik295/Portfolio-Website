'use client';

import { useState, useEffect, useRef } from 'react';
import { X, ExternalLink, Github, Code2 } from 'lucide-react';

/* ─────────────────────────────────────────────────
   PROJECT DATA (single source of truth)
───────────────────────────────────────────────── */

interface Project {
  id: string;
  title: string;
  shortDesc: string;
  tech: string[];
  color: string;
  liveUrl: string | null;
  githubUrl: string | null;
  problem: string;
  solution: string;
  features: string[];
  implementation: string[];
  impact: string | null;
  achievement: string | null;
  note: string | null;
}

const PROJECTS: Project[] = [
  {
    id: 'quarks',
    title: 'Quarks Finance',
    shortDesc:
      'A full-stack investment platform for NSE India retail investors, featuring portfolio tracking, investment simulations, and strategy backtesting.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Python', 'SQLite'],
    color: 'from-emerald-900/60 via-slate-900 to-slate-900',
    liveUrl: null, // TODO: add live URL
    githubUrl: null, // TODO: add GitHub URL
    problem:
      'Retail investors need an accessible environment to explore investment strategies, track portfolios, and evaluate potential decisions without relying entirely on manual calculations.',
    solution:
      'Quarks Finance is a full-stack platform designed to help retail investors work with portfolios, simulate investment strategies, and analyse their performance through intuitive dashboards.',
    features: [
      'Portfolio tracking and management',
      'Investment simulation engine',
      'Strategy backtesting against historical data',
      'Interactive dashboards for portfolio insights',
      'Watchlist management',
      'AI-assisted investment analysis',
    ],
    implementation: [
      'Next.js and React for the frontend',
      'TypeScript for end-to-end type safety',
      'Tailwind CSS for a responsive, accessible interface',
      'Python backend for data processing and strategy evaluation',
      'SQLite for persistent data storage',
    ],
    impact: 'Optimised API calls and state management, reducing dashboard data latency by 30%.',
    achievement: null,
    note: 'Live demo and GitHub repository links will be added once publicly deployed.',
  },
  {
    id: 'hatch',
    title: 'Hatch – Hackathon Management Platform',
    shortDesc:
      'A platform that simplifies hackathon operations, from registrations and team formation to submissions, evaluations, and event management.',
    tech: ['Flask', 'MongoDB', 'TypeScript'],
    color: 'from-teal-900/60 via-slate-900 to-slate-900',
    liveUrl: null, // TODO: add live URL
    githubUrl: null, // TODO: add GitHub URL
    problem:
      'Managing hackathons manually creates coordination overhead across participant registrations, team formation, submissions, evaluations, and administrative workflows.',
    solution:
      'Hatch provides a centralised platform that streamlines every stage of a hackathon, from registration to result announcement, reducing manual effort significantly.',
    features: [
      'Participant registration and profile management',
      'Team formation and member invitations',
      'Submission management with deadline enforcement',
      'Evaluation workflows for judges',
      'Event administration panels',
    ],
    implementation: [
      'Flask REST APIs for all backend operations',
      'MongoDB for flexible, document-based data storage',
      'TypeScript for type-safe frontend logic',
    ],
    impact: 'Reduced manual coordination effort by 40%.',
    achievement: 'Winner, WHITEHACK 1.0. Hatch was built for and used to manage this hackathon.',
    note: 'Live demo and GitHub repository links will be added once publicly deployed.',
  },
  {
    id: 'kxetra',
    title: 'Kxetra UPSC',
    shortDesc:
      'A UPSC preparation platform that automates structured note generation from news and video content.',
    tech: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    color: 'from-indigo-900/60 via-slate-900 to-slate-900',
    liveUrl: null,
    githubUrl: null,
    problem:
      'UPSC preparation requires students to process large amounts of daily news and educational video content and convert them into useful, structured revision material.',
    solution:
      'Kxetra UPSC streamlines UPSC study workflows by helping users generate structured notes from relevant news and video content, and supports mock interview preparation.',
    features: [
      'News-based study workflows',
      'Video-content processing and summarisation',
      'Automated structured note generation on Notion',
      'Mock interview workflows',
      'Question bank supporting more than 20 questions per session',
    ],
    implementation: [
      'Flask backend for all application logic',
      'MySQL database for data storage',
      'HTML, CSS, and JavaScript frontend',
      'Notion API integration for structured note output',
    ],
    impact: null,
    achievement: null,
    note: null,
  },
  {
    id: 'slime',
    title: 'Bio-Inspired Transport Network Optimisation',
    shortDesc:
      'A browser-based simulation of transport network optimisation using the Slime Mould Algorithm.',
    tech: ['JavaScript', 'p5.js', 'Slime Mould Algorithm'],
    color: 'from-purple-900/60 via-slate-900 to-slate-900',
    liveUrl: null,
    githubUrl: null,
    problem:
      'Transport network optimisation involves exploring complex route configurations and understanding how bio-inspired optimisation algorithms evolve toward better solutions.',
    solution:
      'This project simulates transport network optimisation using the Slime Mould Algorithm and visualises its convergence behaviour live in the browser.',
    features: [
      'Interactive transport network simulation',
      'Real-time visualisation of network evolution',
      'Observable convergence behaviour',
      'Simulation involving more than 500 agents',
    ],
    implementation: [
      'JavaScript for core simulation logic',
      'p5.js for browser-based visualisation and rendering',
      'Slime Mould Algorithm for bio-inspired optimisation',
    ],
    impact: null,
    achievement: null,
    note: 'Related work on the Slime Mould Algorithm was published in METSZET, May 2025.',
  },
];

/* ─────────────────────────────────────────────────
   PROJECT VISUAL (CSS-based placeholder)
───────────────────────────────────────────────── */

function ProjectVisual({ title, color }: { title: string; color: string }) {
  return (
    <div
      className={`w-full h-48 flex items-center justify-center bg-gradient-to-br ${color} relative overflow-hidden`}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4 w-28 h-28 border border-white/30 rounded-full" />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-white/15 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-white/20 rounded-full" />
      </div>
      <span className="relative text-white/80 font-semibold text-base text-center px-6 leading-snug">
        {title}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   PROJECT MODAL
───────────────────────────────────────────────── */

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Focus trap – move focus into dialog
  useEffect(() => {
    dialogRef.current?.focus();
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative bg-slate-950 border border-emerald-900/40 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto outline-none shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header visual */}
        <div className={`w-full h-52 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-6 right-6 w-36 h-36 border border-white/30 rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 border border-white/15 rounded-full" />
          </div>
          <div className="absolute inset-0 flex items-end p-6">
            <h2 className="text-3xl font-bold text-white drop-shadow">{project.title}</h2>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-900/80 border border-slate-700/50 rounded-full text-white/70 hover:text-white hover:bg-slate-800 transition"
          aria-label="Close project details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Tech badges */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-sm bg-emerald-900/30 border border-emerald-800/40 text-emerald-300 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Achievement */}
          {project.achievement && (
            <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-xl p-4">
              <p className="text-yellow-300 font-semibold text-sm">🏆 {project.achievement}</p>
            </div>
          )}

          {/* Problem */}
          <div>
            <h3 className="text-lg font-semibold text-emerald-400 mb-2">Problem</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{project.problem}</p>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-lg font-semibold text-emerald-400 mb-2">Solution</h3>
            <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-semibold text-emerald-400 mb-3">Key Features</h3>
            <ul className="space-y-2">
              {project.features.map((f) => (
                <li key={f} className="flex gap-2.5 text-slate-400 text-sm leading-relaxed">
                  <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Implementation */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Code2 className="w-4 h-4 text-slate-500" />
              <h3 className="text-lg font-semibold text-emerald-400">Technical Implementation</h3>
            </div>
            <ul className="space-y-2">
              {project.implementation.map((imp) => (
                <li key={imp} className="flex gap-2.5 text-slate-400 text-sm leading-relaxed">
                  <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-slate-500" />
                  {imp}
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          {project.impact && (
            <div className="bg-emerald-900/20 border border-emerald-800/30 rounded-xl p-4">
              <p className="text-emerald-300 text-sm">
                <span className="font-semibold">Impact: </span>
                {project.impact}
              </p>
            </div>
          )}

          {/* Note */}
          {project.note && (
            <p className="text-slate-500 text-xs italic">{project.note}</p>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-2 border-t border-slate-800">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 rounded-full text-[#020617] font-semibold text-sm hover:bg-emerald-400 transition"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            ) : null}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-emerald-500 rounded-full text-emerald-400 font-semibold text-sm hover:bg-emerald-500/10 transition"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────────────── */

function ProjectCard({ project, onView }: { project: Project; onView: () => void }) {
  return (
    <article className="bg-slate-900/50 border border-emerald-900/30 rounded-xl overflow-hidden hover:border-emerald-700/50 transition-colors flex flex-col">
      <ProjectVisual title={project.title} color={project.color} />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.shortDesc}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-0.5 text-xs bg-emerald-900/30 border border-emerald-800/40 text-emerald-300 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
        <button
          onClick={onView}
          className="self-start px-6 py-2 rounded-full bg-emerald-500/10 border border-emerald-500 text-emerald-400 font-medium hover:bg-emerald-500/20 transition text-sm"
        >
          View Project
        </button>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────── */

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <main className="min-h-screen bg-[#020617] text-white pt-28 pb-24 px-6 lg:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-sm text-emerald-400 font-medium tracking-widest uppercase mb-4">
            Portfolio
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">Projects</h1>
          <p className="text-slate-400 max-w-2xl">
            A selection of projects spanning full-stack development, AI integration, platform
            engineering, and algorithmic simulation. Click any card to explore the details.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onView={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </main>
  );
}

