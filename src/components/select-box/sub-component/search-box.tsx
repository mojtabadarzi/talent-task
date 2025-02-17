import { IoCloseSharp } from "react-icons/io5"
import { SearchBoxProps } from "../types"
import { memo } from "react"

const SearchBox = memo(({ placeholder, value, onChangeSearchHandler, clearSearch }: SearchBoxProps) => {
    return <div className="relative">
        <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChangeSearchHandler}
            className="w-full py-1 pl-4 border-2 border-gray-400 rounded-lg outline-none text-sm text-gray-600"
        />
        {value &&
            <IoCloseSharp
                className="w-3 h-3 cursor-pointer absolute top-[10px] right-[10px] text-gray-600"
                onClick={clearSearch} />
        }
    </div>
})

export default SearchBox