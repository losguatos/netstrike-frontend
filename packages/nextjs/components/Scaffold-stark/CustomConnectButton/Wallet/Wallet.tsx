import React, { useEffect, useMemo, useState } from "react";
import { Connector } from "@starknet-react/core";
import Image from "next/image";
import { useTheme } from "next-themes";
import { WalletStyles } from "./WalletStyles";


export const Wallet = ({
  handleConnectWallet,
  connector,
  loader,
}: {
  connector: Connector;
  loader: ({ src }: { src: string }) => string;
  handleConnectWallet: (
    e: React.MouseEvent<HTMLButtonElement>,
    connector: Connector,
  ) => void;
}) => {
  const [clicked, setClicked] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";

  

  // connector has two : dark and light icon
  const icon = useMemo(() => {
    return typeof connector.icon === "object"
      ? resolvedTheme === "dark"
        ? (connector.icon.dark as string)
        : (connector.icon.light as string)
      : (connector.icon as string);
  }, [connector, resolvedTheme]);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <button
      className={` ${WalletStyles.button} ${
        isDarkMode
          ? WalletStyles.buttonDarkmode
          : WalletStyles.buttonLightMode
      } border ${clicked ? "bg-ligth" : ""}`}
      onClick={(e) => {
        setClicked(true);
        handleConnectWallet(e, connector);
      }}
    >
      
      <span className={WalletStyles.span}>{connector.name}</span>
      <div className={WalletStyles.div}>
        <Image
          alt={connector.name}
          loader={loader}
          src={icon}
          width={70}
          height={70}
          className={WalletStyles.imageStyles}
        />
      </div>
    </button>
  ) : null;
};
