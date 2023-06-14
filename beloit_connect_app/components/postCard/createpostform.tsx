"use client";

export default async function CreatePostForm({ post }: any) {
  const createPost = async (e: React.FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);

    const post = {
      title: formData.get("title"),
      industry: formData.get("industry"),
      content: formData.get("content"),
    };

    const res = await fetch("/api/post", {
      method: "POST",
      body: JSON.stringify(post),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      const data = await res.json();
      console.log(data);
    } else {
      console.error("Error:", res.status, res.statusText);
    }
  };

  return (
    <div className="form-conatiner">
      <h2>Create Post</h2>
      <form onSubmit={createPost}>
        <div className="form-field">
          <label htmlFor="name">Title</label>
          <input type="text" name="title" defaultValue={post?.name ?? ""} />
        </div>
        <div className="form-field">
          <label htmlFor="industry">industry</label>
          <input
            type="text"
            name="industry"
            defaultValue={post?.firstname ?? ""}
          />
          <label htmlFor="lastname">Content</label>
          <input
            type="text"
            name="content"
            defaultValue={post?.lastname ?? ""}
          />
        </div>
        <button type="submit">Post</button>
      </form>
    </div>
  );
}
