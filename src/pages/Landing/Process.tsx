import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Book a pickup",
        text: "Contact us and tell us what you need cleaned.",
    },
    {
        number: "02",
        title: "We collect",
        text: "Our delivery team picks up your laundry from your location.",
    },
    {
        number: "03",
        title: "We clean",
        text: "Your clothes are washed, dried, ironed or dry cleaned as required.",
    },
    {
        number: "04",
        title: "We deliver",
        text: "Fresh, clean and neatly prepared clothes come back to your doorstep.",
    },
];

const Process = () => {
    return (
        <section
            id="process"
            className="scroll-mt-24 bg-neutral-950 px-5 py-28 text-white sm:px-8"
        >
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">

                    <div>
                        <span className="text-xs font-black uppercase tracking-[0.25em] text-green-400">
                            How it works
                        </span>

                        <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                            Laundry day,
                            <br />
                            without the laundry.
                        </h2>

                        <p className="mt-6 max-w-md leading-7 text-white/50">
                            Getting professionally cleaned clothes has never
                            been easier.
                        </p>
                    </div>

                    <div className="space-y-5">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className="flex gap-5 rounded-3xl border border-white/10 bg-white/[0.04] p-6"
                            >
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-500 text-sm font-black">
                                    {step.number}
                                </div>

                                <div>
                                    <h3 className="text-lg font-black">
                                        {step.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-white/50">
                                        {step.text}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;