import { useTheme } from "next-themes";
import { GenericModalStyles } from "./GenericModalStyles";

export const GenericModal = ({
  children,
  modalId,
}: {
  children: React.ReactNode;
  className?: string;
  modalId: string;
}) => {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";
  return (
    <label htmlFor={modalId} className="modal  backdrop-blur cursor-pointer">
      <label className={GenericModalStyles.GenericM}>
        {/* dummy input to capture event onclick on modal box */}
        <input className={GenericModalStyles.GenericInput} />
        {children}
      </label>
    </label>
  );
};
