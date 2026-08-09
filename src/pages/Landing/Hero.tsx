import { motion } from "framer-motion";
import {
    RiArrowRightLine,
    RiHeart3Fill,
    RiShoppingBasket2Line,
    RiStarFill,
    RiTimeLine,
} from "react-icons/ri";

const Hero = () => {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);

        if (!element) return;

        const offset = 90;

        window.scrollTo({
            top:
                element.getBoundingClientRect().top +
                window.scrollY -
                offset,
            behavior: "smooth",
        });
    };

    return (
        <section
            id="home"
            className="
                relative
                min-h-screen
                overflow-hidden
                bg-white
                px-4
                pb-12
                pt-28
                sm:px-6
                sm:pb-16
                sm:pt-32
                lg:px-8
                lg:pb-20
                lg:pt-36
            "
        >
            <div
                className="
                    pointer-events-none
                    absolute
                    -left-32
                    top-32
                    h-72
                    w-72
                    rounded-full
                    bg-red-100/60
                    blur-3xl
                    sm:h-96
                    sm:w-96
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-32
                    top-20
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-red-50
                    blur-3xl
                    lg:h-[600px]
                    lg:w-[600px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-0
                    left-0
                    h-40
                    w-full
                    bg-gradient-to-t
                    from-red-50/40
                    to-transparent
                "
            />

            <div
                className="
                    relative
                    mx-auto
                    grid
                    w-full
                    max-w-[1440px]
                    items-center
                    gap-12
                    lg:grid-cols-[0.95fr_1.05fr]
                    lg:gap-8
                    xl:gap-12
                "
            >
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -35,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                    className="
                        relative
                        z-10
                        mx-auto
                        w-full
                        max-w-2xl
                        text-center
                        lg:mx-0
                        lg:text-left
                    "
                >
                    <div
                        className="
                            mb-5
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-red-100
                            bg-red-50
                            px-3.5
                            py-2
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.12em]
                            text-[#e50914]
                            sm:mb-6
                            sm:px-4
                            sm:text-xs
                        "
                    >
                        <RiHeart3Fill className="h-3.5 w-3.5 sm:h-4 sm:w-4" />

                        Professional Laundry Service
                    </div>

                    <h1
                        className="
                            text-[42px]
                            font-black
                            leading-[0.96]
                            tracking-[-0.045em]
                            text-neutral-950
                            sm:text-6xl
                            md:text-7xl
                            lg:text-[64px]
                            xl:text-[78px]
                        "
                    >
                        Fresh clothes.
                        <br />

                        <span className="text-[#e50914]">
                            More free time.
                        </span>
                    </h1>

                    <p
                        className="
                            mx-auto
                            mt-6
                            max-w-xl
                            text-[15px]
                            leading-7
                            text-neutral-500
                            sm:mt-7
                            sm:text-base
                            sm:leading-7
                            lg:mx-0
                            lg:text-lg
                        "
                    >
                        Professional laundry care, ironing and dry
                        cleaning with convenient pickup and delivery.
                        We take care of your clothes, so you can take
                        care of what matters.
                    </p>

                    <div
                        className="
                            mt-7
                            flex
                            flex-col
                            gap-3
                            sm:mt-9
                            sm:flex-row
                            sm:justify-center
                            lg:justify-start
                        "
                    >
                        <button
                            type="button"
                            onClick={() => scrollTo("contact")}
                            className="
                                group
                                flex
                                h-14
                                w-full
                                items-center
                                justify-center
                                gap-3
                                rounded-xl
                                bg-[#e50914]
                                px-7
                                text-sm
                                font-bold
                                text-white
                                shadow-[0_8px_25px_rgba(229,9,20,0.22)]
                                transition-all
                                duration-200
                                hover:bg-[#c90812]
                                hover:shadow-[0_10px_30px_rgba(229,9,20,0.28)]
                                sm:w-auto
                            "
                        >
                            Book a Pickup

                            <RiArrowRightLine
                                className="
                                    h-5
                                    w-5
                                    transition-transform
                                    duration-200
                                    group-hover:translate-x-1
                                "
                            />
                        </button>

                        <button
                            type="button"
                            onClick={() => scrollTo("services")}
                            className="
                                group
                                flex
                                h-14
                                w-full
                                items-center
                                justify-center
                                gap-3
                                rounded-xl
                                border
                                border-red-200
                                bg-white
                                px-7
                                text-sm
                                font-bold
                                text-neutral-800
                                transition-all
                                duration-200
                                hover:border-red-400
                                hover:bg-red-50
                                hover:text-[#e50914]
                                sm:w-auto
                            "
                        >
                            Explore Services

                            <RiArrowRightLine
                                className="
                                    h-5
                                    w-5
                                    transition-transform
                                    duration-200
                                    group-hover:translate-x-1
                                "
                            />
                        </button>
                    </div>

                    <div
                        className="
                            mx-auto
                            mt-9
                            grid
                            max-w-xl
                            grid-cols-3
                            divide-x
                            divide-neutral-200
                            lg:mx-0
                        "
                    >
                        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center lg:justify-start">
                            <span
                                className="
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-red-50
                                    text-[#e50914]
                                "
                            >
                                <RiShoppingBasket2Line className="h-5 w-5" />
                            </span>

                            <div className="text-center sm:text-left">
                                <div className="text-xl font-black text-neutral-950 sm:text-2xl">
                                    10+
                                </div>

                                <div className="text-[10px] text-neutral-400 sm:text-xs">
                                    Services
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
                            <span
                                className="
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-red-50
                                    text-[#e50914]
                                "
                            >
                                <RiStarFill className="h-5 w-5" />
                            </span>

                            <div className="text-center sm:text-left">
                                <div className="flex items-center justify-center gap-1 text-xl font-black text-neutral-950 sm:justify-start sm:text-2xl">
                                    4.9
                                </div>

                                <div className="text-[10px] text-neutral-400 sm:text-xs">
                                    Customer rating
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center lg:justify-start">
                            <span
                                className="
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-red-50
                                    text-[#e50914]
                                "
                            >
                                <RiTimeLine className="h-5 w-5" />
                            </span>

                            <div className="text-center sm:text-left">
                                <div className="text-xl font-black text-neutral-950 sm:text-2xl">
                                    24/7
                                </div>

                                <div className="text-[10px] text-neutral-400 sm:text-xs">
                                    Convenience
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.94,
                        x: 30,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.1,
                        ease: "easeOut",
                    }}
                    className="
                        relative
                        mx-auto
                        w-full
                        max-w-[720px]
                    "
                >
                    <div
                        className="
                            absolute
                            -right-10
                            -top-10
                            h-40
                            w-40
                            rounded-full
                            bg-red-200/60
                            blur-2xl
                            sm:h-56
                            sm:w-56
                        "
                    />

                    <div
                        className="
                            absolute
                            -bottom-10
                            left-0
                            h-40
                            w-40
                            rounded-full
                            bg-red-100
                            blur-2xl
                            sm:h-56
                            sm:w-56
                        "
                    />

                    <div
                        className="
                            relative
                            overflow-hidden
                            rounded-[28px]
                            border
                            border-red-100
                            bg-gradient-to-br
                            from-red-50
                            via-white
                            to-red-100
                            shadow-[0_25px_70px_rgba(229,9,20,0.12)]
                            sm:rounded-[36px]
                            lg:rounded-[42px]
                        "
                    >
                        <div
                            className="
                                absolute
                                -right-20
                                -top-20
                                h-64
                                w-64
                                rounded-full
                                bg-red-200/50
                            "
                        />

                        <div
                            className="
                                absolute
                                bottom-0
                                left-0
                                h-48
                                w-full
                                bg-gradient-to-t
                                from-red-100/70
                                to-transparent
                            "
                        />

                        <div
                            className="
                                relative
                                aspect-[1/1]
                                min-h-[360px]
                                sm:min-h-[470px]
                                lg:aspect-[0.98/1]
                            "
                        >
                            <img
                                src="../../src/assets/images/love-laundry-hero.png"
                                alt="Love Laundry pickup and laundry service"
                                className="
                                    absolute
                                    inset-0
                                    h-full
                                    w-full
                                    object-cover
                                    object-center
                                "
                            />

                            <div
                                className="
                                    absolute
                                    left-4
                                    top-4
                                    rounded-full
                                    border
                                    border-white/70
                                    bg-white/90
                                    px-3
                                    py-2
                                    text-[9px]
                                    font-bold
                                    uppercase
                                    tracking-[0.12em]
                                    text-[#e50914]
                                    shadow-lg
                                    backdrop-blur
                                    sm:left-6
                                    sm:top-6
                                    sm:px-4
                                    sm:text-[10px]
                                "
                            >
                                Love Laundry
                            </div>

                            <div
                                className="
                                    absolute
                                    bottom-4
                                    left-4
                                    right-4
                                    rounded-2xl
                                    border
                                    border-white/60
                                    bg-white/90
                                    p-3
                                    shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                                    backdrop-blur-xl
                                    sm:bottom-6
                                    sm:left-6
                                    sm:right-6
                                    sm:p-4
                                "
                            >
                                <div className="flex items-center justify-between gap-3">
                                    <div className="min-w-0">
                                        <div className="text-[9px] font-bold uppercase tracking-[0.12em] text-neutral-400">
                                            Next pickup
                                        </div>

                                        <div className="mt-1 truncate text-xs font-bold text-neutral-900 sm:text-sm">
                                            Schedule yours today
                                        </div>
                                    </div>

                                    <div
                                        className="
                                            flex
                                            h-9
                                            w-9
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-[#e50914]
                                            text-white
                                            sm:h-10
                                            sm:w-10
                                        "
                                    >
                                        <RiArrowRightLine className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 15,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            delay: 0.9,
                            duration: 0.5,
                        }}
                        className="
                            absolute
                            -bottom-5
                            -left-2
                            hidden
                            items-center
                            gap-3
                            rounded-2xl
                            border
                            border-neutral-100
                            bg-white
                            px-4
                            py-3
                            shadow-[0_12px_35px_rgba(0,0,0,0.1)]
                            sm:flex
                            lg:-left-8
                        "
                    >
                        <div className="flex -space-x-2">
                            <div className="h-8 w-8 rounded-full border-2 border-white bg-neutral-200" />
                            <div className="h-8 w-8 rounded-full border-2 border-white bg-neutral-300" />
                            <div className="h-8 w-8 rounded-full border-2 border-white bg-neutral-400" />
                        </div>

                        <div>
                            <div className="text-xs font-black text-neutral-900">
                                200+
                            </div>

                            <div className="text-[9px] text-neutral-400">
                                Happy Customers
                            </div>
                        </div>
                    </motion.div>

                    <div className="absolute -right-2 top-8 hidden h-10 w-10 items-center justify-center rounded-full bg-[#e50914] text-white shadow-lg sm:flex lg:-right-5">
                        <RiHeart3Fill className="h-4 w-4" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;