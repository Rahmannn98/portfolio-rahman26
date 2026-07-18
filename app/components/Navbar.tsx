'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const navigationItems = [
    {
        label: 'About Me',
        href: '#about',
        sectionId: 'about',
    },
    {
        label: 'Projects',
        href: '#projects',
        sectionId: 'projects',
    },
    {
        label: 'Experiences',
        href: '#experiences',
        sectionId: 'experiences',
    },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const sections = navigationItems
            .map((item) => document.getElementById(item.sectionId))
            .filter((section): section is HTMLElement => section !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (first, second) =>
                            second.intersectionRatio -
                            first.intersectionRatio
                    )[0];

                if (visibleSection) {
                    setActiveSection(visibleSection.target.id);
                }
            },
            {
                rootMargin: '-35% 0px -50% 0px',
                threshold: [0.1, 0.25, 0.5],
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const handleNavigation = (
        event: React.MouseEvent<HTMLAnchorElement>,
        sectionId: string
    ) => {
        event.preventDefault();

        const section = document.getElementById(sectionId);

        if (!section) return;

        setActiveSection(sectionId);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        window.history.replaceState(null, '', `#${sectionId}`);
    };

    return (
        <header
            className="
                fixed
                top-5
                left-1/2
                z-50
                w-[94%]
                max-w-[610px]
                -translate-x-1/2
                font-[family-name:var(--font-playfair)]
                md:top-8
            "
        >
            <nav
                aria-label="Main navigation"
                className="
                    flex
                    min-h-16
                    items-center
                    rounded-full
                    border
                    border-white/[0.14]
                    bg-white/[0.055]
                    px-3
                    py-2

                    shadow-[
                        0_12px_35px_rgba(0,0,0,0.22),
                        inset_0_1px_0_rgba(255,255,255,0.16)
                    ]

                    backdrop-blur-[10px]
                    backdrop-saturate-125

                    transition-all
                    duration-300

                    hover:border-white/[0.20]
                    hover:bg-white/[0.07]

                    sm:px-4
                    md:px-5
                "
            >
                {/* Logo */}
                <a
                    href="#home"
                    aria-label="Back to homepage"
                    className="
        group
        flex
        h-11
        w-11
        shrink-0
        items-center
        justify-center
        overflow-hidden
        rounded-full

        transition-all
        duration-300

        hover:bg-white/[0.05]

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#c19d67]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-black
    "
                >
                    <Image
                        src="/logo.png"
                        alt="Saifulloh Rahman logo"
                        width={26}
                        height={60}
                        priority
                        className="
            h-8
            w-auto
            max-w-full
            object-contain

            transition-transform
            duration-300

            group-hover:scale-105
        "
                    />
                </a>

                {/* Divider */}
                <div
                    aria-hidden="true"
                    className="
                        mx-2
                        h-6
                        w-px
                        shrink-0
                        bg-white/10
                        sm:mx-3
                    "
                />

                {/* Navigation items */}
                <div
                    className="
                        ml-auto
                        flex
                        items-center
                        justify-end
                        gap-2
                        sm:gap-3
                        md:gap-5
                    "
                >
                    {navigationItems.map((item) => {
                        const isActive =
                            activeSection === item.sectionId;

                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                aria-current={
                                    isActive ? 'page' : undefined
                                }
                                onClick={(event) =>
                                    handleNavigation(
                                        event,
                                        item.sectionId
                                    )
                                }
                                className={`
                                    group
                                    relative
                                    flex
                                    min-h-11
                                    items-center
                                    justify-center
                                    whitespace-nowrap

                                    px-1
                                    text-[10px]
                                    font-medium
                                    tracking-wide

                                    transition-colors
                                    duration-300

                                    hover:text-white

                                    focus-visible:outline-none
                                    focus-visible:text-white

                                    sm:px-1.5
                                    sm:text-xs

                                    md:px-2
                                    md:text-sm

                                    ${isActive
                                        ? 'text-white'
                                        : 'text-white/60'
                                    }
                                `}
                            >
                                {item.label}

                                {/* Underline hover */}
                                <span
                                    aria-hidden="true"
                                    className={`
                                        absolute
                                        bottom-1.5
                                        left-1/2
                                        h-px
                                        -translate-x-1/2

                                        bg-gradient-to-r
                                        from-transparent
                                        via-white
                                        to-transparent

                                        transition-all
                                        duration-300
                                        ease-out

                                        ${isActive
                                            ? 'w-full opacity-100'
                                            : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                                        }
                                    `}
                                />
                            </a>
                        );
                    })}
                </div>
            </nav>
        </header>
    );
}