import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-amber-200 text-base-content mt-20 border-t border-base-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        <div>
          <h3 className="text-base font-semibold mb-3">Contact</h3>
          <div className="text-sm opacity-75 space-y-1 leading-relaxed">
            <p>support@suncart.com</p>
            <p>+880 1234-567890</p>
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-3">Follow</h3>
          <div className="flex justify-center md:justify-start gap-4 text-base opacity-80">
            <FaFacebookF className="hover:text-primary transition" />
            <FaTwitter className="hover:text-primary transition" />
            <FaInstagram className="hover:text-primary transition" />
            <FaGithub className="hover:text-primary transition" />
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-3">Legal</h3>
          <div className="flex flex-col gap-2 text-sm opacity-75">
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-conditions"
              className="hover:text-primary transition"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>

      <div className="border-t border-base-300 py-4 text-center text-xs opacity-60">
        © {new Date().getFullYear()} SunCart — All rights reserved. Simple. Honest. Built for everyday shopping.
      </div>

    </footer>
  );
}