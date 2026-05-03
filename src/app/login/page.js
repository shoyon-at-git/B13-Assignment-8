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
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await authClient.signIn.email({ email, password });
      router.push(redirectTo);
    } catch (err) {
      console.error(err);
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      setLoading(true);

      await authClient.signIn.social({
        provider: "google",
        callbackURL: redirectTo,
      });

    } catch (err) {
      console.error(err);
      setError("Google login failed");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">

      <form
        onSubmit={handleLogin}
        className="card bg-base-100 p-6 shadow w-80 space-y-4"
      >

        <h2 className="text-2xl font-bold text-center">
          Login
        </h2>

        {/* EMAIL */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* PASSWORD */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="input input-bordered w-full"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* ERROR */}
        {error && (
          <p className="text-red-500 text-sm">
            {error}
          </p>
        )}

        {/* LOGIN BUTTON */}
        <button
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* GOOGLE LOGIN */}
        <button
          type="button"
          onClick={handleGoogle}
          className="btn w-full"
          disabled={loading}
        >
          Continue with Google
        </button>

        {/* FOOTER */}
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