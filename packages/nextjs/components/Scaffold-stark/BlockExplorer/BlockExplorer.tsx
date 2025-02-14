"use client";

import { Address as AddressType, mainnet } from "@starknet-react/chains";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useNetwork } from "@starknet-react/core";
import Image from "next/image";
import { GenericModal } from "../CustomConnectButton/GenericModal";
import { useTheme } from "next-themes";
import { BlockStyles } from "./BlockExplorerStyle";

export const BlockExplorer = () => {
  const { chain: ConnectedChain } = useNetwork();

  const blockExplorers = [
    {
      name: "Starkscan",
      img: "/sn-symbol-gradient.png",
      link: "https://starkscan.co/",
    },
    {
      name: "Voyager",
      img: "/voyager-icon.svg",
      link: "https://voyager.online/",
    },
    {
      name: "Stark Compass",
      img: "/starkcompass-icon.svg",
      link: "https://starkcompass.com/",
    },
  ];

  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";

  // Render only on mainnet chain
  if (ConnectedChain?.id !== mainnet.id) {
    return null;
  }

  return (
    <div>
      <label
        htmlFor="blockexplorer-modal"
        className={BlockStyles.labelOne}
      >
        <MagnifyingGlassIcon className={BlockStyles.glassIcon} />
        <span>Block Explorer</span>
      </label>
      <input
        type="checkbox"
        id="blockexplorer-modal"
        className="modal-toggle"
      />
      <GenericModal modalId="blockexplorer-modal">
        <div className={BlockStyles.divOne}>
          <h3 className={BlockStyles.heading3}>Mainnet Block Explorers</h3>
          <label
            htmlFor="blockexplorer-modal"
            className={BlockStyles.labelTwo}
          >
            ✕
          </label>
        </div>
        <div className={BlockStyles.divTwo}>
          <div className={BlockStyles.divThree}>
            {blockExplorers.length &&
              blockExplorers.map((blockexplorer, id) => (
                <a
                  href={blockexplorer.link}
                  target="_blank"
                  className={` ${BlockStyles.a} ${isDarkMode ? BlockStyles.aDarkmode : BlockStyles.aNotDarkmode }`}
                  key={id}
                >
                  <div className={BlockStyles.divFour}>
                    <Image
                      alt="Starknet Developers Hub"
                      className="cursor-pointer"
                      fill
                      sizes="1.5rem"
                      src={blockexplorer.img}
                    />
                  </div>
                  <span className={BlockStyles.spanOne}>{blockexplorer.name}</span>
                </a>
              ))}
          </div>
        </div>
      </GenericModal>
    </div>
  );
};
