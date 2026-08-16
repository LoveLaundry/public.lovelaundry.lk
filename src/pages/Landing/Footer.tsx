import { companyInfo } from "../../data/siteData";

const Footer = () => {
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <footer className="bg-[#2B2623]">
            <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-10">
                <div
                    className="
                        flex
                        flex-col
                        gap-8
                        py-12
                        sm:py-14
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
                                    h-11
                                    w-11
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    bg-[#E01E31]
                                    text-lg
                                    font-bold
                                    text-white
                                    transition-transform
                                    duration-200
                                    group-hover:scale-105
                                "
                            >
                                L
                            </div>

                            <div>
                                <div
                                    className="
                                        font-display
                                        text-base
                                        font-semibold
                                        tracking-tight
                                        text-[#FFFDF9]
                                    "
                                >
                                    {companyInfo.name}
                                </div>

                                <div
                                    className="
                                        mt-0.5
                                        text-[10px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.16em]
                                        text-[#A99F90]
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
                            gap-x-7
                            gap-y-3
                            text-sm
                            font-semibold
                            text-[#C9BEB0]
                        "
                    >
                        <button
                            type="button"
                            onClick={() => scrollTo("home")}
                            className="transition hover:text-[#E01E31]"
                        >
                            Home
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollTo("services")}
                            className="transition hover:text-[#E01E31]"
                        >
                            Services
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollTo("commercial")}
                            className="transition hover:text-[#E01E31]"
                        >
                            Commercial
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollTo("process")}
                            className="transition hover:text-[#E01E31]"
                        >
                            How It Works
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollTo("about")}
                            className="transition hover:text-[#E01E31]"
                        >
                            Why Us
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollTo("contact")}
                            className="transition hover:text-[#E01E31]"
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
                        border-white/10
                        py-5
                        text-xs
                        text-[#8C8175]
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >
                    <p>
                        © {new Date().getFullYear()} {companyInfo.name}. All
                        rights reserved.
                    </p>

                    <p>{companyInfo.tagline}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
