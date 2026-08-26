import { useState } from "react";
import {
    RiHotelLine,
    RiMapPin2Line,
    RiTimeLine,
    RiCloseLine,
} from "react-icons/ri";
import { useReveal } from "../../hooks/useReveal";
import { partnersSection, type Partner } from "../../data/siteData";
import SectionHeader from "./SectionHeader";
import { useLanguage } from "../../i18n";

const Partners = () => {
    const { t } = useLanguage();
    const cardsRef = useReveal<HTMLDivElement>({ y: 20, stagger: 0.06 });
    const [selected, setSelected] = useState<Partner | null>(null);

    return (
        <section
            id="partners"
            className="
                relative
                bg-[#FFFFFF]
                px-4
                py-16
                sm:px-6
                sm:py-24
                lg:px-8
                lg:py-28
            "
        >
            <div className="relative mx-auto w-full max-w-[1440px]">
                <SectionHeader
                    badge={t("partnersBadge")}
                    main={t("partnersTitleMain")}
                    highlight={t("partnersTitleHighlight")}
                    description={t("partnersDescription")}
                    centered
                />

                <div
                    ref={cardsRef}
                    className="
                        mt-12
                        grid
                        grid-cols-1
                        gap-5
                        sm:mt-14
                        sm:grid-cols-2
                        lg:grid-cols-3
                    "
                >
                    {partnersSection.partners.map((partner) => (
                        <button
                            key={partner.name}
                            data-reveal
                            type="button"
                            onClick={() => setSelected(partner)}
                            className="
                                group
                                flex
                                flex-col
                                overflow-hidden
                                rounded-2xl
                                border
                                border-[#E5E5E5]
                                bg-[#FFFFFF]
                                text-center
                                transition-all
                                duration-300
                                hover:-translate-y-1.5
                                hover:border-[#E01E31]/40
                                hover:bg-white
                                hover:shadow-[0_20px_44px_rgba(0,0,0,0.14)]
                            "
                        >
                            {partner.image ? (
                                <div className="relative h-44 overflow-hidden sm:h-52">
                                    <img
                                        src={partner.image}
                                        alt={partner.name}
                                        loading="lazy"
                                        className="
                                            h-full
                                            w-full
                                            object-cover
                                            transition-transform
                                            duration-500
                                            group-hover:scale-105
                                        "
                                        style={{
                                            filter:
                                                "sepia(0.16) saturate(1.07) contrast(1.02)",
                                        }}
                                    />
                                </div>
                            ) : (
                                <div className="flex h-44 items-center justify-center sm:h-52">
                                    <div
                                        className="
                                            flex
                                            h-12
                                            w-12
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#FEF2F2]
                                            text-[#E01E31]
                                        "
                                    >
                                        <RiHotelLine className="h-6 w-6" />
                                    </div>
                                </div>
                            )}

                            <div
                                className="
                                    flex
                                    flex-1
                                    flex-col
                                    items-center
                                    justify-center
                                    gap-1
                                    px-4
                                    py-5
                                "
                            >
                                <div
                                    className="
                                        font-display
                                        text-base
                                        font-semibold
                                        leading-snug
                                        tracking-tight
                                        text-[#000000]
                                        sm:text-[17px]
                                    "
                                >
                                    {partner.name}
                                </div>
                                <div
                                    className="
                                        text-[11px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.16em]
                                        text-[#737373]
                                    "
                                >
                                    {t("partnersYears")}
                                </div>
                            </div>
                        </button>
                    ))}
                </div>

                <p
                    ref={cardsRef}
                    data-reveal
                    className="mt-8 text-center text-sm font-semibold text-[#737373]"
                >
                    {t("partnersMore")}
                </p>
            </div>

            {/* Partner Detail Modal */}
            {selected && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                    onClick={() => setSelected(null)}
                >
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

                    {/* Modal */}
                    <div
                        className="
                            relative
                            z-10
                            w-full
                            max-w-lg
                            overflow-hidden
                            rounded-3xl
                            border
                            border-[#E5E5E5]
                            bg-[#FFFFFF]
                            shadow-[0_32px_64px_rgba(0,0,0,0.25)]
                        "
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            type="button"
                            onClick={() => setSelected(null)}
                            className="
                                absolute
                                right-3
                                top-3
                                z-20
                                flex
                                h-9
                                w-9
                                items-center
                                justify-center
                                rounded-full
                                bg-black/40
                                text-white
                                backdrop-blur-sm
                                transition-colors
                                hover:bg-black/60
                            "
                        >
                            <RiCloseLine className="h-5 w-5" />
                        </button>

                        {/* Image */}
                        {selected.image && (
                            <div className="relative h-56 overflow-hidden sm:h-64">
                                <img
                                    src={selected.image}
                                    alt={selected.name}
                                    className="h-full w-full object-cover"
                                    style={{
                                        filter:
                                            "sepia(0.12) saturate(1.07) contrast(1.02)",
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                                {/* Years badge */}
                                <div
                                    className="
                                        absolute
                                        bottom-4
                                        right-4
                                        flex
                                        items-center
                                        gap-1.5
                                        rounded-full
                                        bg-[#E01E31]
                                        px-3.5
                                        py-1.5
                                        text-xs
                                        font-bold
                                        text-white
                                        shadow-lg
                                    "
                                >
                                    <RiTimeLine className="h-3.5 w-3.5" />
                                    {selected.years}{" "}
                                    {t("partnersYears")}
                                </div>
                            </div>
                        )}

                        {/* Content */}
                        <div className="px-6 py-6 sm:px-8">
                            <h3
                                className="
                                    font-display
                                    text-xl
                                    font-bold
                                    tracking-tight
                                    text-[#000000]
                                    sm:text-2xl
                                "
                            >
                                {selected.name}
                            </h3>

                            <div className="mt-2 flex items-center gap-1.5 text-sm text-[#737373]">
                                <RiMapPin2Line className="h-4 w-4 text-[#E01E31]" />
                                {selected.location}
                            </div>

                            <p className="mt-4 text-sm leading-relaxed text-[#404040]">
                                {selected.description}
                            </p>

                            <div
                                className="
                                    mt-5
                                    flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    border
                                    border-[#E5E5E5]
                                    bg-[#FFFFFF]
                                    px-4
                                    py-3
                                "
                            >
                                <div
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#E01E31]
                                        text-white
                                    "
                                >
                                    <RiTimeLine className="h-5 w-5" />
                                </div>
                                <div>
                                    <div className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
                                        {t("partnersDuration")}
                                    </div>
                                    <div className="font-display text-lg font-bold text-[#000000]">
                                        {selected.years}{" "}
                                        {t("partnersYears")}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Partners;
