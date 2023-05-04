import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";

// POST request to follow a user
export async function POST(req: Request) {
  // Retrieve the followee user ID from request
  const session = await getServerSession();
  const currentUserEmail = session?.user?.email!;
  const { targetUserId } = await req.json();
  // Get the follower user ID from prisma
  const currentUserId = await prisma.user
    .findUnique({ where: { email: currentUserEmail } })
    .then((user) => user?.id!);

  // Create a new record of the follower followee relationship
  const record = await prisma.follows.create({
    data: {
      followerId: currentUserId,
      followingId: targetUserId,
    },
  });

  return NextResponse.json(record);
}

// Unfollows a user
export async function DELETE(req: NextRequest) {
  // Retrieve the target user ID from the search API search parameters
  const session = await getServerSession();
  const currentUserEmail = session?.user?.email!;
  const targetUserId = req.nextUrl.searchParams.get("targetUserId");

  // Find the unique follower followee ID
  const currentUserId = await prisma.user
    .findUnique({ where: { email: currentUserEmail } })
    .then((user) => user?.id!);

  // Delete this relationship in Prisma
  const record = await prisma.follows.delete({
    where: {
      followerId_followingId: {
        followerId: currentUserId,
        followingId: targetUserId!,
      },
    },
  });

  return NextResponse.json(record);
}
