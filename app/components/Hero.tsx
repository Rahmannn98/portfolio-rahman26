'use client';
import Image from "next/image";

export default function Hero() {
    return (
        <section id="about" className="w-full max-w-7xl px-6 pt-52 pb-32 relative flex flex-col items-center">
            <h1
                // Pakai font-[family-name:var(--font-playfair)]
                className="absolute top-24 left-1/2 -translate-x-1/2 text-[12rem] md:text-[18rem] lg:text-[22rem] font-[family-name:var(--font-playfair)] select-none pointer-events-none -z-10 leading-none"
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
                <div className="relative group flex-shrink-0 w-[320px] h-[420px] cursor-pointer">
                    {/* --- FIX ARROW PATH --- */}
                    <div className="absolute -bottom-4 -left-8 w-70 z-40 pointer-events-none">
                        {/* Menggunakan z-40 agar selalu di atas kartu belakang (z-30) */}
                        <img
                            src="/arrow-path.png"
                            alt="decoration"
                            className="w-full h-auto opacity-80 group-hover:opacity-100"
                        />
                    </div>
                    {/* --- ARROW PATH END --- */}

                    {/* GAMBAR 2 (Kartu Belakang) */}
                    <div className="absolute top-6 left-6 p-3 pb-16 rotate-[6deg] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-0 group-hover:translate-x-4 group-hover:translate-y-[-10px] group-hover:z-30 z-10">
                        <div className="relative w-64 h-80 overflow-hidden">
                            <Image
                                src="/belakang.png"
                                alt="Secondary Profile"
                                fill
                            />
                        </div>
                    </div>

                    {/* GAMBAR 1 (Kartu Depan) */}
                    <div className="absolute top-0 left-0 p-3 pb-16  rotate-[-4deg] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-[-12deg] group-hover:-translate-x-12 group-hover:z-0 z-20">
                        <div className="relative w-64 h-80 overflow-hidden">
                            <Image
                                src="/dpn.png"
                                alt="Main Profile"
                                fill
                            />
                        </div>
                    </div>
                </div>

                {/* 3. Teks Biografi Section */}
                <div className="flex-1 text-left relative md:mt-10">
                    {/* Pakai font-[family-name:var(--font-playfair)] */}
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
                                {/* Gunakan logo asli stack teknologi kamu di sini */}
                                <div className="w-6 h-6 bg-white/10 rounded-full"></div>
                                <div className="w-6 h-6 bg-white/10 rounded-full"></div>
                                <div className="w-6 h-6 bg-white/10 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}