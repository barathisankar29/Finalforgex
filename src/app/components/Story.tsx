'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export default function Story() {
  const { scrollYProgress } = useScroll();

  // TEXT
  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const opacity4 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

  // 🔥 BACKGROUND MOTION
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.8]);

  return (
    <section className="relative h-[300vh] bg-black text-white overflow-hidden">

      {/* 🔥 MOVING BACKGROUND */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">

        <motion.div
          style={{ scale: glowScale }}
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#ff6a00]/10 blur-[140px] rounded-full"
        />

        <motion.div
          style={{ scale: glowScale }}
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-[#ff6a00]/10 blur-[140px] rounded-full"
        />

      </motion.div>

      {/* CONTENT */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="relative text-center max-w-3xl px-6">

          <motion.h2 style={{ opacity: opacity1 }} className="text-3xl md:text-5xl font-bold">
            Most ideas never make it past the <span className="text-[#ff6a00]">starting point</span>.
          </motion.h2>

          <motion.h2 style={{ opacity: opacity2 }} className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl font-bold">
            Because building something real is <span className="text-[#ff6a00]">hard</span>.
          </motion.h2>

          <motion.h2 style={{ opacity: opacity3 }} className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl font-bold">
            Complexity kills momentum. <span className="text-[#ff6a00]">We remove it.</span>
          </motion.h2>

          <motion.h2 style={{ opacity: opacity4 }} className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl font-bold">
            This is where <span className="text-[#ff6a00]">FinalForgeX</span> takes over.
          </motion.h2>

        </div>
      </div>
    </section>
  );
}