import { findPostBySlugCached } from "@/lib/post/queries";
import Image from "next/image";
import { PostHeading } from "../PostHeading";
import { PostDate } from "../PostDate";
import { SafeMarkdown } from "../SafeMarkdown";

type SinglePostProps = {
  slug: string;
};

export async function SinglePost({ slug }: SinglePostProps) {
  const post = await findPostBySlugCached(slug);
  return (
    <article className="mb-16">
      <header className="flex flex-col gap-4 mb-4">
        <Image
          src={post.coverImageUrl}
          width={1200}
          height={720}
          title={post.title}
          alt={post.title}
          className="rounded-xl"
        />

        <PostHeading url={`post/${post.slug}`}>{post.title}</PostHeading>
        <p>
          {post.author} | {<PostDate dateTime={post.createdAt} />}
        </p>
      </header>

      <p className="mb-6 text-xl font-semibold text-center text-slate-700">
        {post.excerpt}
      </p>

      <SafeMarkdown markdown={post.content} />
    </article>
  );
}
