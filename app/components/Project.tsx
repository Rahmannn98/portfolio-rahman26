'use client';
import Image from "next/image";

const projects = [
  {
    src: "/gigiku.png",
    alt: "GiguKU – Oral Health App",
    title: "GiguKU",
    subtitle: "Oral Health App",
    role: "Team Work",
    date: "March 2025",
    desc: "With team Faham, finished the challenge hack at Thamrin Nine.",
  },
  {
    src: "/globeku.png",
    alt: "GlobeKu – Augmented Reality App",
    title: "GlobeKu",
    subtitle: "Augmented Reality App",
    role: "iOS Developer",
    date: "March 2025",
    desc: "Crafting user-centered digital experiences that are both functional and engaging.",
  },
  {
    src: "/gotogether.png",
    alt: "GoTogether",
    title: "GoTogether",
    subtitle: "Social Travel App",
    role: "iOS Developer",
    date: "March 2025",
    desc: "Crafting user-centered digital experiences that are both functional and engaging.",
  },
  {
    src: "/redesign.png",
    alt: "Redesign Project",
    title: "Redesign",
    subtitle: "UI/UX Case Study",
    role: "iOS Developer",
    date: "March 2025",
    desc: "Crafting user-centered digital experiences that are both functional and engaging.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-6xl px-6 py-24 relative flex flex-col items-center">

      {/* Background watermark */}
      <h2
        className="absolute top-0 left-1/2 -translate-x-1/2 font-[family-name:var(--font-playfair)] font-bold select-none pointer-events-none -z-10 leading-none whitespace-nowrap"
        style={{
          fontSize: "clamp(4rem, 18vw, 22rem)",
          background: "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
          filter: "drop-shadow(0px 10px 15px rgba(255, 255, 255, 0.1))"
        }}
      >
        Project
      </h2>

      {/* Section header */}
      <div className="text-center mb-20 z-10">
        <p className="text-[#c19d67] font-[family-name:var(--font-playfair)] italic mb-2 tracking-widest text-sm uppercase">
          Selected
        </p>
        <h3 className="text-5xl font-[family-name:var(--font-playfair)] text-white tracking-tight">
          Work
        </h3>
        <div className="mt-4 mx-auto w-12 h-[1px] bg-[#c19d67]/50" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 z-10 w-full">
        {projects.map((project, i) => (
          <div key={i} className="group cursor-pointer flex flex-col">

            {/* Index number */}
            <div className="flex items-center gap-3 mb-3">
              <span
                className="font-[family-name:var(--font-playfair)] italic text-[#c19d67]/60 text-sm"
                style={{ fontVariantNumeric: "oldstyle-nums" }}
              >
                0{i + 1}
              </span>
              <div className="flex-1 h-[1px] bg-white/10" />
            </div>

            {/* Image container */}
            <div
              className="relative w-full overflow-hidden mb-5"
              style={{
                aspectRatio: "16 / 10",
                background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"  
                className="object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span
                  className="border border-[#c19d67]/70 text-[#c19d67] text-xs tracking-[0.3em] uppercase px-5 py-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  View Project
                </span>
              </div>
            </div>

            {/* Card body */}
            <div className="flex flex-col gap-2 flex-1">
              <div className="flex items-baseline gap-2">
                <h4 className="text-white font-[family-name:var(--font-playfair)] text-xl tracking-wide">
                  {project.title}
                </h4>
                <span className="text-[#c19d67]/70 font-[family-name:var(--font-playfair)] italic text-sm">
                  — {project.subtitle}
                </span>
              </div>

              <p className="text-gray-400 text-sm font-light leading-relaxed tracking-wide mt-1 max-w-sm">
                {project.desc}
              </p>

              <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
                <span className="text-xs text-gray-500 tracking-wider">
                  {project.role} &nbsp;·&nbsp; <em className="text-gray-400 not-italic">{project.date}</em>
                </span>
                <span className="text-[#c19d67] text-xs tracking-[0.2em] uppercase flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  <span>Detail</span>
                  <div className="w-6 h-[1px] bg-[#c19d67] group-hover:w-10 transition-all duration-300" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}