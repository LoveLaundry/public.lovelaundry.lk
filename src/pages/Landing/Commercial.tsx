import { motion } from "framer-motion";
import { RiArrowRightLine, RiCheckLine } from "react-icons/ri";
import { commercialServices, commercialSection } from "../../data/siteData";

const Commercial = () => {
    return (
        <section
            id="commercial"
            className="
                relative
                overflow-hidden
                bg-[#fafafa]
                px-4
                py-16
                sm:px-6
                sm:py-20
                lg:px-8
                lg:py-24
            "
        >
            <div
                className="
                    pointer-events-none
                    absolute
                    -right-40
                    top-20
                    h-80
                    w-80
                    rounded-full
                    bg-red-50
                    blur-3xl
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -left-40
                    bottom-0
                    h-72
                    w-72
                    rounded-full
                    bg-red-100/70
                    blur-3xl
                "
            />

            <div className="relative mx-auto w-full max-w-[1440px]">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="
                        mx-auto
                        max-w-2xl
                        text-center
                        lg:mx-0
                        lg:text-left
                    "
                >
                    <span
                        className="
                            inline-flex
                            rounded-full
                            border
                            border-red-100
                            bg-red-50
                            px-3
                            py-1.5
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.2em]
                            text-[#DC2626]
                            sm:px-4
                            sm:py-2
                            sm:text-xs
                        "
                    >
                        {commercialSection.badge}
                    </span>

                    <h2
                        className="
                            mt-4
                            text-4xl
                            font-black
                            leading-[1]
                            tracking-[-0.04em]
                            text-neutral-950
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        {commercialSection.title.main}
                        <br className="hidden sm:block" />
                        <span className="text-[#DC2626]">
                            {commercialSection.title.highlight}
                        </span>
                    </h2>

                    <p
                        className="
                            mt-5
                            max-w-3xl
                            text-sm
                            leading-6
                            text-neutral-500
                            sm:text-base
                            sm:leading-7
                        "
                    >
                        {commercialSection.description}
                    </p>
                </motion.div>

                <div
                    className="
                        mt-10
                        grid
                        gap-5
                        sm:mt-12
                        sm:grid-cols-2
                        lg:mt-14
                        lg:grid-cols-3
                        lg:gap-6
                    "
                >
                    {commercialServices.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.article
                                key={service.title}
                                initial={{
                                    opacity: 0,
                                    y: 30,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.15,
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className="
                                    group
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-neutral-200
                                    bg-white
                                    shadow-[0_4px_18px_rgba(0,0,0,0.035)]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-red-100
                                    hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)]
                                "
                            >
                                <div className="p-6 sm:p-7">
                                    <div
                                        className="
                                            flex
                                            h-14
                                            w-14
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-red-50
                                            text-[#DC2626]
                                            transition-all
                                            duration-300
                                            group-hover:bg-[#DC2626]
                                            group-hover:text-white
                                            group-hover:shadow-[0_6px_20px_rgba(229,9,20,0.2)]
                                        "
                                    >
                                        <Icon className="h-7 w-7" />
                                    </div>

                                    <div
                                        className="
                                            mt-4
                                            text-[9px]
                                            font-bold
                                            uppercase
                                            tracking-[0.16em]
                                            text-[#DC2626]
                                        "
                                    >
                                        {service.subtitle}
                                    </div>

                                    <h3
                                        className="
                                            mt-2
                                            text-xl
                                            font-black
                                            tracking-tight
                                            text-neutral-950
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
                                            text-neutral-500
                                        "
                                    >
                                        {service.description}
                                    </p>

                                    <div className="mt-5 space-y-2.5">
                                        {service.features.map((feature) => (
                                            <div
                                                key={feature}
                                                className="
                                                    flex
                                                    items-center
                                                    gap-2.5
                                                    text-xs
                                                    font-semibold
                                                    text-neutral-700
                                                "
                                            >
                                                <span
                                                    className="
                                                        flex
                                                        h-5
                                                        w-5
                                                        shrink-0
                                                        items-center
                                                        justify-center
                                                        rounded-full
                                                        bg-red-50
                                                        text-[#DC2626]
                                                    "
                                                >
                                                    <RiCheckLine className="h-3.5 w-3.5" />
                                                </span>

                                                {feature}
                                            </div>
                                        ))}
                                    </div>

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
                                            mt-6
                                            flex
                                            items-center
                                            gap-2
                                            text-xs
                                            font-bold
                                            text-[#DC2626]
                                            transition-all
                                            duration-200
                                            group-hover:gap-3
                                        "
                                    >
                                        Get a Quote

                                        <RiArrowRightLine className="h-4 w-4" />
                                    </button>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.4,
                    }}
                    className="
                        mt-8
                        flex
                        flex-col
                        items-center
                        justify-between
                        gap-4
                        rounded-2xl
                        border
                        border-red-100
                        bg-red-50/60
                        px-5
                        py-5
                        sm:flex-row
                        sm:px-6
                    "
                >
                    <div className="text-center sm:text-left">
                        <p className="text-sm font-bold text-neutral-900">
                            {commercialSection.cta.text}
                        </p>

                        <p className="mt-1 text-xs text-neutral-500">
                            {commercialSection.cta.subtext}
                        </p>
                    </div>

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
                            flex
                            h-11
                            shrink-0
                            items-center
                            justify-center
                            gap-2
                            rounded-lg
                            bg-[#DC2626]
                            px-5
                            text-xs
                            font-bold
                            text-white
                            shadow-[0_5px_15px_rgba(229,9,20,0.18)]
                            transition
                            hover:bg-[#B91C1C]
                        "
                    >
                        {commercialSection.cta.buttonText}
                        <RiArrowRightLine className="h-4 w-4" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Commercial;
