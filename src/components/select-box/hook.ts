import { useState, useEffect, useCallback, useRef, useMemo, ChangeEvent } from "react";
import { OptionType } from "@/types";

export const useSelectBox = (
    title: string,
    options: OptionType[],
    multiple: boolean,
    onChange: (selected: OptionType[]) => void
) => {
    const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef<HTMLDivElement>(null);

    // close on clicked outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = useCallback((option: OptionType) => {
        setSelectedOptions((prev) => {
            const isSelected = prev.some((item) => item.id === option.id);
            const newSelection = multiple
                ? isSelected ? prev.filter((item) => item.id !== option.id) : [...prev, option]
                : isSelected ? [] : [option];

            onChange(newSelection);
            return newSelection.sort((a: OptionType, b: OptionType) => a.name.localeCompare(b.name));
        });
    }, [multiple, onChange]);

    const handleSelectAll = useCallback(() => {
        const newSelection = selectedOptions.length === options.length ? [] : options;
        setSelectedOptions(newSelection);
        onChange(newSelection);
    }, [options, selectedOptions.length, onChange]);

    const clearSearch = useCallback(() => {
        setQuery("")
    }, [])

    const onChangeSearchHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setQuery(value)
    }, [])

    const allItemCondition = multiple && options.length > 0 && !query

    const sortedOptions = useMemo(() => {
        const selected = options.filter((option) =>
            selectedOptions.some((selected) => selected.id === option.id)
        );
        const unselected = options.filter((option) =>
            !selectedOptions.some((selected) => selected.id === option.id)
        );

        let sorted = [...selected, ...unselected];

        if (query) {
            sorted = sorted.filter((option) => option.name.toLowerCase().includes(query.toLowerCase()));
        }

        return sorted;
    }, [options, selectedOptions, query])

    // text displayed
    const selectedText = useMemo(() => {
        return selectedOptions.length === 1
            ? selectedOptions[0].name
            : title;
    }, [selectedOptions, title]);

    const onClose = () => setIsOpen(false)
    const onToggle = () => setIsOpen(!isOpen)

    return {
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
        onToggle
    };
};
