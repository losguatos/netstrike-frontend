"use client";

import React from "react";
import { classes } from "./Footer.styles";
import { FooterProps } from "./Footer.types";

export const Footer = ({ connectorName, address }: FooterProps) => {
  const handleOnHelpClick = () => {
    window.open("https://discord.gg/8UGqFzEF", "_blank");
  };
  return (
    <div className={classes.container}>
      <p>
        <label className={classes.link} onClick={handleOnHelpClick}>
          HELP
        </label>{" "}
        | 96008N1 8N1 | NOR | NS OS 0.1 | VT102 | Online | ttyACM0
      </p>
    </div>
  );
};
