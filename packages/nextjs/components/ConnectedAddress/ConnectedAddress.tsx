"use client";
import { useAccount } from "~~/hooks/useAccount";
import { Address as AddressType } from "@starknet-react/chains";
import { Address } from "./Address/Address";
import { ConnectedAddressStyle } from "./ConnectedAddressStyle";

export const ConnectedAddress = () => {
  const connectedAddress = useAccount();
  return (
    <div className={ConnectedAddressStyle.parentDiv}>
      <p className={ConnectedAddressStyle.para}>Connected Address:</p>
      <Address address={connectedAddress.address as AddressType} />
    </div>
  );
};
