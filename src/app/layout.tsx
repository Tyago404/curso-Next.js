import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title:{
    default: 'The blog',
    template: '%s | The Blog'
  },
  description: "Descrição da Page",

};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="pt-br">
      <body>
        <Container>
          <Header />
          {children}
          <footer>
            <h1 className="text-6xl font-bold py-8">FOOTER</h1>
          </footer>
        </Container>
      </body>
    </html>
  );
}
