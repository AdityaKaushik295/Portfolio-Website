import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, ExternalLink } from 'lucide-react';

/* ─────────────────────────────────────────────────
   CONTACT CONFIGURATION
   Update these values whenever contact info changes.
───────────────────────────────────────────────── */
const CONTACT = {
  name: 'Aditya Kaushik',
  email: 'aditya.kkmj@gmail.com',
  phone: '+91 9008596707',
  location: 'Bengaluru, Karnataka, India',
};

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/aditya-kaushik-1',
    icon: Github,
    description: 'Source code and open-source projects',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/adityakaushik295',
    icon: Linkedin,
    description: 'Professional profile and experience',
  },
  {
    label: 'Twitter / X',
    href: 'https://x.com/AdiK7553',
    icon: Twitter,
    description: 'Thoughts on software, AI, and tech',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/aditya.kkmj/',
    icon: Instagram,
    description: 'Personal updates',
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white pt-28 pb-24 px-6 lg:px-16">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="text-sm text-emerald-400 font-medium tracking-widest uppercase mb-4">
            Get In Touch
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">Contact</h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">
            I am open to discussing software engineering roles, AI projects, research
            collaborations, and interesting technical problems. Feel free to reach out — I will
            do my best to respond promptly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* ─── LEFT: Contact Details ─── */}
          <div className="space-y-6">
            {/* Email */}
            <div className="bg-slate-900/50 border border-emerald-900/30 rounded-2xl p-6 hover:border-emerald-700/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-emerald-900/30 rounded-xl">
                  <Mail className="w-5 h-5 text-emerald-400" />
                </div>
                <h2 className="text-lg font-semibold text-white">Email</h2>
              </div>
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-emerald-400 hover:text-emerald-300 transition font-medium break-all"
              >
                {CONTACT.email}
              </a>
              <p className="text-slate-500 text-sm mt-1">
                Preferred contact method — usually respond within 24 hours.
              </p>
            </div>

            {/* Phone */}
            <div className="bg-slate-900/50 border border-emerald-900/30 rounded-2xl p-6 hover:border-emerald-700/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-teal-900/30 rounded-xl">
                  <Phone className="w-5 h-5 text-teal-400" />
                </div>
                <h2 className="text-lg font-semibold text-white">Phone</h2>
              </div>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                className="text-teal-400 hover:text-teal-300 transition font-medium"
              >
                {CONTACT.phone}
              </a>
            </div>

            {/* Location */}
            <div className="bg-slate-900/50 border border-emerald-900/30 rounded-2xl p-6 hover:border-emerald-700/50 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-blue-900/30 rounded-xl">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="text-lg font-semibold text-white">Location</h2>
              </div>
              <p className="text-slate-300 font-medium">{CONTACT.location}</p>
            </div>
          </div>

          {/* ─── RIGHT: Social Links + CTA ─── */}
          <div className="space-y-6">
            {/* Social profiles */}
            <div className="bg-slate-900/50 border border-emerald-900/30 rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-white mb-5">Social Profiles</h2>
              <div className="space-y-4">
                {SOCIAL_LINKS.map(({ label, href, icon: Icon, description }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl border border-slate-800/50 hover:border-emerald-800/50 hover:bg-emerald-900/10 transition-all group"
                    aria-label={`${label} (opens in new tab)`}
                  >
                    <div className="p-2 bg-slate-800/60 rounded-lg group-hover:bg-emerald-900/30 transition-colors">
                      <Icon className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-200 group-hover:text-white transition-colors">
                        {label}
                      </p>
                      <p className="text-xs text-slate-500">{description}</p>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-600 group-hover:text-emerald-500 transition-colors shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            {/* Primary CTA */}
            <div className="bg-gradient-to-br from-emerald-900/30 via-slate-900 to-slate-900 border border-emerald-900/30 rounded-2xl p-6 text-center">
              <Mail className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <h2 className="text-xl font-bold text-white mb-2">Send an Email</h2>
              <p className="text-slate-400 text-sm mb-5">
                The fastest way to start a conversation.
              </p>
              <a
                href={`mailto:${CONTACT.email}?subject=Hello Aditya`}
                className="inline-block px-8 py-3 bg-emerald-500 rounded-full font-semibold text-[#020617] hover:bg-emerald-400 transition"
              >
                Email Me →
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

