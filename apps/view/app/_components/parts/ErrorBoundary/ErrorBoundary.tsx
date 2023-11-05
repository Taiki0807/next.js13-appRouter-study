"use client";

export function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="container my-4 flex items-start rounded border border-red-400 bg-red-50 p-4 text-sm text-red-800">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="w-full">
        <p>
          <span className="font-bold">Error:</span>
          {error.message}
        </p>
        <button
          className="mt-4 rounded border border-red-400 bg-white px-4 py-2 font-bold hover:bg-gray-50"
          onChange={reset}
        >
          Retry
        </button>
      </div>
    </div>
  );
}
