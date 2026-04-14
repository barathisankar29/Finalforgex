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
      className="relative min-h-screen pt-24 bg-[#0a0a0a] text-white px-6 md:px-16 
                 flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between overflow-hidden"
    >
      {/* 🔥 AMBIENT LIGHT */}
      <div className="absolute top-[-120px] right-[-120px] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/5 blur-[120px] rounded-full" />

      {/* 🔥 ROBOT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="order-1 md:order-2 w-full md:w-[650px] flex justify-center 
                   h-[200px] sm:h-[260px] md:h-[520px] mb-6 md:mb-0"
      >
        <div className="absolute w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-white/5 blur-[120px] rounded-full" />
        {mounted && <SplineScene />}
      </motion.div>

      {/* 🔥 TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="order-2 md:order-1 max-w-xl text-center md:text-left"
      >
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
          ENGINEERING <br />
          IDEAS <br />
          <span className="text-[#ff6a00]">
            INTO REALITY
          </span>
        </h1>

        <p className="mt-4 text-gray-400 text-sm md:text-lg">
          FinalForgeX provides SaaS project development, hardware and IoT project creation, admin dashboard design and development, software development services, website development, web design, and academic project building for students and innovators.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-[#ff6a00] px-5 py-3 rounded-xl"
          >
            Get Started
          </button>

          <button
            onClick={() => scrollToSection('work')}
            className="border border-[#ff6a00] px-5 py-3 rounded-xl text-[#ff6a00]"
          >
            View Work
          </button>
        </div>
      </motion.div>
    </section>
  );
}