import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email;

  if (!currentUserEmail) {
    return console.log("we got a 404");
  }

  const data = await req.json();

  try {
    const user = await prisma.user.update({
      where: {
        email: currentUserEmail,
      },
      data,
    });

    console.log(user);

    return NextResponse.json(user);
  } catch (error) {
    console.error("Failed to update user:", error);
    return console.log("we got a 505");
  }
}
