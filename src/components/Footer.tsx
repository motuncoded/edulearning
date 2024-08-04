"use client";


import { PiBookOpenUserFill } from "react-icons/pi";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandPinterest,
  TbBrandX,
  TbMessagePlus,
} from "react-icons/tb";
import { TbPhoneCall } from "react-icons/tb";

import Subscribe from "../components/Subscribe";

// footerLogo component

const FooterLogo = () => (
  <div className="flex flex-col pt-4">
    <h3 className="flex items-center">
      <PiBookOpenUserFill
        size="30"
        className="text-[var(--accent-color)] mr-2"
        aria-label="Edu Learning Logo"
      />
      <span className="text-[1.38rem]">edulearning</span>
    </h3>
    <p className="mb-4">Lagos, Nigeria</p>
    <a href="mailto:edulearning@gmail.com" className="flex pb-2 ">
      <TbMessagePlus size="18" aria-label="Email" />{" "}
      <span className="pl-4">edulearning@gmail.com</span>{" "}
    </a>
    <a href="tel:+234 802 000 0000" className="flex pb-2 ">
      <TbPhoneCall size="18" />
      <span className="pl-4">+234 80222 333 444 </span>
    </a>
    <ul className="flex pb-4">
      <li className="flex ">
        <a
          href="https://www.facebook.com/edulearning"
          target="_blank"
          rel="noreferrer"
          className="flex items-center"
        >
          <TbBrandFacebook size="18" />
        </a>
      </li>
      <li className="flex ">
        <a
          href="https://www.x.com/edulearning"
          target="_blank"
          rel="noreferrer"
          className="flex items-center pl-4"
        >
          <TbBrandX size="18" />
        </a>
      </li>
      <li className="flex ">
        <a
          href="https://www.instagram.com/edulearning"
          target="_blank"
          rel="noreferrer"
          className="flex items-center pl-4"
        >
          <TbBrandInstagram size="18" />
        </a>
      </li>
      <li className="flex ">
        <a
          href="https://www.pinterest.com/edulearning"
          target="_blank"
          rel="noreferrer"
          className="flex items-center pl-4"
        >
          <TbBrandPinterest size="18" />
        </a>
      </li>
    </ul>
  </div>
);

const Category = () => {
  return (
    <section className="flex flex-col gap-2 mt-4">
      <h3 className="text-[1.38rem] underline	decoration-[var(--accent-color)]">
        {" "}
        Quick links
      </h3>
      <nav aria-label="Footer Navigation">
        <ul className="flex flex-col gap-2">
          <li className="flex gap-2 items-center">
            <a href="#">Websites</a>
          </li>
          <li className="flex gap-2 items-center">
            <a href="#">Videos</a>
          </li>{" "}
          <li className="flex gap-2 items-center">
            <a href="#">Podcasts</a>
          </li>{" "}
          <li className="flex gap-2 items-center">
            <a href="#">Books</a>
          </li>
        </ul>
      </nav>
    </section>

  );
};
const Useful = () => {
  return (
    <section aria-label="Useful-component" className="flex flex-col gap-2 mt-4">
      <h3 className="text-[1.38rem] underline	decoration-[var(--accent-color)] ">
        {" "}
        Useful links
      </h3>
      <ul className="flex flex-col gap-2">
        <li className="flex gap-2 items-center">
          <a href="#">Privacy policy</a>
        </li>
        <li className="flex gap-2 items-center">
          <a href="#">Terms and Conditions</a>
        </li>{" "}
        <li className="flex gap-2 items-center">
          <a href="#">Disclamier</a>
        </li>{" "}
        <li className="flex gap-2 items-center">
          <a href="#">Support</a>
        </li>
        <li className="flex gap-2 items-center">
          <a href="#">FAQ</a>
        </li>
      </ul>
    </section>
  );
};

/* @client */

export default function Page() {
  return (
    <footer
      aria-label="Footer"
      className="flex justify-between py-4 max-sm:px-4 max-sm:flex-col  max-md:flex-col max-md:px-4  max-xl:flex-col max-xl:px-4 "
    >

      <FooterLogo />
      <Category />
      <Useful />
      <Subscribe />
    </footer>
  );
}
