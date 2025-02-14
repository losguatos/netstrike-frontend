"use client";

import { useEffect } from "react";
import { sepolia } from "@starknet-react/chains";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import { useNetwork, useProvider } from "@starknet-react/core";
import { notification } from "~~/utils/scaffold-stark";
import Image from "next/image";
import { GenericModal } from "../CustomConnectButton/GenericModal";
import { useTheme } from "next-themes";
import { FaucetSepoliaStyles } from "./FaucetSepoliaStyles";

/**
 * Faucet modal which displays external websites that lets you send small amounts of L2 Sepolia ETH/STRK to an account address on Starknet Sepolia..
 */
export const FaucetSepolia = () => {
  const { chain: ConnectedChain } = useNetwork();

  const sepoliaFaucets = [
    {
      name: "Starknet Foundation",
      img: "/sn-symbol-gradient.png",
      link: "https://starknet-faucet.vercel.app/",
    },
    {
      name: "Alchemy",
      img: "/logo_alchemy.png",
      link: "https://www.alchemy.com/faucets/starknet-sepolia",
    },
    {
      name: "Blast",
      img: "/blast-icon-color.svg",
      link: "https://blastapi.io/faucets/starknet-sepolia-eth",
    },
  ];

  const { provider: publicClient } = useProvider();
  useEffect(() => {
    const checkChain = async () => {
      try {
        const providerInfo = await publicClient.getBlock();
      } catch (error) {
        console.error("⚡️ ~ file: Faucet.tsx:checkChain ~ error", error);
        notification.error(
          <>
            <p className={FaucetSepoliaStyles.p1}>
              Cannot connect to local provider
            </p>
            <p className="m-0">
              - Did you forget to run{" "}
              <code className={FaucetSepoliaStyles.code1}>
                yarn chain
              </code>{" "}
              ?
            </p>
            <p className={FaucetSepoliaStyles.p2}>
              - Or you can change{" "}
              <code className={FaucetSepoliaStyles.code2}>
                targetNetwork
              </code>{" "}
              in{" "}
              <code className={FaucetSepoliaStyles.code2}>
                scaffold.config.ts
              </code>
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

  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";

  // Render only on sepolia chain
  if (ConnectedChain?.id !== sepolia.id) {
    return null;
  }

  return (
    <div>
      <label
        htmlFor="faucet-modal"
        className={FaucetSepoliaStyles.labelOne}
      >
        <BanknotesIcon className={FaucetSepoliaStyles.bankNotes} />
        <span>Faucet</span>
      </label>
      <input type="checkbox" id="faucet-modal" className="modal-toggle" />
      <GenericModal modalId="faucet-modal">
        <>
          <div className={FaucetSepoliaStyles.divOne}>
            <h3 className={FaucetSepoliaStyles.heading3}>Sepolia Faucets</h3>
            <label
              htmlFor="faucet-modal"
              className="btn btn-ghost btn-sm btn-circle"
            >
              ✕
            </label>
          </div>
          <p className={FaucetSepoliaStyles.p3}>
            <span className="font-medium underline">Disclaimer:</span>
            <br /> Please note that these external websites are provided for
            your convenience. We do not have control over the content and
            availability of these sites. Use at your own risk.
          </p>
          <div className="mb-4">
            <div className={FaucetSepoliaStyles.divTwo}>
              {sepoliaFaucets.length &&
                sepoliaFaucets.map((faucet, id) => (
                  <a
                    href={faucet.link}
                    target="_blank"
                    className={` ${FaucetSepoliaStyles.a} ${
                      isDarkMode ? "hover:bg-[#385183]" : "hover:bg-slate-200"
                    } border `}
                    key={id}
                  >
                    <div className={FaucetSepoliaStyles.divThree}>
                      <Image
                        alt="Starknet Developers Hub"
                        className="cursor-pointer"
                        fill
                        sizes="1.5rem"
                        src={faucet.img}
                      />
                    </div>
                    <span className={FaucetSepoliaStyles.span}>{faucet.name}</span>
                  </a>
                ))}
            </div>
          </div>
        </>
      </GenericModal>
    </div>
  );
};
