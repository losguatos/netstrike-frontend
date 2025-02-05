// The idea of this file is to have all the styles for the component in one place
// This way, it is easier to maintain and change the styles of the component
// The styles are defined using Tailwind CSS classes
import clsx from "clsx";

// The classes object is used to define the styles of the component
export const classes = {
  // The clsx function is used to apply multiple classes to an element
  exampleContainer: clsx(
    "flex items-center justify-center p-4 bg-gray-900 text-white rounded-lg shadow-lg",
  ),
};
