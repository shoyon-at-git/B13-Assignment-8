"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const params = useSearchParams();
  const redirectTo = params.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await authClient.signIn.email({ email, password });
      router.push(redirectTo);
    } catch (e) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="card bg-base-100 p-6 shadow w-80 space-y-4">

        <h2 className="text-2xl font-bold text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button className="btn btn-primary w-full">
          Login
        </button>

        <button
          type="button"
          onClick={() =>
            authClient.signIn.social({
              provider: "google",
              callbackURL: redirectTo,
            })
          }
          className="btn w-full"
        >
          Continue with Google
        </button>

        <p className="text-sm text-center">
          Don’t have an account?{" "}
          <Link href="/register" className="text-primary">
            Register
          </Link>
        </p>

      </form>
    </div>
  );
}