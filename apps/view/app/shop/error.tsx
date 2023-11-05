"use client";

import { ErrorBoundary } from "@/app/_components/parts";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="error">
      <ErrorBoundary error={error} reset={() => reset()} />
    </div>
  );
}
