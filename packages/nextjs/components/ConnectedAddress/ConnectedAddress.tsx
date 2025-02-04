"use client";
import { useAccount } from "~~/hooks/useAccount";
import { Address as AddressType } from "@starknet-react/chains";
import { Address } from "./Address";

export const ConnectedAddress = () => {
  const connectedAddress = useAccount();
  return (
    <div className="flex justify-center items-center space-x-2">
      <p className="my-2 font-medium text-[#00A3FF]">Connected Address:</p>
      <Address address={connectedAddress.address as AddressType} />
    </div>
  );
};
