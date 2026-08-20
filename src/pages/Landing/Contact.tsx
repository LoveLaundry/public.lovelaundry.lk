import {
    RiArrowRightLine,
    RiPhoneLine,
    RiWhatsappLine,
    RiSparkling2Fill,
} from "react-icons/ri";
import { useReveal } from "../../hooks/useReveal";
import { contactSection, companyInfo } from "../../data/siteData";

const Contact = () => {
    const bannerRef = useReveal<HTMLDivElement>({ y: 30, scale: 0.98 });

    return (
        <section
            id="contact"
            className="
                relative
                overflow-hidden
                bg-[#F8F4EE]
                px-4
                pb-20
                pt-4
                sm:px-6
                sm:pb-24
                lg:px-8
                lg:pb-28
            "
        >
            <div className="relative mx-auto w-full max-w-[1440px]">
                <div
                    ref={bannerRef}
                    data-reveal
                    className="
                        relative
                        overflow-hidden
                        rounded-[28px]
                        bg-[#E01E31]
                        px-6
                        py-14
                        sm:rounded-[40px]
                        sm:px-12
                        sm:py-16
                        lg:px-16
                    "
                >
                    <div
                        aria-hidden="true"
                        className="
                            pointer-events-none
                            absolute
                            -right-24
                            -top-32
                            h-96
                            w-96
                            rounded-full
                            bg-white/10
                        "
                    />

                    <div
                        aria-hidden="true"
                        className="
                            pointer-events-none
                            absolute
                            -bottom-28
                            -left-20
                            h-80
                            w-80
                            rounded-full
                            border-[24px]
                            border-white/10
                        "
                    />

                    <div
                        className="
                            relative
                            grid
                            gap-10
                            lg:grid-cols-[1fr_auto]
                            lg:items-center
                            lg:gap-16
                        "
                    >
                        <div>
                            <span
                                className="
                                    inline-flex
                                    items-center
                                    gap-2.5
                                    text-[11px]
                                    font-bold
                                    uppercase
                                    tracking-[0.22em]
                                    text-white/80
                                    sm:text-xs
                                "
                            >
                                <RiSparkling2Fill className="h-4 w-4" />

                                {contactSection.badge.text}
                            </span>

                            <h2
                                className="
                                    font-display
                                    mt-4
                                    max-w-2xl
                                    text-4xl
                                    font-semibold
                                    leading-[1.05]
                                    tracking-[-0.02em]
                                    text-white
                                    sm:text-5xl
                                    lg:text-6xl
                                "
                            >
                                {contactSection.title}
                            </h2>

                            <p
                                className="
                                    mt-5
                                    max-w-xl
                                    text-sm
                                    leading-7
                                    text-white/85
                                    sm:text-base
                                "
                            >
                                {contactSection.description}
                            </p>

                            {/* Quick Stats */}
                            <div className="mt-6 flex flex-wrap gap-4 sm:gap-6">
                                {[
                                    { label: "Available", value: companyInfo.availability },
                                    { label: "Customers", value: companyInfo.customerCount },
                                    { label: "Rating", value: `${companyInfo.rating}/5` },
                                ].map((stat) => (
                                    <div key={stat.label} className="flex items-center gap-2">
                                        <div className="font-display text-lg font-bold text-white sm:text-xl">
                                            {stat.value}
                                        </div>
                                        <div className="text-[10px] font-bold uppercase tracking-wider text-white/60">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div
                            className="
                                flex
                                flex-col
                                gap-3
                                sm:flex-row
                                lg:min-w-[210px]
                                lg:flex-col
                            "
                        >
                            <a
                                href={contactSection.buttons.phone.href}
                                className="
                                    flex
                                    h-13
                                    items-center
                                    justify-center
                                    gap-3
                                    rounded-full
                                    bg-[#FFFDF9]
                                    px-8
                                    text-sm
                                    font-bold
                                    text-[#E01E31]
                                    shadow-[0_12px_30px_rgba(193,19,36,0.35)]
                                    transition-all
                                    duration-200
                                    hover:-translate-y-0.5
                                    hover:shadow-[0_16px_40px_rgba(193,19,36,0.45)]
                                "
                            >
                                <RiPhoneLine className="h-5 w-5" />

                                {contactSection.buttons.phone.text}
                            </a>

                            <a
                                href={contactSection.buttons.whatsapp.href}
                                target="_blank"
                                rel="noreferrer"
                                className="
                                    flex
                                    h-13
                                    items-center
                                    justify-center
                                    gap-3
                                    rounded-full
                                    border
                                    border-white/30
                                    bg-white/10
                                    px-8
                                    text-sm
                                    font-bold
                                    text-white
                                    transition-all
                                    duration-200
                                    hover:-translate-y-0.5
                                    hover:bg-white/20
                                "
                            >
                                <RiWhatsappLine className="h-5 w-5" />

                                {contactSection.buttons.whatsapp.text}

                                <RiArrowRightLine className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
