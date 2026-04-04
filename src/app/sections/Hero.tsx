'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const SplineScene = dynamic(() => import('@/app/components/SplineScene'), {
  ssr: false,
});

export default function Hero() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  return (
    <section className="relative min-h-screen pt-20 bg-[#0a0a0a] text-white px-6 md:px-16 flex flex-col md:flex-row items-center justify-between overflow-hidden">

      {/* 🔥 SUBTLE AMBIENT LIGHT */}
      <div className="absolute top-[-100px] right-[-100px] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-white/5 blur-[100px] md:blur-[120px] rounded-full"></div>

      {/* LEFT SIDE */}
      <div className="max-w-xl z-10 text-center md:text-left">
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

        {/* BUTTONS */}
        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button className="bg-[#ff6a00] px-5 py-2.5 md:px-6 md:py-3 rounded-xl font-medium shadow-[0_0_20px_rgba(255,106,0,0.4)] hover:scale-105 transition">
            Get Started
          </button>

          <button className="border border-[#ff6a00] px-5 py-2.5 md:px-6 md:py-3 rounded-xl text-[#ff6a00] hover:bg-[#ff6a00] hover:text-black transition">
            View Work
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative w-full md:w-[650px] mt-10 md:mt-0 z-10 flex items-center justify-center h-[260px] sm:h-[320px] md:h-[520px]">

        {/* 🔥 GLOW */}
        <div className="absolute w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-white/5 blur-[100px] md:blur-[120px] rounded-full"></div>

        {/* ✅ ONLY ONE INSTANCE */}
        {isDesktop ? (
          <SplineScene />
        ) : (
          <img
            src="/robot-preview.png"
            alt="Robot Preview"
            className="w-full h-full object-cover"
          />
        )}

      </div>

    </section>
  );
}