import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import clsx from "clsx";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <div
      className={clsx(
        "text-slate-900 bg-slate-100",
        "min-h-screen",
        "dark:text-slate-100 dark:bg-slate-900"
      )}
    >
      <header>
        <h1 className="text-6xl font-bold text-center py-8">HEADER</h1>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <h1 className="text-6xl font-bold text-center py-8">FOOTER</h1>
      </footer>
    </div>
  );
}
