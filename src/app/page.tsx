import PostsList from "@/components/PostsList";
import SpinLoader from "@/components/Spinloader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <div className='text-slate-900 bg-slate-100 h-screen dark:bg-slate-900 dark:text-slate-100 '>
       <header className="font-bold text-xl text-center py-8 ">
        <h1>HEADER</h1>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer className="font-bold text-xl text-center py-8 ">
        <h1>FOOTER</h1>
      </footer>
    </div>
  );
}
