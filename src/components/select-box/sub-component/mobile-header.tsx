import { IoCloseSharp } from "react-icons/io5";
import { MobileHeaderType } from "../types";

export const MobileHeader = ({ title, onClose }: MobileHeaderType) => <div className="flex sm:hidden justify-between mb-4">
    <p className="font-semibold">{title}</p>
    <IoCloseSharp className="w-6 h-6 cursor-pointer" onClick={onClose} />
</div>
