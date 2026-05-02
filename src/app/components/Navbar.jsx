"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

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
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/my-products">Products</Link></li>
            <li><Link href="/my-profile">My Profile</Link></li>
            <li><Link href="/register">Register</Link></li>
            <li><Link href="/login">Login</Link></li>
          </ul>
        </div>

        <Link href="/" className="text-xl font-bold ml-2">
          ☀️ SunCart
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex gap-2">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/my-products">Products</NavLink>
        <NavLink href="/my-profile">My Profile</NavLink>
      </div>

      <div className="navbar-end hidden lg:flex gap-2">
        <Link href="/register" className="btn btn-sm">
          Register
        </Link>
        <Link href="/login" className="btn btn-sm btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
}