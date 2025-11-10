import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! Your message has been sent.');
  };

  return (
    <section id="contact" className="relative w-full bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(14,165,233,0.12),transparent_60%)]" />
      <div className="relative container mx-auto px-6 py-24">
        <div className="flex items-center gap-2">
          <Mail className="text-cyan-300" size={18} />
          <h2 className="text-3xl sm:text-4xl font-semibold">Let’s Collaborate</h2>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 grid md:grid-cols-2 gap-6">
          <input
            required
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-slate-400 outline-none ring-1 ring-white/10 focus:ring-cyan-400"
          />
          <input
            required
            type="email"
            placeholder="Email"
            className="w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-slate-400 outline-none ring-1 ring-white/10 focus:ring-cyan-400"
          />
          <textarea
            required
            placeholder="Tell me about your idea..."
            rows={5}
            className="md:col-span-2 w-full rounded-xl bg-white/5 px-4 py-3 text-white placeholder-slate-400 outline-none ring-1 ring-white/10 focus:ring-cyan-400"
          />
          <div className="md:col-span-2 flex items-center justify-between">
            <p className="text-slate-300">Prefer email? hello@fakhry.dev</p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-500/90 hover:bg-cyan-400 text-slate-950 px-6 py-3 transition-colors"
            >
              <Send size={18} /> Send Message
            </button>
          </div>
          {status && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="md:col-span-2 text-cyan-300"
            >
              {status}
            </motion.p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
