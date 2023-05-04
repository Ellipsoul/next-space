import { prisma } from "@/lib/prisma";
import styles from "./page.module.css";
import React from "react";
import UserCard from "@/components/UserCard/UserCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextSpace - Users",
  description: "Users page for NextSpace",
};

export default async function UserPage() {
  // Retrieve the users JSON data directly from a server component
  const users = await prisma.user.findMany();

  return (
    <div className={styles.grid}>
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
}
