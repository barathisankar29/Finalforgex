import Navbar from "@/app/components/Navbar";
import Hero from "@/app/sections/Hero";
import About from "@/app/components/About";
import Services from "@/app/components/Services"; // ✅ add this
import Work from "@/app/components/Work";
import Team from "@/app/components/Team";
import Contact from "@/app/components/Contact";
export default function Home() {
  return (
    <main className="bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <About />
      <Services /> {/* ✅ add this */}
      <Work />
      <Team />
      <Contact />
    </main>
  );
}