import { RiCheckLine, RiHeart3Fill } from "react-icons/ri";
import { useReveal } from "../../hooks/useReveal";
import {
    features,
    benefits,
    whyLoveLaundrySection,
    companyInfo,
} from "../../data/siteData";

const WhyLoveLaundry = () => {
    const leftRef = useReveal<HTMLDivElement>({ x: -30, y: 0 });
    const rightRef = useReveal<HTMLDivElement>({ x: 30, y: 0 });
    const featuresRef = useReveal<HTMLDivElement>({ y: 20, stagger: 0.08 });

    return (
        <section
            id="about"
            className="
                relative
                bg-[#F1E9DC]
                px-4
                py-16
                sm:px-6
                sm:py-24
                lg:px-8
                lg:py-28
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
                            border-[#E0D5C2]
                            bg-[#FFFDF9]
                            p-8
                            shadow-[0_24px_60px_rgba(75,56,36,0.12)]
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
                                    bg-[#F1E9DC]
                                    px-3
                                    py-1.5
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.15em]
                                    text-[#564D44]
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
                                text-[#2B2623]
                                sm:text-4xl
                            "
                        >
                            {whyLoveLaundrySection.card.title}
                        </h3>

                        <p
                            className="
                                mt-5
                                max-w-md
                                text-sm
                                leading-7
                                text-[#564D44]
                                sm:text-base
                            "
                        >
                            {whyLoveLaundrySection.card.description}
                        </p>

                        <div className="mt-8 space-y-3">
                            {benefits.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 text-sm font-semibold text-[#3A332C]"
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
                                            bg-[#FCE7E5]
                                            text-[#E01E31]
                                        "
                                    >
                                        <RiCheckLine className="h-3.5 w-3.5" />
                                    </span>

                                    {item}
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

                        {whyLoveLaundrySection.badge}
                    </span>

                    <h2
                        className="
                            font-display
                            mt-5
                            text-4xl
                            font-semibold
                            leading-[1.05]
                            tracking-[-0.02em]
                            text-[#2B2623]
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        {whyLoveLaundrySection.title.main}{" "}
                        <span className="text-[#E01E31]">
                            {whyLoveLaundrySection.title.highlight}
                        </span>
                    </h2>

                    <p
                        className="
                            mt-5
                            max-w-xl
                            text-sm
                            leading-7
                            text-[#564D44]
                            sm:text-base
                        "
                    >
                        {whyLoveLaundrySection.description}
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
                        {features.map((feature) => {
                            const Icon = feature.icon;

                            return (
                                <div
                                    key={feature.title}
                                    data-reveal
                                    className="
                                        rounded-3xl
                                        border
                                        border-[#E0D5C2]
                                        bg-[#FFFDF9]
                                        p-5
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1.5
                                        hover:border-[#E01E31]/40
                                        hover:shadow-[0_24px_50px_rgba(75,56,36,0.16)]
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
                                            bg-[#FCE7E5]
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
                                            text-[#2B2623]
                                            sm:text-base
                                        "
                                    >
                                        {feature.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-2
                                            text-xs
                                            leading-6
                                            text-[#564D44]
                                            sm:text-sm
                                        "
                                    >
                                        {feature.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyLoveLaundry;
