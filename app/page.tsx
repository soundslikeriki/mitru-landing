"use client";

import { useState } from "react";
import Image from "next/image";
import { ThemeProvider } from "next-themes";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowDownToLine,
  BadgeCheck,
  BarChart3,
  Building2,
  CheckCircle2,
  ChevronRight,
  Cloud,
  FileSpreadsheet,
  FileText,
  HardDriveDownload,
  Laptop,
  LockKeyhole,
  LucideIcon,
  MonitorCog,
  ReceiptText,
  ShieldCheck,
  WalletCards,
  X
} from "lucide-react";

const releaseVersion = "v0.9.7-beta";
const githubReleaseUrl =
  process.env.NEXT_PUBLIC_GITHUB_RELEASE_URL ??
  "https://github.com/soundslikeriki/Mitru/releases/tag/v0.9.7-beta";
const githubReleasesUrl =
  process.env.NEXT_PUBLIC_GITHUB_RELEASES_URL ??
  "https://github.com/soundslikeriki/Mitru/releases";
const macDownloadUrl =
  process.env.NEXT_PUBLIC_MAC_DOWNLOAD_URL ??
  "https://github.com/soundslikeriki/Mitru/releases/download/v0.9.7-beta/Mitru_0.9.7-beta_aarch64.dmg";
const windowsDownloadUrl =
  process.env.NEXT_PUBLIC_WINDOWS_EXE_DOWNLOAD_URL ??
  "https://github.com/soundslikeriki/Mitru/releases/download/v0.9.7-beta/Mitru_0.9.7-beta_x64-setup.exe";

const navItems = [
  { label: "Mitruとは", href: "#about" },
  { label: "機能", href: "#features" },
  { label: "画面", href: "#screenshots" },
  { label: "注意事項", href: "#notice" },
  { label: "ダウンロード", href: "#download" },
  { label: "手順", href: "#setup" }
];

const metrics = [
  { label: "今月の予想売上", value: "562万円" },
  { label: "今年の累計粗利", value: "1,450万円" },
  { label: "平均粗利率", value: "63%" }
];

const features: Array<{
  title: string;
  body: string;
  icon: LucideIcon;
}> = [
  {
    title: "Supabaseクラウド同期",
    body: "Bring Your Own Supabase方式で、現場用PCと事務所PCのデータを安全に共有。ローカルファースト設計のため、通信が不安定な環境でも作業を止めません。",
    icon: Cloud
  },
  {
    title: "階層積算と原価管理",
    body: "工事項目、材料、数量、原価、粗利を階層で整理。見積の根拠を残しながら、案件ごとの採算を正確に追えます。",
    icon: FileSpreadsheet
  },
  {
    title: "見積書・請求書の発行",
    body: "積算内容から見積書を作成し、請求書や入金管理まで同じ流れで扱えます。二重入力を減らし、事務作業を短縮します。",
    icon: ReceiptText
  },
  {
    title: "粗利とリスクの見える化",
    body: "粗利率が低い案件、対応期限が近い案件、未入金の状態を把握し、早めの判断と改善につなげます。",
    icon: BarChart3
  },
  {
    title: "落ち着いたデスクトップ体験",
    body: "建設業務で毎日使う画面として、視認性と操作の速さを重視。暗い作業環境にも馴染むUIです。",
    icon: MonitorCog
  }
];

const screenshots = [
  {
    src: "/screenshots/01-dashboard-forecast-risk.png",
    title: "業績予測ダッシュボード",
    label: "Dashboard",
    body: "売上、粗利、平均粗利率、未入金や締め予定まで、経営判断に必要な数字を一画面で確認できます。"
  },
  {
    src: "/screenshots/01b-dashboard-risk.png",
    title: "リスク案件の可視化",
    label: "Risk",
    body: "粗利率が低い案件や対応が近い案件を目立たせ、見落としや後追い対応を減らします。"
  },
  {
    src: "/screenshots/02-calculation.png",
    title: "階層積算",
    label: "Estimate",
    body: "工事項目、材料、数量、原価、粗利を階層で整理し、見積の根拠を分かりやすく積み上げられます。"
  },
  {
    src: "/screenshots/03-quote-preview.png",
    title: "見積書プレビュー",
    label: "Quote",
    body: "積算内容を見積書へ反映し、発行前に金額や明細を確認できます。"
  },
  {
    src: "/screenshots/04-invoice-preview.png",
    title: "請求書・入金管理",
    label: "Invoice",
    body: "請求額、入金額、残額を案件単位で追跡し、請求漏れや回収遅れを抑えます。"
  },
  {
    src: "/screenshots/05-projects.png",
    title: "案件一覧",
    label: "Projects",
    body: "工事番号、顧客、場所、工期などを一覧化し、進行中の案件をすばやく確認できます。"
  }
];

