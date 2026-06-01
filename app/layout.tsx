import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://mitru-app.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mitru Limited Beta | 建設業務向けデスクトップアプリ",
  description:
    "Mitruの限定ベータ参加者向け公式サイト。建設業の見積、積算、請求、入金管理を効率化するデスクトップアプリです。",
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png"
  },
  openGraph: {
    title: "Mitru Limited Beta",
    description:
      "建設業の見積、積算、請求、入金管理を効率化するMitru限定ベータ版の公式サイトです。",
    type: "website",
    url: "/",
    images: ["/logo.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mitru Limited Beta",
    description:
      "建設業の見積、積算、請求、入金管理を効率化するMitru限定ベータ版の公式サイトです。",
    images: ["/logo.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
