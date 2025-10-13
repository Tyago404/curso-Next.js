import { findPostBySlugCached } from "@/lib/post/queries";
import { notFound } from "next/navigation";

type PostSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function PostSlugPage({ params }: PostSlugPageProps) {
  const { slug } = await params;

<<<<<<< HEAD
const post = await findPostBySlugCached(slug).catch((()=> undefined));
=======
  let post;

  try {
    post = await findPostBySlugCached(slug);
  } catch {
    post = undefined;
  }

>>>>>>> 7a3401277a032fbaec6ab605ea5a615276318d6f
  if (!post) notFound();

  return (
    <div>
      <p>{post.title}</p>
    </div>
  );
}