const notices = [
  "限定ベータ版のため、正式版に向けて改善中の機能があります。",
  "大切な案件データを扱う前に、念のためバックアップを取っておくと安心です。",
  "クラウド同期を利用する場合は、ご自身のSupabaseプロジェクト情報を大切に管理してください。",
  "限定配布のため、インストーラーやダウンロードリンクの取り扱いにはご配慮ください。"
];

const setupSteps = [
  {
    title: "GitHub Releasesを開く",
    body: `${releaseVersion} のReleaseページから、macOS版インストーラーを選択します。`,
    icon: HardDriveDownload
  },
  {
    title: "インストール",
    body: "dmgファイルを開き、MitruをApplicationsフォルダへ移動します。",
    icon: Laptop
  },
  {
    title: "起動して確認",
    body: "初回起動時の確認が表示された場合は、ベータ案内に沿って許可してください。",
    icon: CheckCircle2
  }
];

function SectionLabel({
  icon: Icon,
  children
}: {
  icon?: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-cyan-200">
      {Icon ? <Icon className="h-4 w-4" /> : null}
      {children}
    </p>
  );
}

function LogoMark() {
  return (
    <span className="grid h-11 w-11 place-items-center rounded-lg border border-cyan-200/20 bg-white/[0.06] shadow-[0_0_28px_rgba(34,211,238,0.16)] transition group-hover:border-cyan-200/40 group-hover:bg-white/[0.09] sm:h-12 sm:w-12">
      <Image
        src="/logo.png"
        alt=""
        width={40}
        height={40}
        priority
        className="h-8 w-8 object-contain drop-shadow-[0_0_12px_rgba(34,211,238,0.55)] sm:h-10 sm:w-10"
      />
    </span>
  );
}

function AppPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.12 }}
      className="surface overflow-hidden rounded-lg bg-slate-950/80"
    >
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        </div>
        <span className="text-xs text-slate-400">Mitru Beta</span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
        <Image
          src="/screenshots/01-dashboard-forecast-risk.png"
          alt="Mitruのダッシュボード画面"
          fill
          sizes="(min-width: 1024px) 44vw, 100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/72 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-md border border-white/10 bg-slate-950/72 p-3 backdrop-blur"
            >
              <p className="text-xs text-slate-400">{metric.label}</p>
              <p className="mt-1 text-lg font-semibold text-white">
                {metric.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [selectedScreenshot, setSelectedScreenshot] =
    useState<(typeof screenshots)[number] | null>(null);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
      <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/88 backdrop-blur-xl">
          <div className="section-shell flex items-center justify-between py-3 sm:py-4">
            <a
              href="#"
              className="group flex items-center gap-3"
              aria-label="Mitruのトップへ戻る"
            >
              <LogoMark />
              <span className="text-lg font-semibold tracking-normal text-white">
                Mitru
              </span>
            </a>

            <nav className="hidden items-center gap-5 text-sm text-slate-300 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  className="transition hover:text-white"
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#download"
              className="inline-flex items-center gap-2 rounded-md bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Betaを入手
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
          <nav className="section-shell flex gap-3 overflow-x-auto pb-3 text-sm text-slate-300 lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="shrink-0 rounded-md border border-white/10 px-3 py-1.5 transition hover:border-white/25 hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </header>

        <section className="subtle-grid border-b border-white/10">
          <div className="section-shell grid gap-10 pb-20 pt-16 sm:pt-20 lg:grid-cols-[0.98fr_1.02fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
                <BadgeCheck className="h-4 w-4" />
                Limited Beta Program
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
                建設見積を、もっと正確に。
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Mitruは、積算・見積・請求・入金管理をひとつにつなぎ、案件の粗利とリスクを見える化する建設業向けデスクトップアプリです。
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#download"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  <ArrowDownToLine className="h-5 w-5" />
                  Betaを入手
                </a>
                <a
                  href="#screenshots"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
                >
                  実際の画面を見る
                  <ChevronRight className="h-5 w-5" />
                </a>
              </div>
            </motion.div>

            <AppPreview />
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-24 border-b border-white/10 bg-white/[0.03]"
        >
          <div className="section-shell py-16">
            <SectionLabel icon={Building2}>About</SectionLabel>
            <h2 className="text-3xl font-semibold">Mitruとは？</h2>
            <div className="mt-5 max-w-4xl space-y-4 text-lg leading-8 text-slate-300">
              <p>
                Mitruは、建設業の現場監督・営業・積算担当・事務担当者のために設計されたデスクトップアプリです。
              </p>
              <p>
                見積書の作成から階層積算、請求書発行、入金管理までを一貫して効率化し、案件ごとの粗利の見える化とリスク案件の早期把握を支援します。
              </p>
              <p>
                工事項目、材料、数量、原価、粗利を階層で整理できるため、見積の根拠を残しながら、現場・営業・事務の間で情報を共有しやすくなります。
              </p>
              <p>
                Supabaseによるクラウド同期にも対応し、複数端末間でのデータ共有を安全に行えます。ベータ版では、建設現場の実際のワークフローを意識した使いやすさと安定性を最優先に改善を進めています。
              </p>
            </div>
          </div>
        </section>

        <section id="features" className="section-shell scroll-mt-24 py-16">
          <SectionLabel icon={ShieldCheck}>Features</SectionLabel>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-semibold">主な機能</h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                建設業務の見積、積算、請求、入金、粗利確認を、日々の実務に合わせて整理します。
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="surface rounded-lg p-5 transition hover:border-cyan-200/35 hover:bg-white/[0.065]"
              >
                <feature.icon className="h-6 w-6 text-cyan-200" />
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {feature.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="screenshots"
          className="scroll-mt-24 border-y border-white/10 bg-white/[0.03]"
        >
          <div className="section-shell py-16">
            <SectionLabel icon={MonitorCog}>Screenshots</SectionLabel>
            <h2 className="text-3xl font-semibold">Mitruの実際の画面</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              ダッシュボード、案件管理、階層積算、見積書・請求書プレビューまで、建設業務の流れを一つのデスクトップ体験にまとめています。
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {screenshots.map((screenshot) => (
                <button
                  key={screenshot.src}
                  type="button"
                  onClick={() => setSelectedScreenshot(screenshot)}
                  className="surface group overflow-hidden rounded-lg text-left transition hover:border-cyan-200/35 hover:bg-white/[0.065]"
                >
                  <span className="relative block aspect-video overflow-hidden border-b border-white/10 bg-slate-950">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.title}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.025]"
                    />
                  </span>
                  <span className="block p-5">
                    <span className="text-xs font-semibold uppercase tracking-widest text-cyan-200">
                      {screenshot.label}
                    </span>
                    <span className="mt-2 block text-xl font-semibold text-white">
                      {screenshot.title}
                    </span>
                    <span className="mt-3 block leading-7 text-slate-300">
                      {screenshot.body}
                    </span>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200">
                      クリックして拡大
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section
          id="notice"
          className="scroll-mt-24 border-b border-red-400/20 bg-red-950/25"
        >
          <div className="section-shell py-16">
            <SectionLabel icon={AlertTriangle}>Important</SectionLabel>
            <h2 className="text-3xl font-semibold">注意事項</h2>
            <div className="mt-6 grid gap-3">
              {notices.map((notice) => (
                <p
                  key={notice}
                  className="flex gap-3 rounded-md border border-red-300/20 bg-red-500/10 px-4 py-3 leading-7 text-red-50"
                >
                  <AlertTriangle className="mt-1 h-5 w-5 shrink-0 text-red-200" />
                  {notice}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section id="download" className="section-shell scroll-mt-24 py-16">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <SectionLabel icon={ArrowDownToLine}>Download</SectionLabel>
              <h2 className="text-3xl font-semibold">ダウンロード</h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                現在の限定ベータ版は
                <span className="font-semibold text-white"> {releaseVersion}</span>
                です。macOS版とWindows版のインストーラーをGitHub Releasesから配布しています。
              </p>
            </div>
            <a
              href={githubReleasesUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-white/15 px-4 py-2 text-center text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
            >
              GitHub Releasesを確認
            </a>
          </div>

          <div className="mt-8 grid items-stretch gap-4 md:grid-cols-2">
            <a
              href={macDownloadUrl}
              download="Mitru_0.9.7-beta_aarch64.dmg"
              rel="noreferrer"
              className="flex min-h-[320px] flex-col rounded-lg border border-cyan-200/25 bg-cyan-300/10 p-6 transition hover:border-cyan-200/45 hover:bg-cyan-300/15"
            >
              <span className="flex flex-wrap items-center gap-2">
                <span className="inline-flex whitespace-nowrap rounded-full border border-cyan-200/25 bg-cyan-200/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-100">
                  macOS .dmg
                </span>
                <span className="inline-flex whitespace-nowrap rounded-full border border-white/10 px-2.5 py-1 text-xs font-semibold text-slate-200">
                  {releaseVersion}
                </span>
              </span>
              <HardDriveDownload className="mt-5 h-8 w-8 text-cyan-200" />
              <h3 className="mt-4 text-2xl font-semibold">macOS版</h3>
              <p className="mt-4 flex-1 leading-7 text-slate-300">
                最新のmacOS版インストーラーです。ダウンロード後、dmgファイルを開いてアプリをApplicationsへ移動してください。
              </p>
              <span className="mt-6 inline-flex w-fit rounded-md bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950">
                macOS版をダウンロード (.dmg)
              </span>
            </a>

            <a
              href={windowsDownloadUrl}
              download="Mitru_0.9.7-beta_x64-setup.exe"
              rel="noreferrer"
              className="flex min-h-[320px] flex-col rounded-lg border border-white/10 bg-white/[0.04] p-6 transition hover:border-cyan-200/30 hover:bg-white/[0.07]"
            >
              <span className="flex flex-wrap items-center gap-2">
                <span className="inline-flex whitespace-nowrap rounded-full border border-white/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-widest text-slate-300">
                  Windows .exe
                </span>
                <span className="inline-flex whitespace-nowrap rounded-full border border-emerald-300/25 bg-emerald-300/10 px-2.5 py-1 text-xs font-semibold text-emerald-100">
                  {releaseVersion}
                </span>
              </span>
              <Laptop className="mt-5 h-8 w-8 text-cyan-200" />
              <h3 className="mt-4 text-2xl font-semibold">Windows版</h3>
              <p className="mt-4 flex-1 leading-7 text-slate-300">
                最新のWindows版インストーラーです。Windows 10 / 11でセットアップ画面に沿って導入できます。
              </p>
              <span className="mt-6 inline-flex w-fit rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-white">
                Windows版をダウンロード (.exe)
              </span>
            </a>
          </div>
        </section>

        <section
          id="setup"
          className="scroll-mt-24 border-y border-white/10 bg-white/[0.03]"
        >
          <div className="section-shell py-16">
            <SectionLabel icon={FileText}>Setup</SectionLabel>
            <h2 className="text-3xl font-semibold">インストール手順</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {setupSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="surface rounded-lg p-5"
                >
                  <div className="flex items-center justify-between">
                    <step.icon className="h-6 w-6 text-cyan-200" />
                    <span className="text-sm font-semibold text-slate-500">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <footer className="section-shell flex flex-col gap-4 py-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <a href="#" className="group flex items-center gap-3">
            <LogoMark />
            <span className="font-semibold text-white">Mitru</span>
          </a>
          <p>© 2026 Mitru. Limited beta participants only.</p>
        </footer>

        {selectedScreenshot ? (
          <div
            className="fixed inset-0 z-[80] grid place-items-center bg-slate-950/88 p-4 backdrop-blur"
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={() => setSelectedScreenshot(null)}
              className="absolute right-4 top-4 rounded-md border border-white/15 bg-white/10 p-2 text-white transition hover:bg-white/15"
              aria-label="拡大表示を閉じる"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="w-full max-w-6xl overflow-hidden rounded-lg border border-white/10 bg-slate-950">
              <div className="relative aspect-video">
                <Image
                  src={selectedScreenshot.src}
                  alt={selectedScreenshot.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
              <div className="border-t border-white/10 p-5">
                <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200">
                  {selectedScreenshot.label}
                </p>
                <h3 className="mt-2 text-2xl font-semibold">
                  {selectedScreenshot.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">
                  {selectedScreenshot.body}
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </main>
    </ThemeProvider>
  );
}
