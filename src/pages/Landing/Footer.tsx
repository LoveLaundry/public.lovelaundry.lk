import { companyInfo } from "../../data/siteData";

const Footer = () => {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <footer className="border-t border-neutral-200 bg-white">
            <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
                <div
                    className="
                        flex
                        flex-col
                        gap-8
                        py-10
                        sm:py-12
                        lg:flex-row
                        lg:items-center
                        lg:justify-between
                    "
                >
                    <button
                        type="button"
                        onClick={() => scrollTo("home")}
                        className="group text-left"
                    >
                        <div className="flex items-center gap-3">
                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-[#DC2626]
                                    text-lg
                                    font-black
                                    text-white
                                    shadow-[0_5px_15px_rgba(229,9,20,0.16)]
                                    transition-transform
                                    duration-200
                                    group-hover:scale-105
                                "
                            >
                                L
                            </div>

                            <div>
                                <div className="text-base font-black tracking-tight text-neutral-950">
                                    {companyInfo.name}
                                </div>

                                <div
                                    className="
                                        mt-0.5
                                        text-[9px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.18em]
                                        text-neutral-400
                                    "
                                >
                                    {companyInfo.tagline}
                                </div>
                            </div>
                        </div>
                    </button>

                    <nav
                        className="
                            flex
                            flex-wrap
                            items-center
                            gap-x-6
                            gap-y-3
                            text-xs
                            font-semibold
                            text-neutral-500
                        "
                    >
                        <button
                            type="button"
                            onClick={() => scrollTo("home")}
                            className="transition hover:text-[#DC2626]"
                        >
                            Home
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollTo("services")}
                            className="transition hover:text-[#DC2626]"
                        >
                            Services
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollTo("commercial")}
                            className="transition hover:text-[#DC2626]"
                        >
                            Commercial
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollTo("process")}
                            className="transition hover:text-[#DC2626]"
                        >
                            How It Works
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollTo("about")}
                            className="transition hover:text-[#DC2626]"
                        >
                            Why Us
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollTo("contact")}
                            className="transition hover:text-[#DC2626]"
                        >
                            Contact
                        </button>
                    </nav>
                </div>

                <div
                    className="
                        flex
                        flex-col
                        gap-3
                        border-t
                        border-neutral-100
                        py-5
                        text-xs
                        text-neutral-400
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >
                    <p>
                        © {new Date().getFullYear()} {companyInfo.name}. All rights
                        reserved.
                    </p>

                    <p className="text-neutral-300">
                        {companyInfo.tagline}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;