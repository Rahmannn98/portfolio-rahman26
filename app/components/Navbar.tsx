'use client';
import Image from "next/image";

export default function Navbar() {
    return (
    
        <div className="fixed top-6 md:top-8 left-1/2 -translate-x-1/2 z-50 font-[family-name:var(--font-playfair)] w-[95%] md:w-auto flex justify-center">

            <nav className="flex justify-center items-center gap-4 sm:gap-6 md:gap-12 px-6 py-3 md:px-8 md:py-3.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl text-[11px] sm:text-xs md:text-sm font-medium tracking-wide text-gray-300">

                <Image
                    src="/Rahman.png"
                    alt="Logo"
                    width={80}
                    height={80}
                    className="w-12 sm:w-16 md:w-20 h-auto mr-1 md:mr-4 shrink-0"
                />

                <a href="#about" className="relative group text-gray-300 hover:text-white transition-colors duration-300 whitespace-nowrap">
                    About Me
                    <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
                </a>

                <a href="#projects" className="relative group text-gray-300 hover:text-white transition-colors duration-300 whitespace-nowrap">
                    Project
                    <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
                </a>
                <a href="#experiences" className="relative group text-gray-300 hover:text-white transition-colors duration-300 whitespace-nowrap">
                    Experiences
                    <span className="absolute -bottom-1 left-1/2 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"></span>
                </a>

            </nav>
        </div>
    );
}