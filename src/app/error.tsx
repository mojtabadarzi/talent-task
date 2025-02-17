"use client";

export default function ErrorBoundary() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-2xl font-bold text-red-600">Something went wrong!</h1>
            <p className="text-gray-600 mt-1">Please try again later.</p>
            <button
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
                Try Again
            </button>
        </div>
    );
}
