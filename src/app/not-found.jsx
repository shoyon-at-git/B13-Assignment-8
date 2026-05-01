import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 text-base-content px-4">
      
      <div className="text-center max-w-md w-full">
        
        <h1 className="text-6xl sm:text-7xl font-extrabold text-primary">
          404
        </h1>

        <h2 className="mt-4 text-xl sm:text-2xl font-semibold">
          This page is lost in the void 
        </h2>

        <p className="mt-3 text-sm sm:text-base opacity-70 leading-relaxed">
          The page you’re looking for doesn’t exist or has been moved.
          Let’s get you back somewhere meaningful.
        </p>

        <Link
          href="/"
          className="inline-block mt-6 px-5 sm:px-6 py-3 rounded-lg bg-primary text-white font-medium hover:opacity-90 transition w-full sm:w-auto"
        >
          Go Home
        </Link>

      </div>
      
    </div>
  );
}