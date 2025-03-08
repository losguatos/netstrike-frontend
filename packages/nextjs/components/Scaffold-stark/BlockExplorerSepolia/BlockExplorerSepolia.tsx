"use client";

import { Address as AddressType, sepolia } from "@starknet-react/chains";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useNetwork } from "@starknet-react/core";
import Image from "next/image";
import { GenericModal } from "../CustomConnectButton/GenericModal";
import { useTheme } from "next-themes";
import { BlockExplorerSepoliaStyles } from "./BlockExplorerSepoliaStyles";

export const BlockExplorerSepolia = () => {
  const { chain: ConnectedChain } = useNetwork();

  const sepoliaBlockExplorers = [
    {
      name: "Starkscan",
      img: "/sn-symbol-gradient.png",
      link: "https://sepolia.starkscan.co/",
    },
    {
      name: "Voyager",
      img: "/voyager-icon.svg",
      link: "https://sepolia.voyager.online/",
    },
    {
      name: "Stark Compass",
      img: "/starkcompass-icon.svg",
      link: "https://starkcompass.com/sepolia/",
    },
  ];

  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";

  // Render only on sepolia chain
  if (ConnectedChain?.id !== sepolia.id) {
    return null;
  }

  return (
    <div>
      <label
        htmlFor="sepolia-blockexplorer-modal"
        className={BlockExplorerSepoliaStyles.labelOne}
      >
        <MagnifyingGlassIcon
          className={BlockExplorerSepoliaStyles.magnifyingGlassIcon}
        />
        <span>Block Explorer</span>
      </label>
      <input
        type="checkbox"
        id="sepolia-blockexplorer-modal"
        className="modal-toggle"
      />
      <GenericModal modalId="sepolia-blockexplorer-modal">
        <>
          <div className={BlockExplorerSepoliaStyles.divOne}>
            <h3 className={BlockExplorerSepoliaStyles.divOneHeading}>
              Sepolia Block Explorers
            </h3>
            <label
              htmlFor="sepolia-blockexplorer-modal"
              className={BlockExplorerSepoliaStyles.divOneLabel}
            >
              ✕
            </label>
          </div>
          <div className={BlockExplorerSepoliaStyles.divTwo}>
            <div className={BlockExplorerSepoliaStyles.subDiv}>
              {sepoliaBlockExplorers.length &&
                sepoliaBlockExplorers.map((blockexplorer, id) => (
                  <a
                    href={blockexplorer.link}
                    target="_blank"
                    className={` ${BlockExplorerSepoliaStyles.divTwoA} ${
                      isDarkMode
                        ? BlockExplorerSepoliaStyles.divTwoADarkmode
                        : BlockExplorerSepoliaStyles.divTwoALightMode
                    } border `}
                    key={id}
                  >
                    <div className={BlockExplorerSepoliaStyles.divThree}>
                      <Image
                        alt="Starknet Developers Hub"
                        className="cursor-pointer"
                        fill
                        sizes="1.5rem"
                        src={blockexplorer.img}
                      />
                    </div>
                    <p className={BlockExplorerSepoliaStyles.explorerName}>
                      {blockexplorer.name}
                    </p>
                  </a>
                ))}
            </div>
          </div>
        </>
      </GenericModal>
    </div>
  );
};
