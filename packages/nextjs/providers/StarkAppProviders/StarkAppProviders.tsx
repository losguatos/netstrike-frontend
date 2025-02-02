"use client";

import React, { useEffect, useState } from "react";
import { StarknetConfig, starkscan } from "@starknet-react/core";
import { appChains, connectors } from "~~/services/web3/connectors";
import provider from "~~/services/web3/provider";
import { useNativeCurrencyPrice } from "~~/hooks/scaffold-stark/useNativeCurrencyPrice";
import { ProgressBar } from "./ProgressBar";

export const StarkAppProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useNativeCurrencyPrice();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <StarknetConfig
      chains={appChains}
      provider={provider}
      connectors={connectors}
      explorer={starkscan}
    >
      <ProgressBar />
      {children}
    </StarknetConfig>
  );
};
