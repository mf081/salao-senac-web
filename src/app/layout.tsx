import type { Metadata } from "next";
import Head from "next/head"; // Importando o componente Head
import "./globals.css";
import { Header } from "@/components/Layout/Header/header";
import { Footer } from "@/components/Layout/Footer/footer";
import { NavV2 } from "@/components/Layout/NavV2/NavV2";

export const metadata: Metadata = {
  title: "Salão Senac",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <Head>
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Bootstrap CDN */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />

        {/* Font Awesome (versão 6.4.0) */}
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          rel="stylesheet"
        />

        {/* Tailwind CDN (carregando de forma assíncrona) */}
        <script src="https://cdn.tailwindcss.com" async></script>

        {/* Definindo o título da página */}
        <meta name="description" content={metadata.description ?? ""} />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Header />
        <NavV2 />
        {children}
        <Footer />
      </body>
    </html>
  );
}
