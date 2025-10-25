import { PostFeatured } from "@/components/PostFeatured";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";

import { Suspense } from "react";

export default async function HomePage() {

  throw new Error("deu ruim!");
  return (
    <>

      <Suspense fallback={<SpinLoader className="min-h-20 mb" />}>
        <PostFeatured />
        <PostsList />
      </Suspense>
    </>
  );
}
