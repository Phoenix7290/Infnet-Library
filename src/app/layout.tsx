import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
// import { Sidebar } from "@/layout";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Infnet-Library",
    description: "A Biblioteca de Questões do Instituto Infnet",
    openGraph: {
        title: "Infnet-Library",
        description: "A Biblioteca de Questões do Instituto Infnet",
        images: ["https://exemplo.com/imagem.png"],
    },
    twitter: {
        card: "summary_large_image",
        site: "@meuusuario",
        title: "Infnet-Library",
        description: "A Biblioteca de Questões do Instituto Infnet",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br">
            <body className={`${inter.variable} antialiased flex`}>
                {/* <Sidebar /> */}
                <main className="flex-grow min-h-screen">{children}</main>
            </body>
        </html>
    );
}
