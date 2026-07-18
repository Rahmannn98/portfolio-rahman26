'use client';

const workExperiences = [
    {
        role: "Apple Developer Academy Learner",
        company: "APPLE DEVELOPER ACADEMY @UC JAKARTA",
        period: "2026 – Present",
        location: "Jakarta, Indonesia",
        descriptions: [
            "Developing user-centered applications through challenge-based learning.",
            "Exploring iOS development, product design, and collaborative problem-solving.",
        ],
    },
    {
        role: "Front-End Developer",
        company: "PERSONAL & COLLABORATIVE PROJECTS",
        period: "2024 – Present",
        location: "Indonesia",
        descriptions: [
            "Building responsive digital products using Next.js, React, and Tailwind CSS.",
            "Translating UI/UX concepts into functional and accessible interfaces.",
        ],
    },
    {
        role: "UI/UX Designer",
        company: "GAHITA WEBSITE REDESIGN",
        period: "2025",
        location: "Indonesia",
        descriptions: [
            "Redesigned a learning platform using a user-centered design approach.",
            "Conducted usability evaluation using the System Usability Scale.",
        ],
    },
];

const honorsAndAwards = [
    {
        title: "Thamrin Nine Hackathon",
        organization: "TEAM FAHAM",
        period: "March 2025",
        location: "Jakarta, Indonesia",
        descriptions: [
            "Collaborated with a multidisciplinary team to develop a digital solution during the hackathon.",
            "Contributed to product ideation, interface design, and application development.",
        ],
    },
    {
        title: "Apple Developer Academy",
        organization: "FIRST COHORT @UC JAKARTA",
        period: "2026",
        location: "Jakarta, Indonesia",
        descriptions: [
            "Selected as a learner in the first cohort of Apple Developer Academy @UC Jakarta.",
            "Strengthening capabilities in product development, design thinking, and iOS technology.",
        ],
    },
    {
        title: "Apple Developer Academy Challenge",
        organization: "AUGMENTED REALITY PRE-PRODUCTION PROJECT",
        period: "2026",
        location: "Jakarta, Indonesia",
        descriptions: [
            "Explored ARKit and RealityKit to support scene visualization during film pre-production.",
            "Designed an accessible workflow for filmmakers with limited technical experience.",
        ],
    },
];

