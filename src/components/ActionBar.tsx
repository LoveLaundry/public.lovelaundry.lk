import type { ActionType } from "../types/action";
import Action from "./Action";

interface ActionBarProps {
    items: ActionType[];
    selectedItem: ActionType | null;
    setSelectedItem: (item: ActionType) => void;
}

const ActionBar = ({
    items,
    selectedItem,
    setSelectedItem,
}: ActionBarProps) => {
    return (
        <nav
            className="
                fixed
                bottom-5
                left-1/2
                z-50
                w-[calc(100%-24px)]
                max-w-[520px]
                -translate-x-1/2
            "
        >
            <div
                className="
                    relative
                    flex
                    min-h-[68px]
                    items-center
                    justify-center
                    gap-1
                    rounded-[18px]
                    border
                    border-[#E5E5E5]
                    bg-white
                    px-2
                    py-2
                    shadow-[0_10px_35px_rgba(0,0,0,0.14)]
                    sm:gap-2
                    sm:px-3
                "
            >
                <div
                    className="
                        absolute
                        left-0
                        right-0
                        top-0
                        h-[3px]
                        rounded-t-[18px]
                        bg-[#ED1C24]
                    "
                />

                {items.map((item) => (
                    <Action
                        key={item.id}
                        item={item}
                        isSelected={selectedItem?.id === item.id}
                        setSelected={setSelectedItem}
                    />
                ))}
            </div>
        </nav>
    );
};

export default ActionBar;