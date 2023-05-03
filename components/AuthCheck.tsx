"use client";

import { useSession } from "next-auth/react";

// Auth checker that takes in the user session and renders component children if user is authenticated
export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();

  return status === "authenticated" ? <>{children}</> : <></>;
}
