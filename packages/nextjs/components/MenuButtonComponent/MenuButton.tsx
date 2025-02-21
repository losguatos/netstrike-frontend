import React from "react";
import { menuButtonClasses } from "./MenuButton.styles";

interface MenuButtonProps {
  label: string;
  onClick: () => void;
  isActive?: boolean;
  className?: string;
  disabled?: boolean;
}

const MenuButton: React.FC<MenuButtonProps> = ({
  label,
  onClick,
  isActive = false,
  className = "",
  disabled = false,
}) => {
  const buttonClasses = `
    ${menuButtonClasses.base}
    ${!disabled && menuButtonClasses.hover}
    ${isActive && menuButtonClasses.active}
    ${disabled && menuButtonClasses.disabled}
    ${className}
  `;

  return (
    <button
      role="button"
      tabIndex={0}
      className={buttonClasses.trim()}
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {label}
    </button>
  );
};

export default MenuButton;