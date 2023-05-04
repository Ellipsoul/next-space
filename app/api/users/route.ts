import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  // Retrive all the users from the Prisma database
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}
