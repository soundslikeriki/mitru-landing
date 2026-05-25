import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3001");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Mitru Limited Beta | 公式特設サイト",
  description: "Mitruの限定ベータ参加者向け公式ダウンロードページです。",
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png"
  },
  openGraph: {
    title: "Mitru Limited Beta",
    description: "Mitruの限定ベータ参加者向け公式ダウンロードページです。",
    type: "website",
    url: "/",
    images: ["/logo.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mitru Limited Beta",
    description: "Mitruの限定ベータ参加者向け公式ダウンロードページです。",
    images: ["/logo.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