export default function Experiences() {
    return (
        <section
            id="experiences"
            className="
                relative
                w-full
                overflow-hidden
                px-6
                py-28
                md:px-10
                md:py-36
            "
        >
            {/* Background title */}
            <h2
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    top-8
                    left-1/2
                    -z-10
                    -translate-x-1/2
                    whitespace-nowrap
                    select-none
                    font-[family-name:var(--font-playfair)]
                    text-[6rem]
                    leading-none
                    font-bold
                    md:top-2
                    md:text-[13rem]
                    lg:text-[18rem]
                "
                style={{
                    background:
                        "linear-gradient(180deg, rgba(193,157,103,0.22) 0%, rgba(193,157,103,0.02) 85%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter:
                        "drop-shadow(0 14px 30px rgba(193,157,103,0.06))",
                }}
            >
                Experiences
            </h2>

            <div className="mx-auto w-full max-w-7xl">
                {/* Section introduction */}
                <div
                    className="
                        relative
                        z-10
                        mb-20
                        text-center
                        md:mb-28
                    "
                >
                    <p
                        className="
                            mb-3
                            font-[family-name:var(--font-playfair)]
                            text-sm
                            italic
                            tracking-wide
                            text-[#c19d67]
                        "
                    >
                        Journey & Recognition
                    </p>

                    <h3
                        className="
                            font-[family-name:var(--font-playfair)]
                            text-4xl
                            text-white
                            md:text-6xl
                        "
                    >
                        Experience & Education
                    </h3>
                </div>

                <div
                    className="
                        relative
                        z-10
                        grid
                        grid-cols-1
                        gap-20
                        lg:grid-cols-[70px_1fr_1fr]
                        lg:gap-14
                    "
                >
                    {/* Vertical section label */}
                    <div
                        className="
                            hidden
                            items-start
                            justify-center
                            lg:flex
                        "
                    >
                        <div
                            className="
                                sticky
                                top-32
                                flex
                                flex-col
                                items-center
                                gap-5
                            "
                        >
                            <span
                                className="
                                    [writing-mode:vertical-rl]
                                    rotate-180
                                    text-[10px]
                                    uppercase
                                    tracking-[0.55em]
                                    text-white/60
                                "
                            >
                                Experiences
                            </span>

                            <div className="h-14 w-px bg-white/40" />
                        </div>
                    </div>

                    {/* Working Experiences */}
                    <div>
                        <div className="mb-12">
                            <p
                                className="
                                    mb-3
                                    text-[10px]
                                    uppercase
                                    tracking-[0.4em]
                                    text-white/35
                                "
                            >
                                Working
                            </p>

                            <h4
                                className="
                                    font-[family-name:var(--font-playfair)]
                                    text-4xl
                                    leading-tight
                                    text-white
                                    md:text-5xl
                                "
                            >
                                Working Experiences
                            </h4>
                        </div>

                        <div className="space-y-14">
                            {workExperiences.map((experience, index) => (
                                <ExperienceItem
                                    key={`${experience.role}-${index}`}
                                    title={experience.role}
                                    subtitle={experience.company}
                                    period={experience.period}
                                    location={experience.location}
                                    descriptions={experience.descriptions}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Honors and Awards */}
                    <div>
                        <div className="mb-12">
                            <p
                                className="
                                    mb-3
                                    text-[10px]
                                    uppercase
                                    tracking-[0.4em]
                                    text-white/35
                                "
                            >
                                Recognition
                            </p>

                            <h4
                                className="
                                    font-[family-name:var(--font-playfair)]
                                    text-4xl
                                    leading-tight
                                    text-white
                                    md:text-5xl
                                "
                            >
                                Education
                            </h4>
                        </div>

                        <div className="space-y-14">
                            {honorsAndAwards.map((award, index) => (
                                <ExperienceItem
                                    key={`${award.title}-${index}`}
                                    title={award.title}
                                    subtitle={award.organization}
                                    period={award.period}
                                    location={award.location}
                                    descriptions={award.descriptions}
                                    highlight
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

interface ExperienceItemProps {
    title: string;
    subtitle: string;
    period: string;
    location: string;
    descriptions: string[];
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
        <article
            className="
                group
                relative
                border-t
                border-white/10
                pt-7
                transition-colors
                duration-500
                hover:border-[#c19d67]/60
            "
        >
            {/* Hover indicator */}
            <div
                className="
                    absolute
                    top-[-1px]
                    left-0
                    h-px
                    w-0
                    bg-[#c19d67]
                    transition-all
                    duration-500
                    group-hover:w-20
                "
            />

            <h5
                className={`
                    mb-3
                    text-sm
                    leading-relaxed
                    font-semibold
                    uppercase
                    tracking-[0.08em]
                    transition-colors
                    duration-300
                    ${
                        highlight
                            ? "text-[#d5b27b]"
                            : "text-white"
                    }
                `}
            >
                {title}
            </h5>

            <p
                className="
                    mb-6
                    text-sm
                    leading-relaxed
                    font-light
                    italic
                    tracking-wide
                    text-white/45
                "
            >
                {subtitle}
            </p>

            <p
                className="
                    mb-6
                    text-sm
                    leading-relaxed
                    text-white/50
                "
            >
                {period}
                <span className="mx-2 text-white/25">|</span>

                <em className="text-white/40">
                    {location}
                </em>
            </p>

            <ul className="space-y-3">
                {descriptions.map((description, index) => (
                    <li
                        key={`${description}-${index}`}
                        className="
                            flex
                            items-start
                            gap-4
                            text-sm
                            leading-7
                            text-white/50
                            transition-colors
                            duration-300
                            group-hover:text-white/70
                        "
                    >
                        <span
                            className="
                                mt-[11px]
                                h-1
                                w-1
                                flex-shrink-0
                                rounded-full
                                bg-[#c19d67]
                            "
                        />

                        <span>{description}</span>
                    </li>
                ))}
            </ul>
        </article>
    );
}