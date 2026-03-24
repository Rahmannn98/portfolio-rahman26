'use client';
export default function Navbar() {
  return (
    <nav className="w-full max-w-4xl pt-8 flex justify-center gap-12 text-sm tracking-wide z-10">
      <a href="#about" className="hover:text-white transition-colors">About Me</a>
      <a href="#projects" className="hover:text-white transition-colors">Project</a>
      <a href="#experiences" className="hover:text-white transition-colors">Experiences</a>
    </nav>
  );
}