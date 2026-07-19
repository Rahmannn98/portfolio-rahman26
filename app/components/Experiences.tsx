'use client';

const workExperiences = [
    {
        role: "IT Support",
        company: "SOLUSI MEDIA SEMESTA",
        period: "June 2025",
        location: "Jakarta, Indonesia",
        descriptions: [
            "Coordinated with the Cyber Jakarta team to diagnose and resolve connectivity issues on client modems.",
            "Supported LFM partners during network maintenance and service-recovery activities.",
        ],
    },
    {
        role: "Front-End Developer",
        company: "BHAKTI WIDYA PHARMA",
        period: "September 2023 – January 2024",
        location: "Indonesia",
        descriptions: [
            "Designed and developed responsive interfaces for the company’s internal applications.",
            "Worked with cross-functional teams to translate operational requirements into clear, functional user flows.",
        ],
    },
    {
        role: "UI Developer Intern",
        company: "DEPARTMENT OF COMMUNICATION AND INFORMATICS",
        period: "June – August 2023",
        location: "Indonesia",
        descriptions: [
            "Designed and implemented the interface for a children’s media-literacy website.",
            "Collaborated with department staff to present educational content in an accessible, age-appropriate format.",
        ],
    },
];

const education = [
    {
        title: "Learner",
        institution: "APPLE DEVELOPER ACADEMY @UC JAKARTA",
        period: "2026 – Present",
        location: "Jakarta, Indonesia",
        descriptions: [
            "Building iOS products through challenge-based learning, user research, prototyping, and iterative development.",
            "Expanding practical experience with SwiftUI, ARKit, RealityKit, product design, and multidisciplinary collaboration.",
        ],
    },
    {
        title: "Bachelor of Informatics",
        institution: "UDAYANA UNIVERSITY",
        period: "Graduated 2025",
        location: "Bali, Indonesia",
        descriptions: [
            "Graduated with a 3.83 GPA, with a focus on user interface and user experience design.",
            "Completed a capstone redesign of Gahita.com using user-centered design and System Usability Scale evaluation.",
        ],
    },
    {
        title: "Apple Developer Foundation Program",
        institution: "APPLE DEVELOPER ACADEMY @UC SURABAYA",
        period: "2024",
        location: "Surabaya, Indonesia",
        descriptions: [
            "Completed a four-week challenge-based program covering Swift, iOS development, app design, and teamwork.",
            "Applied Apple’s Human Interface Guidelines to design and prototype a user-centered mobile experience.",
        ],
    },
];

export default function Experiences() {
    return (
        <section
            id="experiences"
            className="relative w-full overflow-hidden px-6 py-28 md:px-10 md:py-36"
        >
            <h2
                aria-hidden="true"
                className="pointer-events-none absolute top-8 left-1/2 -z-10 -translate-x-1/2 whitespace-nowrap select-none font-[family-name:var(--font-playfair)] text-[6rem] leading-none font-bold md:top-2 md:text-[13rem] lg:text-[18rem]"
                style={{
                    background:
                        "linear-gradient(180deg, rgba(193,157,103,0.22) 0%, rgba(193,157,103,0.02) 85%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter: "drop-shadow(0 14px 30px rgba(193,157,103,0.06))",
                }}
            >
                Journey
            </h2>

            <div className="mx-auto w-full max-w-7xl">
                <header className="relative z-10 mb-20 text-center md:mb-28">
                    <p className="mb-3 font-[family-name:var(--font-playfair)] text-sm italic tracking-wide text-[#c19d67]">
                        Experience & Growth
                    </p>
                    <h3 className="font-[family-name:var(--font-playfair)] text-4xl text-white md:text-6xl">
                        Professional Journey
                    </h3>
                </header>

                <div className="relative z-10 grid grid-cols-1 gap-20 lg:grid-cols-[70px_1fr_1fr] lg:gap-14">
                    <div className="hidden items-start justify-center lg:flex">
                        <div className="sticky top-32 flex flex-col items-center gap-5">
                            <span className="[writing-mode:vertical-rl] rotate-180 text-[10px] uppercase tracking-[0.55em] text-white/60">
                                Background
                            </span>
                            <div className="h-14 w-px bg-white/40" />
                        </div>
                    </div>

                    <ExperienceColumn
                        eyebrow="Professional"
                        heading="Work Experience"
                        items={workExperiences.map((item) => ({
                            title: item.role,
                            subtitle: item.company,
                            period: item.period,
                            location: item.location,
                            descriptions: item.descriptions,
                        }))}
                    />

                    <ExperienceColumn
                        eyebrow="Academic"
                        heading="Education & Development"
                        highlight
                        items={education.map((item) => ({
                            title: item.title,
                            subtitle: item.institution,
                            period: item.period,
                            location: item.location,
                            descriptions: item.descriptions,
                        }))}
                    />
                </div>
            </div>
        </section>
    );
}

interface ExperienceEntry {
    title: string;
    subtitle: string;
    period: string;
    location: string;
    descriptions: string[];
}

interface ExperienceColumnProps {
    eyebrow: string;
    heading: string;
    items: ExperienceEntry[];
    highlight?: boolean;
}

function ExperienceColumn({
    eyebrow,
    heading,
    items,
    highlight = false,
}: ExperienceColumnProps) {
    return (
        <div>
            <div className="mb-12">
                <p className="mb-3 text-[10px] uppercase tracking-[0.4em] text-white/35">
                    {eyebrow}
                </p>
                <h4 className="font-[family-name:var(--font-playfair)] text-4xl leading-tight text-white md:text-5xl">
                    {heading}
                </h4>
            </div>

            <div className="space-y-14">
                {items.map((item) => (
                    <ExperienceItem
                        key={`${item.title}-${item.period}`}
                        {...item}
                        highlight={highlight}
                    />
                ))}
            </div>
        </div>
    );
}

interface ExperienceItemProps extends ExperienceEntry {
    highlight?: boolean;
}

function ExperienceItem({
    title,
    subtitle,
    period,
    location,
    descriptions,
    highlight = false,
}: ExperienceItemProps) {
    return (
        <article className="group relative border-t border-white/10 pt-7 transition-colors duration-500 hover:border-[#c19d67]/60">
            <div className="absolute top-[-1px] left-0 h-px w-0 bg-[#c19d67] transition-all duration-500 group-hover:w-20" />

            <h5
                className={`mb-3 text-sm leading-relaxed font-semibold uppercase tracking-[0.08em] transition-colors duration-300 ${
                    highlight ? "text-[#d5b27b]" : "text-white"
                }`}
            >
                {title}
            </h5>

            <p className="mb-6 text-sm leading-relaxed font-light italic tracking-wide text-white/45">
                {subtitle}
            </p>

            <p className="mb-6 text-sm leading-relaxed text-white/50">
                {period}
                <span className="mx-2 text-white/25">|</span>
                <em className="text-white/40">{location}</em>
            </p>

            <ul className="space-y-3">
                {descriptions.map((description) => (
                    <li
                        key={description}
                        className="flex items-start gap-4 text-sm leading-7 text-white/50 transition-colors duration-300 group-hover:text-white/70"
                    >
                        <span className="mt-[11px] h-1 w-1 flex-shrink-0 rounded-full bg-[#c19d67]" />
                        <span>{description}</span>
                    </li>
                ))}
            </ul>
        </article>
    );
}