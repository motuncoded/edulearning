"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
const quotes = [
  {
    quote:
      "“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.”",
  },
  {
    quote:
      "“Education's purpose is to replace an empty mind with an open one..”",
  },
  {
    quote:
      "“Education makes a people easy to lead but difficult to drive: easy to govern, but impossible to enslave.”",
  },
  {
    quote:
      "“Knowledge is power. Information is liberating. Education is the premise of progress in every society, in every family..”",
  },
];


export default function Home() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [quote, setQuote] = useState(quotes[currentQuote].quote);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuote((prevQuote) => (prevQuote + 1) % quotes.length);
      setQuote(quotes[currentQuote].quote);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentQuote]);

  return (
    <div className="flex justify-center items-center flex-col pt-6">
      <h2 className="text-[3rem]  font-bold max-sm:text-[2.5rem]	text-center max-sm:leading-9	">
        Drive the world through knowledge.
      </h2>

      <h3 className="max-sm:text-center max-sm:pt-4 px-2">{quote}</h3>
      <div className="flex justify-center items-center py-4 ">
        <button className="flex justify-center p-2 rounded text-white bg-[var(--accent-color)]">
          Get started
        </button>
      </div>
      <div className="pt-6">
        <Image src="/learning.png" width={600} height={600} alt="edulearning" />
      </div>
    </div>
  );
}
