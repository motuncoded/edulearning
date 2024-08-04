"use client";
import React, { useState } from "react";
import axios from "axios";
import { AxiosError } from "axios";

interface SubscribeProps {
  email: string;
}

// Subscribe component
const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [subscribeMessage, setSubscribeMessage] = useState("");
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!emailRegex.test(email)) {
      setSubscribeMessage("Invalid email address");
      return;
    }
    try {
      const response = await axios.post("/app/api/subscribe", { email });
      console.log(response);
      setSubscribeMessage(response.data.message);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setSubscribeMessage(
          error.response?.data?.error || "An unknown error occurred",
        );
      } else {
        setSubscribeMessage("An unexpected error occurred");
      }
    }
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
          className="border b-2 border-gray-200 p-2 my-4 mr-2 text-[16px]"
          placeholder="Enter email"
          aria-label="input"
          onChange={(event) => setEmail(event.target.value)}
        />
        <button
          type="submit"
          aria-label="send button"
          className="text-white bg-[var(--primary-color)] rounded p-2 "
        >
          Send
        </button>
      </form>
      {subscribeMessage && (
        <p
          className={`text-${subscribeMessage.includes("error") ? "red" : "black"}`}
        >
          {subscribeMessage}
        </p>
      )}
    </section>
  );
};
export default Subscribe;
