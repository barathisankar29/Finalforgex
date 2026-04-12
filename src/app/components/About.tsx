'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="relative bg-[#0a0a0a] text-white px-6 md:px-16 py-32 md:py-40 flex justify-center overflow-hidden">

      {/* 🎬 VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-25 scale-110"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      {/* 🌫️ DARK OVERLAY (FOR READABILITY) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/25 via-[#0a0a0a]/40 to-[#0a0a0a]/40"></div>

      {/* 🌫️ SOFT GRADIENT FADE */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/20 to-[#0a0a0a]" />

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        className="max-w-4xl w-full rounded-3xl border border-[#ff6a00]/30 p-8 md:p-12 relative backdrop-blur-xl"
      >

        {/* 🔥 BREATHING GLOW */}
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-r from-[#ff6a00]/10 via-transparent to-[#ff6a00]/10 blur-2xl"
        />

        {/* ✨ LIGHT SWEEP EFFECT (CINEMATIC TOUCH) */}
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-20"
        />

        {/* CONTENT */}
        <div className="relative z-10 text-center">

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold tracking-wide"
          >
            ABOUT <span className="text-[#ff6a00]">FINALFORGEX</span>
          </motion.h2>

          {/* STORY TEXT */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-gray-400"
          >
            We are engineers, designers, and problem-solvers building the future of digital products.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-gray-500"
          >
            From AI-driven systems to immersive 3D experiences, we transform complex ideas into scalable solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-4 text-gray-600"
          >
            Not just functional — but unforgettable.
          </motion.p>

        </div>
      </motion.div>

    </section>
  );
}