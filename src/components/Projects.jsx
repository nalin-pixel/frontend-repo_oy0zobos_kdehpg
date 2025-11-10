import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BrainCircuit, Layers, Video } from 'lucide-react';

const items = [
  {
    title: 'Narrative AI Demos',
    icon: <BrainCircuit size={18} />,
    desc: 'Interactive explainers that turn complex ideas into intuitive visual stories.',
    tag: 'AI + Education',
  },
  {
    title: '3D Learning Spaces',
    icon: <Layers size={18} />,
    desc: 'Playful environments with Spline and WebGL to make concepts memorable.',
    tag: '3D · Web',
  },
  {
    title: 'Creator Toolkit',
    icon: <Video size={18} />,
    desc: 'Templates, prompts, and pipelines for fast content production.',
    tag: 'Content Ops',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-slate-950 text-white">
      <div className="relative container mx-auto px-6 py-24">
        <div className="flex items-center gap-2">
          <Sparkles className="text-cyan-300" size={18} />
          <h2 className="text-3xl sm:text-4xl font-semibold">Selected Work</h2>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 hover:border-cyan-400/40"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs ring-1 ring-white/10 text-slate-200">
                {card.icon}
                <span>{card.tag}</span>
              </div>
              <h3 className="mt-4 text-xl font-medium">{card.title}</h3>
              <p className="mt-2 text-slate-300">{card.desc}</p>
              <div className="mt-6 h-1 w-full rounded-full bg-white/5 overflow-hidden">
                <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
