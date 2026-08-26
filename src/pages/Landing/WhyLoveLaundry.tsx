import { RiCheckLine, RiHeart3Fill } from "react-icons/ri";
import { useReveal } from "../../hooks/useReveal";
import { useLanguage } from "../../i18n";
import {
    features,
    benefits,
    companyInfo,
} from "../../data/siteData";

const WhyLoveLaundry = () => {
    const { t } = useLanguage();
    const leftRef = useReveal<HTMLDivElement>({ x: -30, y: 0 });
    const rightRef = useReveal<HTMLDivElement>({ x: 30, y: 0 });
    const featuresRef = useReveal<HTMLDivElement>({ y: 20, stagger: 0.08 });

    return (
        <section
            id="about"
            className="
                relative
                bg-[#FAFAFA]
                px-4
                py-12
                sm:px-6
                sm:py-16
                lg:px-8
                lg:py-20
            "
        >
            <div
                className="
                    relative
                    mx-auto
                    grid
                    w-full
                    max-w-[1440px]
                    items-center
                    gap-12
                    lg:grid-cols-[0.9fr_1.1fr]
                    lg:gap-16
                    xl:gap-24
                "
            >
                <div ref={leftRef} data-reveal className="relative">
                    <div
                        className="
                            rounded-[28px]
                            border
                            border-[#E5E5E5]
                            bg-[#FFFFFF]
                            p-8
                            shadow-[0_8px_40px_rgba(0,0,0,0.08)]
                            transition-shadow
                            duration-300
                            hover:shadow-[0_12px_48px_rgba(0,0,0,0.12)]
                            sm:p-10
                        "
                    >
                        <div className="flex items-center justify-between">
                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-[#E01E31]
                                    text-white
                                    shadow-[0_8px_20px_rgba(224,30,49,0.28)]
                                "
                            >
                                <RiHeart3Fill className="h-6 w-6" />
                            </div>

                            <span
                                className="
                                    rounded-full
                                    bg-[#F5F5F5]
                                    px-3
                                    py-1.5
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.15em]
                                    text-[#404040]
                                "
                            >
                                {companyInfo.name}
                            </span>
                        </div>

                        <h3
                            className="
                                font-display
                                mt-8
                                max-w-sm
                                text-3xl
                                font-semibold
                                leading-[1.08]
                                tracking-[-0.02em]
                                text-[#000000]
                                sm:text-4xl
                            "
                        >
                            {t("whyCardTitle")}
                        </h3>

                        <p
                            className="
                                mt-5
                                max-w-md
                                text-sm
                                leading-7
                                text-[#404040]
                                sm:text-base
                            "
                        >
                            {t("whyCardDesc")}
                        </p>

                        <div className="mt-8 space-y-3">
                            {benefits.map((_, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 text-sm font-semibold text-[#000000]"
                                >
                                    <span
                                        className="
                                            flex
                                            h-6
                                            w-6
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#FEF2F2]
                                            text-[#E01E31]
                                        "
                                    >
                                        <RiCheckLine className="h-3.5 w-3.5" />
                                    </span>

                                    {t(`whyBenefit${index + 1}`)}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div ref={rightRef} data-reveal>
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

                        {t("whyBadge")}
                    </span>

                    <h2
                        className="
                            font-display
                            mt-5
                            text-4xl
                            font-semibold
                            leading-[1.05]
                            tracking-[-0.02em]
                            text-[#000000]
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        {t("whyTitleMain")}{" "}
                        <span className="text-[#E01E31]">
                            {t("whyTitleHighlight")}
                        </span>
                    </h2>

                    <p
                        className="
                            mt-5
                            max-w-xl
                            text-sm
                            leading-7
                            text-[#404040]
                            sm:text-base
                        "
                    >
                        {t("whyDescription")}
                    </p>

                    <div
                        ref={featuresRef}
                        className="
                            mt-8
                            grid
                            gap-4
                            sm:mt-10
                            sm:grid-cols-2
                        "
                    >
                        {features.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={index}
                                    data-reveal
                                    className="
                                        rounded-3xl
                                        border
                                        border-[#E5E5E5]
                                        bg-[#FFFFFF]
                                        p-5
                                        shadow-[0_2px_12px_rgba(0,0,0,0.04)]
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1.5
                                        hover:border-[#E01E31]/40
                                        hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)]
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            bg-[#FEF2F2]
                                            text-[#E01E31]
                                        "
                                    >
                                        <Icon className="h-5 w-5" />
                                    </div>

                                    <h3
                                        className="
                                            mt-4
                                            text-sm
                                            font-bold
                                            text-[#000000]
                                            sm:text-base
                                        "
                                    >
                                        {t(`whyFeat${["Door","Prof","Time","Trust"][index]}Title`)}
                                    </h3>

                                    <p
                                        className="
                                            mt-2
                                            text-xs
                                            leading-6
                                            text-[#404040]
                                            sm:text-sm
                                        "
                                    >
                                        {t(`whyFeat${["Door","Prof","Time","Trust"][index]}Desc`)}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Trust Stats */}
                    <div
                        className="
                            mt-8
                            grid
                            grid-cols-3
                            gap-3
                            sm:mt-10
                            sm:gap-4
                        "
                    >
                        <div className="rounded-2xl bg-white px-6 py-4 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
                            <div className="font-display text-3xl font-bold text-[#E01E31] sm:text-4xl">
                                {companyInfo.customerCount}
                            </div>
                            <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#404040] sm:text-[11px]">
                                {t("whyStatCustomers")}
                            </div>
                        </div>

                        <div className="rounded-2xl bg-white px-6 py-4 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
                            <div className="font-display text-3xl font-bold text-[#E01E31] sm:text-4xl">
                                {companyInfo.rating}
                            </div>
                            <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#404040] sm:text-[11px]">
                                {t("whyStatRating")}
                            </div>
                        </div>

                        <div className="rounded-2xl bg-white px-6 py-4 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
                            <div className="font-display text-3xl font-bold text-[#E01E31] sm:text-4xl">
                                {companyInfo.serviceCount}
                            </div>
                            <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-[#404040] sm:text-[11px]">
                                {t("whyStatServices")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyLoveLaundry;
