import { postRepository } from "@/repositories/post";

export default async function PostsList() {
  const posts = await postRepository.findAll();

  return (
   <div className="text-center">
    {posts.map((post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
   </div>
  );
}
