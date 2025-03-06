import clsx from "clsx";

export const terminalStyles = {
  container: clsx(
    "flex flex-col bg-transparent border-2 border-green-500 p-4 rounded",
  ),
  header: clsx("flex justify-between items-center mb-4"),
  headerTitle: clsx("text-green-500 font-bold"),
  closeButton: clsx("text-green-500 hover:text-green-700 focus:outline-none"),
  content: clsx("flex-grow"),
  footer: clsx("mt-4"),
};
