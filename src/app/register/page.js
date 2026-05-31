"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const router = useRouter();
  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    // console.log(user);
    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
      image: user.image,
    });
    // console.log({data,error});
    if (error) {
    toast.error(error.message);
    return;
  }

  toast.success("User successfully registered");
  router.push("/login");
  }

  const handleGoogleLogin = async() =>{
    await authClient.signIn.social({
      provider: 'google',
    })
  }
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
      <section
        className="w-full max-w-lg bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden"
      >
        <header className="bg-black text-white text-center p-8">
          <h1 className="text-3xl font-bold">
            Create Account
          </h1>

          <p className="mt-2 text-gray-300">
            Register to access all features of the platform
          </p>
        </header>

        <div className="p-8">
          <form onSubmit={handleRegister} className="space-y-5">
            <fieldset className="space-y-5">
              <legend className="sr-only">
                Registration Form
              </legend>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Full Name*
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email Address*
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label
                  htmlFor="image"
                  className="block text-sm font-medium mb-2"
                >
                  Photo URL (optional)
                </label>

                <input
                  id="photo"
                  name="image"
                  type="url"
                  placeholder="https://example.com/photo.jpg"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-2"
                >
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </fieldset>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-xl font-semibold hover:opacity-90 transition cursor-pointer"
            >
              Register
            </button>
          </form>

          <section
            aria-label="Alternative sign in options"
            className="mt-6"
          >
            <div className="flex items-center gap-4 mb-6">
              <hr className="flex-1 border-slate-300" />
              <span className="text-sm text-slate-500">
                OR
              </span>
              <hr className="flex-1 border-slate-300" />
            </div>

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full border border-slate-300 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-slate-50 transition cursor-pointer"
            >
              <FcGoogle size={24} />
              <span className="font-medium">
                Continue with Google
              </span>
            </button>
          </section>

          <footer className="mt-6 text-center">
            <p className="text-slate-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-black hover:underline"
              >
                Login
              </Link>
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}
