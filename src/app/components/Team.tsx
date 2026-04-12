'use client';

import { motion } from 'framer-motion';

const team = [
  {
    name: 'Lingesh',
    role: 'Operations & Project Lead',
    desc: 'Orchestrates project execution and ensures seamless delivery across all departments.',
    image: '/team1.jpeg',
  },
  {
    name: 'Jaison',
    role: 'Full Stack Developer',
    desc: 'Builds robust web and mobile applications with modern frameworks and best practices.',
    image: '/team2.jpeg',
  },
  {
    name: 'Barathi Sankar',
    role: 'UI/UX Designer',
    desc: 'Designs intuitive interfaces and delightful user experiences that drive engagement.',
    image: '/team3.jpeg',
  },
  {
    name: 'Derin',
    role: 'Content Creator & Graphic Designer',
    desc: 'Crafts compelling visual narratives and engaging content that resonates with audiences.',
    image: '/team4.jpeg',
  },
  {
    name: 'Abishek',
    role: 'Database Administrator',
    desc: 'Manages data architecture and ensures optimal performance, security, and scalability.',
    image: '/team5.jpeg',
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="relative bg-[#0a0a0a] text-white px-6 md:px-16 py-32 overflow-hidden"
    >

      {/* 🎬 VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 scale-110"
      >
        <source src="/team-bg.mp4" type="video/mp4" />
      </video>

      {/* 🌫 DARK OVERLAY (IMPORTANT FOR READABILITY) */}
      <div className="absolute inset-0 bg-[#0a0a0a]/20"></div>

      {/* 🌫 GRADIENT FADE */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/40 to-[#0a0a0a]" />

      {/* 🔥 MAIN CONTENT */}
      <div className="relative z-10">

        {/* TITLE */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold">
            MEET THE <span className="text-[#ff6a00]">CORE TEAM</span>
          </h2>

          <p className="mt-4 text-gray-400">
            The engineers and creators behind FinalForgeX
          </p>
        </div>

        {/* TIMELINE WRAPPER */}
        <div className="relative">

          {/* CENTER LINE */}
          <div className="hidden md:block absolute left-1/2 top-0 w-[1px] h-full bg-[#ff6a00]/20" />

          {/* MEMBERS */}
          <div className="space-y-28">

            {team.map((member, i) => {
              const isRight = i % 2 !== 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isRight ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row items-center gap-10"
                >

                  {/* LEFT */}
                  {!isRight && (
                    <>
                      <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative">
                          <div className="absolute inset-0 rounded-full bg-[#ff6a00]/20 blur-2xl" />
                          <img
                            src={member.image}
                            className="relative w-[180px] h-[180px] rounded-full border border-[#ff6a00]/40"
                          />
                        </div>
                      </div>

                      <div className="w-full md:w-1/2">
                        <div className="p-6 rounded-2xl border border-[#ff6a00]/20 bg-white/5 backdrop-blur-xl">
                          <h3 className="text-xl font-bold">{member.name}</h3>

                          <p className="mt-1 text-[#ff6a00] text-sm">
                            {member.role}
                          </p>

                          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                            {member.desc}
                          </p>
                        </div>
                      </div>
                    </>
                  )}

                  {/* RIGHT */}
                  {isRight && (
                    <>
                      <div className="w-full md:w-1/2">
                        <div className="p-6 rounded-2xl border border-[#ff6a00]/20 bg-white/5 backdrop-blur-xl">
                          <h3 className="text-xl font-bold">{member.name}</h3>

                          <p className="mt-1 text-[#ff6a00] text-sm">
                            {member.role}
                          </p>

                          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                            {member.desc}
                          </p>
                        </div>
                      </div>

                      <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative">
                          <div className="absolute inset-0 rounded-full bg-[#ff6a00]/20 blur-2xl" />
                          <img
                            src={member.image}
                            className="relative w-[180px] h-[180px] rounded-full border border-[#ff6a00]/40"
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* DOT */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#ff6a00] rounded-full shadow-[0_0_10px_#ff6a00]" />

                </motion.div>
              );
            })}

          </div>
        </div>
      </div>
    </section>
  );
}