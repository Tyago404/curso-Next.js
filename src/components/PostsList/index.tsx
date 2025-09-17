import { postRepository } from "@/repositories/post";

export async function PostsList() {
  const posts = await postRepository.findAll();

  return (
    <div className="flex flex-col items-center">
      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
