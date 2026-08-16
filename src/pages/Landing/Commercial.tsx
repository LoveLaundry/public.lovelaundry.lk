import { RiArrowRightLine } from "react-icons/ri";
import { useReveal } from "../../hooks/useReveal";
import { commercialServices, commercialSection } from "../../data/siteData";
import SectionHeader from "./SectionHeader";

const Commercial = () => {
    const cardsRef = useReveal<HTMLDivElement>({ y: 30, stagger: 0.12 });

    return (
        <section
            id="commercial"
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
            <div className="relative mx-auto w-full max-w-[1440px]">
                <SectionHeader
                    badge={commercialSection.badge}
                    main={commercialSection.title.main}
                    highlight={commercialSection.title.highlight}
                    description={commercialSection.description}
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
                                    rounded-3xl
                                    border
                                    border-[#E0D5C2]
                                    bg-[#FFFDF9]
                                    p-8
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1.5
                                    hover:border-[#E01E31]/40
                                    hover:shadow-[0_24px_50px_rgba(75,56,36,0.16)]
                                "
                            >
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
                                            text-[#E8DFD0]
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
                                    {service.subtitle}
                                </div>

                                <h3
                                    className="
                                        font-display
                                        mt-2
                                        text-xl
                                        font-semibold
                                        tracking-tight
                                        text-[#2B2623]
                                        sm:text-2xl
                                    "
                                >
                                    {service.title}
                                </h3>

                                <p
                                    className="
                                        mt-3
                                        text-sm
                                        leading-6
                                        text-[#564D44]
                                    "
                                >
                                    {service.description}
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
                                        bg-[#2B2623]
                                        px-5
                                        py-2.5
                                        text-xs
                                        font-bold
                                        text-[#FFFDF9]
                                        transition-all
                                        duration-200
                                        group-hover:gap-3
                                        group-hover:bg-[#E01E31]
                                    "
                                >
                                    Get a Quote

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
