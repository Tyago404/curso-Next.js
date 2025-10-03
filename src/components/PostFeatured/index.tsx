import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";
import { PostSummary } from "../PostSummary";

export function PostFeatured() {
  const slug = "any";
  const postLink = `/post/${slug}`;

  return (
    <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: "/images/bryen_9.png",
          alt: "Alt da imagem",
          priority: true,
        }}
      />
      <PostSummary
        postHeading="h1"
        postLink={postLink}
        createdAt={"2025-04-08T00:24:38.616Z"}
        title={
          "This will create the dillinger image and pull in the necessary dependencies."
        }
        excerpt={
          "Dillinger is a cloud-enabled, mobile-ready, offline-storage compatible,"
        }
      />
    </section>
  );
}
