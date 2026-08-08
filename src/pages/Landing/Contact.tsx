import {
    RiArrowRightLine,
    RiPhoneLine,
} from "react-icons/ri";

const Contact = () => {
    return (
        <section
            id="contact"
            className="scroll-mt-24 px-5 pb-32 pt-10 sm:px-8"
        >
            <div className="mx-auto max-w-7xl">
                <div className="relative overflow-hidden rounded-[3rem] bg-green-500 px-7 py-16 text-white sm:px-14 sm:py-20">

                    <div className="absolute -right-20 -top-40 h-96 w-96 rounded-full bg-white/10" />

                    <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-black/10" />

                    <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

                        <div>
                            <span className="text-xs font-black uppercase tracking-[0.25em] text-white/60">
                                Ready when you are
                            </span>

                            <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">
                                Give your laundry day back to yourself.
                            </h2>

                            <p className="mt-6 max-w-xl leading-7 text-white/70">
                                Book your next pickup and let Love Laundry
                                handle the rest.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">

                            <a
                                href="tel:+94700000000"
                                className="flex h-14 items-center justify-center gap-3 rounded-2xl bg-white px-7 text-sm font-black text-green-600 shadow-xl transition hover:bg-neutral-100"
                            >
                                <RiPhoneLine className="h-5 w-5" />
                                Call Us
                            </a>

                            <a
                                href="https://wa.me/94700000000"
                                target="_blank"
                                rel="noreferrer"
                                className="flex h-14 items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-7 text-sm font-black text-white backdrop-blur transition hover:bg-white/20"
                            >
                                WhatsApp Us
                                <RiArrowRightLine className="h-5 w-5" />
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;