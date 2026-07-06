import { Metadata } from "next";
import "./globals.css";
import { TarefasProvider } from "@/context/TarefasContext";

export const metadata: Metadata = {
  title: "Lista",
  description: "Lista",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`h-full scroll-smooth`}
    >
      <body className="min-h-screen bg-gray-200 antialiased">
        <TarefasProvider>
          {children}
        </TarefasProvider>
      </body>
    </html>
  );
}
