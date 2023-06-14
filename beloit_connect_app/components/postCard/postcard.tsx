import Link from "next/link";

interface Props {
  id: string;
  createdAt: Date | null;
  updatedAt: Date | null;
  title: string;
  industry: string;
  content: string;
  authorId: string;
}

export default function PostCard({
  title,
  industry,
  content,
  authorId,
}: Props) {
  return (
    <div className="post-box">
      <p>title: {title}</p>
      <p>industry: {industry}</p>
      <p>content: {content}</p>
      <Link href={`/users/${authorId}`}>
        <p>Users: {authorId}</p>
      </Link>
    </div>
  );
}
