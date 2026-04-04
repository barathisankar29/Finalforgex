'use client';

import SplineScene from '@/app/components/SplineScene';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 bg-[#0a0a0a] text-white px-6 md:px-16 flex flex-col md:flex-row items-center justify-between overflow-hidden">

      {/* 🔥 SUBTLE AMBIENT LIGHT (instead of orange blob) */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full"></div>

      {/* LEFT SIDE */}
      <div className="max-w-xl z-10">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-wide">
          ENGINEERING <br />
          IDEAS <br />
          <span className="text-[#ff6a00] drop-shadow-[0_0_10px_rgba(255,106,0,0.6)]">
            INTO REALITY
          </span>
        </h1>

        <p className="mt-6 text-gray-400 leading-relaxed">
          FinalForgeX specializes in cutting-edge SaaS development, IoT
          systems, premium dashboards, and full-stack web solutions.
          We transform complex technical challenges into elegant,
          scalable products.
        </p>

        {/* BUTTONS */}
        <div className="mt-8 flex gap-4">
          <button className="bg-[#ff6a00] px-6 py-3 rounded-xl font-medium shadow-[0_0_20px_rgba(255,106,0,0.4)] hover:scale-105 transition">
            Get Started
          </button>

          <button className="border border-[#ff6a00] px-6 py-3 rounded-xl text-[#ff6a00] hover:bg-[#ff6a00] hover:text-black transition">
            View Work
          </button>
        </div>
      </div>

      {/* RIGHT SIDE - SPLINE */}
      <div className="relative w-full md:w-[650px] h-[520px] mt-12 md:mt-0 z-10 flex items-center justify-center">

        {/* 🔥 VERY SUBTLE GLOW (neutral, not orange) */}
        <div className="absolute w-[400px] h-[400px] bg-white/5 blur-[120px] rounded-full"></div>

        {/* SPLINE MODEL */}
        <SplineScene />

      </div>

    </section>
  );
}