"use client";
import { usePathname } from "next/navigation";
import  { ReactNode, useState } from "react";
import { PiBookOpenUserFill } from "react-icons/pi";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { LiaTimesSolid } from "react-icons/lia";

const Logo = () => (
  <header className="flex justify-center items-center">
    <PiBookOpenUserFill size="22" className="text-[var(--accent-color)] mr-2" />
    <h1 className="text-[1.38rem]">edulearning</h1>
  </header>
);

interface NavItemProps {
  href: string;
  children: ReactNode;
}

const NavItem = ({ href, children }: NavItemProps) => {
  const pathname = usePathname();
  const isActive = href === pathname;
  return (
    <li
      className={`${isActive ? "text-[var(--accent-color)]" : ""} mr-6  max-sm:mr-0 my-2 mx-4 `}
    >
      <Link href={href} className="text-[1rem]">
        {children}
      </Link>
    </li>
  );
};

const NavList = () => (
  <nav aria-label="Main navigation">
    <ul className="flex justify-center items-center py-4 max-sm:flex-col max-sm:justify-start  ">
      <NavItem href="/">Home</NavItem>
      <NavItem href="/categories">Categories</NavItem>
      <NavItem href="/about">About</NavItem>
      <NavItem href="/contact">Contact</NavItem>
      <NavItem href="/blog">Blog</NavItem>
    </ul>
  </nav>
);

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };
  return (
    <div className="flex justify-between max-sm:px-2 ">
      <Logo />
      <div className="hidden sm:flex justify-center items-center">
        <NavList />
      </div>
      {/* Mobile view */}
      <div className="sm:hidden ">
        {menu && (
          <div
            className={` lg:hidden absolute top-[40px] left-0 w-full z-[999] bg-[var(--background-color)] flex flex-col justify-start place-items-start`}
            style={{ padding: "16px" }}
          >
            <NavList />
          </div>
        )}
        <button
          className="flex justify-center py-2 text-[var(--accent-color)]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menu}
        >
          {menu ? <LiaTimesSolid size="24" /> : <IoIosMenu size="24" />}
        </button>
      </div>
    </div>
  );
}
