import PostCard from "@/components/postCard/postcard";
import CreatePostForm from "@/components/postCard/createpostform";

import { prisma } from "@/lib/prisma";

export default async function Home() {
  const posts = await prisma.post.findMany();
  console.log(`This is the home page: ${posts}`);

  return (
    <div className="home-container">
      <CreatePostForm />
      {posts.map((post) => {
        return <PostCard key={post.id} {...post} />;
      })}
    </div>
  );
}
