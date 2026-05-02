"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow px-4 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
          >
            <li><Link href="/">Home</Link></li>
            <li><Link href="/products">Products</Link></li>
            <li><Link href="/profile">My Profile</Link></li>
            <li><Link href="/login">Login</Link></li>
            <li><Link href="/register">Register</Link></li>
          </ul>
        </div>
        <Link href={"/"} className="text-xl font-bold ml-2">
          ☀️ SunCart
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li><Link href={"/"}>Home</Link></li>
          <li><Link href={"/my-products"}>Products</Link></li>
          <li><Link href={"/my-profile"}>My Profile</Link></li>
        </ul>
      </div>

      <div className="navbar-end hidden lg:flex gap-2">
        <Link href={"/register"} className="btn btn-sm">
          Register
        </Link>
        <Link href={"/login"} className="btn btn-sm btn-primary">
          Login
        </Link>
      </div>

    </div>
  );
}