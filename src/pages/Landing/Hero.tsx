import { useLayoutEffect, useRef } from "react";
import {
    RiArrowRightLine,
    RiHeart3Fill,
    RiStarFill,
    RiTimeFill,
} from "react-icons/ri";
import { gsap } from "../../lib/gsap";
import { heroData, companyInfo } from "../../data/siteData";

const Hero = () => {
    const sectionRef = useRef<HTMLElement>(null);

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);

        if (!element) return;

        const offset = 90;

        window.scrollTo({
            top:
                element.getBoundingClientRect().top +
                window.scrollY -
                offset,
            behavior: "smooth",
        });
    };

    useLayoutEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        if (
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ) {
            return;
        }

        const ctx = gsap.context(() => {
            gsap.fromTo(
                "[data-hero-text]",
                { x: -30, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                }
            );

            gsap.fromTo(
                "[data-hero-card]",
                { x: 30, scale: 0.96, opacity: 0 },
                {
                    x: 0,
                    scale: 1,
                    opacity: 1,
                    duration: 0.9,
                    delay: 0.1,
                    ease: "power3.out",
                }
            );

            gsap.fromTo(
                "[data-hero-float]",
                { y: 15, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    delay: 0.9,
                    ease: "power3.out",
                }
            );
        }, section);

        return () => ctx.revert();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section
            ref={sectionRef}
            id="home"
            className="
                relative
                overflow-hidden
                bg-[#F8F4EE]
                px-4
                pb-20
                pt-28
                sm:px-6
                sm:pb-24
                sm:pt-32
                lg:px-8
                lg:pb-28
                lg:pt-36
            "
        >
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -left-32
                    top-40
                    h-72
                    w-72
                    rounded-full
                    bg-[#F1E9DC]
                    sm:h-96
                    sm:w-96
                "
            />

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-64
                    w-64
                    rounded-full
                    border-[18px]
                    border-[#F1E9DC]
                    sm:h-80
                    sm:w-80
                "
            />

            <div
                className="
                    relative
                    mx-auto
                    grid
                    w-full
                    max-w-[1440px]
                    items-center
                    gap-16
                    lg:grid-cols-[1fr_1.05fr]
                    lg:gap-20
                "
            >
                <div
                    data-hero-text
                    className="relative z-10 mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left"
                >
                    <div
                        className="
                            mb-7
                            inline-flex
                            items-center
                            gap-2.5
                            rounded-full
                            bg-[#E01E31]
                            px-4
                            py-2
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[0.14em]
                            text-white
                            shadow-[0_8px_20px_rgba(224,30,49,0.28)]
                            sm:text-xs
                        "
                    >
                        <RiHeart3Fill className="h-3.5 w-3.5" />

                        {heroData.badge.text}
                    </div>

                    <h1
                        className="
                            font-display
                            text-[50px]
                            font-semibold
                            leading-[1.02]
                            tracking-[-0.02em]
                            text-[#2B2623]
                            sm:text-6xl
                            md:text-7xl
                            lg:text-[76px]
                            xl:text-[88px]
                        "
                    >
                        {heroData.title.main}
                        <br />

                        <span className="relative inline-block text-[#E01E31]">
                            {heroData.title.highlight}

                            <svg
                                aria-hidden="true"
                                viewBox="0 0 220 14"
                                className="
                                    absolute
                                    -bottom-1
                                    left-0
                                    h-3
                                    w-full
                                    sm:-bottom-2
                                    sm:h-4
                                "
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M4 10 C 60 2, 160 2, 216 8"
                                    fill="none"
                                    stroke="#E01E31"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                    opacity="0.4"
                                />
                            </svg>
                        </span>
                    </h1>

                    <p
                        className="
                            mx-auto
                            mt-7
                            max-w-xl
                            text-base
                            leading-8
                            text-[#564D44]
                            sm:text-lg
                            lg:mx-0
                        "
                    >
                        {heroData.description}
                    </p>

                    <div
                        className="
                            mt-9
                            flex
                            flex-col
                            gap-3
                            sm:flex-row
                            sm:justify-center
                            lg:justify-start
                        "
                    >
                        <button
                            type="button"
                            onClick={() => scrollTo("contact")}
                            className="
                                flex
                                h-14
                                w-full
                                items-center
                                justify-center
                                gap-2.5
                                rounded-full
                                bg-[#E01E31]
                                px-9
                                text-sm
                                font-bold
                                text-white
                                shadow-[0_14px_34px_rgba(224,30,49,0.34)]
                                transition-all
                                duration-200
                                hover:-translate-y-0.5
                                hover:bg-[#C11324]
                                hover:shadow-[0_18px_44px_rgba(224,30,49,0.4)]
                                sm:w-auto
                            "
                        >
                            {heroData.buttons.primary.text}

                            <RiArrowRightLine className="h-4 w-4" />
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollTo("services")}
                            className="
                                flex
                                h-14
                                w-full
                                items-center
                                justify-center
                                gap-2.5
                                rounded-full
                                border-2
                                border-[#2B2623]
                                bg-[#FFFDF9]
                                px-9
                                text-sm
                                font-bold
                                text-[#2B2623]
                                transition-all
                                duration-200
                                hover:-translate-y-0.5
                                hover:bg-[#2B2623]
                                hover:text-[#FFFDF9]
                                sm:w-auto
                            "
                        >
                            {heroData.buttons.secondary.text}

                            <RiArrowRightLine className="h-4 w-4" />
                        </button>
                    </div>

                    <div
                        className="
                            mx-auto
                            mt-14
                            grid
                            max-w-xl
                            grid-cols-3
                            divide-x
                            divide-[#E8DFD0]
                            lg:mx-0
                        "
                    >
                        {heroData.stats.map((stat, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center px-2 lg:items-start lg:px-5 lg:first:pl-0"
                            >
                                <div className="font-display text-4xl font-bold tracking-tight text-[#E01E31] sm:text-[42px]">
                                    {stat.value}
                                </div>

                                <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[#786E60]">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    data-hero-card
                    className="relative mx-auto w-full max-w-[560px]"
                >
                    <div
                        aria-hidden="true"
                        className="
                            absolute
                            -right-3
                            -top-3
                            hidden
                            h-44
                            w-44
                            rounded-[36px]
                            bg-[#E01E31]
                            sm:block
                            lg:-right-6
                            lg:-top-6
                        "
                    />

                    <div className="relative overflow-hidden rounded-[36px] bg-[#EFE6D8] p-5 sm:p-7">
                        <div className="relative overflow-hidden rounded-t-full">
                            <div className="relative aspect-[1/1.15]">
                                <img
                                    src={heroData.image.src}
                                    alt={heroData.image.alt}
                                    style={{
                                        filter:
                                            "sepia(0.14) saturate(1.08) contrast(1.02)",
                                    }}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div
                        data-hero-float
                        className="
                            absolute
                            -bottom-7
                            left-1/2
                            flex
                            w-[calc(100%-2.5rem)]
                            max-w-[400px]
                            -translate-x-1/2
                            items-center
                            justify-between
                            gap-3
                            rounded-2xl
                            border
                            border-[#E8DFD0]
                            bg-[#FFFDF9]
                            px-6
                            py-4
                            shadow-[0_24px_60px_rgba(75,56,36,0.2)]
                            sm:-translate-x-0
                            sm:left-auto
                            sm:right-6
                        "
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex shrink-0 items-center gap-0.5">
                                {Array.from({ length: 5 }).map(
                                    (_, index) => (
                                        <RiStarFill
                                            key={index}
                                            className="h-4 w-4 text-[#E3A13C]"
                                        />
                                    )
                                )}
                            </div>

                            <div className="text-xs font-bold text-[#2B2623]">
                                {companyInfo.rating} / 5
                            </div>
                        </div>

                        <div className="text-right">
                            <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#786E60]">
                                Next pickup
                            </div>

                            <div className="mt-0.5 text-xs font-bold text-[#E01E31]">
                                {heroData.badge_text.secondary}
                            </div>
                        </div>
                    </div>

                    <div
                        data-hero-float
                        className="
                            absolute
                            -left-3
                            top-8
                            hidden
                            rotate-[-8deg]
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-[#E8DFD0]
                            bg-[#FFFDF9]
                            px-4
                            py-2
                            shadow-[0_14px_34px_rgba(75,56,36,0.16)]
                            sm:flex
                            lg:-left-8
                        "
                    >
                        <RiTimeFill className="h-4 w-4 text-[#E01E31]" />

                        <span className="text-xs font-bold text-[#2B2623]">
                            {companyInfo.availability}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
