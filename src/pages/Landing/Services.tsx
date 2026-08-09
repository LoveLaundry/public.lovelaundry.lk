import { motion } from "framer-motion";
import { RiArrowRightLine } from "react-icons/ri";

const services = [
    {
        title: "Wash & Fold",
        subtitle: "Everyday Laundry",
        description:
            "Professional washing, drying and folding for your everyday clothes.",
        image: "./assets/images/services/wash-fold.jpg",
    },
    {
        title: "Ironing",
        subtitle: "Crisp & Perfect",
        description:
            "Freshly pressed clothes that look clean, sharp and ready to wear.",
        image: "./assets/images/services/ironing.jpg",
    },
    {
        title: "Dry Cleaning",
        subtitle: "Special Care",
        description:
            "Specialized cleaning for suits, dresses and delicate garments.",
        image: "./assets/images/services/dry-cleaning.jpg",
    },
    {
        title: "Pickup & Delivery",
        subtitle: "At Your Door",
        description:
            "We collect your laundry and return it fresh and ready to wear.",
        image: "./assets/images/services/pickup-delivery.jpg",
    },
];

const Services = () => {
    return (
        <section
            id="services"
            className="
                relative
                overflow-hidden
                bg-white
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
                    bg-red-50/70
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
                            text-[#e50914]
                            sm:px-4
                            sm:py-2
                            sm:text-xs
                        "
                    >
                        Our Services
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
                        Everything your
                        <br className="hidden sm:block" />
                        <span className="text-[#e50914]">
                            clothes need.
                        </span>
                    </h2>

                    <p
                        className="
                            mt-5
                            max-w-xl
                            text-sm
                            leading-6
                            text-neutral-500
                            sm:text-base
                            sm:leading-7
                        "
                    >
                        From everyday washing to delicate dry cleaning,
                        our professional team keeps your wardrobe fresh,
                        clean and ready.
                    </p>
                </motion.div>

                <div
                    className="
                        mt-10
                        grid
                        gap-4
                        sm:mt-12
                        sm:grid-cols-2
                        lg:mt-14
                        lg:grid-cols-4
                    "
                >
                    {services.map((service, index) => (
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
                                delay: index * 0.08,
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
                            <div
                                className="
                                    relative
                                    aspect-[1.35/1]
                                    overflow-hidden
                                    bg-red-50
                                "
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    loading="lazy"
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

                                <div
                                    className="
                                        pointer-events-none
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-black/20
                                        via-transparent
                                        to-transparent
                                    "
                                />

                                <div
                                    className="
                                        absolute
                                        left-3
                                        top-3
                                        rounded-full
                                        border
                                        border-white/70
                                        bg-white/90
                                        px-2.5
                                        py-1
                                        text-[9px]
                                        font-bold
                                        uppercase
                                        tracking-wider
                                        text-[#e50914]
                                        shadow-sm
                                        backdrop-blur
                                    "
                                >
                                    Love Laundry
                                </div>
                            </div>

                            <div className="p-5 sm:p-6">
                                <div
                                    className="
                                        text-[9px]
                                        font-bold
                                        uppercase
                                        tracking-[0.16em]
                                        text-[#e50914]
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
                                    "
                                >
                                    {service.title}
                                </h3>

                                <p
                                    className="
                                        mt-2.5
                                        text-sm
                                        leading-6
                                        text-neutral-500
                                    "
                                >
                                    {service.description}
                                </p>

                                <button
                                    type="button"
                                    className="
                                        mt-5
                                        flex
                                        items-center
                                        gap-2
                                        text-xs
                                        font-bold
                                        text-[#e50914]
                                        transition-all
                                        duration-200
                                        group-hover:gap-3
                                    "
                                >
                                    Learn more

                                    <RiArrowRightLine className="h-4 w-4" />
                                </button>
                            </div>
                        </motion.article>
                    ))}
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
                        delay: 0.3,
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
                            Not sure which service you need?
                        </p>

                        <p className="mt-1 text-xs text-neutral-500">
                            Talk to our team and we'll help you choose.
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
                            bg-[#e50914]
                            px-5
                            text-xs
                            font-bold
                            text-white
                            shadow-[0_5px_15px_rgba(229,9,20,0.18)]
                            transition
                            hover:bg-[#c90812]
                        "
                    >
                        Contact Us
                        <RiArrowRightLine className="h-4 w-4" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;