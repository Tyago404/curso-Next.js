import { Container } from "@/components/container";
import Header from "@/components/Header";
import PostsList from "@/components/PostsList";
import SpinLoader from "@/components/Spinloader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer className="font-bold text-xl text-center py-8 ">
        <h1>FOOTER</h1>
      </footer>
    </Container>
  );
}
