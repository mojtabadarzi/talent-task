import { OptionType } from "@/types";
import { memo } from "react";
import SearchBox from "./search-box";
import Skeleton from "./skeleton";
import { ListItem } from "./list-item";
import { SelectOptionBodyType } from "../types";
import { IoReloadCircleOutline } from "react-icons/io5";

export const SelectOptionBody = memo(({
    error,
    placeholder,
    query,
    onChangeSearchHandler,
    clearSearch,
    loading,
    allItemCondition,
    handleSelectAll,
    selectedOptions,
    optionsLength,
    sortedOptions,
    handleSelect,
    reload,
}: SelectOptionBodyType) => {
    const showLoading = loading && !error && Array.from({ length: 10 }).map((_, index) => <Skeleton key={index} />)

    const showError = !loading && error && <div className="py-4 flex justify-center items-center gap-2">
        <span className="text-gray-500 text-xs">{error}</span>
        <button onClick={reload}>
            <IoReloadCircleOutline className="w-5 h-5" />
        </button>
    </div>

    // i prefer it if the list doesn't scroll to the top when the user selects an item.
    const showList = !loading && !error && <ul className="max-h-60 overflow-auto mt-4 no-overflow-anchoring">
        {allItemCondition && (
            <ListItem
                onClick={handleSelectAll}
                selected={selectedOptions.length === optionsLength}
                title="All"
            />
        )}
        {sortedOptions.length === 0
            ? <li className="text-center text-sm">No Results</li>
            : sortedOptions?.map((option: OptionType) => (
                <ListItem
                    key={option?.id}
                    onClick={() => handleSelect(option)}
                    selected={selectedOptions?.some((item: OptionType) => item?.id === option?.id)}
                    title={option?.name}
                />
            ))}
    </ul>

    return <>
        <SearchBox
            placeholder={placeholder}
            value={query}
            onChangeSearchHandler={onChangeSearchHandler}
            clearSearch={clearSearch}
        />
        {showLoading}
        {showError}
        {showList}
    </>

})