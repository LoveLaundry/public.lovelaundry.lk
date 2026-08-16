import { RiArrowRightLine } from "react-icons/ri";
import { useReveal } from "../../hooks/useReveal";
import { services, servicesSection } from "../../data/siteData";
import SectionHeader from "./SectionHeader";

const Services = () => {
    const cardsRef = useReveal<HTMLDivElement>({ y: 30, stagger: 0.1 });

    return (
        <section
            id="services"
            className="
                relative
                bg-[#F8F4EE]
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
                    badge={servicesSection.badge}
                    main={servicesSection.title.main}
                    highlight={servicesSection.title.highlight}
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
                    {services.map((service) => (
                        <article
                            key={service.title}
                            data-reveal
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-3xl
                                border
                                border-[#E8DFD0]
                                bg-[#FFFDF9]
                                transition-all
                                duration-300
                                hover:-translate-y-1.5
                                hover:border-[#E01E31]/40
                                hover:shadow-[0_24px_50px_rgba(75,56,36,0.16)]
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
                                    bg-[#F1E9DC]
                                "
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
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
                                    "
                                >
                                    {service.title}
                                </h3>

                                <p
                                    className="
                                        mt-2.5
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
                                    Learn more

                                    <RiArrowRightLine className="h-4 w-4" />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
