"use client";

import { SessionProvider } from "next-auth/react";

type Props = { children: React.ReactNode };

// This will act as a wrapper around the root layout component to give access to the auth state
export default function AuthProvider({ children }: Props) {
  return <SessionProvider>{children}</SessionProvider>;
}
