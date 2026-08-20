import {
    RiArrowRightLine,
    RiWhatsappLine,
} from "react-icons/ri";
import { useReveal } from "../../hooks/useReveal";
import { useLanguage } from "../../i18n";
import { hiringSection, jobOpenings } from "../../data/siteData";

const JoinWithUs = () => {
    const { t } = useLanguage();
    const cardsRef = useReveal<HTMLDivElement>({ y: 30, stagger: 0.08 });
    const perksRef = useReveal<HTMLDivElement>({ y: 20, stagger: 0.06 });

    return (
        <section
            id="careers"
            className="
                relative
                overflow-hidden
                bg-[#000000]
                px-4
                py-20
                sm:px-6
                sm:py-28
                lg:px-8
                lg:py-32
            "
        >
            {/* Decorative elements */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -right-32
                    -top-32
                    h-96
                    w-96
                    rounded-full
                    bg-[#E01E31]/8
                "
            />

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -bottom-24
                    -left-24
                    h-72
                    w-72
                    rounded-full
                    border-[20px]
                    border-white/5
                "
            />

            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    right-[15%]
                    top-[12%]
                    grid
                    grid-cols-3
                    gap-2
                    opacity-20
                "
            >
                {Array.from({ length: 9 }).map((_, i) => (
                    <div
                        key={i}
                        className="h-1 w-1 rounded-full bg-[#E01E31]"
                    />
                ))}
            </div>

            <div className="relative mx-auto w-full max-w-[1440px]">
                {/* Section Header */}
                <div className="mb-12 max-w-3xl sm:mb-16">
                    <span
                        className="
                            inline-flex
                            items-center
                            gap-2.5
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[0.22em]
                            text-[#E01E31]
                            sm:text-xs
                        "
                    >
                        <span
                            aria-hidden="true"
                            className="h-[3px] w-8 rounded-full bg-[#E01E31]"
                        />
                        {t("joinBadge")}
                    </span>

                    <h2
                        className="
                            font-display
                            mt-5
                            text-4xl
                            font-semibold
                            leading-[1.05]
                            tracking-[-0.02em]
                            text-white
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        {t("joinTitleMain")}
                        <span className="text-[#E01E31]">
                            {" "}
                            {t("joinTitleHighlight")}
                        </span>
                    </h2>

                    <p
                        className="
                            mt-5
                            max-w-xl
                            text-sm
                            leading-7
                            text-[#D4D4D4]
                            sm:text-base
                        "
                    >
                        {t("joinDescription")}
                    </p>
                </div>

                {/* Job Cards Grid */}
                <div
                    ref={cardsRef}
                    className="
                        grid
                        gap-4
                        sm:grid-cols-2
                        lg:grid-cols-4
                    "
                >
                    {jobOpenings.map((job, index) => (
                        <article
                            key={index}
                            data-reveal
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-2xl
                                border
                                border-white/10
                                bg-white/5
                                p-6
                                backdrop-blur-sm
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:border-[#E01E31]/30
                                hover:bg-white/8
                                hover:shadow-[0_20px_48px_rgba(224,30,49,0.12)]
                            "
                        >
                            {/* Top accent */}
                            <div
                                aria-hidden="true"
                                className="
                                    absolute
                                    top-0
                                    left-0
                                    right-0
                                    h-[2px]
                                    bg-gradient-to-r
                                    from-[#E01E31]
                                    to-[#E01E31]/30
                                    opacity-0
                                    transition-opacity
                                    duration-300
                                    group-hover:opacity-100
                                "
                            />

                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E01E31]/15 text-[#E01E31] transition-colors duration-300 group-hover:bg-[#E01E31]/25">
                                <job.icon className="h-6 w-6" />
                            </div>

                            <span className="
                                inline-block
                                rounded-full
                                bg-white/10
                                px-3
                                py-1
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-wider
                                text-[#D4D4D4]
                            ">
                                {t(`joinJob${index + 1}Type`)}
                            </span>

                            <h3 className="
                                font-display
                                mt-3
                                text-lg
                                font-semibold
                                text-white
                            ">
                                {t(`joinJob${index + 1}Title`)}
                            </h3>

                            <p className="
                                mt-2
                                text-sm
                                leading-6
                                text-[#A3A3A3]
                            ">
                                {t(`joinJob${index + 1}Desc`)}
                            </p>
                        </article>
                    ))}
                </div>

                {/* Perks + CTA */}
                <div
                    className="
                        mt-12
                        flex
                        flex-col
                        gap-8
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/5
                        p-6
                        sm:p-8
                        lg:mt-16
                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                    "
                >
                    {/* Perks */}
                    <div
                        ref={perksRef}
                        className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6"
                    >
                        {hiringSection.perks.map((perk, index) => (
                            <div
                                key={index}
                                data-reveal
                                className="flex items-center gap-3"
                            >
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E01E31]/15 text-[#E01E31]">
                                    <perk.icon className="h-4 w-4" />
                                </div>
                                <span className="text-sm font-semibold text-[#D4D4D4]">
                                    {t(`joinPerk${index + 1}`)}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <a
                        href={hiringSection.cta.href}
                        target="_blank"
                        rel="noreferrer"
                        className="
                            flex
                            shrink-0
                            items-center
                            justify-center
                            gap-3
                            rounded-full
                            bg-[#E01E31]
                            px-8
                            py-4
                            text-sm
                            font-bold
                            text-white
                            shadow-[0_12px_30px_rgba(224,30,49,0.35)]
                            transition-all
                            duration-200
                            hover:-translate-y-0.5
                            hover:bg-[#C11324]
                            hover:shadow-[0_16px_40px_rgba(224,30,49,0.45)]
                        "
                    >
                        <RiWhatsappLine className="h-5 w-5" />
                        {t("joinCta")}
                        <RiArrowRightLine className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default JoinWithUs;
