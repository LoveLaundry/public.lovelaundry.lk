import { useLayoutEffect, useRef } from "react";
import {
    RiArrowDownLine,
    RiArrowRightLine,
    RiHeart3Fill,
    RiStarFill,
    RiTimeFill,
    RiShoppingBasket2Line,
    RiTimeLine,
} from "react-icons/ri";
import { gsap } from "../../lib/gsap";
import { useLanguage } from "../../i18n";

const Hero = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const { t } = useLanguage();

    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (!element) return;
        const offset = 90;
        window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - offset,
            behavior: "smooth",
        });
    };

    const stats = [
        {
            icon: RiShoppingBasket2Line,
            value: "10+",
            label: t("heroStatServices"),
        },
        {
            icon: RiStarFill,
            value: "4.9",
            label: t("heroStatRating"),
        },
        {
            icon: RiTimeLine,
            value: "24/7",
            label: t("heroStatConvenience"),
        },
    ];

    useLayoutEffect(() => {
        const section = sectionRef.current;
        if (!section) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Badge slides in
            tl.fromTo(
                "[data-hero-badge]",
                { y: -20, opacity: 0, scale: 0.9 },
                { y: 0, opacity: 1, scale: 1, duration: 0.6 }
            );

            // H1 main line
            tl.fromTo(
                "[data-hero-line-1]",
                { y: 40, opacity: 0, rotateX: 15 },
                { y: 0, opacity: 1, rotateX: 0, duration: 0.7 },
                "-=0.3"
            );

            // H1 highlight line
            tl.fromTo(
                "[data-hero-line-2]",
                { y: 40, opacity: 0, rotateX: 15 },
                { y: 0, opacity: 1, rotateX: 0, duration: 0.7 },
                "-=0.45"
            );

            // SVG underline draws
            tl.fromTo(
                "[data-hero-underline] path",
                { strokeDasharray: 300, strokeDashoffset: 300 },
                { strokeDashoffset: 0, duration: 0.8, ease: "power2.inOut" },
                "-=0.3"
            );

            // Description
            tl.fromTo(
                "[data-hero-desc]",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6 },
                "-=0.4"
            );

            // Buttons stagger
            tl.fromTo(
                "[data-hero-btn]",
                { y: 20, opacity: 0, scale: 0.95 },
                { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.12 },
                "-=0.3"
            );

            // Stats chips stagger
            tl.fromTo(
                "[data-hero-stat]",
                { y: 25, opacity: 0, scale: 0.92 },
                { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.1 },
                "-=0.25"
            );

            // Trust strip
            tl.fromTo(
                "[data-hero-trust]",
                { y: 15, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5 },
                "-=0.2"
            );

            // Hero image card
            tl.fromTo(
                "[data-hero-card]",
                { x: 40, scale: 0.94, opacity: 0 },
                { x: 0, scale: 1, opacity: 1, duration: 0.9, ease: "power2.out" },
                0.3
            );

            // Floating cards
            tl.fromTo(
                "[data-hero-float]",
                { y: 20, opacity: 0, scale: 0.9 },
                { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.15 },
                "-=0.4"
            );

            // Continuous floating animation for decorative shapes
            gsap.to("[data-float-slow]", {
                y: -8,
                duration: 3,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
            });

            gsap.to("[data-float-med]", {
                y: -12,
                rotation: 5,
                duration: 2.5,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
            });

            gsap.to("[data-float-fast]", {
                y: -6,
                x: 4,
                rotation: -3,
                duration: 2,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
            });

            // LL watermark subtle pulse
            gsap.to("[data-hero-watermark]", {
                scale: 1.02,
                opacity: 0.55,
                duration: 4,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
            });
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
                bg-[#FFFFFF]
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
            {/* Red accent line */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E01E31] to-transparent"
            />

            {/* Warm gradient wash */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[radial-gradient(ellipse_80%_60%_at_25%_15%,rgba(254,242,242,0.35),transparent_65%)]
                    sm:bg-[radial-gradient(ellipse_70%_60%_at_20%_20%,rgba(254,242,242,0.4),transparent_60%)]
                "
            />

            {/* Decorative dot cluster */}
            <div
                aria-hidden="true"
                data-float-slow
                className="
                    pointer-events-none
                    absolute
                    left-6
                    top-36
                    grid
                    grid-cols-3
                    gap-2.5
                    opacity-30
                    sm:left-12
                    sm:top-44
                    lg:left-16
                "
            >
                {Array.from({ length: 9 }).map((_, i) => (
                    <div
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-[#E01E31]"
                    />
                ))}
            </div>

            {/* Large tan circle */}
            <div
                aria-hidden="true"
                data-float-med
                className="
                    pointer-events-none
                    absolute
                    -left-32
                    top-40
                    h-72
                    w-72
                    rounded-full
                    bg-[#F5F5F5]
                    sm:h-96
                    sm:w-96
                "
            />

            {/* Ring */}
            <div
                aria-hidden="true"
                data-float-fast
                className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-64
                    w-64
                    rounded-full
                    border-[18px]
                    border-[#F5F5F5]
                    sm:h-80
                    sm:w-80
                "
            />

            {/* Floating diamond */}
            <div
                aria-hidden="true"
                data-float-med
                className="
                    pointer-events-none
                    absolute
                    right-[18%]
                    top-[22%]
                    hidden
                    rotate-45
                    border
                    border-[#E01E31]/20
                    bg-[#E01E31]/5
                    sm:block
                    lg:right-[15%]
                    lg:top-[18%]
                "
            >
                <div className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>

            {/* Cross shape */}
            <div
                aria-hidden="true"
                data-float-slow
                className="
                    pointer-events-none
                    absolute
                    left-[8%]
                    top-[55%]
                    hidden
                    text-[#F5F5F5]
                    sm:block
                    lg:left-[6%]
                "
            >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="2" />
                    <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="2" />
                </svg>
            </div>

            {/* Small circle */}
            <div
                aria-hidden="true"
                data-float-fast
                className="
                    pointer-events-none
                    absolute
                    right-[10%]
                    bottom-[15%]
                    hidden
                    h-3
                    w-3
                    rounded-full
                    border-2
                    border-[#F5F5F5]
                    sm:block
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
                    {/* LL watermark */}
                    <div
                        aria-hidden="true"
                        data-hero-watermark
                        className="
                            pointer-events-none
                            absolute
                            -left-6
                            -top-10
                            select-none
                            font-display
                            text-[180px]
                            font-bold
                            leading-none
                            tracking-tight
                            text-[#F5F5F5]/60
                            sm:text-[220px]
                            lg:-left-10
                            lg:text-[260px]
                        "
                    >
                        LL
                    </div>

                    {/* Badge */}
                    <div
                        data-hero-badge
                        className="
                            relative
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
                        {t("heroBadge")}
                    </div>

                    {/* Heading */}
                    <h1
                        className="
                            relative
                            font-display
                            text-[50px]
                            font-semibold
                            leading-[1.02]
                            tracking-[-0.02em]
                            text-[#000000]
                            sm:text-6xl
                            md:text-7xl
                            lg:text-[76px]
                            xl:text-[88px]
                        "
                    >
                        <span data-hero-line-1 className="block">
                            {t("heroTitleMain")}
                        </span>

                        <span className="relative inline-block text-[#E01E31]">
                            <span data-hero-line-2 className="block">
                                {t("heroTitleHighlight")}
                            </span>

                            <svg
                                aria-hidden="true"
                                data-hero-underline
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

                    {/* Description */}
                    <p
                        data-hero-desc
                        className="
                            relative
                            mx-auto
                            mt-7
                            max-w-xl
                            text-base
                            leading-8
                            text-[#404040]
                            sm:text-lg
                            lg:mx-0
                        "
                    >
                        {t("heroDescription")}
                    </p>

                    {/* Buttons */}
                    <div
                        className="
                            relative
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
                            data-hero-btn
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
                            {t("heroPrimary")}
                            <RiArrowRightLine className="h-4 w-4" />
                        </button>

                        <button
                            type="button"
                            data-hero-btn
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
                                border-[#000000]
                                bg-[#FFFFFF]
                                px-9
                                text-sm
                                font-bold
                                text-[#000000]
                                transition-all
                                duration-200
                                hover:-translate-y-0.5
                                hover:bg-[#000000]
                                hover:text-[#FFFFFF]
                                sm:w-auto
                            "
                        >
                            {t("heroSecondary")}
                            <RiArrowRightLine className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Stats chips */}
                    <div
                        className="
                            relative
                            mx-auto
                            mt-12
                            grid
                            max-w-xl
                            grid-cols-3
                            gap-3
                            sm:gap-4
                            lg:mx-0
                        "
                    >
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                data-hero-stat
                                className="
                                    flex
                                    flex-col
                                    items-center
                                    gap-2
                                    rounded-2xl
                                    border
                                    border-[#E5E5E5]/60
                                    bg-[#FFFFFF]/70
                                    px-2
                                    py-4
                                    backdrop-blur-sm
                                    sm:px-3
                                    lg:items-start
                                    lg:px-4
                                "
                            >
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FEF2F2] text-[#E01E31]">
                                    <stat.icon className="h-4 w-4" />
                                </div>

                                <div className="font-display text-2xl font-bold tracking-tight text-[#000000] sm:text-3xl">
                                    {stat.value}
                                </div>

                                <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#404040] sm:text-[11px]">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Trust strip */}
                    <button
                        type="button"
                        data-hero-trust
                        onClick={() => scrollTo("partners")}
                        className="
                            relative
                            mx-auto
                            mt-8
                            inline-flex
                            items-center
                            gap-2.5
                            rounded-full
                            border
                            border-[#E5E5E5]
                            bg-[#FFFFFF]/80
                            px-5
                            py-2.5
                            backdrop-blur-sm
                            transition-all
                            duration-200
                            hover:border-[#E01E31]/30
                            hover:bg-[#FFFFFF]
                            sm:mt-9
                            lg:mx-0
                        "
                    >
                        <div className="flex -space-x-1.5">
                            <div className="h-5 w-5 rounded-full border-2 border-white bg-[#F5F5F5]" />
                            <div className="h-5 w-5 rounded-full border-2 border-white bg-[#FEF2F2]" />
                            <div className="h-5 w-5 rounded-full border-2 border-white bg-[#E5E5E5]" />
                        </div>

                        <span className="hidden text-[11px] font-bold text-[#404040] sm:inline sm:text-xs">
                            {t("heroTrustDesktop")}
                        </span>

                        <span className="text-[11px] font-bold text-[#404040] sm:hidden sm:text-xs">
                            {t("heroTrustStrip")}
                        </span>

                        <span className="hidden text-[10px] font-semibold text-[#737373] lg:inline">
                            {t("heroMore")}
                        </span>

                        <RiArrowRightLine className="h-3 w-3 text-[#737373]" />
                    </button>
                </div>

                {/* Image card */}
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
                            bg-gradient-to-br
                            from-[#E01E31]
                            to-[#C11324]
                            sm:block
                            lg:-right-6
                            lg:-top-6
                        "
                    >
                        <div className="absolute inset-0 flex items-center justify-center opacity-15">
                            <span className="font-display text-7xl font-bold text-white sm:text-8xl">
                                LL
                            </span>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-[36px] bg-[#F5F5F5] p-5 sm:p-7">
                        <div
                            aria-hidden="true"
                            className="
                                pointer-events-none
                                absolute
                                inset-3
                                rounded-[28px]
                                border
                                border-[#E01E31]/10
                                sm:inset-5
                                sm:rounded-[30px]
                            "
                        />
                        <div className="relative overflow-hidden rounded-t-full">
                            <div className="relative aspect-[1/1.15]">
                                <img
                                    src="./assets/images/love-laundry-hero.png"
                                    alt="Love Laundry pickup and laundry service"
                                    style={{
                                        filter: "sepia(0.14) saturate(1.08) contrast(1.02)",
                                    }}
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Rating float card */}
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
                            border-[#E5E5E5]
                            bg-[#FFFFFF]
                            px-6
                            py-4
                            shadow-[0_24px_60px_rgba(0,0,0,0.2)]
                            sm:-translate-x-0
                            sm:left-auto
                            sm:right-6
                        "
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex shrink-0 items-center gap-0.5">
                                {Array.from({ length: 5 }).map((_, index) => (
                                    <RiStarFill
                                        key={index}
                                        className="h-4 w-4 text-[#E3A13C]"
                                    />
                                ))}
                            </div>

                            <div className="text-xs font-bold text-[#000000]">
                                4.9 / 5
                            </div>
                        </div>

                        <div className="text-right">
                            <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#404040]">
                                {t("heroNextPickup")}
                            </div>

                            <div className="mt-0.5 text-xs font-bold text-[#E01E31]">
                                {t("heroScheduleToday")}
                            </div>
                        </div>
                    </div>

                    {/* Time float card */}
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
                            border-[#E5E5E5]
                            bg-[#FFFFFF]
                            px-4
                            py-2
                            shadow-[0_14px_34px_rgba(0,0,0,0.16)]
                            sm:flex
                            lg:-left-8
                        "
                    >
                        <RiTimeFill className="h-4 w-4 text-[#E01E31]" />

                        <span className="text-xs font-bold text-[#000000]">
                            24/7
                        </span>
                    </div>
                </div>
            </div>

            {/* Scroll down indicator */}
            <button
                type="button"
                data-hero-scroll
                onClick={() => scrollTo("services")}
                className="
                    pointer-events-auto
                    absolute
                    bottom-6
                    left-1/2
                    -translate-x-1/2
                    flex
                    flex-col
                    items-center
                    gap-1
                    text-[#737373]
                    transition-colors
                    hover:text-[#E01E31]
                    sm:bottom-8
                "
                aria-label="Scroll down"
            >
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">
                    {t("heroScroll")}
                </span>
                <RiArrowDownLine className="h-4 w-4 animate-bounce" />
            </button>
        </section>
    );
};

export default Hero;
