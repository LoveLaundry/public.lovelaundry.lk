import { motion } from "framer-motion";
import {
    RiCheckLine,
    RiSparklingLine,
    RiHeart3Fill,
} from "react-icons/ri";
import { features, benefits, whyLoveLaundrySection, companyInfo } from "../../data/siteData";

const WhyLoveLaundry = () => {
    return (
        <section
            id="about"
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
                    -left-40
                    top-20
                    h-80
                    w-80
                    rounded-full
                    bg-red-100/60
                    blur-3xl
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-40
                    bottom-0
                    h-96
                    w-96
                    rounded-full
                    bg-red-50
                    blur-3xl
                "
            />

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
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -30,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="relative"
                >
                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-[28px]
                            bg-[#DC2626]
                            p-4
                            shadow-[0_20px_50px_rgba(229,9,20,0.16)]
                            sm:rounded-[36px]
                            sm:p-6
                            lg:p-7
                        "
                    >
                        <div
                            className="
                                pointer-events-none
                                absolute
                                -right-20
                                -top-20
                                h-64
                                w-64
                                rounded-full
                                bg-white/10
                            "
                        />

                        <div
                            className="
                                pointer-events-none
                                absolute
                                -bottom-24
                                -left-16
                                h-72
                                w-72
                                rounded-full
                                bg-black/10
                            "
                        />

                        <div
                            className="
                                relative
                                rounded-[22px]
                                border
                                border-white/20
                                bg-white
                                p-6
                                sm:rounded-[28px]
                                sm:p-8
                                lg:p-10
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
                                        rounded-xl
                                        bg-red-50
                                        text-[#DC2626]
                                    "
                                >
                                    <RiHeart3Fill className="h-6 w-6" />
                                </div>

                                <span
                                    className="
                                        rounded-full
                                        bg-red-50
                                        px-3
                                        py-1.5
                                        text-[9px]
                                        font-bold
                                        uppercase
                                        tracking-[0.15em]
                                        text-[#DC2626]
                                    "
                                >
                                    {companyInfo.name}
                                </span>
                            </div>

                            <h3
                                className="
                                    mt-8
                                    max-w-sm
                                    text-3xl
                                    font-black
                                    leading-[1.05]
                                    tracking-[-0.035em]
                                    text-neutral-950
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
                                    text-neutral-500
                                    sm:text-base
                                "
                            >
                                {whyLoveLaundrySection.card.description}
                            </p>

                            <div className="mt-8 space-y-3">
                                {benefits.map((item, index) => (
                                    <motion.div
                                        key={item}
                                        initial={{
                                            opacity: 0,
                                            x: -10,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            delay:
                                                index * 0.08,
                                        }}
                                        className="
                                            flex
                                            items-center
                                            gap-3
                                            text-sm
                                            font-semibold
                                            text-neutral-800
                                        "
                                    >
                                        <span
                                            className="
                                                flex
                                                h-7
                                                w-7
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-full
                                                bg-red-50
                                                text-[#DC2626]
                                            "
                                        >
                                            <RiCheckLine className="h-4 w-4" />
                                        </span>

                                        {item}
                                    </motion.div>
                                ))}
                            </div>

                            <div
                                className="
                                    mt-8
                                    rounded-xl
                                    bg-[#fafafa]
                                    p-4
                                "
                            >
                                <div className="flex items-center gap-3">
                                    <div
                                        className="
                                            flex
                                            h-9
                                            w-9
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#DC2626]
                                            text-white
                                        "
                                    >
                                        <RiSparklingLine className="h-4 w-4" />
                                    </div>

                                    <div>
                                        <p className="text-xs font-bold text-neutral-900">
                                            {whyLoveLaundrySection.card.info.title}
                                        </p>

                                        <p className="mt-0.5 text-[10px] text-neutral-400">
                                            {whyLoveLaundrySection.card.info.subtitle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{
                        opacity: 0,
                        x: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
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
                        {whyLoveLaundrySection.badge}
                    </span>

                    <h2
                        className="
                            mt-5
                            text-4xl
                            font-black
                            leading-[1]
                            tracking-[-0.04em]
                            text-neutral-950
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        {whyLoveLaundrySection.title.main}
                        <br />

                        <span className="text-[#DC2626]">
                            {whyLoveLaundrySection.title.highlight}
                        </span>
                    </h2>

                    <p
                        className="
                            mt-6
                            max-w-xl
                            text-sm
                            leading-7
                            text-neutral-500
                            sm:text-base
                        "
                    >
                        {whyLoveLaundrySection.description}
                    </p>

                    <div
                        className="
                            mt-8
                            grid
                            gap-3
                            sm:mt-10
                            sm:grid-cols-2
                            sm:gap-4
                        "
                    >
                        {features.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <motion.div
                                    key={feature.title}
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
                                        amount: 0.15,
                                    }}
                                    transition={{
                                        duration: 0.45,
                                        delay: index * 0.08,
                                    }}
                                    className="
                                        group
                                        rounded-2xl
                                        border
                                        border-neutral-200
                                        bg-white
                                        p-5
                                        shadow-[0_4px_18px_rgba(0,0,0,0.03)]
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-red-100
                                        hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)]
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-red-50
                                            text-[#DC2626]
                                            transition-all
                                            duration-300
                                            group-hover:bg-[#DC2626]
                                            group-hover:text-white
                                        "
                                    >
                                        <Icon className="h-5 w-5" />
                                    </div>

                                    <h3
                                        className="
                                            mt-4
                                            text-sm
                                            font-black
                                            text-neutral-950
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
                                            text-neutral-500
                                            sm:text-sm
                                        "
                                    >
                                        {feature.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyLoveLaundry;