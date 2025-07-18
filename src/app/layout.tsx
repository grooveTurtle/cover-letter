import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const notoSansKr = Noto_Sans_KR({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: [],
});

export const metadata: Metadata = {
  title: "전종훈 개발자 포트폴리오 페이지",
  description: "전종훈 개발자의 자기소개와 포트폴리오를 소개하는 페이지입니다.",
  openGraph: {
    title: "전종훈 개발자 포트폴리오",
    description:
      "전종훈 개발자의 자기소개와 포트폴리오를 소개하는 페이지입니다.",
    images: [
      {
        url: "/cover-letter/og-image.png",
        width: 1200,
        height: 630,
        alt: "포트폴리오 페이지 미리보기 이미지",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </Head>
      <body
        className={`${notoSansKr.className} antialiased dark:bg-neutral-900`}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function() {
                  try {
                    const theme = localStorage.getItem('theme');
                    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                      document.documentElement.classList.add('dark');
                    } else {
                      document.documentElement.classList.remove('dark');
                    }
                  } catch (_) {}
                })();
              `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
