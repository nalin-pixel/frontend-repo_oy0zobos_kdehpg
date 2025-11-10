import React from 'react';
import { Github, Linkedin, Youtube } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-inter">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <nav className="container mx-auto flex items-center justify-between px-6 py-4">
          <a href="#home" className="text-sm font-semibold tracking-wide text-cyan-300">Fakhry Alfitra</a>
          <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://github.com" aria-label="GitHub" className="hover:text-white"><Github size={18} /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-white"><Linkedin size={18} /></a>
            <a href="https://youtube.com" aria-label="YouTube" className="hover:text-white"><Youtube size={18} /></a>
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/60">
        <div className="container mx-auto px-6 py-8 text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Fakhry Alfitra — AI Creator • Educator • Developer</p>
          <p className="text-slate-500">Built with React, Tailwind, and Spline</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
