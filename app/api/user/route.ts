import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "../auth/[...nextauth]/route";

// Put request to update profile for the user
export async function PUT(req: Request) {
  // Retrieve the user's email from the SERVER side
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email!;

  // Convert age to number, since it's retrieved as a string
  const data = await req.json();
  data.age = Number(data.age);

  // Update the user's details in the database
  const user = await prisma.user.update({
    where: { email: currentUserEmail },
    data,
  });

  return NextResponse.json(user);
}
