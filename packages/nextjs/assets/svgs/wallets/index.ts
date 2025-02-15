import { argentWalletIcon } from "./argentWalletIcon";
import { braavosWalletIcon } from "./braavosWalletIcon";
import { burnerWalletIcon } from "./burnerWalletIcon";

export type WalletId = keyof typeof walletsSvg; // "braavos" | "argentX" | "burner-wallet"
export const walletsSvg = {
  braavos: braavosWalletIcon,
  argentX: argentWalletIcon,
  "burner-wallet": burnerWalletIcon,
};
