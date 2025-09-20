"use client";
import { useRouter } from "next/navigation";

export default function ErrorFallback() {
  const router = useRouter();

  const handleGoHome = () => {
    router.back();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-3xl font-bold mb-4">We&rsquo;re working on this page</h1>
      <p className="mb-6 text-gray-600">
        Sorry for the inconvenience. This page is temporarily unavailable.
      </p>
      <button onClick={handleGoHome} className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg">
        Go to Main Page
      </button>
    </div>
  );
}
