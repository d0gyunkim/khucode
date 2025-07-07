import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CODE 데이터 분석 동아리",
  description: "CODE 데이터 분석 동아리 홍보 웹사이트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-white`}
      >
        {/* 고정 네비게이션 바 */}
        <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 h-16 flex items-center px-6 justify-between shadow-sm">
          {/* 왼쪽: CODE 로고 */}
          <div className="font-bold text-2xl text-dahong tracking-tight select-none">CODE</div>
          {/* 오른쪽: 메뉴 */}
          <ul className="flex gap-8 text-base font-semibold text-dahong">
            <li><Link href="/">홈</Link></li>
            <li><Link href="/projects">프로젝트/활동</Link></li>
            <li><Link href="/awards">수상경력</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        {/* 네비게이션 아래로 컨텐츠 마진 */}
        <div className="pt-16 min-h-screen bg-white">{children}</div>
      </body>
    </html>
  );
}
