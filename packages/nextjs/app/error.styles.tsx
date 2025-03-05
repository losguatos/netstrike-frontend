import clsx from "clsx";

// The classes object is used to define the styles of the component
export const classes = {
  container: clsx(
    "w-full min-h-screen flex flex-col items-center justify-between text-center pt-12 pb-8 px-4 gap-6 overflow-hidden",
  ),
  title: clsx("text-5xl md:text-7xl font-bold"),
  subtitle: clsx("text-2xl md:text-4xl"),
  errorMessage: clsx("text-base md:text-lg max-w-[90%] md:max-w-[1041px]"),
  errorContainer: clsx("w-full max-w-[1041px] text-lg md:text-xl font-medium"),
  errorList: clsx("list-disc list-inside space-y-4 md:space-y-8"),
  errorSuggestion: clsx("text-lg md:text-xl"),
  errorActions: clsx(
    "w-full lg:w-1/2 max-w-[90%] bg-[#086333] py-3 px-8 lg:px-20",
  ),
  actionLink: clsx(
    "mx-4 cursor-pointer hover:text-black transition-colors duration-300",
  ),
};
