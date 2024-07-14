import { PiBookOpenUserFill } from "react-icons/pi";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandPinterest,
  TbBrandX,
  TbMessagePlus,
} from "react-icons/tb";
import { TbPhoneCall } from "react-icons/tb";

const Logo = () => (
  <div className="flex flex-col">
    <h4 className="flex items-center">
      <PiBookOpenUserFill
        size="30"
        className="text-[var(--accent-color)] mr-2"
        aria-label="Edu Learning Logo"
      />
      <span className="text-[1.38rem]">edulearning</span>
    </h4>
    <h5 className="mb-4">Lagos, Nigeria</h5>
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
    <div className="flex flex-col gap-2">
      <h4 className="text-[1.38rem] font-bold"> Quick links</h4>
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
    </div>
  );
};
const Useful = () => {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-[1.38rem] font-bold"> Useful links</h4>
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
    </div>
  );
};

export default function page() {
  return (
    <footer className="flex justify-between max-sm:px-2 h-4/6">
      <Logo />
      <Category />
      <Useful />
    </footer>
  );
}
