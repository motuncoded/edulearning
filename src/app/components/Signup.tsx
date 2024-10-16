import React, { useState } from "react";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { TiTimesOutline } from "react-icons/ti";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUpModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  if (!isOpen) return null;

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );
      setSuccess("User created successfully!");
      setFormData({ email: "", name: "", password: "" });
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <section className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="container bg-white p-5 rounded shadow-md max-w-md w-full">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="p-2 text-[var(--background-color)] bg-[var(--accent-color)]"
          >
            <TiTimesOutline />
          </button>
        </div>
        <h2 className="text-2xl text-center mb-2">Sign Up</h2>
        <p className="text-gray-400 mb-6 text-center">Join our community!</p>

        <form
          className="flex flex-col justify-center items-center m-2"
          onSubmit={handleSubmit}
        >
          <div className="mb-2 p-2">
            <label htmlFor="name" className="sr-only">
              Password
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleFormChange}
              required
              className="w-[300px] appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-2 p-2">
            <label htmlFor="email" className="sr-only"></label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleFormChange}
              className="appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-2 p-2">
            <label htmlFor="password" className="sr-only"></label>{" "}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleFormChange}
              required
              className="appearance-none border rounded w-[300px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex justify-center items-center py-4">
            <button
              type="submit"
              className="flex justify-center p-2 rounded text-white bg-[var(--accent-color)]"
            >
              Submit
            </button>
          </div>
          <div className="text-center text-gray-400 mt-4">
            Already have an account?{" "}
            <a href="#" className="text-[var(--primary-color)] hover:underline">
              Sign In
            </a>
          </div>
          {error && <div className="text-red-500 text-center">{error}</div>}{" "}
          {success && (
            <div className="text-green-500 text-center">{success}</div>
          )}{" "}
        </form>
      </div>
    </section>
  );
};

export default SignUpModal;
