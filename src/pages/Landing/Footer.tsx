import { companyInfo } from "../../data/siteData";
import { useLanguage } from "../../i18n";

const Footer = () => {
    const { t } = useLanguage();
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <footer className="bg-[#000000] border-t border-[#E01E31]/20">
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
                                        text-white
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
                                        text-[#A3A3A3]
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
                            text-[#D4D4D4]
                        "
                    >
                        <button
                            type="button"
                            onClick={() => scrollTo("home")}
                            className="transition hover:text-[#E01E31] hover:underline hover:underline-offset-4"
                        >
                            {t("footerHome")}
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollTo("services")}
                            className="transition hover:text-[#E01E31] hover:underline hover:underline-offset-4"
                        >
                            {t("footerServices")}
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollTo("commercial")}
                            className="transition hover:text-[#E01E31] hover:underline hover:underline-offset-4"
                        >
                            {t("footerCommercial")}
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollTo("process")}
                            className="transition hover:text-[#E01E31] hover:underline hover:underline-offset-4"
                        >
                            {t("footerHowItWorks")}
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollTo("about")}
                            className="transition hover:text-[#E01E31] hover:underline hover:underline-offset-4"
                        >
                            {t("footerWhyUs")}
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollTo("careers")}
                            className="transition hover:text-[#E01E31] hover:underline hover:underline-offset-4"
                        >
                            {t("footerCareers")}
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollTo("contact")}
                            className="transition hover:text-[#E01E31] hover:underline hover:underline-offset-4"
                        >
                            {t("footerContact")}
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
                        py-8
                        text-xs
                        text-[#737373]
                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >
                    <p>
                        © {new Date().getFullYear()} {companyInfo.name}. {t("footerRights")}
                    </p>

                    <p>{companyInfo.tagline}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
