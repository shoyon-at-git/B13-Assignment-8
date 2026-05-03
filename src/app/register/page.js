"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await authClient.signUp.email({
        name,
        email,
        password,
        image: photo,
      });

      console.log("REGISTER RESPONSE:", res);

      toast.success("Account created 🎉");

      // IMPORTANT: small delay ensures cookie/session is written
      setTimeout(() => {
        router.push("/");
        router.refresh();
      }, 500);

    } catch (err) {
      console.error(err);
      toast.error("Registration failed ❌");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      console.error(err);
      toast.error("Google login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">

      <form
        onSubmit={handleRegister}
        className="card bg-base-100 shadow p-6 w-80 space-y-4"
      >

        <h2 className="text-2xl font-bold text-center">
          Register
        </h2>

        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Photo URL"
          className="input input-bordered w-full"
          onChange={(e) => setPhoto(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="input input-bordered w-full"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          className="btn btn-primary w-full"
          disabled={loading}
        >
          {loading ? "Creating..." : "Register"}
        </button>

        <button
          type="button"
          onClick={handleGoogle}
          className="btn w-full"
        >
          Continue with Google
        </button>

        <p className="text-sm text-center">
          Already have account?{" "}
          <Link href="/login" className="text-primary">
            Login
          </Link>
        </p>

      </form>

    </div>
  );
}