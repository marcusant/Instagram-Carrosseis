import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Criador de Carrosséis | Marcus Santos",
  description:
    "Criador privado de carrosséis do Instagram — banco interno + geração por IA.",
};

export const viewport: Viewport = {
  themeColor: "#1A1208",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Lora:ital,wght@0,400;0,600;1,400;1,600&family=Montserrat:ital,wght@0,400;0,600;1,400&family=Oswald:wght@400;600&family=Bebas+Neue&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Merriweather:ital,wght@0,400;0,700;1,400&family=Roboto+Slab:wght@400;700&family=Inter:ital,wght@0,400;0,600;1,400&family=Poppins:ital,wght@0,400;0,600;1,400&family=Raleway:ital,wght@0,400;0,600;1,400&family=Nunito:ital,wght@0,400;0,700;1,400&family=Work+Sans:ital,wght@0,400;0,600;1,400&family=Anton&family=Archivo+Black&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
