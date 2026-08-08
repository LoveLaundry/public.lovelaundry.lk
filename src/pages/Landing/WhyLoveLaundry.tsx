import { motion } from "framer-motion";
import {
    RiCheckLine,
    RiSparklingLine,
    RiTruckLine,
    RiTimeLine,
    RiShieldCheckLine,
} from "react-icons/ri";

const features = [
    {
        icon: RiTruckLine,
        title: "Doorstep Service",
        description:
            "We collect and deliver your laundry right to your doorstep.",
    },
    {
        icon: RiSparklingLine,
        title: "Professional Care",
        description:
            "Your clothes are handled with professional equipment and care.",
    },
    {
        icon: RiTimeLine,
        title: "Save Your Time",
        description:
            "Spend your time on what matters while we take care of your laundry.",
    },
    {
        icon: RiShieldCheckLine,
        title: "Trusted Service",
        description:
            "We treat every garment with the attention and care it deserves.",
    },
];

const WhyLoveLaundry = () => {
    return (
        <section
            id="about"
            className="scroll-mt-24 px-5 py-28 sm:px-8"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid items-center gap-16 lg:grid-cols-2">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="rounded-[3rem] bg-green-100 p-8 sm:p-12">
                            <div className="rounded-[2rem] bg-white p-8 shadow-xl">

                                <RiSparklingLine className="h-12 w-12 text-green-500" />

                                <h3 className="mt-8 text-3xl font-black">
                                    We care about every garment.
                                </h3>

                                <p className="mt-5 leading-7 text-neutral-500">
                                    Love Laundry is built around one simple
                                    idea: professional laundry should be
                                    convenient, reliable and genuinely cared
                                    for.
                                </p>

                                <div className="mt-8 space-y-4">
                                    {[
                                        "Professional cleaning",
                                        "Careful garment handling",
                                        "Convenient pickup & delivery",
                                        "Reliable customer service",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-center gap-3 text-sm font-semibold"
                                        >
                                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                                                <RiCheckLine />
                                            </span>

                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-xs font-black uppercase tracking-[0.25em] text-green-500">
                            Why Love Laundry
                        </span>

                        <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                            More than clean.
                            <br />
                            <span className="text-green-500">
                                It's care.
                            </span>
                        </h2>

                        <p className="mt-6 max-w-xl leading-7 text-neutral-500">
                            We combine professional laundry care with modern
                            convenience, making it easier for busy families,
                            professionals and businesses to keep everything
                            fresh.
                        </p>

                        <div className="mt-10 grid gap-5 sm:grid-cols-2">
                            {features.map((feature) => {
                                const Icon = feature.icon;

                                return (
                                    <div
                                        key={feature.title}
                                        className="rounded-2xl border border-neutral-100 bg-white p-5 shadow-sm"
                                    >
                                        <Icon className="h-7 w-7 text-green-500" />

                                        <h3 className="mt-4 font-black">
                                            {feature.title}
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-neutral-500">
                                            {feature.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default WhyLoveLaundry;