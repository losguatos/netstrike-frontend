"use client";

import { useEffect, useState } from "react";
import { Address as AddressType, devnet } from "@starknet-react/chains";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import {
  Address,
  AddressInput,
  Balance,
  EtherInput,
} from "~~/components/Scaffold-stark";
import { useNetwork, useProvider } from "@starknet-react/core";
import { mintEth } from "~~/services/web3/faucet";
import { notification } from "~~/utils/scaffold-stark";
import { GenericModal } from "../CustomConnectButton/GenericModal";
import { FaucetStyles } from "./FaucetStyles";

/**
 */
export const Faucet = () => {
  const [loading, setLoading] = useState(false);
  const [inputAddress, setInputAddress] = useState<AddressType>();
  const [faucetAddress] = useState<AddressType>(
    "0x78662e7352d062084b0010068b99288486c2d8b914f6e2a55ce945f8792c8b1",
  );
  const [sendValue, setSendValue] = useState("");

  const { chain: ConnectedChain } = useNetwork();
  const { provider: publicClient } = useProvider();

  useEffect(() => {
    const checkChain = async () => {
      try {
        const providerInfo = await publicClient.getBlock();
      } catch (error) {
        console.error("⚡️ ~ file: Faucet.tsx:checkChain ~ error", error);
        notification.error(
          <>
            <p className={FaucetStyles.paraOne}>
              Cannot connect to local provider
            </p>
            <p className="m-0">
              - Did you forget to run{" "}
              <code className={FaucetStyles.codeOne}>yarn chain</code> ?
            </p>
            <p className="mt-1 break-normal">
              - Or you can change{" "}
              <code className={FaucetStyles.codeTwo}>targetNetwork</code> in{" "}
              <code className={FaucetStyles.codeThree}>scaffold.config.ts</code>
            </p>
          </>,
          {
            duration: 5000,
          },
        );
      }
    };
    checkChain().then();
  }, []);

  const sendETH = async () => {
    if (!faucetAddress || !inputAddress) {
      return;
    }

    const res = await mintEth(inputAddress, sendValue);
    if (!res.new_balance) {
      setLoading(false);
      notification.error(`${res}`);
      return;
    }
    setLoading(false);
    setInputAddress(undefined);
    setSendValue("");
    notification.success("ETH sent successfully!");
  };

  // Render only on local chain
  if (ConnectedChain?.id !== devnet.id) {
    return null;
  }

  return (
    <div>
      <label htmlFor="faucet-modal" className={FaucetStyles.labelOne}>
        <BanknotesIcon className={FaucetStyles.banknotesIcon} />
        <span>Faucet</span>
      </label>
      <input type="checkbox" id="faucet-modal" className="modal-toggle" />
      <GenericModal modalId="faucet-modal">
        <>
          <div className={FaucetStyles.divOne}>
            <h3 className={FaucetStyles.heading3}>Local Faucet</h3>
            <label htmlFor="faucet-modal" className={FaucetStyles.labelTwo}>
              ✕
            </label>
          </div>
          <div className="flex flex-col gap-8">
            <AddressInput
              placeholder="Destination Address"
              value={inputAddress ?? ""}
              onChange={(value) => setInputAddress(value as AddressType)}
            />
            <EtherInput
              placeholder="Amount to send"
              value={sendValue}
              onChange={(value) => setSendValue(value)}
            />
          </div>
          <button
            className={FaucetStyles.button}
            onClick={sendETH}
            disabled={loading}
          >
            {!loading ? (
              <BanknotesIcon className="h-6 w-6" />
            ) : (
              <span className="loading loading-spinner loading-sm"></span>
            )}
            <span>Send</span>
          </button>
        </>
      </GenericModal>
    </div>
  );
};
