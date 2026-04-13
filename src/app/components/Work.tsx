'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const projects = [
  {
    title: 'Enterprise Analytics Platform',
    desc: 'Real-time data visualization dashboard',
    details:
      'Built a scalable analytics system with real-time dashboards, role-based access, and cloud deployment.',
    tags: ['SaaS', 'Dashboard', 'React'],
    image: '/ffx.jpeg',
  },
  {
    title: 'IoT Smart Building System',
    desc: 'Integrated sensor network',
    details:
      'End-to-end IoT system connecting hardware sensors to cloud dashboards.',
    tags: ['IoT', 'Hardware', 'Cloud'],
    image: '/ffx.jpeg',
  },
  {
    title: 'FinTech Payment Gateway',
    desc: 'Secure payment processing system',
    details:
      'High-performance payment gateway with fraud detection and APIs.',
    tags: ['SaaS', 'Security', 'API'],
    image: '/ffx.jpeg',
  },
  {
    title: 'Healthcare Portal',
    desc: 'Patient management system',
    details:
      'Healthcare system with appointments, video calls, and records.',
    tags: ['Web', 'Healthcare'],
    image: '/ffx.jpeg',
  },
  {
    title: 'E-Commerce Platform',
    desc: 'Multi-vendor marketplace',
    details:
      'Full-stack marketplace with vendor dashboards and payments.',
    tags: ['Web', 'E-Commerce'],
    image: '/ffx.jpeg',
  },
  {
    title: 'AI Research Prototype',
    desc: 'Machine learning deployment',
    details:
      'System for deploying ML models with analytics.',
    tags: ['AI', 'Research'],
    image: '/ffx.jpeg',
  },
];

export default function Work() {
  const [active, setActive] = useState<number | null>(null);

  // 🔒 Lock scroll when modal opens
  useEffect(() => {
    document.body.style.overflow = active !== null ? 'hidden' : 'auto';
  }, [active]);

  // ⌨️ ESC close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // 🔥 ANIMATION CONFIG
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="work"
      className="relative bg-[#0a0a0a] text-white px-6 md:px-16 py-32 overflow-hidden"
    >

      {/* 🔥 FIXED GRID */}
<div className="absolute inset-0 overflow-hidden opacity-10">

  {/* Horizontal */}
  <div className="absolute inset-0 bg-[linear-gradient(#ff6a00_1px,transparent_1px)] bg-[size:60px_60px] animate-[gridMoveY_40s_linear_infinite]" />

  {/* Vertical */}
  <div className="absolute inset-0 bg-[linear-gradient(90deg,#ff6a00_1px,transparent_1px)] bg-[size:60px_60px] animate-[gridMoveX_40s_linear_infinite]" />

  {/* Fade */}
  <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

</div>

      {/* 🔥 GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#ff6a00]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#ff6a00]/10 blur-[120px]" />
      </div>

      {/* TITLE */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold">
          OUR <span className="text-[#ff6a00]">WORK</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Showcasing production-ready solutions.
        </p>
      </div>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
      >
        {projects.map((p, i) => (
          <motion.div
            key={i}
            variants={item}
            onClick={() => setActive(i)}
            whileHover={{ scale: 1.05, y: -10 }}
            className="relative cursor-pointer rounded-2xl border border-[#ff6a00]/20 overflow-hidden bg-[#111] group"
          >

            {/* 🔥 SPOTLIGHT */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle,rgba(255,106,0,0.2),transparent_60%)]" />

            {/* IMAGE */}
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-48 object-cover transition duration-500 group-hover:scale-110"
            />

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-gray-400 text-sm">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 border border-[#ff6a00]/30 rounded-full text-[#ff6a00]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* 🔥 MODAL */}
      <AnimatePresence>
        {active !== null && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
              onClick={() => setActive(null)}
            />

            <motion.div
              className="fixed top-1/2 left-1/2 z-50 w-[90%] md:w-[700px] -translate-x-1/2 -translate-y-1/2 bg-[#111] border border-[#ff6a00]/30 rounded-2xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <img
                src={projects[active].image}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#ff6a00]">
                  {projects[active].title}
                </h3>

                <p className="mt-4 text-gray-300">
                  {projects[active].details}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {projects[active].tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 border border-[#ff6a00]/30 rounded-full text-[#ff6a00]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActive(null)}
                  className="mt-6 px-4 py-2 bg-[#ff6a00] rounded-lg hover:scale-105 transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}