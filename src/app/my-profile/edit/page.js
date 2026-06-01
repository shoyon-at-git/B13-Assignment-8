"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function EditProfilePage() {
  const { data } = authClient.useSession();
  const user = data?.user;
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name")?.toString() || "";
    const image = formData.get("image")?.toString() || "";

    try {
      setLoading(true);

      await authClient.updateUser({
        name,
        image,
      });

      toast.success("Profile updated successfully ✨");

      // small delay so toast is visible
      setTimeout(() => {
        router.push("/my-profile");
      }, 500);

    } catch (err) {
      console.error(err);
      toast.error("Update failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">

        <h1 className="text-xl font-semibold text-slate-900 mb-6 text-center">
          Update Information
        </h1>

        {/* Preview Image */}
        <div className="flex justify-center mb-6">
          <Image
            src={user?.image || "/default-user.png"}
            alt="Profile"
            width={90}
            height={90}
            className="rounded-full border object-cover"
          />
        </div>

        {/* Form */}
        <form onSubmit={handleUpdate} className="space-y-4">

          {/* Name */}
          <div>
            <label className="text-sm text-slate-600">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={user?.name || ""}
              disabled={loading}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-300 disabled:opacity-50"
              placeholder="Enter your name"
            />
          </div>

          {/* Image */}
          <div>
            <label className="text-sm text-slate-600">Image URL</label>
            <input
              type="text"
              name="image"
              defaultValue={user?.image || ""}
              disabled={loading}
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-300 disabled:opacity-50"
              placeholder="Enter image URL"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-900 text-white py-2.5 rounded-lg hover:bg-slate-800 transition disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Updating..." : "Update Information"}
          </button>

        </form>
      </div>
    </div>
  );
}