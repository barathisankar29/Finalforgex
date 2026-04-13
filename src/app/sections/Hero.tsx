'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SplineScene = dynamic(() => import('@/app/components/SplineScene'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full text-gray-500 text-sm">
      Loading Experience...
    </div>
  ),
});

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80;
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 bg-[#0a0a0a] text-white px-6 md:px-16 flex flex-col md:flex-row items-center justify-between overflow-hidden"
    >
      {/* 🔥 AMBIENT LIGHT */}
      <div className="absolute top-[-120px] right-[-120px] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/5 blur-[120px] rounded-full" />

      {/* 🔥 ROBOT (FIRST IN MOBILE) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="order-1 md:order-2 relative w-full md:w-[650px] mt-6 md:mt-0 z-10 flex items-center justify-center 
                   h-[200px] sm:h-[260px] md:h-[520px]"
      >
        <div className="absolute w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-white/5 blur-[120px] rounded-full" />

        {mounted && <SplineScene />}
      </motion.div>

      {/* 🔥 TEXT (SECOND IN MOBILE) */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="order-2 md:order-1 max-w-xl z-10 text-center md:text-left mt-8 md:mt-0"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-wide">
          ENGINEERING <br />
          IDEAS <br />
          <span className="text-[#ff6a00] drop-shadow-[0_0_10px_rgba(255,106,0,0.6)]">
            INTO REALITY
          </span>
        </h1>

        <p className="mt-4 md:mt-6 text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed">
          FinalForgeX specializes in cutting-edge SaaS development, IoT
          systems, premium dashboards, and full-stack web solutions.
          We transform complex technical challenges into elegant,
          scalable products.
        </p>

        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-[#ff6a00] px-5 py-2.5 md:px-6 md:py-3 rounded-xl font-medium shadow-[0_0_20px_rgba(255,106,0,0.4)] hover:scale-105 transition"
          >
            Get Started
          </button>

          <button
            onClick={() => scrollToSection('work')}
            className="border border-[#ff6a00] px-5 py-2.5 md:px-6 md:py-3 rounded-xl text-[#ff6a00] hover:bg-[#ff6a00] hover:text-black transition"
          >
            View Work
          </button>
        </div>
      </motion.div>
    </section>
  );
}