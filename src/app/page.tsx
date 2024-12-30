"use client";

import { useEffect, useState, useTransition } from "react";

export default function Home() {
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState<{ name: string } | null>(null);

  useEffect(() => {
    startTransition(async () => {
      try {
        const response = await fetch("/api/checkName", {
          headers: {
            "Content-Type": "application/json",
          },
          method: "GET",
        });

        const data = await response?.json();
        setData(data);
      } catch (error) {
        if (error instanceof Error) setError(error.message);
      }
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isPending && "Loading..."}
      {data ? <p>{data.name}</p> : null}
      {error ? <p>{error}</p> : null}
    </main>
  );
}
