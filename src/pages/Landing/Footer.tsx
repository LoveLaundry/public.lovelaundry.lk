import {
    RiFacebookLine,
    RiInstagramLine,
    RiWhatsappLine,
    RiTiktokLine,
    RiArrowRightLine,
} from "react-icons/ri";
import { useLanguage } from "../../i18n";
import { COMPANY } from "../../data/constants";
import { partnersSection } from "../../data/siteData";

const Footer = () => {
    const { t } = useLanguage();
    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
    };

    const socials = [
        { icon: RiFacebookLine, href: COMPANY.social.facebook, label: "Facebook" },
        { icon: RiInstagramLine, href: COMPANY.social.instagram, label: "Instagram" },
        { icon: RiTiktokLine, href: COMPANY.social.tiktok, label: "TikTok" },
        { icon: RiWhatsappLine, href: COMPANY.whatsappLink, label: "WhatsApp" },
    ].filter((s) => s.href);

    return (
        <footer className="bg-[#0C0708] border-t border-[#E01E31]/20">
            {/* WhatsApp CTA strip */}
            <div className="border-b border-white/10">
                <div
                    className="
                        mx-auto
                        flex
                        w-full
                        max-w-[1440px]
                        flex-col
                        items-center
                        gap-4
                        px-5
                        py-8
                        sm:flex-row
                        sm:justify-between
                        sm:px-8
                        lg:px-10
                    "
                >
                    <div className="text-center sm:text-left">
                        <div className="font-display text-lg font-semibold tracking-tight text-white sm:text-xl">
                            {t("footerCtaTitle")}
                        </div>
                        <p className="mt-0.5 text-sm text-white/60">
                            {t("footerCtaSub")}
                        </p>
                    </div>

                    <a
                        href={COMPANY.whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        className="
                            flex
                            shrink-0
                            items-center
                            gap-2.5
                            rounded-full
                            bg-[#E01E31]
                            px-7
                            py-3.5
                            text-sm
                            font-bold
                            text-white
                            shadow-[0_12px_30px_rgba(224,30,49,0.4)]
                            transition-all
                            duration-200
                            hover:-translate-y-0.5
                            hover:bg-[#C11324]
                            hover:shadow-[0_16px_38px_rgba(224,30,49,0.55)]
                        "
                    >
                        <RiWhatsappLine className="h-5 w-5" />
                        {t("contactWhatsapp")}
                        <RiArrowRightLine className="h-4 w-4" />
                    </a>
                </div>
            </div>

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
                                    {t("companyName")}
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
                                    {t("companyTagline")}
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

                    {socials.length > 0 && (
                        <div className="flex items-center gap-2.5">
                            {socials.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={social.label}
                                        className="
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            border-white/10
                                            bg-white/5
                                            text-white/80
                                            transition-all
                                            duration-200
                                            hover:-translate-y-0.5
                                            hover:border-[#E01E31]/40
                                            hover:bg-[#E01E31]
                                            hover:text-white
                                        "
                                    >
                                        <Icon className="h-4.5 w-4.5" />
                                    </a>
                                );
                            })}
                        </div>
                    )}
                </div>

                {/* Trusted by partner strip */}
                <div className="flex flex-col items-center gap-5 border-t border-white/10 py-8 sm:flex-row sm:justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#737373]">
                        {t("footerTrustedBy")}
                    </span>

                    <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                        {partnersSection.partners.slice(0, 6).map((partner) => (
                            <div
                                key={partner.name}
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    overflow-hidden
                                    rounded-xl
                                    border
                                    border-white/10
                                    bg-white/5
                                "
                                title={partner.name}
                            >
                                {partner.image ? (
                                    <img
                                        src={partner.image}
                                        alt={partner.name}
                                        loading="lazy"
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <span className="text-[10px] font-bold text-white/70">
                                        {partner.name.charAt(0)}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
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
                        © {new Date().getFullYear()} {t("companyName")}. {t("footerRights")}
                    </p>

                    <p>{t("companyTagline")}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
