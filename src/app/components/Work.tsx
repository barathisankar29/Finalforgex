'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    title: 'Enterprise Analytics Platform',
    desc: 'Real-time data visualization dashboard for Fortune 500 client',
    details:
      'Built a scalable analytics system with real-time dashboards, role-based access, and cloud deployment.',
    tags: ['SaaS', 'Dashboard', 'React'],
    image: '/ffx.jpeg',
  },
  {
    title: 'IoT Smart Building System',
    desc: 'Integrated sensor network with cloud monitoring',
    details:
      'End-to-end IoT system connecting hardware sensors to cloud dashboards with automation features.',
    tags: ['IoT', 'Hardware', 'Cloud'],
    image: '/ffx.jpeg',
  },
  {
    title: 'FinTech Payment Gateway',
    desc: 'Secure payment processing system',
    details:
      'High-performance payment gateway with fraud detection, APIs, and secure transaction handling.',
    tags: ['SaaS', 'Security', 'API'],
    image: '/ffx.jpeg',
  },
  {
    title: 'Healthcare Portal',
    desc: 'Patient management and telemedicine',
    details:
      'HIPAA-compliant healthcare system with appointment booking, video consultations, and records.',
    tags: ['Web', 'Healthcare', 'Compliance'],
    image: '/ffx.jpeg',
  },
  {
    title: 'E-Commerce Platform',
    desc: 'Multi-vendor marketplace system',
    details:
      'Full-stack marketplace with vendor dashboards, payment integration, and inventory management.',
    tags: ['Web', 'E-Commerce', 'Full-Stack'],
    image: '/ffx.jpeg',
  },
  {
    title: 'AI Research Prototype',
    desc: 'Machine learning deployment system',
    details:
      'Prototype system for deploying ML models with experiment tracking and performance analytics.',
    tags: ['AI', 'Research', 'Academic'],
    image: '/ffx.jpeg',
  },
];

export default function Work() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-[#0a0a0a] text-white px-6 md:px-16 py-32">

      {/* TITLE */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          OUR <span className="text-[#ff6a00]">WORK</span>
        </h2>

        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Showcasing production-ready solutions across industries.
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            onClick={() => setActive(i)}
            whileHover={{ y: -10 }}
            className="cursor-pointer rounded-2xl border border-[#ff6a00]/20 overflow-hidden bg-[#111] group"
          >

            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-48 object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

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

            {/* MODAL */}
            <motion.div
              className="fixed top-1/2 left-1/2 z-50 w-[90%] md:w-[700px] -translate-x-1/2 -translate-y-1/2 bg-[#111] border border-[#ff6a00]/30 rounded-2xl overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >

              {/* IMAGE */}
              <img
                src={projects[active].image}
                className="w-full h-60 object-cover"
              />

              {/* CONTENT */}
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
                  className="mt-6 px-4 py-2 bg-[#ff6a00] rounded-lg"
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