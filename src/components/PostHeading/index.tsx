import clsx from "clsx";
import Link from "next/link";

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: "h1" | "h2";
};

export function PostHeading({ children, url, as:Tag = "h1" }: PostHeadingProps) {
  const headingClasses = {
    h1:'text-2xl/tight sm:text-4xl',
    h2:'text-2xl/tight sm:text-4xl bg-red-500'
  }

  const commonClasses = 'font-extrabold'

  return (
    <Tag className={clsx(headingClasses[Tag], commonClasses)}>
      <Link href={url}>{children}</Link>
    </Tag>
  );
}
