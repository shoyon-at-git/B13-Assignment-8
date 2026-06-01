"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { FaUser, FaEnvelope, FaEdit } from "react-icons/fa";

const MyProfile = () => {
  const { data } = authClient.useSession();
  const user = data?.user;

  return (
    <div className=" bg-slate-100 px-3 py-6 flex items-center justify-center">
      <div className="w-full max-w-3xl">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

          {/* Top Section */}
          <div className="p-4 md:p-6 flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-8">

            {/* Avatar */}
            <div className="relative shrink-0">
              <Image
                src={user?.image || "/default-user.png"}
                alt="Profile"
                width={140}
                height={140}
                className="w-27.5 h-27.5 md:w-35 md:h-35 rounded-full object-cover border-4 border-white shadow"
              />
              <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">
                {user?.name || "Loading..."}
              </h1>

              <p className="text-sm md:text-base text-slate-500 mt-1 break-all">
                {user?.email || "Loading..."}
              </p>

              <span className="inline-flex mt-3 items-center rounded-full bg-green-100 px-3 py-1 text-xs md:text-sm text-green-700">
                Active Account
              </span>
            </div>

            {/* Button */}
            <Link href={"/my-profile/edit"} className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 active:scale-[0.98] transition cursor-pointer">
              <FaEdit />
              Edit Profile
            </Link>
          </div>

          {/* Info Section */}
          <div className="border-t border-slate-200 p-4 md:p-6">
            <h2 className="text-base md:text-lg font-semibold text-slate-900 mb-4">
              Account Info
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">

              {/* Name */}
              <div className="border border-slate-200 rounded-xl p-4 hover:shadow-sm transition">
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
                  <FaUser />
                  Full Name
                </div>
                <p className="font-medium text-slate-900">
                  {user?.name || "—"}
                </p>
              </div>

              {/* Email */}
              <div className="border border-slate-200 rounded-xl p-4 hover:shadow-sm transition">
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-1">
                  <FaEnvelope />
                  Email
                </div>
                <p className="font-medium text-slate-900 break-all">
                  {user?.email || "—"}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MyProfile;