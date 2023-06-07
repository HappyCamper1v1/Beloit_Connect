import { getServerSession } from "next-auth";

export default async function about() {
  
    return (
        <main>
            <h1>This is the about page</h1>
        </main>
    )
}