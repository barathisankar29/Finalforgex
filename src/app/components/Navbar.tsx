export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[#ff6a00]/20">

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-xl font-bold">
          Final<span className="text-[#ff6a00]">ForgeX</span>
        </h1>

        {/* NAV LINKS */}
        <nav className="hidden md:flex gap-8 text-gray-300">
          <a href="#" className="text-[#ff6a00] relative">
            Home
            <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#ff6a00]"></span>
          </a>
          <a href="#" className="hover:text-white transition">About</a>
          <a href="#" className="hover:text-white transition">Services</a>
          <a href="#" className="hover:text-white transition">Work</a>
          <a href="#" className="hover:text-white transition">Team</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </nav>

        {/* CTA BUTTON */}
        <button className="bg-[#ff6a00] px-5 py-2 rounded-xl font-medium shadow-[0_0_20px_rgba(255,106,0,0.4)] hover:opacity-90 transition">
          Get Started
        </button>

      </div>
    </header>
  );
}