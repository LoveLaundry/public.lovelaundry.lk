import { useLanguage } from "../../i18n";
import { COMPANY } from "../../data/constants";
import { useReveal } from "../../hooks/useReveal";
import heroVideo from "../../assets/videos/web.mp4";
import {
    RiArrowRightLine,
    RiArrowDownLine,
    RiHeart3Fill,
    RiStarFill,
    RiTimeFill,
    RiShoppingBasket2Line,
    RiWhatsappLine,
} from "react-icons/ri";

const Hero = () => {
    const { t } = useLanguage();
    const textRef = useReveal<HTMLDivElement>({ y: 28, stagger: 0.09 });
    const cardRef = useReveal<HTMLDivElement>({ y: 30, x: 30, duration: 0.9 });

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
            icon: RiTimeFill,
            value: "24/7",
            label: t("heroStatConvenience"),
        },
    ];

    return (
        <section
            id="home"
            className="
                relative
                flex
                min-h-[92vh]
                items-center
                overflow-hidden
                bg-[#0C0708]
                px-4
                pb-24
                pt-32
                sm:px-6
                sm:pb-28
                sm:pt-36
                lg:px-8
                lg:pb-32
                lg:pt-40
            "
        >
            {/* Warm brand glow (keeps red theme) */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[radial-gradient(110%_90%_at_85%_0%,rgba(224,30,49,0.45),transparent_55%)]
                "
            />
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[radial-gradient(80%_80%_at_0%_100%,rgba(227,161,60,0.18),transparent_55%)]
                "
            />

            {/* Full-bleed background video */}
            <video
                aria-hidden="true"
                autoPlay
                muted
                loop
                playsInline
                poster="./assets/images/love-laundry-hero.png"
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                "
            >
                <source src={heroVideo} type="video/mp4" />
            </video>

            {/* Brand-red wash to keep theme + boost text contrast */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[radial-gradient(110%_90%_at_85%_0%,rgba(224,30,49,0.32),transparent_55%)]
                "
            />
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[radial-gradient(80%_80%_at_0%_100%,rgba(227,161,60,0.14),transparent_55%)]
                "
            />

            {/* Dark vignette / contrast gradient */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[linear-gradient(180deg,rgba(12,7,8,0.55),rgba(12,7,8,0.35)_30%,rgba(12,7,8,0.45)_65%,rgba(12,7,8,0.92))]
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
                    gap-14
                    lg:grid-cols-[1.05fr_0.95fr]
                    lg:gap-16
                "
            >
                {/* Text column */}
                <div ref={textRef} className="relative z-10">
                    <div
                        data-reveal
                        className="
                            inline-flex
                            items-center
                            gap-2.5
                            rounded-full
                            border
                            border-white/15
                            bg-white/5
                            px-4
                            py-2
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[0.16em]
                            text-white
                            backdrop-blur-sm
                            sm:text-xs
                        "
                    >
                        <RiHeart3Fill className="h-3.5 w-3.5 text-[#E01E31]" />
                        {t("heroBadge")}
                    </div>

                    <h1
                        className="
                            font-display
                            mt-6
                            text-[46px]
                            font-semibold
                            leading-[1.02]
                            tracking-[-0.02em]
                            text-white
                            sm:text-6xl
                            md:text-7xl
                            lg:text-[78px]
                            xl:text-[88px]
                        "
                    >
                        <span data-reveal className="block">
                            {t("heroTitleMain")}
                        </span>
                        <span
                            data-reveal
                            className="relative inline-block text-[#E01E31]"
                        >
                            {t("heroTitleHighlight")}
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 240 14"
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
                                    d="M4 10 C 70 2, 170 2, 236 8"
                                    fill="none"
                                    stroke="#E3A13C"
                                    strokeWidth="6"
                                    strokeLinecap="round"
                                    opacity="0.85"
                                />
                            </svg>
                        </span>
                    </h1>

                    <p
                        data-reveal
                        className="
                            mt-7
                            max-w-xl
                            text-base
                            leading-8
                            text-white/70
                            sm:text-lg
                        "
                    >
                        {t("heroDescription")}
                    </p>

                    <div
                        data-reveal
                        className="
                            mt-9
                            flex
                            flex-col
                            gap-3
                            sm:flex-row
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
                                shadow-[0_14px_34px_rgba(224,30,49,0.4)]
                                transition-all
                                duration-200
                                hover:-translate-y-0.5
                                hover:bg-[#C11324]
                                hover:shadow-[0_18px_44px_rgba(224,30,49,0.55)]
                                sm:w-auto
                            "
                        >
                            {t("heroPrimary")}
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
                                border-white/30
                                bg-white/5
                                px-9
                                text-sm
                                font-bold
                                text-white
                                backdrop-blur-sm
                                transition-all
                                duration-200
                                hover:-translate-y-0.5
                                hover:border-white/60
                                hover:bg-white/10
                                sm:w-auto
                            "
                        >
                            {t("heroSecondary")}
                            <RiArrowRightLine className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Stats */}
                    <div
                        data-reveal
                        className="
                            mt-12
                            grid
                            max-w-xl
                            grid-cols-3
                            gap-3
                            sm:gap-4
                        "
                    >
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="
                                    flex
                                    flex-col
                                    items-start
                                    gap-2
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-white/5
                                    px-4
                                    py-5
                                    backdrop-blur-sm
                                    sm:px-5
                                "
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E01E31]/20 text-[#E01E31]">
                                    <stat.icon className="h-5 w-5" />
                                </div>

                                <div className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                    {stat.value}
                                </div>

                                <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/60 sm:text-[11px]">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image card column */}
                <div
                    ref={cardRef}
                    data-reveal
                    className="relative mx-auto w-full max-w-[540px]"
                >
                    <div
                        aria-hidden="true"
                        className="
                            absolute
                            -right-4
                            -top-4
                            hidden
                            h-48
                            w-48
                            rounded-[36px]
                            bg-gradient-to-br
                            from-[#E01E31]
                            to-[#C11324]
                            shadow-[0_20px_60px_rgba(224,30,49,0.35)]
                            sm:block
                            lg:-right-8
                            lg:-top-8
                        "
                    >
                        <div className="absolute inset-0 flex items-center justify-center opacity-20">
                            <span className="font-display text-7xl font-bold text-white sm:text-8xl">
                                LL
                            </span>
                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#1A0E10] to-[#2A1114] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.5)] sm:p-7">
                        <div
                            aria-hidden="true"
                            className="
                                pointer-events-none
                                absolute
                                inset-3
                                rounded-[28px]
                                border
                                border-[#E01E31]/20
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
                            border-white/10
                            bg-[#0C0708]
                            px-7
                            py-5
                            shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                            sm:left-auto
                            sm:right-6
                            sm:-translate-x-0
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

                            <div className="text-xs font-bold text-white">
                                4.9 / 5
                            </div>
                        </div>

                        <div className="text-right">
                            <div className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">
                                {t("heroNextPickup")}
                            </div>

                            <div className="mt-0.5 text-xs font-bold text-[#E01E31]">
                                {t("heroScheduleToday")}
                            </div>
                        </div>
                    </div>

                    {/* WhatsApp save float card */}
                    <a
                        href={COMPANY.whatsappLink}
                        target="_blank"
                        rel="noreferrer"
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
                            border-[#E01E31]/40
                            bg-[#E01E31]
                            px-4
                            py-2
                            text-white
                            shadow-[0_14px_34px_rgba(224,30,49,0.5)]
                            transition-transform
                            duration-300
                            hover:scale-105
                            sm:flex
                            lg:-left-10
                        "
                    >
                        <RiWhatsappLine className="h-4 w-4" />
                        <span className="text-xs font-bold">
                            {t("heroSaveBadge")}
                        </span>
                    </a>
                </div>
            </div>

            {/* Scroll indicator */}
            <button
                type="button"
                onClick={() => scrollTo("services")}
                className="
                    absolute
                    bottom-6
                    left-1/2
                    -translate-x-1/2
                    flex
                    flex-col
                    items-center
                    gap-1
                    text-white/60
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
