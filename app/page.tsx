import { getServerSession } from "next-auth";
import styles from "./page.module.css";
import { redirect } from "next/navigation";

export default async function Home() {
  // Redirect the user to sign in if they are not authenticated
  const session = await getServerSession();
  if (!session) redirect("/api/auth/signin");

  return <main className={styles.main}>Hello</main>;
}
