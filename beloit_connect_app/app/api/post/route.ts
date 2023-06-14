import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email;

  if (!currentUserEmail) {
    return console.log("Unauthorized");
  }

  const data = await req.json();

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: currentUserEmail,
      },
    });

    if (!user) {
      return console.log("User not found");
    }

    const post = await prisma.post.create({
      data: {
        title: data.title,
        industry: data.industry,
        content: data.content,
        author: {
          connect: { id: user.id },
        },
      },
    });

    console.log(post);

    return NextResponse.json(post);
  } catch (error) {
    console.error("Failed to create post:", error);
    return console.log("An unknown error occurred");
  }
}
