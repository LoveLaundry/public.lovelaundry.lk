import { useState } from "react";
import { motion } from "framer-motion";
import {
    RiMenuLine,
    RiCloseLine,
} from "react-icons/ri";
import type { ActionType } from "../../types/action";

interface NavbarProps {
    actions: ActionType[];
}

const Navbar = ({ actions }: NavbarProps) => {
    const [open, setOpen] = useState(false);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });

        setOpen(false);
    };

    return (
        <header className="fixed left-0 top-0 z-50 w-full">
            <div className="mx-auto max-w-7xl px-5 pt-5 sm:px-8">
                <div className="flex h-16 items-center justify-between rounded-2xl border border-black/5 bg-white/80 px-5 shadow-lg shadow-black/5 backdrop-blur-xl">

                    <button
                        onClick={() => scrollTo("home")}
                        className="flex items-center gap-3"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-lg font-black text-white shadow-lg shadow-green-500/25">
                            L
                        </div>

                        <div className="text-left">
                            <div className="text-base font-black tracking-tight">
                                Love Laundry
                            </div>

                            <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
                                Fresh. Clean. Delivered.
                            </div>
                        </div>
                    </button>

                    <nav className="hidden items-center gap-7 md:flex">
                        {actions.map((action) => (
                            <button
                                key={action.id}
                                onClick={() => scrollTo(action.id)}
                                className="text-sm font-semibold text-neutral-500 transition hover:text-green-600"
                            >
                                {action.label}
                            </button>
                        ))}
                    </nav>

                    <button
                        onClick={() => setOpen(!open)}
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 md:hidden"
                    >
                        {open ? (
                            <RiCloseLine className="h-5 w-5" />
                        ) : (
                            <RiMenuLine className="h-5 w-5" />
                        )}
                    </button>
                </div>

                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-2 rounded-2xl border border-black/5 bg-white p-3 shadow-xl md:hidden"
                    >
                        {actions.map((action) => {
                            const Icon = action.icon;

                            return (
                                <button
                                    key={action.id}
                                    onClick={() => scrollTo(action.id)}
                                    className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold text-neutral-600 transition hover:bg-green-50 hover:text-green-600"
                                >
                                    <Icon className="h-5 w-5" />
                                    {action.label}
                                </button>
                            );
                        })}
                    </motion.div>
                )}
            </div>
        </header>
    );
};

export default Navbar;