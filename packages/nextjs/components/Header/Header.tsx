"use client";

import React from "react";
import { classes } from "./Header.styles";
import { HeaderProps } from "./Header.types";
import { truncateAddress } from "~~/utils/format";
import { useCurrentTime } from "~~/hooks/useCurrentTime";

export const Header = ({ connectorName, address }: HeaderProps) => {
  const currentTime = useCurrentTime();

  return (
    <div className={classes.container}>
      <p>
        Hacker &gt;&gt;&gt; NaN0ck | ADDRESS &gt;&gt;&gt;{" "}
        {truncateAddress(address as string)} | Wallet &gt;&gt;&gt;{" "}
        {connectorName}{" "}
      </p>
      <p>{currentTime}</p>
    </div>
  );
};
