import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay that doesn't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10 backdrop-blur">
            <Rocket size={16} className="text-cyan-300" />
            <span className="text-xs tracking-wider uppercase text-cyan-200/80">Innovative Storytelling</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold leading-tight text-white">
            Fakhry Alfitra
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-slate-200/90">
            AI content creator, AI educator, and full‑stack developer crafting interactive learning
            experiences with modern tools and playful 3D.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-cyan-500/90 hover:bg-cyan-400 text-slate-950 px-5 py-3 transition-colors"
            >
              <Rocket size={18} className="transition-transform group-hover:rotate-12" />
              Explore Projects
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 text-white px-5 py-3 ring-1 ring-white/10 transition-colors"
            >
              <PlayCircle size={18} /> Learn with Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
