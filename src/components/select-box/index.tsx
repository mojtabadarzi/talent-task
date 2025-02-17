import { SelectBoxProps } from "./types";
import { useSelectBox } from "./hook";
import { MobileHeader, SelectOptionBody, SelectOptionButton, MobileSubmitButton } from "./sub-component";
import { memo } from "react";

// we can define props such as color, size, variety, and a generic data type for a more advanced component.
// however, I think this is sufficient for this challenge.
const SelectBox = memo(({
    multiple = false,
    placeholder = "Search...",
    title,
    onChange,
    options,
    error = null,
    loading = false,
    reload
}: SelectBoxProps) => {
    const {
        selectedOptions,
        query,
        isOpen,
        selectRef,
        handleSelect,
        handleSelectAll,
        clearSearch,
        onChangeSearchHandler,
        sortedOptions,
        allItemCondition,
        selectedText,
        onClose,
        onToggle,
    } = useSelectBox(title, options, multiple, onChange)

    return (
        <div className="relative max-w-full sm:max-w-max text-gray-600" ref={selectRef}>
            <SelectOptionButton
                aria-expanded={isOpen}
                aria-controls="select-box-menu"
                length={selectedOptions?.length}
                title={selectedText}
                onClick={onToggle}
            />
            {/* we can use React Portal too */}
            {isOpen &&
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 
                    sm:relative sm:block sm:bg-opacity-100 sm:bg-transparent">
                    <div className="static bg-white rounded-lg w-4/5 max-w-md shadow-lg p-4 sm:absolute sm:block sm:w-64 sm:left-0 sm:overflow-hidden">
                        <MobileHeader title={title} onClose={onClose} />
                        <SelectOptionBody
                            error={error}
                            placeholder={placeholder}
                            query={query}
                            loading={loading}
                            allItemCondition={allItemCondition}
                            selectedOptions={selectedOptions}
                            optionsLength={options?.length}
                            sortedOptions={sortedOptions}
                            clearSearch={clearSearch}
                            handleSelectAll={handleSelectAll}
                            handleSelect={handleSelect}
                            onChangeSearchHandler={onChangeSearchHandler}
                            reload={reload}
                        />
                        <MobileSubmitButton length={selectedOptions?.length} onClose={onClose} />
                    </div>
                </div>
            }
        </div>
    );
});



export default SelectBox;

// {/* desktop */}
// {isOpen &&
//     <div className="hidden sm:block absolute left-0 p-4 w-64 bg-white rounded-xl overflow-hidden shadow-2xl z-50">
//         <SelectOptionBody
//             error={error}
//             placeholder={placeholder}
//             query={query}
//             loading={loading}
//             allItemCondition={allItemCondition}
//             selectedOptions={selectedOptions}
//             optionsLength={options?.length}
//             sortedOptions={sortedOptions}
//             clearSearch={clearSearch}
//             handleSelectAll={handleSelectAll}
//             handleSelect={handleSelect}
//             onChangeSearchHandler={onChangeSearchHandler}
//             reload={reload}
//         />
//     </div>
// }

// {/* mobile */}
// {isOpen &&
//     <div className="sm:hidden fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//         <div className="bg-white rounded-lg w-4/5 max-w-md shadow-lg p-4">
//             <MobileHeader title={title} onClose={onClose} />
//             <SelectOptionBody
//                 error={error}
//                 placeholder={placeholder}
//                 query={query}
//                 loading={loading}
//                 allItemCondition={allItemCondition}
//                 selectedOptions={selectedOptions}
//                 optionsLength={options?.length}
//                 sortedOptions={sortedOptions}
//                 clearSearch={clearSearch}
//                 handleSelectAll={handleSelectAll}
//                 handleSelect={handleSelect}
//                 onChangeSearchHandler={onChangeSearchHandler}
//                 reload={reload}
//             />
//             <MobileSubmitButton length={selectedOptions?.length} onClose={onClose} />
//         </div>
//     </div>
// }
