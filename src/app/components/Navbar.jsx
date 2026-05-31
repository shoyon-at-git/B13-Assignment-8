"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const { data } = authClient.useSession();
    const user = data?.user;

    const [imgError, setImgError] = useState(false);

    const handleLogout = async () => {
        await authClient.signOut();
    };

    const getInitial = (name) => name?.charAt(0)?.toUpperCase() || "U";

    return (
        <div className="navbar bg-base-100 shadow px-4 sticky top-0 z-50">
            {/* START */}
            <div className="navbar-start">
                {/* MOBILE HAMBURGER */}
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        ☰
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50"
                    >
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/my-products">Products</Link>
                        </li>
                        <li>
                            <Link href="/my-profile">My Profile</Link>
                        </li>
                        {!user && (
                            <>
                                <li>
                                    <Link href="/login">Login</Link>
                                </li>
                                <li>
                                    <Link href="/register">Register</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>

                <Link href="/" className="text-xl font-bold ml-2">
                    ☀️ SunCart
                </Link>
            </div>

            {/* CENTER (DESKTOP MENU) */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/my-products">Products</Link>
                    </li>
                    <li>
                        <Link href="/my-profile">My Profile</Link>
                    </li>
                </ul>
            </div>

            {/* END */}
            <div className="navbar-end flex gap-3 items-center">
                {user ? (
                    <>
                        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center text-sm font-bold">
                            {user.image && !imgError ? (
                                <Image
                                    src={user.image}
                                    alt="avatar"
                                    fill
                                    className="object-cover"
                                    onError={() => setImgError(true)}
                                />
                            ) : (
                                <span>{getInitial(user.name)}</span>
                            )}
                        </div>

                        <button
  onClick={handleLogout}
  className="btn btn-sm btn-error btn-outline"
>
  Logout
</button>
                    </>
                ) : (
                    <div className="hidden lg:flex gap-2">
                        <Link href="/register" className="btn btn-sm">
                            Register
                        </Link>
                        <Link href="/login" className="btn btn-sm btn-primary">
                            Login
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
