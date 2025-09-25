import clsx from "clsx";
import Link from "next/link";

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2";
};

export function PostHeading({ children, url, as:Tag = "h1" }: PostHeadingProps) {
  const headingClasses = {
    h1:'text-2xl/tight sm:text-4xl font-extrabold',
    h2:'text-2xl/tight font-bold'
  }

  return (
    <Tag className={clsx(headingClasses[Tag])}>
      <Link className="hover:text-slate-700 transition" href={url}>{children}</Link>
    </Tag>
  );
}
