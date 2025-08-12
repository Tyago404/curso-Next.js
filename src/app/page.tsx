import SpinLoader from "@/components/Spinloader";

export default function HomePage() {
  return (
    <>
      {/* Aqui para continuarmos utilizando auto-complete do tailwindcss podemos utilizar CLSX ou mudar a propriedade
      para o nome 'className' */}
      <SpinLoader containerClasses='min-h-40'/>
    </>
  );
}
