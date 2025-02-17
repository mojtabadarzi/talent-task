"use client"
import SelectBox from "@/components/select-box";
import { getCoins } from "@/services/get-coins/get-coins";
import { CoinType, OptionType } from "@/types";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [options, setOptions] = useState<OptionType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadData();
  }, [])

  const loadData = () => {
    setLoading(true)
    setError(null);

    getCoins()
      .then((data: CoinType[]) => {
        setOptions(data
          .slice(0, 200)
          .map((item: CoinType) => ({ id: item?.id, name: item?.name }))
          .sort((a: OptionType, b: OptionType) => a.name.localeCompare(b.name)))
      })
      .catch(() => setError("Something went wrong"))
      .finally(() => setLoading(false));
  }

  const handleSelectionChangeMultiple = useCallback((selectedItems: OptionType[]) => {
    console.log("MULTIPLE: ", selectedItems.map((item) => item.name))
  }, []);

  const handleSelectionChangeSingle = useCallback((selectedItems: OptionType[]) => {
    console.log("SINGLE: ", selectedItems.map((item) => item.name))
  }, []);

  return (
    <div className="flex-col sm:flex-row flex gap-4 p-4">
      <SelectBox
        multiple
        placeholder="Search Coins..."
        title="Coins(multi)"
        onChange={handleSelectionChangeMultiple}
        options={options}
        error={error}
        loading={loading}
        reload={loadData}
      />
      <SelectBox
        placeholder="Search Coins..."
        title="Coins(single)"
        onChange={handleSelectionChangeSingle}
        options={options}
        error={error}
        loading={loading}
        reload={loadData}
      />
    </div >
  );
}

