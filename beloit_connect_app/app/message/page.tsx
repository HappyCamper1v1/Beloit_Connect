import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";


export default async function message() {
    const session = await getServerSession(authOptions);


    const currentUserEmail = session?.user?.email!;
    const currentuser: any = await prisma.user.findUnique({
        where: {
            email:currentUserEmail
        },
    });

  const users: any = await prisma.user.findMany();

    return (
        <main>
            <div className="message-container">
                
                <div className="users-box">
                    <h2>users</h2>
                    <p>{currentuser.id}</p>
                    <h3>{users.map((user: any) => {
                        return <p><Link href={`message/${currentuser.id}`} >{user.name}</Link></p>
                    })}</h3>
                </div>
                <div className="message-log-box">
                    
                </div>
            </div>
        </main>
    )
}