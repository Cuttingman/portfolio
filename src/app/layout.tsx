import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Layout/Nav";
import { LightboxProvider } from "@/components/ui/Lightbox";
import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Choi Yongchan | WORK",
  description: "Portfolio of Choi Yongchan, Creative Director and IP Architect with 20 years of experience. From street art to global game publishing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.className} scroll-smooth antialiased selection:bg-foreground selection:text-background`}>
        <CustomCursor />
        <LightboxProvider>
          <div className="flex min-h-screen flex-col">
            <Nav />
            <main className="flex-1">{children}</main>
            <footer className="w-full py-12 text-center">
              <p className="text-sm font-medium tracking-normal text-foreground/30 font-sans uppercase group cursor-default relative inline-block">
                <span className="block group-hover:opacity-0 transition-opacity duration-300">© Copyright is a fallacy.</span>
                <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">WASD</span>
              </p>
            </footer>
          </div>
        </LightboxProvider>
      </body>
    </html>
  );
}
