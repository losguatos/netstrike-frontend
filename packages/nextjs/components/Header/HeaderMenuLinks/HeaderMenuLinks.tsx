import { HeaderMenuLink } from "./HeaderMenuLinks.types";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const menuLinks: HeaderMenuLink[] = [
  {
    label: "Home",
    href: "/",
  },
];

export const HeaderMenuLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {menuLinks.map(({ label, href, icon }) => {
        const isActive = pathname === href;
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
