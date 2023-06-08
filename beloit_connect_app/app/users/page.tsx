import UserCard from '@/components/UserCard/UserCard';
import { prisma } from '@/lib/prisma';

export default async function Users() {
  const users = await prisma.user.findMany();
  console.log(users);
  
  console.log("I hope that this work")

  return (
    <div>
      {users.map((user) => {
        return <UserCard key={user.id} {...user}  />;
      })}
    </div>
  );
}