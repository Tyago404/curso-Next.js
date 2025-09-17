import { Container } from "@/components/Container";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import { Suspense } from "react";

export default async function HomePage() {
  return (
  <Container>
        <header>
          <h1 className="text-6xl font-bold py-8">HEADER</h1>
        </header>

        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          quaerat debitis itaque culpa. Reprehenderit fuga quidem aspernatur
          natus dignissimos quis nostrum sit explicabo similique fugiat, iure
          cupiditate optio autem voluptates?
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          quaerat debitis itaque culpa. Reprehenderit fuga quidem aspernatur
          natus dignissimos quis nostrum sit explicabo similique fugiat, iure
          cupiditate optio autem voluptates?
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          quaerat debitis itaque culpa. Reprehenderit fuga quidem aspernatur
          natus dignissimos quis nostrum sit explicabo similique fugiat, iure
          cupiditate optio autem voluptates?
        </p>

        <Suspense fallback={<SpinLoader />}>
          <PostsList />
        </Suspense>

        <footer>
          <h1 className="text-6xl font-bold py-8">FOOTER</h1>
        </footer>

  </Container>

  );
}
