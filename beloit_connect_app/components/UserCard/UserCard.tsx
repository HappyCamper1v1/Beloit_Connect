import Link from 'next/link';
import Image from 'next/image';

interface Props {
  id: string;
  name: string | null;
  age: number | null;
  image: string | null;
  status: string | null;
  major: string | null;
}

export default function UserCard({ id, name, major, age, status, image}: Props) {
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
        <p></p>
        <p>Status: {status}</p>
        <p>Major: {major}</p>
        <p>Age: {age}</p>
      </div>
    </div>
  );
}