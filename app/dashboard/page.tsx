import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { ProfileForm } from "./ProfileForm";
import { redirect } from "next/navigation";
import { SignOutButton } from "@/components/Buttons";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Dashboard() {
  // Ensure only authenticated users can access this page
  const session = await getServerSession(authOptions);
  if (!session) redirect("/api/auth/signin");

  // Find a specific users by its email, and display the profile form
  const currentUserEmail = session?.user?.email!;
  const user = await prisma.user.findUnique({
    where: { email: currentUserEmail },
  });

  return (
    <>
      <h1>Dashboard</h1>
      <SignOutButton />
      <ProfileForm user={user} />
    </>
  );
}
