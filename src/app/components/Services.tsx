'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

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

  return (
    <section className="relative bg-[#0a0a0a] text-white px-6 md:px-16 py-32">

      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          OUR <span className="text-[#ff6a00]">SERVICES</span>
        </h2>
        <p className="mt-4 text-gray-400">
          We deliver end-to-end solutions across multiple domains.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={i}
            onClick={() => setActive(i)}
            whileHover={{ y: -10 }}
            className="cursor-pointer p-6 rounded-2xl border border-[#ff6a00]/20 bg-white/5 backdrop-blur-xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-r from-[#ff6a00]/20 via-transparent to-[#ff6a00]/20 blur-xl" />

            <h3 className="text-xl font-semibold text-[#ff6a00] relative z-10">
              {s.title}
            </h3>

            <p className="mt-4 text-gray-400 text-sm relative z-10">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 🔥 MODAL */}
      <AnimatePresence>
        {active !== null && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
            />

            {/* MODAL CARD */}
            <motion.div
              className="fixed top-1/2 left-1/2 z-50 w-[90%] md:w-[500px] -translate-x-1/2 -translate-y-1/2 p-8 rounded-2xl border border-[#ff6a00]/30 bg-[#111] backdrop-blur-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h3 className="text-2xl font-bold text-[#ff6a00]">
                {services[active].title}
              </h3>

              <p className="mt-4 text-gray-300">
                {services[active].details}
              </p>

              <button
                onClick={() => setActive(null)}
                className="mt-6 px-4 py-2 bg-[#ff6a00] rounded-lg"
              >
                Close
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </section>
  );
}