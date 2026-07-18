'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import {
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiFramer,
} from "react-icons/si";

const backCardVariants = {
    rest: {
        x: 0,
        y: 24,
        rotate: 10,
        scale: 0.94,
        zIndex: 10,
    },
    hover: {
        x: -35,
        y: -12,
        rotate: -8,
        scale: 1,
        zIndex: 30,
    },
};

const frontCardVariants = {
    rest: {
        x: 0,
        y: 0,
        rotate: -5,
        scale: 1,
        zIndex: 20,
    },
    hover: {
        x: 45,
        y: 28,
        rotate: 9,
        scale: 0.96,
        zIndex: 10,
    },
};

const cardTransition = {
    type: "spring" as const,
    stiffness: 160,
    damping: 18,
    mass: 0.9,
};

export default function Hero() {
    return (
        <section
            id="about"
            className="
                relative
                flex
                w-full
                max-w-5xl
                flex-col
                items-center
                px-6
                pt-52
                pb-32
            "
        >
            {/* Background title */}
            <h1
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    top-24
                    left-1/2
                    -z-10
                    -translate-x-1/2
                    whitespace-nowrap
                    select-none
                    font-[family-name:var(--font-playfair)]
                    font-bold
                    leading-none
                "
                style={{
                    fontSize: "clamp(5rem, 20vw, 22rem)",
                    background:
                        "linear-gradient(180deg, rgba(193,157,103,0.22) 0%, rgba(193,157,103,0.02) 85%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                    filter:
                        "drop-shadow(0 14px 30px rgba(193,157,103,0.06))",
                }}
            >
                Prologue
            </h1>

            <div
                className="
                    z-10
                    mt-20
                    flex
                    w-full
                    max-w-5xl
                    flex-col
                    items-center
                    justify-between
                    gap-12
                    md:flex-row
                    md:items-start
                "
            >
                {/* Profile cards */}
                <motion.div
                    className="
                        relative
                        h-[420px]
                        w-[340px]
                        flex-shrink-0
                        cursor-pointer
                    "
                    initial="rest"
                    animate="rest"
                    whileHover="hover"
                    whileTap="hover"
                >
                    {/* Arrow decoration */}
                    <motion.div
                        className="
                            pointer-events-none
                            absolute
                            -bottom-4
                            -left-8
                            z-40
                            w-72
                        "
                        variants={{
                            rest: {
                                x: 0,
                                rotate: 0,
                                opacity: 0.7,
                            },
                            hover: {
                                x: -8,
                                rotate: -3,
                                opacity: 1,
                            },
                        }}
                        transition={cardTransition}
                    >
                        <Image
                            src="/arrow-path.png"
                            alt=""
                            width={288}
                            height={160}
                            className="h-auto w-full"
                        />
                    </motion.div>

                    {/* Back card */}
                    <motion.div
                        className="
                            absolute
                            top-0
                            left-7
                            origin-bottom-right
                        "
                        variants={backCardVariants}
                        transition={cardTransition}
                    >
                        <div
                            className="
                                h-80
                                w-64
                                overflow-hidden
                                shadow-xl
                            "
                        >
                            <Image
                                src="/blkg.png"
                                alt="Secondary profile"
                                width={256}
                                height={320}
                                className="
                                    block
                                    h-full
                                    w-full
                                    object-contain
                                "
                            />
                        </div>
                    </motion.div>

                    {/* Front card */}
                    <motion.div
                        className="
                            absolute
                            top-0
                            left-7
                            origin-bottom-left
                        "
                        variants={frontCardVariants}
                        transition={cardTransition}
                    >
                        <div
                            className="
                                h-80
                                w-64
                                overflow-hidden
                                shadow-2xl
                            "
                        >
                            <Image
                                src="/dpn-1.png"
                                alt="Main profile"
                                width={256}
                                height={320}
                                priority
                                className="
                                    block
                                    h-full
                                    w-full
                                    object-contain
                                "
                            />
                        </div>
                    </motion.div>
                </motion.div>

                {/* About content */}
                <div className="relative flex-1 text-left md:mt-10">
                    <h2
                        className="
                            mb-10
                            font-[family-name:var(--font-playfair)]
                            text-5xl
                            italic
                            tracking-wide
                            text-white
                            md:text-6xl
                        "
                    >
                        Saifulloh Rahman
                    </h2>

                    <div className="flex gap-5">
                        <div
                            className="
                                flex
                                w-4
                                flex-col
                                items-center
                                gap-3
                                pt-2
                            "
                        >
                            <div className="h-full w-px bg-white" />

                            <span
                                className="
                                    origin-center
                                    translate-y-6
                                    rotate-90
                                    text-[10px]
                                    font-light
                                    tracking-[0.4em]
                                    text-white
                                    uppercase
                                "
                            >
                                About
                            </span>
                        </div>

                        <div className="pl-6">
                            <p className="text-gray-300 leading-relaxed text-base font-extralight tracking-wide max-w-lg">
                                With a multidisciplinary foundation in technology and design, I'm passionate about transforming early ideas into meaningful digital experiences through thoughtful design, technical exploration, and a deep understanding of user needs. I aim to create products that are not only functional and intuitive, but also engaging and useful. I'm currently part of the first cohort of{" "}
                                <span className="font-[family-name:var(--font-playfair)] font-medium italic text-[#c19d67]">
                                    Apple Developer Academy @UC Jakarta
                                </span>
                                , where I’m strengthening my capabilities in product development,
                                collaboration, and creative problem-solving.
                            </p>

                            <div className="mt-8 flex gap-6 text-white/50">
                                <SiNextdotjs
                                    className="
                                        h-7
                                        w-7
                                        cursor-pointer
                                        transition-all
                                        duration-300
                                        hover:scale-110
                                        hover:text-white
                                    "
                                    title="Next.js"
                                />

                                <SiReact
                                    className="
                                        h-7
                                        w-7
                                        cursor-pointer
                                        transition-all
                                        duration-300
                                        hover:scale-110
                                        hover:text-[#61DAFB]
                                    "
                                    title="React"
                                />

                                <SiTailwindcss
                                    className="
                                        h-7
                                        w-7
                                        cursor-pointer
                                        transition-all
                                        duration-300
                                        hover:scale-110
                                        hover:text-[#38B2AC]
                                    "
                                    title="Tailwind CSS"
                                />

                                <SiFramer
                                    className="
                                        h-7
                                        w-7
                                        cursor-pointer
                                        transition-all
                                        duration-300
                                        hover:scale-110
                                        hover:text-white
                                    "
                                    title="Framer Motion"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}