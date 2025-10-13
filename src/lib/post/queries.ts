import notFound from "@/app/not-found";
import { postRepository } from "@/repositories/post";
import { cache } from "react";

export const findAllPublicPostsCached = cache(
  async () => await postRepository.findAllPublic()
);

export const findPostBySlugCached = cache(async (slug: string) => {
  const post = await postRepository.findBySlug(slug).catch(() => undefined);
  if (!post) notFound();
  return post;
});
