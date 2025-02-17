import { CoinType } from "@/types";

export async function getCoins() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_COIN_API as string, { cache: "force-cache" });
    const data: CoinType[] = await response.json();
    return data
  } catch (error) {
    throw new Error("Something went wrong");
  }
}
