import { PostCoverImage } from "../PostCoverImage";
import { PostHeading } from "../PostHeading";

export function PostFeatured() {
  const slug = 'any'
  const postLink = `/post/${slug}`

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
      <div className="flex flex-col gap-4 sm:justify-center">
        <time
          className="text-slate-600 block text-sm/tight"
          dateTime="2025-04-20"
        >
          20/04/2025 10:00
        </time>
        <PostHeading url={postLink} as="h1">
          Lorem ipsum dolor sit amet, consectetur adipisicing .
        </PostHeading>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        sequi facilis incidunt doloremque impedit odit repellendus cum minima,
        velit ducimus voluptatum adipisci, expedita laborum vel nobis
        accusantium! Voluptatem, officia eveniet?
      </div>
    </section>
  );
}
