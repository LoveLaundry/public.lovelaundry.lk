import { useReveal } from "../../hooks/useReveal";

interface SectionHeaderProps {
    badge: string;
    main: string;
    highlight?: string;
    description?: string;
    centered?: boolean;
    dark?: boolean;
}

const SectionHeader = ({
    badge,
    main,
    highlight,
    description,
    centered = false,
    dark = false,
}: SectionHeaderProps) => {
    const headerRef = useReveal<HTMLDivElement>({ y: 25 });

    const titleColor = dark ? "text-white" : "text-[#000000]";
    const descColor = dark ? "text-white/65" : "text-[#404040]";
    const pillBg = dark ? "bg-[#E01E31]/15" : "bg-[#FEF2F2]";

    if (centered) {
        return (
            <div
                ref={headerRef}
                data-reveal
                className="mx-auto max-w-3xl text-center"
            >
                <span
                    className={`
                        inline-flex
                        items-center
                        gap-2.5
                        rounded-full
                        border
                        border-[#E01E31]/20
                        ${pillBg}
                        px-4
                        py-1.5
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-[#E01E31]
                        sm:text-xs
                    `}
                >
                    {badge}
                </span>

                <h2
                    className={`
                        font-display
                        mt-5
                        text-4xl
                        font-semibold
                        leading-[1.05]
                        tracking-[-0.02em]
                        ${titleColor}
                        sm:text-5xl
                        lg:text-6xl
                    `}
                >
                    {main}
                    {highlight ? (
                        <span className="text-[#E01E31]"> {highlight}</span>
                    ) : null}
                </h2>

                {description ? (
                    <p
                        className={`
                            mx-auto
                            mt-5
                            max-w-xl
                            text-sm
                            leading-8
                            ${descColor}
                            sm:text-base
                        `}
                    >
                        {description}
                    </p>
                ) : null}
            </div>
        );
    }

    return (
        <div ref={headerRef} data-reveal className="max-w-3xl">
            <span
                className="
                    inline-flex
                    items-center
                    gap-2.5
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#E01E31]
                    sm:text-xs
                "
            >
                <span
                    aria-hidden="true"
                    className="h-[3px] w-10 rounded-full bg-[#E01E31] shadow-[0_0_8px_rgba(224,30,49,0.4)]"
                />

                {badge}
            </span>

            <h2
                className={`
                    font-display
                    mt-5
                    text-4xl
                    font-semibold
                    leading-[1.05]
                    tracking-[-0.02em]
                    ${titleColor}
                    sm:text-5xl
                    lg:text-6xl
                `}
            >
                {main}

                {highlight ? (
                    <span className="text-[#E01E31]"> {highlight}</span>
                ) : null}
            </h2>

            {description ? (
                <p
                    className={`
                        mt-5
                        max-w-xl
                        text-sm
                        leading-8
                        ${descColor}
                        sm:text-base
                    `}
                >
                    {description}
                </p>
            ) : null}
        </div>
    );
};

export default SectionHeader;
