"use client";

import { useEffect } from "react";
import { useI18n, useScopedI18n } from "@/locales/client";
export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);
  const scopedT = useScopedI18n('error')

  return (
    <div>
      <h2>{scopedT("title")}</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        {scopedT("try.again")}
      </button>
    </div>
  );
}
