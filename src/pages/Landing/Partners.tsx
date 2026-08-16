import { RiHotelLine } from "react-icons/ri";
import { useReveal } from "../../hooks/useReveal";
import { partnersSection } from "../../data/siteData";
import SectionHeader from "./SectionHeader";

const Partners = () => {
    const cardsRef = useReveal<HTMLDivElement>({ y: 20, stagger: 0.06 });

    return (
        <section
            id="partners"
            className="
                relative
                bg-[#FFFDF9]
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
                    badge={partnersSection.badge}
                    main={partnersSection.title.main}
                    highlight={partnersSection.title.highlight}
                    description={partnersSection.description}
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
                        <div
                            key={partner.name}
                            data-reveal
                            className="
                                group
                                flex
                                flex-col
                                overflow-hidden
                                rounded-2xl
                                border
                                border-[#E8DFD0]
                                bg-[#F8F4EE]
                                text-center
                                transition-all
                                duration-300
                                hover:-translate-y-1.5
                                hover:border-[#E01E31]/40
                                hover:bg-white
                                hover:shadow-[0_20px_44px_rgba(75,56,36,0.14)]
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
                                            bg-[#FCE7E5]
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
                                        text-[#2B2623]
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
                                        text-[#786E60]
                                    "
                                >
                                    Hotel Partner
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <p
                    ref={cardsRef}
                    data-reveal
                    className="mt-8 text-center text-sm font-semibold text-[#786E60]"
                >
                    …and more hotels, resorts & villas across Sri Lanka.
                </p>
            </div>
        </section>
    );
};

export default Partners;
