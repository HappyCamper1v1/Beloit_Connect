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
        <Link href={`/users/${id}`}>
        <Image className='card-img'
          src={image ?? '/mememan.webp'}
          width={64}
          height={64}
          alt={`${name}`}
        />
        </Link>
      <div>
        <h3>
         {/* {name}</Link> */}
        </h3>
        <p></p>
        <p>Status: {status}</p>
        <p>Major: {major}</p>
      </div>
    </div>
  );
}