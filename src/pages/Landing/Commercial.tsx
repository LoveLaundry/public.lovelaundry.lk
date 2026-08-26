import { RiArrowRightLine } from "react-icons/ri";
import { useReveal } from "../../hooks/useReveal";
import { commercialServices } from "../../data/siteData";
import { useLanguage } from "../../i18n";
import SectionHeader from "./SectionHeader";

const Commercial = () => {
    const { t } = useLanguage();
    const cardsRef = useReveal<HTMLDivElement>({ y: 30, stagger: 0.12 });

    const commercialKeys = [
        { titleKey: "commercialHotelTitle", subtitleKey: "commercialHotelSubtitle", descKey: "commercialHotelDesc" },
        { titleKey: "commercialCompTitle", subtitleKey: "commercialCompSubtitle", descKey: "commercialCompDesc" },
        { titleKey: "commercialBulkTitle", subtitleKey: "commercialBulkSubtitle", descKey: "commercialBulkDesc" },
    ];

    return (
        <section
            id="commercial"
            className="
                relative
                bg-white
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
                    badge={t("commercialBadge")}
                    main={t("commercialTitleMain")}
                    highlight={t("commercialTitleHighlight")}
                    description={t("commercialDescription")}
                    centered
                />

                <div
                    ref={cardsRef}
                    className="
                        mt-12
                        grid
                        gap-5
                        sm:mt-14
                        sm:grid-cols-2
                        lg:grid-cols-3
                    "
                >
                    {commercialServices.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <article
                                key={service.title}
                                data-reveal
                                className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-3xl
                                    border
                                    border-[#E5E5E5]
                                    bg-[#FFFFFF]
                                    p-8
                                    transition-all
                                    duration-300
                                    shadow-[0_2px_16px_rgba(0,0,0,0.05)]
                                    hover:-translate-y-1.5
                                    hover:border-[#E01E31]/40
                                    hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
                                "
                            >
                                <div
                                    aria-hidden="true"
                                    className="
                                        absolute
                                        inset-x-0
                                        top-0
                                        z-10
                                        h-1
                                        bg-[#E01E31]
                                        opacity-0
                                        transition-opacity
                                        duration-300
                                        group-hover:opacity-100
                                    "
                                />

                                <div className="flex items-start justify-between">
                                    <div
                                        className="
                                            flex
                                            h-14
                                            w-14
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            bg-[#E01E31]
                                            text-white
                                            shadow-[0_8px_20px_rgba(224,30,49,0.3)]
                                            transition-transform
                                            duration-300
                                            group-hover:-rotate-6
                                            group-hover:scale-105
                                        "
                                    >
                                        <Icon className="h-7 w-7" />
                                    </div>

                                    <div
                                        className="
                                            font-display
                                            text-2xl
                                            font-bold
                                            tracking-tight
                                            text-[#E5E5E5]
                                        "
                                    >
                                        0{index + 1}
                                    </div>
                                </div>

                                <div
                                    className="
                                        mt-6
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-[0.16em]
                                        text-[#E01E31]
                                    "
                                >
                                    {t(commercialKeys[index].subtitleKey)}
                                </div>

                                <h3
                                    className="
                                        font-display
                                        mt-2
                                        text-xl
                                        font-semibold
                                        tracking-tight
                                        text-[#000000]
                                        sm:text-2xl
                                    "
                                >
                                    {t(commercialKeys[index].titleKey)}
                                </h3>

                                <p
                                    className="
                                        mt-3
                                        text-sm
                                        leading-6
                                        text-[#404040]
                                    "
                                >
                                    {t(commercialKeys[index].descKey)}
                                </p>

                                <button
                                    type="button"
                                    onClick={() => {
                                        document
                                            .getElementById("contact")
                                            ?.scrollIntoView({
                                                behavior: "smooth",
                                            });
                                    }}
                                    className="
                                        mt-7
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-full
                                        bg-[#000000]
                                        px-5
                                        py-2.5
                                        text-xs
                                        font-bold
                                        text-[#FFFFFF]
                                        transition-all
                                        duration-200
                                        group-hover:gap-3
                                        group-hover:bg-[#E01E31]
                                    "
                                >
                                    {t("commercialGetQuote")}

                                    <RiArrowRightLine className="h-4 w-4" />
                                </button>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Commercial;
