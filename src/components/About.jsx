import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Cpu, Code2 } from 'lucide-react';

const skills = [
  { icon: <Cpu size={18} />, label: 'Applied AI/ML' },
  { icon: <Code2 size={18} />, label: 'Full‑stack Web' },
  { icon: <GraduationCap size={18} />, label: 'Education & Workshops' },
];

const About = () => {
  return (
    <section id="about" className="relative w-full bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.15),transparent_60%)]" />
      <div className="relative container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-start"
        >
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">About Fakhry</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I’m a storyteller at heart who uses code and AI to craft engaging, interactive experiences. From
              3D scenes to real‑world apps, I bring complex ideas to life with clear, approachable teaching.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((s, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 ring-1 ring-white/10"
                >
                  {s.icon}
                  <span className="text-sm text-slate-200">{s.label}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
            <h3 className="text-xl font-medium">What I Do</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• Create AI‑powered stories and explainers with immersive visuals.</li>
              <li>• Teach practical AI and full‑stack skills through workshops and videos.</li>
              <li>• Build tools, demos, and products that make learning delightful.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
