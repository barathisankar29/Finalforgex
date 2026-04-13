'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const services = [
  {
    title: 'SaaS Development',
    desc: 'Build scalable, cloud-native SaaS platforms.',
    details: 'We design and develop full SaaS ecosystems including authentication, billing, dashboards, and scalable backend systems.',
  },
  {
    title: 'IoT & Hardware',
    desc: 'Bridge hardware and software.',
    details: 'From sensors to cloud dashboards, we build complete IoT pipelines with real-time data processing.',
  },
  {
    title: 'Admin Dashboards',
    desc: 'Data-driven dashboards.',
    details: 'Modern dashboards with analytics, charts, and real-time monitoring systems.',
  },
  {
    title: 'Web Development',
    desc: 'High-performance web apps.',
    details: 'Fast, responsive, and SEO-friendly applications using modern frameworks.',
  },
  {
    title: 'Academic Projects',
    desc: 'Research to real-world systems.',
    details: 'We convert academic ideas into working prototypes and production-ready systems.',
  },
];

export default function Services() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = active !== null ? 'hidden' : 'auto';
  }, [active]);

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 40 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="services"
      className="relative bg-[#0a0a0a] text-white px-6 md:px-16 py-32 overflow-hidden"
    >

      {/* 🔥 PRO GRID (FIXED) */}
      <div className="absolute inset-0 overflow-hidden opacity-10">

        {/* Horizontal lines */}
        <div className="absolute inset-0 bg-[linear-gradient(#ff6a00_1px,transparent_1px)] bg-[size:60px_60px] animate-[gridMoveY_40s_linear_infinite]" />

        {/* Vertical lines */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#ff6a00_1px,transparent_1px)] bg-[size:60px_60px] animate-[gridMoveX_40s_linear_infinite]" />

        {/* Fade mask (premium touch) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      </div>

      {/* GLOW */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#ff6a00]/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#ff6a00]/10 blur-[120px]" />
      </div>

      {/* TITLE */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold">
          OUR <span className="text-[#ff6a00]">SERVICES</span>
        </h2>
      </div>

      {/* CARDS */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
      >
        {services.map((s, i) => (
          <motion.div
            key={i}
            variants={item}
            onClick={() => setActive(i)}
            whileHover={{ y: -10, scale: 1.04 }}
            className="p-6 rounded-2xl border border-[#ff6a00]/20 bg-white/5 backdrop-blur-xl relative overflow-hidden group"
          >

            {/* 🔥 Hover glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle,rgba(255,106,0,0.25),transparent)]" />

            <h3 className="text-xl text-[#ff6a00]">{s.title}</h3>
            <p className="mt-3 text-gray-400 text-sm">{s.desc}</p>

          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}