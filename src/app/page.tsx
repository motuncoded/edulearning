"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import quotes from "./quotes.json";
import Offer from "./offer"


export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevQuote) => (prevQuote + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div>
    <div className="flex justify-center items-center flex-col pt-6">
      <h2 className="text-[3rem]  font-bold max-sm:text-[2.5rem]	text-center max-sm:leading-9	">
        Drive the world through knowledge.
      </h2>

      <h3 className="max-sm:text-center max-sm:pt-4 px-2">
        {quotes[currentIndex].quote}
      </h3>
      <div className="flex justify-center items-center py-4 ">
        <button className="flex justify-center p-2 rounded text-white bg-[var(--accent-color)]">
          Get started
        </button>
      </div>
      <div className="pt-6">
        <Image src="/learning.svg" width={600} height={600} alt="edulearning" />
      </div>
      </div>

    <Offer/>

    </div>
  );
}
