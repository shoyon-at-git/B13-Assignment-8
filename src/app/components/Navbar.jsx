"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

export default function Navbar() {
  const pathname = usePathname();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadUser = async () => {
    try {
      const session = await authClient.getSession();
      setUser(session?.user || null);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();

    // 👇 better than polling: refresh on tab focus
    const onFocus = () => loadUser();
    window.addEventListener("focus", onFocus);

    return () => window.removeEventListener("focus", onFocus);
  }, []);

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      setUser(null);
      toast.success("Logged out successfully 👋");
    } catch {
      toast.error("Logout failed ❌");
    }
  };

  const NavLink = ({ href, children }) => {
    const isActive =
      href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
      <Link
        href={href}
        className={`px-2 py-1 rounded transition ${
          isActive
            ? "text-primary font-semibold border-b-2 border-primary"
            : "text-gray-600 hover:text-primary"
        }`}
      >
        {children}
      </Link>
    );
  };

  return (
    <div className="navbar bg-base-100 shadow px-4 sticky top-0 z-50">

      {/* LEFT */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/my-products">Products</Link></li>
            <li><Link href="/my-profile">My Profile</Link></li>

            {!user && (
              <>
                <li><Link href="/register">Register</Link></li>
                <li><Link href="/login">Login</Link></li>
              </>
            )}
          </ul>
        </div>

        <Link href="/" className="text-xl font-bold ml-2">
          ☀️ SunCart
        </Link>
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex gap-2">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/my-products">Products</NavLink>
        <NavLink href="/my-profile">My Profile</NavLink>
      </div>

      {/* RIGHT */}
      <div className="navbar-end hidden lg:flex gap-3 items-center">

        {loading ? (
          <span className="text-sm text-gray-500">Loading...</span>
        ) : user ? (
          <>
            {/* AVATAR */}
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                {user?.name?.charAt(0)?.toUpperCase() || "U"}
              </div>

              <span className="text-sm font-medium">
                {user?.name}
              </span>
            </div>

            <button
              onClick={handleLogout}
              className="btn btn-sm btn-error"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/register" className="btn btn-sm">
              Register
            </Link>
            <Link href="/login" className="btn btn-sm btn-primary">
              Login
            </Link>
          </>
        )}

      </div>
    </div>
  );
}