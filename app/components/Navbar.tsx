'use client';

export default function Navbar() {
  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50 font-[family-name:var(--font-playfair)]">
      <nav className="flex justify-center items-center gap-8 md:gap-12 px-8 py-3.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl text-sm font-medium tracking-wide text-gray-300">
        <a href="#about" className="hover:text-white transition-colors">About Me</a>
        <a href="#projects" className="hover:text-white transition-colors">Project</a>
        <a href="#experiences" className="hover:text-white transition-colors">Experiences</a>
        
      </nav>
    </div>
  );
}