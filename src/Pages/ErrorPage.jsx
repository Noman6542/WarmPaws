import { AlertTriangle } from "lucide-react";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-[#f3f4f6] flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-3xl p-10 max-w-lg w-full text-center space-y-6">
        <div className="flex justify-center">
          <AlertTriangle className="w-20 h-20" />
        </div>
        <h1 className="text-4xl font-bold">Something Went Wrong</h1>
        <p className="text-gray-700 text-lg">
          Oops! An unexpected error has occurred. Please try again later or go
          back to the homepage.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="px-6 py-3 rounded-2xl bg-blue-600 text-white text-lg font-semibold hover:bg-blue-700 transition"
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
