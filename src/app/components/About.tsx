'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-16 overflow-hidden bg-black"
    >
      {/* 🎬 FULL VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* 🌫️ DARK OVERLAY (STRONG FOR READABILITY) */}
      <div className="absolute inset-0 bg-black/70" />

      {/* 🔥 SOFT ORANGE AMBIENT GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ff6a00]/10 via-transparent to-[#ff6a00]/10" />

      {/* MAIN CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl text-center"
      >
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-wide"
        >
          ABOUT <span className="text-[#ff6a00]">FINALFORGEX</span>
        </motion.h2>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-300 text-lg leading-relaxed"
        >
          We are engineers, designers, and problem-solvers building the future of digital products.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-4 text-gray-400 leading-relaxed"
        >
          From AI-driven systems to immersive 3D experiences, we transform complex ideas into scalable solutions.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-gray-500 italic"
        >
          Not just functional — but unforgettable.
        </motion.p>
      </motion.div>
    </section>
  );
}