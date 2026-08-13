import { motion } from "framer-motion";
import { RiSparklingLine } from "react-icons/ri";
import { processSteps, processSection } from "../../data/siteData";

const Process = () => {
    return (
        <section
            id="process"
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
                    gap-12
                    lg:grid-cols-[0.75fr_1.25fr]
                    lg:items-center
                    lg:gap-20
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
                    className="max-w-xl"
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
                        {processSection.badge}
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
                        {processSection.title.main}
                        <br />
                        <span className="text-[#DC2626]">
                            {processSection.title.highlight}
                        </span>
                    </h2>

                    <p
                        className="
                            mt-6
                            max-w-md
                            text-sm
                            leading-7
                            text-neutral-500
                            sm:text-base
                        "
                    >
                        {processSection.description}
                    </p>

                    <div
                        className="
                            mt-8
                            hidden
                            rounded-2xl
                            border
                            border-red-100
                            bg-white
                            p-5
                            shadow-[0_8px_25px_rgba(0,0,0,0.04)]
                            lg:block
                        "
                    >
                        <div className="flex items-center gap-3">
                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#DC2626]
                                    text-white
                                "
                            >
                                <RiSparklingLine className="h-5 w-5" />
                            </div>

                            <div>
                                <p className="text-sm font-bold text-neutral-900">
                                    {processSection.info.title}
                                </p>

                                <p className="mt-0.5 text-xs text-neutral-400">
                                    {processSection.info.subtitle}
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="relative">
                    <div
                        className="
                            absolute
                            left-[24px]
                            top-8
                            bottom-8
                            hidden
                            w-px
                            bg-gradient-to-b
                            from-red-200
                            via-red-100
                            to-transparent
                            sm:block
                        "
                    />

                    <div className="space-y-4 sm:space-y-5">
                        {processSteps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <motion.div
                                    key={step.number}
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
                                        amount: 0.15,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    className="
                                        group
                                        relative
                                        flex
                                        gap-4
                                        rounded-2xl
                                        border
                                        border-neutral-200
                                        bg-white
                                        p-4
                                        shadow-[0_4px_18px_rgba(0,0,0,0.03)]
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-red-100
                                        hover:shadow-[0_12px_30px_rgba(0,0,0,0.07)]
                                        sm:gap-5
                                        sm:p-5
                                        lg:p-6
                                    "
                                >
                                    <div
                                        className="
                                            relative
                                            z-10
                                            flex
                                            h-12
                                            w-12
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-[#DC2626]
                                            text-white
                                            shadow-[0_5px_15px_rgba(229,9,20,0.18)]
                                            transition-transform
                                            duration-300
                                            group-hover:scale-105
                                            sm:h-14
                                            sm:w-14
                                            sm:rounded-2xl
                                        "
                                    >
                                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-start justify-between gap-3">
                                            <div>
                                                <span
                                                    className="
                                                        text-[9px]
                                                        font-black
                                                        uppercase
                                                        tracking-[0.16em]
                                                        text-[#DC2626]
                                                    "
                                                >
                                                    Step {step.number}
                                                </span>

                                                <h3
                                                    className="
                                                        mt-1
                                                        text-lg
                                                        font-black
                                                        tracking-tight
                                                        text-neutral-950
                                                        sm:text-xl
                                                    "
                                                >
                                                    {step.title}
                                                </h3>
                                            </div>

                                            <span
                                                className="
                                                    hidden
                                                    text-2xl
                                                    font-black
                                                    tracking-tight
                                                    text-neutral-100
                                                    sm:block
                                                "
                                            >
                                                {step.number}
                                            </span>
                                        </div>

                                        <p
                                            className="
                                                mt-2
                                                max-w-xl
                                                text-xs
                                                leading-6
                                                text-neutral-500
                                                sm:text-sm
                                            "
                                        >
                                            {step.text}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;