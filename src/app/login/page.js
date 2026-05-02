"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";

export default function LoginPage() {

  const router = useRouter();
  const params = useSearchParams();
  const redirect = params.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await authClient.signIn.email({
        email,
        password,
      });

      toast.success("Login successful 🚀");

      setTimeout(() => {
        router.push(redirect);
      }, 800);

    } catch (err) {
      toast.error("Invalid email or password ❌");
    }
  };

  const handleGoogle = async () => {
    try {
      toast.info("Redirecting to Google...");
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch {
      toast.error("Google login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">

      <form onSubmit={handleLogin} className="card bg-base-100 shadow p-6 w-80 space-y-4">

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

        <button className="btn btn-primary w-full">
          Login
        </button>

        <button
          type="button"
          onClick={handleGoogle}
          className="btn w-full"
        >
          Continue with Google
        </button>

        <p className="text-sm text-center">
          Don’t have account?{" "}
          <Link href="/register" className="text-primary">
            Register
          </Link>
        </p>

      </form>

    </div>
  );
}