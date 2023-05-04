"use client"; // Error components must be Client components

import { useEffect } from "react";

// The error object contains the actual error and its details
// reset is a special function that can be called to tell Next.js to attempt a re-render
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
