import { useState } from "react";
import {
    RiHome5Line,
    RiSearchLine,
    RiAddLine,
    RiHeart3Line,
    RiUser3Line,
} from "react-icons/ri";

import type { ActionType } from "./types/action";
import ActionBar from "./components/ActionBar";
import LandingPage from "./pages/LandingPage";
import WaterBlob from "./components/ui/waterbolb";

const actions: ActionType[] = [
    {
        id: "home",
        label: "Home",
        icon: RiHome5Line,
    },
    {
        id: "search",
        label: "Search",
        icon: RiSearchLine,
    },
    {
        id: "add",
        label: "Add",
        icon: RiAddLine,
    },
    {
        id: "favorites",
        label: "Favorites",
        icon: RiHeart3Line,
    },
    {
        id: "profile",
        label: "Profile",
        icon: RiUser3Line,
    },
];

const App = () => {
    const [selectedItem, setSelectedItem] =
        useState<ActionType | null>(actions[0]);

    return (
        <div className="relative min-h-screen overflow-hidden bg-white">
            <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden h-screen">
                <WaterBlob
                    size="clamp(250px, 30vw, 500px)"
                    color="#e50914"
                    opacity={0.3}
                    blur={25}
                    giggle={100}
                    duration={4}
                    className="-left-40 top-10"
                />

                <WaterBlob
                    size="clamp(200px, 25vw, 400px)"
                    color="#ff5a64"
                    opacity={0.3}
                    blur={30}
                    giggle={100}
                    duration={3}
                    delay={1}
                    className="-right-20 top-1/2"
                />

                <WaterBlob
                    size="clamp(150px, 20vw, 300px)"
                    color="#e50914"
                    opacity={0.3}
                    blur={10}
                    giggle={100}
                    duration={5}
                    delay={1}
                    className="bottom-0 left-1/3"
                />
            </div>

            <main className="relative z-10">
                <LandingPage />
            </main>

            <div className="relative z-50">
                <ActionBar
                    items={actions}
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                />
            </div>
        </div>
    );
};

export default App;