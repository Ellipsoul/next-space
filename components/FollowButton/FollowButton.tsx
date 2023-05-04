import { getServerSession } from "next-auth";
import FollowClient from "./FollowClient";
import { prisma } from "@/lib/prisma";
import { authOptions } from "../../app/api/auth/[...nextauth]/route";

interface Props {
  targetUserId: string;
}

export default async function FollowButton({ targetUserId }: Props) {
  // Retrieve the current user ID
  const session = await getServerSession(authOptions);

  const currentUserId = await prisma.user
    .findFirst({ where: { email: session?.user?.email! } })
    .then((user) => user?.id!);

  // Check if this user is already following the target user, and pass it to the follow client
  const isFollowing = await prisma.follows.findFirst({
    where: { followerId: currentUserId, followingId: targetUserId },
  });

  return (
    <FollowClient targetUserId={targetUserId} isFollowing={!!isFollowing} />
  );
}
