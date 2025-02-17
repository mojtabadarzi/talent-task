import { truncate } from "@/utils/truncate";
import { IoChevronDownSharp } from "react-icons/io5";
import { SelectOptionButtonType } from "../types";

export const SelectOptionButton = ({ length, onClick, title }: SelectOptionButtonType) => (<button
    className={`w-full border-2 px-4 py-1 rounded-full cursor-pointer 
        flex justify-between items-center gap-8 ${length > 0 ? "bg-main border-main text-white" : "bg-white border-gray-300 text-gray-800"}`}
    onClick={onClick}
>
    <span className={`text-sm ${length > 0 ? "font-semibold" : ""}`}>
        {truncate(title, 25)}
    </span>
    <div className="flex justify-center item-end gap-2">
        {length > 1
            && <span className="text-sm flex justify-center items-center bg-white text-main px-1 w-5 h-5 min-w-max
                                rounded-full font-normal"
            >
                {length}
            </span>}
        <IoChevronDownSharp className="w-5 h-5" />
    </div>
</button>)