import { motion } from "framer-motion";
import { RiArrowRightLine } from "react-icons/ri";

const services = [
    {
        title: "Wash & Fold",
        subtitle: "Everyday Laundry",
        description:
            "Professional washing, drying and folding for your everyday clothes.",
        icon: "🧺",
    },
    {
        title: "Ironing",
        subtitle: "Crisp & Perfect",
        description:
            "Freshly pressed clothes that look clean, sharp and ready to wear.",
        icon: "✨",
    },
    {
        title: "Dry Cleaning",
        subtitle: "Special Care",
        description:
            "Specialized cleaning for suits, dresses and delicate garments.",
        icon: "👔",
    },
    {
        title: "Pickup & Delivery",
        subtitle: "At Your Door",
        description:
            "We collect your laundry and return it fresh and ready to wear.",
        icon: "🚚",
    },
];

const Services = () => {
    return (
        <section
            id="services"
            className="scroll-mt-24 bg-white px-5 py-28 sm:px-8"
        >
            <div className="mx-auto max-w-7xl">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-xs font-black uppercase tracking-[0.25em] text-green-500">
                        Our services
                    </span>

                    <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
                        Everything your clothes need.
                    </h2>

                    <p className="mt-5 max-w-xl text-neutral-500">
                        From everyday washing to delicate dry cleaning,
                        our professional team keeps your wardrobe fresh,
                        clean and ready.
                    </p>
                </motion.div>

                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08,
                            }}
                            className="group rounded-3xl border border-neutral-100 bg-[#fafafa] p-7 transition duration-300 hover:-translate-y-2 hover:border-green-100 hover:bg-green-50/50 hover:shadow-xl"
                        >
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                                {service.icon}
                            </div>

                            <div className="mt-7 text-xs font-bold uppercase tracking-wider text-green-500">
                                {service.subtitle}
                            </div>

                            <h3 className="mt-2 text-xl font-black">
                                {service.title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-neutral-500">
                                {service.description}
                            </p>

                            <div className="mt-6 flex items-center gap-2 text-sm font-bold text-green-600 opacity-0 transition group-hover:opacity-100">
                                Learn more
                                <RiArrowRightLine />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;