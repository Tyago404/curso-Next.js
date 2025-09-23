import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { PostsList } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <Link className="w-full h-full overflow-hidden rounded-xl" href="#">
          <Image
            className="group-hover:scale-105 transition w-full h-full object-cover object-center"
            src="/images/bryen_0.png"
            width={1200}
            height={720}
            alt="Titulo do post"
            priority
          />
        </Link>
        <div className="flex flex-col gap-4 sm:justify-center">
          <time className="text-slate-600 block text-sm/tight" dateTime="2025-04-20">20/04/2025 10:00</time>

          <h1 className="text-2xl/tight font-extrabold sm:text-4xl">
            <Link href="#">Lorem ipsum dolor sit amet.</Link>
          </h1>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          sequi facilis incidunt doloremque impedit odit repellendus cum minima,
          velit ducimus voluptatum adipisci, expedita laborum vel nobis
          accusantium! Voluptatem, officia eveniet?
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <h1 className="text-6xl font-bold py-8">FOOTER</h1>
      </footer>
    </Container>
  );
}
