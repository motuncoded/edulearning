"use client"
import { useState } from "react";
import { PiBookOpenUserFill } from "react-icons/pi";
import {
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandPinterest,
  TbBrandX,
  TbMessagePlus,
} from "react-icons/tb";
import { TbPhoneCall } from "react-icons/tb";

interface ApiResponse {
  status: number;
  message: string;
}

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
    <section className="flex flex-col gap-2 mt-4">
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
const Subscribe = () => {
   const [email, setEmail] = useState("");
   const [subscribeMessage, setSubscribeMessage] = useState("");
   const [error, setError] = useState(""); 

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

      const response = await fetch('/api/subscribe', {  
            method: 'POST',  
            headers: {  
                'Content-Type': 'application/json',  
            },  
            body: JSON.stringify({ email }),  
        });  

        const result = await response.json();  
        setSubscribeMessage(result.message);  
        setEmail(''); 

    setInterval(() => {
      setSubscribeMessage("")
    }, 3000);
  };  
  return (
    <section className="mt-4" aria-label="Subscribe ">
      <h3>Subscribe for our newsletter.</h3>
      <p className="text-[12px] w-[250px] text-gray-800">
        Get notifications right in your mailbox to know about the latest news on
        education.{" "}
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={email}
          className="border b-2 border-gray-200 p-2 my-4 mr-2 text-[.75rem]"
          placeholder="Enter email"
          aria-label="input"
          onChange={(event) => setEmail(event.target.value)}
        />
        <button
          type="submit"
          aria-label="send button"
          className="text-white bg-[var(--primary-color)] rounded p-2 text-[.75rem] "
        >
          Send
        </button>
      </form>
      {subscribeMessage && (
        <p className="text-green-600 text-[.75rem]">{subscribeMessage}</p>
      )}
    </section>
  );
};

export default function Page() {
  return (
    <footer  aria-label="Footer"
     className="flex justify-between py-4 max-sm:px-2 max-sm:flex-col max-xl:px-2 max-xl:flex-col">
      <FooterLogo />
      <Category />
      <Useful />
      <Subscribe />
    </footer>
  );
}
