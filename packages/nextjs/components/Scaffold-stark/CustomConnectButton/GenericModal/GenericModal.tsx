import { useTheme } from "next-themes";

export const GenericModal = ({
  children,
  className = "modal-box border border-[#24DC8F] bg-[#000000] border-r-2 border-l-2  bp rounded-none p-0  flex flex-col gap-3 justify-around relative",
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
      <label className={className}>
        {/* dummy input to capture event onclick on modal box */}
        <input className="h-0 w-0 absolute top-0 left-0" />
        {children}
      </label>
    </label>
  );
};
