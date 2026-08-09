import {
    RiArrowRightLine,
    RiPhoneLine,
    RiWhatsappLine,
    RiSparklingLine,
} from "react-icons/ri";

const Contact = () => {
    return (
        <section
            id="contact"
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
            <div className="relative mx-auto w-full max-w-[1440px]">
                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-[28px]
                        bg-[#e50914]
                        px-5
                        py-12
                        shadow-[0_25px_60px_rgba(229,9,20,0.18)]
                        sm:rounded-[36px]
                        sm:px-10
                        sm:py-14
                        lg:px-16
                        lg:py-16
                    "
                >
                    <div
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
                        className="
                            pointer-events-none
                            absolute
                            -bottom-40
                            -left-20
                            h-96
                            w-96
                            rounded-full
                            bg-black/10
                        "
                    />

                    <div
                        className="
                            pointer-events-none
                            absolute
                            right-[20%]
                            top-10
                            h-24
                            w-24
                            rounded-full
                            border
                            border-white/10
                        "
                    />

                    <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-16">
                        <div>
                            <div
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    border
                                    border-white/20
                                    bg-white/10
                                    px-3
                                    py-1.5
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.2em]
                                    text-white/90
                                    backdrop-blur
                                    sm:px-4
                                    sm:py-2
                                    sm:text-xs
                                "
                            >
                                <RiSparklingLine className="h-3.5 w-3.5" />
                                Ready when you are
                            </div>

                            <h2
                                className="
                                    mt-5
                                    max-w-3xl
                                    text-4xl
                                    font-black
                                    leading-[1]
                                    tracking-[-0.04em]
                                    text-white
                                    sm:text-5xl
                                    lg:text-6xl
                                "
                            >
                                Give your laundry day
                                <br className="hidden sm:block" />
                                back to yourself.
                            </h2>

                            <p
                                className="
                                    mt-6
                                    max-w-xl
                                    text-sm
                                    leading-7
                                    text-white/70
                                    sm:text-base
                                "
                            >
                                Book your next pickup and let Love Laundry
                                handle the rest. Fresh clothes, professional
                                care and convenient delivery.
                            </p>

                            <div className="mt-7 flex flex-wrap gap-4">
                                <div className="flex items-center gap-2 text-xs font-semibold text-white/70">
                                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                                    Professional care
                                </div>

                                <div className="flex items-center gap-2 text-xs font-semibold text-white/70">
                                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                                    Doorstep pickup
                                </div>

                                <div className="flex items-center gap-2 text-xs font-semibold text-white/70">
                                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                                    Easy delivery
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row lg:min-w-[190px] lg:flex-col">
                            <a
                                href="tel:+94700000000"
                                className="
                                    flex
                                    h-14
                                    items-center
                                    justify-center
                                    gap-3
                                    rounded-2xl
                                    bg-white
                                    px-7
                                    text-sm
                                    font-black
                                    text-[#e50914]
                                    shadow-xl
                                    transition-all
                                    duration-200
                                    hover:-translate-y-0.5
                                    hover:bg-neutral-50
                                "
                            >
                                <RiPhoneLine className="h-5 w-5" />
                                Call Us
                            </a>

                            <a
                                href="https://wa.me/94700000000"
                                target="_blank"
                                rel="noreferrer"
                                className="
                                    flex
                                    h-14
                                    items-center
                                    justify-center
                                    gap-3
                                    rounded-2xl
                                    border
                                    border-white/25
                                    bg-white/10
                                    px-7
                                    text-sm
                                    font-black
                                    text-white
                                    backdrop-blur
                                    transition-all
                                    duration-200
                                    hover:-translate-y-0.5
                                    hover:bg-white/20
                                "
                            >
                                <RiWhatsappLine className="h-5 w-5" />
                                WhatsApp Us
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