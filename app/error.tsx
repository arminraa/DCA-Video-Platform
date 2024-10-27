"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full text-center mt-14 h-[40vh]">
      <h2 className="text-red-600 text-4xl">{error.message}</h2>
      <button
        className="bg-blue-400 rounded-lg p-3 text-white text-2xl"
        onClick={() => reset()}
      >
        تلاش دوباره
      </button>
    </div>
  );
}
