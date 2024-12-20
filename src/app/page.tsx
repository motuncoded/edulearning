"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import quotes from "./json/quotes.json";
import Offer from "./offer";
import Category from "./category";
import Videos from "./videos";
import More from "./more";
import SignUpModal from "./components/Signup";
import Footer from "./components/Footer";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevQuote) => (prevQuote + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="max-sm:p-4">
      <div className="flex justify-center items-center flex-col pt-6">
        <h2 className="text-[3rem]  font-bold max-sm:text-[2.5rem]	text-center max-sm:leading-9	">
          Drive the world through knowledge.
        </h2>

        <h3 className="max-sm:text-center max-sm:pt-4 px-2 max-md:text-center">
          {quotes[currentIndex].quote}
        </h3>
        <div className="flex justify-center items-center py-4 ">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex justify-center p-2 rounded text-white bg-[var(--accent-color)]"
          >
            Get started
          </button>
          <SignUpModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </div>
        <div className="pt-6">
          <Image
            src="/learning.svg"
            width={600}
            height={600}
            alt="edulearning"
          />
        </div>
      </div>
      <Offer />
      <Category />
      <Videos />
      <More />
      <Footer />
    </div>
  );
}
