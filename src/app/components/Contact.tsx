'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert('Message sent 🚀');
      setForm({ name: '', email: '', message: '' }); // reset
    } else {
      alert('Error sending message');
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#0a0a0a] text-white px-6 md:px-16 py-32"
    >

      {/* TITLE */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold">
          LET’S <span className="text-[#ff6a00]">BUILD TOGETHER</span>
        </h2>

        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          Have an idea? Let’s turn it into reality.
        </p>
      </div>

      {/* FORM */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto p-8 rounded-2xl border border-[#ff6a00]/20 bg-white/5 backdrop-blur-xl"
      >
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* NAME */}
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-[#111] border border-white/10 focus:border-[#ff6a00] outline-none"
          />

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-[#111] border border-white/10 focus:border-[#ff6a00] outline-none"
          />

          {/* MESSAGE */}
          <textarea
            rows={4}
            placeholder="Your Message"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="w-full p-3 rounded-lg bg-[#111] border border-white/10 focus:border-[#ff6a00] outline-none"
          />

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-3 bg-[#ff6a00] rounded-lg font-medium hover:scale-[1.02] transition"
          >
            Send Message
          </button>

        </form>
      </motion.div>

      {/* FOOTER */}
      <div className="mt-24 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2026 FinalForgeX. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          {['Home', 'Services', 'Work', 'Contact'].map((item) => (
            <span
              key={item}
              onClick={() =>
                document
                  .getElementById(item.toLowerCase())
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="hover:text-[#ff6a00] cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

    </section>
  );
}