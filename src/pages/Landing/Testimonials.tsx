import { RiStarFill } from "react-icons/ri";
import { useReveal } from "../../hooks/useReveal";
import { useLanguage } from "../../i18n";
import SectionHeader from "./SectionHeader";

const Testimonials = () => {
    const { t } = useLanguage();
    const cardsRef = useReveal<HTMLDivElement>({ y: 30, stagger: 0.1 });

    return (
        <section
            id="testimonials"
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
            {/* Warm gradient accent */}
            <div
                aria-hidden="true"
                className="
                    pointer-events-none
                    absolute
                    -top-20
                    right-0
                    h-80
                    w-80
                    rounded-full
                    bg-[#FEF2F2]
                    opacity-40
                    blur-3xl
                    sm:h-96
                    sm:w-96
                "
            />

            <div className="relative mx-auto w-full max-w-[1440px]">
                <SectionHeader
                    badge={t("testimonialsBadge")}
                    main={t("testimonialsTitleMain")}
                    highlight={t("testimonialsTitleHighlight")}
                    description={t("testimonialsDescription")}
                />

                <div
                    ref={cardsRef}
                    className="
                        mt-12
                        grid
                        gap-5
                        sm:mt-14
                        md:grid-cols-2
                        lg:grid-cols-3
                    "
                >
                    {[1, 2, 3].map((num) => (
                        <article
                            key={num}
                            data-reveal
                            className="
                                flex
                                flex-col
                                rounded-3xl
                                border
                                border-[#E5E5E5]
                                bg-[#FFFFFF]
                                p-8
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
                                    font-display
                                    text-6xl
                                    font-bold
                                    leading-none
                                    text-[#E01E31]
                                "
                            >
                                "
                            </div>

                            <div className="-mt-5 flex items-center gap-1">
                                {Array.from({ length: 5 }).map(
                                    (_, index) => (
                                        <RiStarFill
                                            key={index}
                                            className="h-4 w-4 text-[#E3A13C]"
                                        />
                                    )
                                )}
                            </div>

                            <p
                                className="
                                    mt-4
                                    flex-1
                                    text-base
                                    font-semibold
                                    leading-7
                                    text-[#000000]
                                "
                            >
                                {t(`testimonial${num}Quote`)}
                            </p>

                            <div
                                className="
                                    mt-7
                                    flex
                                    items-center
                                    gap-3
                                    border-t
                                    border-[#E5E5E5]
                                    pt-5
                                "
                            >
                                <div
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[#E01E31]
                                        text-sm
                                        font-bold
                                        text-white
                                    "
                                >
                                    {t(`testimonial${num}Name`)
                                        .split(" ")
                                        .slice(0, 2)
                                        .map((part) => part[0])
                                        .join("")}
                                </div>

                                <div>
                                    <div className="text-sm font-bold text-[#000000]">
                                        {t(`testimonial${num}Name`)}
                                    </div>

                                    <div className="mt-0.5 text-xs text-[#737373]">
                                        {t(`testimonial${num}Service`)} ·{" "}
                                        {t(`testimonial${num}Location`)}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
