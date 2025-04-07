"use client";
import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";

function BlogPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), // Correctly send email as blogEmail
      });

      console.log("API response:", response); // Log the response

      if (!response.ok) {
        throw new Error("Unable to subscribe");
      }

      const result = await response.json();
      console.log("API result:", result); // Log the result
      setSuccess("Subscription successful");
      setEmail(""); // Clear the email input
    } catch (error: any) {
      console.error("Subscription error:", error.message); // Log error message
      setError(error.message);
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
    <div className="min-h-[100vh] p-4">
      <div className="flex justify-center items-center flex-col  text-center my-6">
        <h1 className="text-3xl mb-4 font-bold">
          Inside EduLearning: Smart Insights for Every Learner
        </h1>
        <h2 className="font-normal">
          Join our newsletter and explore diverse fields of education, one tip
          at a time!
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex my-6 border-2 w-[300px] md:w-[400px] rounded-md p-1">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="outline-none text-sm w-[100%]"
            />
            <button className="text-white bg-[var(--accent-color)] p-2 rounded">
              Subscribe
            </button>
          </div>
          {error && (
            <p
              className="text-red-600  text-[.75rem]"
              aria-describedby="errorMessage"
            >
              {error}
            </p>
          )}
          {success && (
            <p
              className="text-green-600  text-[.75rem]"
              aria-describedby="success"
            >
              {success}
            </p>
          )}
        </form>
      </div>
      <BlogCard />
    </div>
  );
}

export default BlogPage;
