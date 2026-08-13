import { useEffect, useState } from "react";
import {
    RiHome5Line,
    RiServiceLine,
    RiListCheck3,
    RiInformationLine,
    RiPhoneLine,
    RiBuildingLine,
} from "react-icons/ri";

import type { ActionType } from "../types/action";
import Navbar from "./Landing/Navbar";
import Hero from "./Landing/Hero";
import Services from "./Landing/Services";
import Commercial from "./Landing/Commercial";
import Process from "./Landing/Process";
import WhyLoveLaundry from "./Landing/WhyLoveLaundry";
import Contact from "./Landing/Contact";
import Footer from "./Landing/Footer";
import ActionBar from "../components/ActionBar";


const actions: ActionType[] = [
    {
        id: "home",
        label: "Home",
        icon: RiHome5Line,
    },
    {
        id: "services",
        label: "Services",
        icon: RiServiceLine,
    },
    {
        id: "commercial",
        label: "Commercial",
        icon: RiBuildingLine,
    },
    {
        id: "process",
        label: "How It Works",
        icon: RiListCheck3,
    },
    {
        id: "about",
        label: "Why Us",
        icon: RiInformationLine,
    },
    {
        id: "contact",
        label: "Contact",
        icon: RiPhoneLine,
    },
];

const LandingPage = () => {
    const [selectedItem, setSelectedItem] =
        useState<ActionType | null>(actions[0]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = actions
                .map((action) => document.getElementById(action.id))
                .filter(Boolean);

            let current = actions[0];

            sections.forEach((section, index) => {
                if (!section) return;

                if (section.getBoundingClientRect().top <= 180) {
                    current = actions[index];
                }
            });

            setSelectedItem(current);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <main className="min-h-screen overflow-x-hidden bg-[#fafafa] text-neutral-900">

            <Navbar actions={actions}/>
            <Hero />
            <Services />
            <Commercial />
            <Process />
            <WhyLoveLaundry />
            <Contact />
            <Footer />
            <ActionBar
                items={actions}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
            />
        </main>
    );
};

export default LandingPage;
