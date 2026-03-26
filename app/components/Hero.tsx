'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import { SiNextdotjs, SiReact, SiTailwindcss, SiFramer } from "react-icons/si";

export default function Hero() {
    return (
        <section id="about" className="w-full max-w-7xl px-6 pt-52 pb-32 relative flex flex-col items-center">
            <h1
                className="absolute top-24 left-1/2 -translate-x-1/2 text-[12rem] md:text-[18rem] lg:text-[22rem] font-[family-name:var(--font-playfair)] font-bold select-none pointer-events-none -z-10 leading-none"
                style={{
                    background: "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                    filter: "drop-shadow(0px 10px 15px rgba(255, 255, 255, 0.1))"
                }}
            >
                Prologue
            </h1>

            <div className="w-full max-w-5xl flex flex-col md:flex-row gap-12 items-center md:items-start justify-between z-10 mt-20">

                <motion.div
                    className="relative flex-shrink-0 w-[320px] h-[420px] cursor-pointer"
                    initial="rest"
                    whileHover="hover"
                >
                    <div className="absolute -bottom-4 -left-8 w-70 z-40 pointer-events-none opacity-80">
                        <img src="/arrow-path.png" alt="decoration" className="w-full h-auto" />
                    </div>

                    {/* KARTU BELAKANG */}
                    <motion.div
                        className="absolute top-0 left-0 p-3 pb-16 origin-bottom-right"
                        variants={{
                            // Nilai x diubah dari 24 menjadi 8 agar lebih ke kiri
                            rest: { rotate: 12, x: 0, y: 24, scale: 0.95, zIndex: 10 },

                            hover: { rotate: -4, x: 0, y: 0, scale: 1, zIndex: 30 }
                        }}

                        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                    >
                        <div className="relative w-64 h-80 overflow-hidden shadow-xl">
                            <Image src="/belakang.png" alt="Secondary Profile" fill />
                        </div>
                    </motion.div>
                    
                    {/* KARTU DEPAN */}
                    <motion.div
                        className="absolute top-0 left-0 p-5 pb-16 origin-bottom-left"
                        variants={{

                            rest: { rotate: -4, x: 0, y: 0, scale: 1, zIndex: 20 },
                            
                            // Nilai x di sini juga wajib diubah dari 24 menjadi 8 agar simetris
                            hover: { rotate: 12, x: 8, y: 24, scale: 0.95, zIndex: 10 }
                        }}
                        transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                    >
                        <div className="relative w-64 h-80 overflow-hidden shadow-2xl">
                            <Image src="/dpn.png" alt="Main Profile" fill />
                        </div>
                    </motion.div>
                </motion.div>

                <div className="flex-1 text-left relative md:mt-10">
                    <h2 className="text-5xl md:text-6xl font-[family-name:var(--font-playfair)] italic mb-10 text-white tracking-wide">
                        Saifulloh Rahman
                    </h2>

                    <div className="flex gap-5">
                        <div className="flex flex-col items-center pt-2 gap-3 w-4">
                            <div className="h-full w-[1px] bg-white"></div>
                            <span className="tracking-[0.4em] text-[10px] uppercase rotate-90 origin-center text-white font-light translate-y-6">ABOUT</span>
                        </div>

                        <div className="pl-6">
                            <p className="text-gray-300 leading-relaxed text-base font-extralight tracking-wide max-w-lg">
                                With a strong foundation in technology and design, I am passionate about crafting user-centered digital experiences that are both functional and engaging. As a learner in the first cohort at the
                                <span className="text-[#a37e4c] font-medium ml-1">
                                    Apple Developer Academy @UC Jakarta
                                </span>
                            </p>

                            <div className="flex gap-6 mt-8 text-white/50">
                                <SiNextdotjs className="w-7 h-7 hover:text-white transition-colors cursor-pointer hover:scale-110 duration-300" title="Next.js" />
                                <SiReact className="w-7 h-7 hover:text-[#61DAFB] transition-colors cursor-pointer hover:scale-110 duration-300" title="React" />
                                <SiTailwindcss className="w-7 h-7 hover:text-[#38B2AC] transition-colors cursor-pointer hover:scale-110 duration-300" title="Tailwind CSS" />
                                <SiFramer className="w-7 h-7 hover:text-white transition-colors cursor-pointer hover:scale-110 duration-300" title="Framer Motion" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}