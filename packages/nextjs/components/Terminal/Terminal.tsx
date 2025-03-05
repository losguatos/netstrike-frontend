"use client";
import React from "react";
import { TerminalProps } from "./Terminal.types";
import { terminalStyles } from "./Terminal.styles";
import clsx from "clsx";

export const Terminal: React.FC<TerminalProps> = ({
  header,
  onClose,
  children,
  footer,
  className = "",
}) => {
  return (
    <div className={clsx(terminalStyles.container, className)}>
      {header && (
        <div className={terminalStyles.header}>
          <h2 className={terminalStyles.headerTitle}>{header.title}</h2>
          {header.withCloseButton && (
            <button
              onClick={onClose}
              aria-label="Close"
              className={terminalStyles.closeButton}
            ></button>
          )}
        </div>
      )}
      <div className={terminalStyles.content}>{children}</div>
      {footer && <div className={terminalStyles.footer}>{footer}</div>}
    </div>
  );
};