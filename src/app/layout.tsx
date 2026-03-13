import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Layout/Nav";
import { LightboxProvider } from "@/components/ui/Lightbox";
import { CustomCursor } from "@/components/ui/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "최용찬 (Choi Yongchan) | 게임 프로듀서 & 디렉터 포트폴리오",
  description: "게임 PD 최용찬 대표의 포트폴리오입니다. (주)외계인납치작전 게임 제작, 잔혹동화 피그로맨스, 모바일 게임 및 자체 IP 기획, AR 그림책 제작 등 20년 경력의 크리에이티브 디렉터 작업물 아카이브.",
  keywords: [
    "최용찬",
    "최용찬 대표",
    "게임 PD",
    "게임 프로듀서",
    "게임 제작",
    "외계인납치작전",
    "피그로맨스",
    "기획자",
    "크리에이티브 디렉터",
    "포트폴리오",
  ],
  authors: [{ name: "최용찬" }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://choiyongchan.com", // Adjust as necessary
    title: "최용찬 (Choi Yongchan) | 게임 프로듀서 & 디렉터 포트폴리오",
    description: "게임 PD 최용찬 대표의 포트폴리오입니다. 20년 경력의 크리에이티브 디렉터 작업물 아카이브.",
    siteName: "Choi Yongchan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "최용찬 (Choi Yongchan) | 게임 프로듀서 & 디렉터 포트폴리오",
    description: "게임 PD 최용찬 대표의 포트폴리오입니다. 20년 경력의 크리에이티브 디렉터 작업물 아카이브.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "5B04hNA93uiGLAVfWIXXh8KxeywSEcTaddiMlbsSpkw",
  },
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
            <footer className="w-full py-12 text-center bg-[#2B2B2B]">
              <p className="text-sm font-medium tracking-normal text-white/30 font-sans uppercase group cursor-default relative inline-block">
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
