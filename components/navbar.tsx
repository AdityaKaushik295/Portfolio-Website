'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileText, Github, Linkedin, Twitter, Instagram, Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Skills', href: '/skills' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const onScroll = () => { setScrolled(window.scrollY > 10); };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href;

  const socialLinks = [
    { href: 'https://github.com/aditya-kaushik-1', label: 'GitHub', icon: <Github className="w-5 h-5" /> },
    { href: 'https://www.linkedin.com/in/adityakaushik295', label: 'LinkedIn', icon: <Linkedin className="w-5 h-5" /> },
    { href: 'https://x.com/AdiK7553', label: 'Twitter', icon: <Twitter className="w-5 h-5" /> },
    { href: 'https://www.instagram.com/aditya.kkmj/', label: 'Instagram', icon: <Instagram className="w-5 h-5" /> },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${ scrolled ? 'backdrop-blur-md bg-emerald-950/40 border-b border-emerald-900/40' : 'bg-transparent' }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between h-20">
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={`relative font-medium transition-colors ${ isActive(link.href) ? 'text-white' : 'text-white/80' } hover:text-emerald-400`}>
                  {link.name}
                  {isActive(link.href) && (<span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-400" />)}
                </Link>
              ))}
            </div>
            <Link href="/" className="lg:hidden text-emerald-400 font-bold text-lg">Aditya K.</Link>
            <div className="flex items-center gap-3">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-white hover:text-emerald-400 transition-colors" aria-label="Resume (opens in new tab)"><FileText className="w-5 h-5" /></a>
              {socialLinks.map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="hidden sm:block text-white hover:text-emerald-400 transition-colors" aria-label={`${s.label} (opens in new tab)`}>{s.icon}</a>
              ))}
              <button className="lg:hidden text-white hover:text-emerald-400 transition-colors p-1" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((prev) => !prev)}>
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMenuOpen(false)} aria-hidden="true" />
          <div className="absolute top-0 left-0 bottom-0 w-72 bg-slate-950 border-r border-emerald-900/40 flex flex-col pt-24 pb-8 px-8">
            <nav aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={`flex items-center py-3 text-lg font-medium border-b border-slate-800/50 transition-colors ${ isActive(link.href) ? 'text-emerald-400' : 'text-white/80 hover:text-emerald-400' }`}>
                  {link.name}
                  {isActive(link.href) && (<span className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400" />)}
                </Link>
              ))}
            </nav>
            <div className="mt-8 flex gap-5">
              {socialLinks.map((s) => (
                <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-emerald-400 transition-colors" aria-label={`${s.label} (opens in new tab)`}>{s.icon}</a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
