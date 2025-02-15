import React, { useEffect, useMemo, useState } from "react";
import { Connector } from "@starknet-react/core";
import { classes } from "./Wallet.styles";
import { WalletId, walletsSvg } from "../../../../assets/svgs/wallets";

export const Wallet = ({
  handleConnectWallet,
  connector,
}: {
  connector: Connector;
  loader: ({ src }: { src: string }) => string;
  handleConnectWallet: (
    e: React.MouseEvent<HTMLButtonElement>,
    connector: Connector,
  ) => void;
}) => {
  const [clicked, setClicked] = useState(false);

  const Icon = useMemo(() => {
    return walletsSvg[connector.id as WalletId];
  }, [connector]);

  return (
    <button
      className={` ${classes.button} border ${clicked ? "bg-ligth" : ""}`}
      onClick={(e) => {
        setClicked(true);
        handleConnectWallet(e, connector);
      }}
    >
      <span className={classes.span}>{connector.name}</span>
      <div className={classes.div}>
        <Icon height={20} width={20} />
      </div>
    </button>
  );
};
