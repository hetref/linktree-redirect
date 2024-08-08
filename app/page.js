"use client";

import { useEffect } from "react";

export default function Home() {
  // redirect to https://linktr.ee/dev_aryu once this website is loaded
  useEffect(() => {
    window.location.href = "https://linktr.ee/dev_aryu";
  }, []);

  return (
    <div className="flex justify-center items-center h-[100svh]">
      <h2 className="text-2xl font-bold animate-pulse">
        Please wait! Redirecting...
      </h2>
    </div>
  );
}
