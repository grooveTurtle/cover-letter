import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: [],
});

export const metadata: Metadata = {
  title: "자기소개서",
  description: "전종훈 풀스택 개발자의 자기소개 페이지 입니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansKr.className} antialiased dark:bg-neutral-900`}
      >
        {children}
      </body>
    </html>
  );
}
