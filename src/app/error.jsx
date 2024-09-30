"use client";

export default function Error({
  error,
  reset,
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="rounded-lg border bg-foreground/10 p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">Something went wrong!</h2>
        {error?.message && (
          <p className="mb-2">
            <strong>Error:</strong> {error.message}
          </p>
        )}
        {error?.digest && (
          <p className="mb-4">
            <strong>Digest:</strong> {error.digest}
          </p>
        )}
        <button
          onClick={reset}
          className="rounded bg-blue-600 px-4 py-2 text-white transition duration-300 hover:bg-blue-700"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
