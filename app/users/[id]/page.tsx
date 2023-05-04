// import FollowButton from '@/components/FollowButton/FollowButton';
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import Image from "next/image";

// Access the id from the URL
interface Props {
  params: {
    id: string;
  };
}

// Special function to genereate metadata for the page dynamically
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  return { title: `Profile - ${user?.name}` };
}

// User profile page
export default async function UserProfile({ params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  const { name, bio, image, id } = user ?? {};

  return (
    <div>
      <h1>{name}</h1>

      <Image
        width={300}
        height={300}
        src={image ?? "/mememan.webp"}
        alt={`${name}'s profile`}
      />

      <h3>Bio</h3>
      <p>{bio}</p>
    </div>
  );
}
