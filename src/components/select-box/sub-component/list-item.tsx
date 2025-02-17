import { truncate } from "@/utils/truncate";
import { memo } from "react";
import { IoCheckbox, IoSquareOutline } from "react-icons/io5";
import { ListItemType } from "../types";

export const ListItem = memo(({ onClick, title, selected = false }: ListItemType) => {
    return <li
        className="py-2 cursor-pointer flex items-center gap-2"
        onClick={onClick}
    >
        {selected
            ? <IoCheckbox className="text-main w-5 h-5" />
            : <IoSquareOutline className="w-5 h-5" />
        }
        {/* we can use lib such as clsx for conditionally classname too! */}
        <span className={`font-semibold text-sm text-gray-800 ${selected ? "text-main" : ""}`}>
            {truncate(title, 25)}
        </span>
    </li>
})
