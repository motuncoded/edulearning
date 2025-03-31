"use client";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

function BlogPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    const { error: insertError } = await supabase
      .from("blog")
      .insert([{ email }]);

    if (insertError) {
      setError("Try another email ");
    } else {
      setSuccess("Thank you for subscribing!");
      setEmail("");
    }
  };
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);
  return (
    <div className="flex justify-center items-center flex-col font-bold min-h-[80vh] max-sm:p-4 max-sm:text-center">
      <h1 className="text-3xl mb-4">Inside Edulearning: Tips and Tricks</h1>
      <h2 className="font-normal">
        Subscribe now to learn about different categories of education
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 mt-8 border py-2  px-4 rounded-lg max-w-[480px] w-[100%] flex flex-col  justify-between max-sm:border-none">
          <label htmlFor="email" className="sr-only">
            {" "}
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="outline-none  w-[100%] max-sm:border max-sm:my-4"
          />
          <button className="text-white bg-[var(--accent-color)] p-2 rounded">
            Subscribe
          </button>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </form>
    </div>
  );
}

export default BlogPage;
