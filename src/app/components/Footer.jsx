import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-amber-200 text-base-content mt-20 border-t border-base-300">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
        
        <div className="flex flex-col items-center sm:items-start">
          <h2 className="text-xl sm:text-2xl font-extrabold text-primary">
            SunCart
          </h2>
          <p className="mt-4 text-sm opacity-80 leading-relaxed">
            Summer isn’t a season—it’s a mood. We bring essentials that keep you
            cool, confident, and ready for sunshine.
          </p>

          <div className="flex gap-4 mt-5 text-lg justify-center sm:justify-start">
            <FaFacebookF className="hover:text-primary transition cursor-pointer" />
            <FaTwitter className="hover:text-primary transition cursor-pointer" />
            <FaInstagram className="hover:text-primary transition cursor-pointer" />
            <FaGithub className="hover:text-primary transition cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Shop</h3>
          <div className="flex flex-col gap-2 text-sm opacity-80">
            <Link href="/products" className="hover:text-primary transition">
              All Products
            </Link>
            <Link href="/categories" className="hover:text-primary transition">
              Categories
            </Link>
            <Link href="/deals" className="hover:text-primary transition">
              Hot Deals
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <div className="flex flex-col gap-2 text-sm opacity-80">
            <Link href="/contact" className="hover:text-primary transition">
              Contact
            </Link>
            <Link href="/faq" className="hover:text-primary transition">
              FAQ
            </Link>
            <span>support@suncart.com</span>
            <span>+880 1234-567890</span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <div className="flex flex-col gap-2 text-sm opacity-80">
            <Link href="/privacy-policy" className="hover:text-primary transition">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-primary transition">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>

      <div className="border-t border-base-300 py-5 text-center text-xs sm:text-sm opacity-70 px-4">
        © {new Date().getFullYear()} SunCart. Built for sunshine ☀️
      </div>

    </footer>
  );
}