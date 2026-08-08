import { motion } from "framer-motion";
import {
    RiArrowRightLine,
    RiSparklingLine,
    RiTruckLine,
    RiStarFill,
} from "react-icons/ri";

const Hero = () => {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28 sm:px-8"
        >
            <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-green-400/20 blur-3xl" />

            <div className="absolute -right-40 bottom-10 h-[500px] w-[500px] rounded-full bg-emerald-300/20 blur-3xl" />

            <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">

                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-green-700">
                        <span className="h-2 w-2 rounded-full bg-green-500" />
                        Laundry made easy
                    </div>

                    <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
                        Fresh clothes.
                        <br />
                        <span className="text-green-500">
                            More free time.
                        </span>
                    </h1>

                    <p className="mt-7 max-w-xl text-base leading-7 text-neutral-500 sm:text-lg">
                        Professional laundry care, ironing and dry cleaning
                        with convenient pickup and delivery. We take care of
                        your clothes, so you can take care of what matters.
                    </p>

                    <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                        <button
                            onClick={() => scrollTo("contact")}
                            className="group flex h-14 items-center justify-center gap-3 rounded-2xl bg-green-500 px-7 text-sm font-bold text-white shadow-xl shadow-green-500/25 transition hover:bg-green-600"
                        >
                            Book a Pickup

                            <RiArrowRightLine className="h-5 w-5 transition group-hover:translate-x-1" />
                        </button>

                        <button
                            onClick={() => scrollTo("services")}
                            className="flex h-14 items-center justify-center rounded-2xl border border-neutral-200 bg-white px-7 text-sm font-bold text-neutral-700 transition hover:border-green-300 hover:text-green-600"
                        >
                            Explore Services
                        </button>
                    </div>

                    <div className="mt-10 flex flex-wrap items-center gap-7">
                        <div>
                            <div className="text-2xl font-black">
                                10+
                            </div>

                            <div className="text-xs text-neutral-400">
                                Services
                            </div>
                        </div>

                        <div className="h-10 w-px bg-neutral-200" />

                        <div>
                            <div className="flex items-center gap-1 text-lg font-black">
                                4.9
                                <RiStarFill className="h-4 w-4 text-yellow-400" />
                            </div>

                            <div className="text-xs text-neutral-400">
                                Customer rating
                            </div>
                        </div>

                        <div className="h-10 w-px bg-neutral-200" />

                        <div>
                            <div className="text-2xl font-black">
                                24/7
                            </div>

                            <div className="text-xs text-neutral-400">
                                Convenience
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="relative mx-auto aspect-square max-w-[560px] overflow-hidden rounded-[3rem] bg-gradient-to-br from-green-400 to-emerald-700 p-8 shadow-2xl">

                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />

                        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-black/10" />

                        <div className="relative flex h-full flex-col justify-between">

                            <div className="flex items-center justify-between">
                                <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-bold text-white backdrop-blur">
                                    LOVE LAUNDRY
                                </span>

                                <RiSparklingLine className="h-8 w-8 text-white/80" />
                            </div>

                            <div className="text-center">
                                <div className="mb-4 text-[120px] leading-none sm:text-[160px]">
                                    🧺
                                </div>

                                <div className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                                    Clean clothes.
                                </div>

                                <div className="mt-2 text-lg font-medium text-white/70">
                                    Delivered with love.
                                </div>
                            </div>

                            <div className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                                <div className="flex items-center justify-between text-white">
                                    <div>
                                        <div className="text-xs text-white/60">
                                            NEXT PICKUP
                                        </div>

                                        <div className="mt-1 font-bold">
                                            Schedule yours today
                                        </div>
                                    </div>

                                    <RiTruckLine className="h-7 w-7" />
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;