import Link from 'next/link';
import Image from 'next/image';

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
}

export default function UserCard({ id, name, age, image }: Props) {
  return (
    <div >
        <Image
          src={image ?? '/mememan.webp'}
          width={32}
          height={32}
          alt={`${name}`}
        />
      <div>
        <h3>
          <Link href={`/users/${id}`}>{name}</Link>
        </h3>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}