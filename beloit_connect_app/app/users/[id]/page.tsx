import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  return { title: `User profile of ${user?.name}` };
}

export default async function UserProfile({ params }: Props) {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  const { name, major, industry, email, status, bio, image } = user ?? {};

  return (
    <div>
      <h1>{name}</h1>
      <img className='card-img'
        width={150}
        src={image ?? '/mememan.webp'}
        alt={`${name}'s profile`}
      />
      <h2>Bio</h2>
      <p>{bio}</p>
      <h2>Major</h2>
      <p>{major}</p>
      <h2>Industry</h2>
      <p>{industry}</p>
      <h2>Email</h2>
      <p>{email}</p>
      <h2>Status</h2>
      <p>{status}</p>
    </div>
  );
}
