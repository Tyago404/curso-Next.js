import { Container } from "@/components/container";
import PostsList from "@/components/PostsList";
import SpinLoader from "@/components/Spinloader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <header>
        <h1 className="font-bold text-xl text-center py-8">HEADER</h1>
        <p className="text-justify">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure id
          eaque sapiente sed labore sit doloremque voluptatibus esse quisquam
          velit nam asperiores sequi magnam rem saepe quod nulla, quas sint!
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure id
          eaque sapiente sed labore sit doloremque voluptatibus esse quisquam
          velit nam asperiores sequi magnam rem saepe quod nulla, quas sint!
        </p>
      </header>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer className="font-bold text-xl text-center py-8 ">
        <h1>FOOTER</h1>
      </footer>
    </Container>
  );
}
