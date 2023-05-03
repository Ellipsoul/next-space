import { getServerSession } from "next-auth";
import styles from "./page.module.css";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { authOptions } from "./api/auth/[...nextauth]/route";

export const metadata: Metadata = {
  title: "NextSpace - Home",
  description: "NextSpace Home",
};

export default async function HomePage() {
  // Redirect the user to sign in if they are not authenticated
  const session = await getServerSession(authOptions);
  if (!session) redirect("/api/auth/signin");

  return <main className={styles.main}>Hello</main>;
}
