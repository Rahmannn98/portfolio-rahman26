'use client';
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-6xl px-6 py-24 relative flex flex-col items-center">
      {/* Background Text Overlay */}
      <h2 className="absolute top-0 left-1/2 -translate-x-1/2 text-[8rem] md:text-[14rem] font-serif text-white/[0.02] select-none -z-10 tracking-widest pointer-events-none leading-none">
        Projects
      </h2>
      
      <div className="text-center mb-16 z-10">
        <p className="text-[#c19d67] font-serif italic mb-2">project</p>
        <h3 className="text-5xl font-serif">Work</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 z-10">
        {/* Project Card 1 */}
        <div className="group cursor-pointer">
          <div className="relative w-full aspect-video overflow-hidden mb-4 bg-gray-900 border border-gray-800">
            <Image src="/project1.jpg" alt="Thamrin Nine Hackathon" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="rotate-90 text-xs tracking-widest text-white whitespace-nowrap">VIEW</span>
            </div>
          </div>
          <p className="text-sm text-gray-300 mb-6 w-5/6">
            With team Faham im finish challenge hack the thamrin nine
          </p>
          <div className="flex justify-between items-center text-xs text-gray-400">
            <span>Team Work | <em className="text-gray-300">March 2025</em></span>
            <span className="text-[#c19d67] uppercase tracking-wider flex items-center gap-2">
              <div className="w-8 h-[1px] bg-[#c19d67]"></div>
              View Detail
            </span>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="group cursor-pointer">
          <div className="relative w-full aspect-video overflow-hidden mb-4 bg-gray-900 border border-gray-800">
            <Image src="/project2.jpg" alt="Apple Developer Academy Project" fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="rotate-90 text-xs tracking-widest text-white whitespace-nowrap">VIEW</span>
            </div>
          </div>
          <p className="text-sm text-gray-300 mb-6 w-5/6">
            With a strong foundation in technology and design, I am passionate about crafting user-centered digital experiences...
          </p>
          <div className="flex justify-between items-center text-xs text-gray-400">
            <span>iOS Developer | <em className="text-gray-300">March 2025</em></span>
            <span className="text-[#c19d67] uppercase tracking-wider flex items-center gap-2">
              <div className="w-8 h-[1px] bg-[#c19d67]"></div>
              View Detail
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}