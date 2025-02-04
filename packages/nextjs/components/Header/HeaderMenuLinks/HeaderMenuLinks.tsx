import { HeaderMenuLink } from "./HeaderMenuLinks.types";
import Link from "next/link";

export const menuLinks: HeaderMenuLink[] = [
  {
    label: "Home",
    href: "/",
  },
];

export const HeaderMenuLinks = () => {
  return (
    <>
      {menuLinks.map(({ label, href, icon }) => {
        return (
          <li key={href}>
            <Link
              href={href}
              passHref
              className={`py-1.5 border-2 border-primary  px-3 text-lg font-bold rounded-none gap-2 grid grid-flow-col hover:bg-primary hover:text-black`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
};
