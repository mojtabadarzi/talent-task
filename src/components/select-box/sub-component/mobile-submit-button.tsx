import { MobileSubmitButtonType } from "../types";

export const MobileSubmitButton = ({ length, onClose }: MobileSubmitButtonType) =>
    <button className="flex justify-center  gap-1 font-semibold w-full mt-4 py-2 bg-main text-white rounded-lg sm:hidden" onClick={onClose}>
        <span>Show Results</span>
        {length > 0
            && <span className="text-sm flex justify-center items-center bg-white text-main px-1 w-5 h-5 min-w-max
                        rounded-full font-normal">
                {length}
            </span>
        }
    </button>