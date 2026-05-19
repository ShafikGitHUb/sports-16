import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-7xl font-bold text-black">404</h1>
      <p className="text-gray-500 mt-4 text-lg text-center">
        Oops! The page you are looking for doesn’t exist.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-black text-white rounded-2xl hover:bg-gray-800 transition"
      >
        ⬅ Go Back Home
      </Link>
    </div>
  );
}