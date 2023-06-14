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
    const sender = await prisma.user.findUnique({
      where: {
        email: currentUserEmail,
      },
    });

    if (!sender) {
      return console.log("Sender not found");
    }

    const receiver = await prisma.user.findUnique({
      where: {
        email: data.receiverEmail, // Assumes the receiver's email is passed in the request
      },
    });

    if (!receiver) {
      return console.log("Receiver not found");
    }

    const message = await prisma.message.create({
      data: {
        content: data.content,
        sender: {
          connect: { id: sender.id },
        },
        receiver: {
          connect: { id: receiver.id },
        },
      },
    });

    console.log(message);

    return NextResponse.json(message);
  } catch (error) {
    console.error("Failed to create message:", error);
    return console.log("An unknown error occurred");
  }
}
