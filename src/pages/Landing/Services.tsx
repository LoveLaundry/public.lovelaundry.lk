import { RiArrowRightLine, RiPhoneLine } from "react-icons/ri";
import { useReveal } from "../../hooks/useReveal";
import { services, companyInfo } from "../../data/siteData";
import { useLanguage } from "../../i18n";
import SectionHeader from "./SectionHeader";

const Services = () => {
    const { t } = useLanguage();
    const cardsRef = useReveal<HTMLDivElement>({ y: 30, stagger: 0.1 });

    const serviceKeys = [
        { titleKey: "serviceWashTitle", subtitleKey: "serviceWashSubtitle", descKey: "serviceWashDesc" },
        { titleKey: "serviceDryTitle", subtitleKey: "serviceDrySubtitle", descKey: "serviceDryDesc" },
        { titleKey: "serviceIronTitle", subtitleKey: "serviceIronSubtitle", descKey: "serviceIronDesc" },
        { titleKey: "serviceFoldTitle", subtitleKey: "serviceFoldSubtitle", descKey: "serviceFoldDesc" },
    ];

    return (
        <section
            id="services"
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
            {/* Subtle dot pattern */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-[0.035]
                    bg-[radial-gradient(circle,#000000_1px,transparent_1px)]
                    bg-[length:24px_24px]
                "
            />

            <div className="relative mx-auto w-full max-w-[1440px]">
                <SectionHeader
                    badge={t("servicesBadge")}
                    main={t("servicesTitleMain")}
                    highlight={t("servicesTitleHighlight")}
                />

                <div
                    ref={cardsRef}
                    className="
                        mt-12
                        grid
                        gap-5
                        sm:mt-14
                        sm:grid-cols-2
                        lg:grid-cols-4
                    "
                >
                    {services.map((service, index) => (
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
                                transition-all
                                duration-300
                                hover:-translate-y-1.5
                                hover:border-[#E01E31]/40
                                hover:shadow-[0_24px_50px_rgba(0,0,0,0.16)]
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

                            <div
                                className="
                                    relative
                                    aspect-[1.35/1]
                                    overflow-hidden
                                    bg-[#F5F5F5]
                                "
                            >
                                <img
                                    src={service.image}
                                    alt={t(serviceKeys[index].titleKey)}
                                    loading="lazy"
                                    style={{
                                        filter:
                                            "sepia(0.16) saturate(1.06) contrast(1.02)",
                                    }}
                                    className="
                                        h-full
                                        w-full
                                        object-cover
                                        transition-transform
                                        duration-700
                                        ease-out
                                        group-hover:scale-105
                                    "
                                />
                            </div>

                            <div className="p-6">
                                <div
                                    className="
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-[0.16em]
                                        text-[#E01E31]
                                    "
                                >
                                    {t(serviceKeys[index].subtitleKey)}
                                </div>

                                <h3
                                    className="
                                        font-display
                                        mt-2
                                        text-xl
                                        font-semibold
                                        tracking-tight
                                        text-[#000000]
                                    "
                                >
                                    {t(serviceKeys[index].titleKey)}
                                </h3>

                                <p
                                    className="
                                        mt-2.5
                                        text-sm
                                        leading-6
                                        text-[#404040]
                                    "
                                >
                                    {t(serviceKeys[index].descKey)}
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
                                        mt-5
                                        flex
                                        items-center
                                        gap-2
                                        text-xs
                                        font-bold
                                        text-[#E01E31]
                                        transition-all
                                        duration-200
                                        group-hover:gap-3
                                    "
                                >
                                    {t("servicesLearnMore")}

                                    <RiArrowRightLine className="h-4 w-4" />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div
                    className="
                        mt-12
                        flex
                        flex-col
                        items-center
                        gap-4
                        rounded-2xl
                        border
                        border-[#E5E5E5]
                        bg-[#FFFFFF]
                        px-6
                        py-8
                        text-center
                        sm:flex-row
                        sm:justify-between
                        sm:text-left
                        lg:mt-16
                    "
                >
                    <div>
                        <h3 className="font-display text-lg font-semibold text-[#000000]">
                            {t("servicesCtaTitle")}
                        </h3>
                        <p className="mt-1 text-sm text-[#404040]">
                            {t("servicesCtaSub")}
                        </p>
                    </div>

                    <a
                        href={`tel:${companyInfo.phone}`}
                        className="
                            flex
                            shrink-0
                            items-center
                            gap-2.5
                            rounded-full
                            bg-[#E01E31]
                            px-7
                            py-3.5
                            text-sm
                            font-bold
                            text-white
                            shadow-[0_8px_24px_rgba(224,30,49,0.3)]
                            transition-all
                            duration-200
                            hover:-translate-y-0.5
                            hover:bg-[#C11324]
                            hover:shadow-[0_12px_32px_rgba(224,30,49,0.4)]
                        "
                    >
                        <RiPhoneLine className="h-4 w-4" />
                        {t("servicesCtaBtn")}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
