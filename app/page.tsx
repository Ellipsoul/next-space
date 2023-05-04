import { getServerSession } from "next-auth";
import styles from "./page.module.css";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { authOptions } from "./api/auth/[...nextauth]/route";

export const metadata: Metadata = {
  title: "NextSpace - Home",
  description: "NextSpace Home",
};

export default function Home() {
  return (
    <div>
      <h1>Welcome to NextSpace!</h1>
      <p>
        A next-gen social media app to connect with frens inspired by MySpace{" "}
      </p>
      <p>To get started, sign up for an account</p>
    </div>
  );
}
