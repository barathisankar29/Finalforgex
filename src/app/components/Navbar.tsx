'use client';

import { useEffect, useState } from 'react';

const sections = ['home', 'about', 'services', 'work', 'team', 'contact'];

export default function Navbar() {
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔥 SCROLL DETECTION
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let current = 'home';

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120;

          if (window.scrollY >= top) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🔥 SCROLL FUNCTION (WITH OFFSET)
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const yOffset = -80; // header height adjust
    const y =
      el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
    setMenuOpen(false); // close mobile menu
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition ${
        scrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-xl shadow-lg'
          : 'bg-[#0a0a0a]/70 backdrop-blur-md'
      } border-b border-[#ff6a00]/20`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={() => scrollTo('home')}
        >
          Final<span className="text-[#ff6a00]">ForgeX</span>
        </h1>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 text-gray-300">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => scrollTo(sec)}
              className={`relative capitalize transition ${
                active === sec ? 'text-[#ff6a00]' : 'hover:text-white'
              }`}
            >
              {sec}
              {active === sec && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#ff6a00]" />
              )}
            </button>
          ))}
        </nav>

        {/* 🔥 DESKTOP GET STARTED */}
        <button
          onClick={() => scrollTo('contact')}
          className="hidden md:block bg-[#ff6a00] px-5 py-2 rounded-xl font-medium hover:scale-105 transition shadow-[0_0_15px_rgba(255,106,0,0.4)]"
        >
          Get Started
        </button>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* 📱 MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl px-6 py-6 space-y-4">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => scrollTo(sec)}
              className={`block w-full text-left capitalize ${
                active === sec ? 'text-[#ff6a00]' : 'text-gray-300'
              }`}
            >
              {sec}
            </button>
          ))}

          {/* 🔥 MOBILE GET STARTED */}
          <button
            onClick={() => scrollTo('contact')}
            className="w-full mt-4 bg-[#ff6a00] px-5 py-2 rounded-xl font-medium"
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}