import { OptionType } from "@/types/option";
import { ChangeEvent } from "react";

export type SelectBoxProps = {
    multiple?: boolean;
    placeholder?: string;
    title: string;
    onChange: (selected: OptionType[]) => void;
    options: OptionType[];
    error?: string | null;
    loading?: boolean;
    reload?: () => void
};

export type SelectOptionBodyType = {
    error: string | null;
    placeholder: string;
    query: string;
    onChangeSearchHandler: (e: ChangeEvent<HTMLInputElement>) => void;
    clearSearch: () => void;
    loading: boolean;
    allItemCondition: boolean;
    handleSelectAll: () => void;
    selectedOptions: OptionType[];
    optionsLength: number;
    handleSelect: (option: OptionType) => void;
    sortedOptions: OptionType[];
    reload?: () => void,
}

export type ListItemType = {
    onClick: () => void;
    title: string;
    selected?: boolean;
}

export type MobileSubmitButtonType = {
    length: number;
    onClose: () => void
}

export type SearchBoxProps = {
    placeholder: string,
    value: string,
    onChangeSearchHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    clearSearch: () => void
}

export type SelectOptionButtonType = {
    length: number;
    onClick: () => void;
    title: string
}

export type MobileHeaderType = { title: string; onClose: () => void }