import { useReveal } from "../../hooks/useReveal";
import { processSteps, processSection } from "../../data/siteData";
import SectionHeader from "./SectionHeader";

const Process = () => {
    const stepsRef = useReveal<HTMLDivElement>({ y: 30, stagger: 0.1 });

    return (
        <section
            id="process"
            className="
                relative
                bg-[#F8F4EE]
                px-4
                py-16
                sm:px-6
                sm:py-24
                lg:px-8
                lg:py-28
            "
        >
            <div className="relative mx-auto w-full max-w-[1440px]">
                <SectionHeader
                    badge={processSection.badge}
                    main={processSection.title.main}
                    highlight={processSection.title.highlight}
                />

                <div
                    ref={stepsRef}
                    className="
                        mt-12
                        grid
                        gap-5
                        sm:mt-14
                        sm:grid-cols-2
                        lg:grid-cols-4
                    "
                >
                    {processSteps.map((step) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={step.number}
                                data-reveal
                                className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-3xl
                                    border
                                    border-[#E8DFD0]
                                    bg-[#FFFDF9]
                                    p-7
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1.5
                                    hover:border-[#E01E31]/40
                                    hover:shadow-[0_24px_50px_rgba(75,56,36,0.16)]
                                "
                            >
                                <div
                                    aria-hidden="true"
                                    className="
                                        pointer-events-none
                                        absolute
                                        -right-3
                                        -top-6
                                        font-display
                                        text-[120px]
                                        font-bold
                                        leading-none
                                        tracking-tight
                                        text-[#F1E9DC]
                                        transition-colors
                                        duration-300
                                        group-hover:text-[#FCE7E5]
                                    "
                                >
                                    {step.number}
                                </div>

                                <div className="relative flex items-center justify-between">
                                    <div
                                        className="
                                            flex
                                            h-12
                                            w-12
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            bg-[#E01E31]
                                            text-white
                                            shadow-[0_8px_20px_rgba(224,30,49,0.28)]
                                        "
                                    >
                                        <Icon className="h-6 w-6" />
                                    </div>

                                    <span
                                        className="
                                            font-display
                                            text-lg
                                            font-bold
                                            text-[#E01E31]
                                        "
                                    >
                                        {step.number}
                                    </span>
                                </div>

                                <h3
                                    className="
                                        font-display
                                        mt-6
                                        text-xl
                                        font-semibold
                                        tracking-tight
                                        text-[#2B2623]
                                    "
                                >
                                    {step.title}
                                </h3>

                                <p
                                    className="
                                        mt-2
                                        text-sm
                                        leading-6
                                        text-[#564D44]
                                    "
                                >
                                    {step.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Process;
