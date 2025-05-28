"use client";

import React, { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
// Add this import at the top of your Signupform.tsx
import { isAuthenticated } from "./utils/auth";



export default function SignupForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const url = isLoginMode
      ? "http://localhost:3001/auth/login"
      : "http://localhost:3001/auth/signup";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Something went wrong");
        return;
      }

      if (isLoginMode) {
        localStorage.setItem("token", data.token); // Save JWT
        navigate("/Home"); // Redirect to homepage
      } else {
        alert("Signup successful! You can now login.");
        setIsLoginMode(true);
      }

      setError("");
    } catch (err) {
      setError("Network error");
    }
  };

// Add this useEffect after your existing useState declarations
useEffect(() => {
  if (isAuthenticated()) {
    navigate("/Home");
  }
}, [navigate]);

  return (
    <div className="shadow-input mx-auto w-full max-w-md p-4 rounded-2xl bg-white dark:bg-zinc-900 backdrop-blur-sm">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
        {isLoginMode ? "Login to Listify" : "Sign Up for Listify"}
      </h2>

      {error && <p className="text-red-500 mb-2 text-sm">{error}</p>}

      <form onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </LabelInputContainer>

        <button
          type="submit"
          className="h-10 w-full rounded-md bg-black text-white font-medium"
        >
          {isLoginMode ? "Login →" : "Sign Up →"}
        </button>

        <p className="mt-4 text-center text-sm">
          {isLoginMode ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            className="underline text-blue-600"
            onClick={() => setIsLoginMode(!isLoginMode)}
          >
            {isLoginMode ? "Sign up" : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("flex flex-col space-y-2", className)}>{children}</div>;
};
