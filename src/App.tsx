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
        <div className="min-h-screen">
            <ActionBar
                items={actions}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
            />
        </div>
    );
};

export default App;