import Link from "next/link";
import Image from "next/image";

interface Props {
  id: string;
  name: string | null;
  year: number | null;
  image: string | null;
  status: string | null;
  major: string | null;
}

export default function UserCard({ id, name, major, status, image }: Props) {
  return (
    <div>
      <Link href={`/users/${id}`}>
        <Image
          className="card-img"
          src={image ?? "/mememan.webp"}
          width={64}
          height={64}
          alt={`${name}`}
        />
      </Link>
      <div>
        <p></p>
        <p>Status: {status}</p>
        <p>Major: {major}</p>
      </div>
    </div>
  );
}
