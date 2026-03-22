"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // simple validation
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    // demo login (hardcoded)
    if (email === "admin@gmail.com" && password === "1234") {
      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="border p-6 rounded w-80 text-center">
        <h1 className="text-xl font-bold mb-4">Flight Login ✈️</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="flex items-center mb-2">
          <input type="checkbox" />
          <span className="ml-2 text-sm">Remember me</span>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Login
        </button>

        <p className="text-sm mt-3">
          Don’t have an account? Sign up
        </p>
      </div>
    </div>
  );
}