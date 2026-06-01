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

const downloadOptions = [
  {
    platform: "macOS版",
    format: "macOS .dmg",
    href: macDownloadUrl,
    fileName: "Mitru_0.9.7-beta_aarch64.dmg",
    button: "macOS版をダウンロード (.dmg)",
    description:
      "Apple Silicon搭載Mac向けの限定ベータ版です。dmgを開き、MitruをApplicationsフォルダへ移動して利用します。",
    icon: HardDriveDownload,
    highlight: true
  },
  {
    platform: "Windows版",
    format: "Windows .exe",
    href: windowsDownloadUrl,
    fileName: "Mitru_0.9.7-beta_x64-setup.exe",
    button: "Windows版をダウンロード (.exe)",
    description:
      "Windows 10 / 11向けの限定ベータ版です。exeインストーラーを実行し、画面の案内に沿ってセットアップします。",
    icon: Laptop,
    highlight: false
  }
];

const installGuides = [
  {
    platform: "macOS",
    icon: HardDriveDownload,
    steps: [
      "macOS版の .dmg ファイルをダウンロードします。",
      "ダウンロードした .dmg を開き、Mitru.app をApplicationsフォルダへ移動します。",
      "ApplicationsからMitruを起動します。初回起動時に確認が出る場合は、注意事項のGatekeeper手順を確認してください。"
    ]
  },
  {
    platform: "Windows",
    icon: Laptop,
    steps: [
      "Windows版の .exe インストーラーをダウンロードします。",
      "インストーラーを実行し、表示されるセットアップ画面に沿ってインストールします。",
      "SmartScreenの確認が表示された場合は、注意事項の手順を確認し、配布元を確認したうえで実行してください。"
    ]
  }
];

const noticeCards = [
  {
    title: "macOSのGatekeeper警告について",
    icon: LockKeyhole,
    tone: "amber",
    body: "限定ベータ版では、初回起動時にmacOSの保護機能により確認が表示される場合があります。必ずMitru公式のGitHub Releasesから取得したファイルであることを確認してください。",
    command: "xattr -dr com.apple.quarantine /Applications/Mitru.app",
    note: "このコマンドは、信頼できる配布元から入手したMitru.appに対してのみ実行してください。"
  },
  {
    title: "WindowsのSmartScreen警告について",
    icon: ShieldCheck,
    tone: "blue",
    body: "Windows版では、署名や配布実績の都合によりSmartScreenの確認が表示される場合があります。",
    steps: [
      "表示内容を確認し、発行元とダウンロード元がMitru公式Releaseであることを確認します。",
      "「詳細情報」を選択します。",
      "内容に問題がなければ「実行」を選択してインストールを続行します。"
    ]
  },
  {
    title: "限定ベータ版としてのお願い",
    icon: AlertTriangle,
    tone: "red",
    body: "v0.9.7-betaは正式リリース前の限定ベータ版です。実験的な機能や今後変更される仕様が含まれます。",
    steps: [
      "重要な案件データを扱う前に、バックアップを取っておくことをおすすめします。",
      "本番業務で利用する場合は、社内の運用ルールに合わせて慎重に確認してください。",
      "気づいた点や改善要望は、今後の安定版に向けた品質向上に活用します。"
    ]
  }
];

const extraNotes = [
  {
    title: "PDF保存について",
    body: "見積書・請求書のPDF保存は、印刷用HTMLを開いてブラウザやOSの印刷機能からPDFとして保存する方式です。",
    icon: FileText
  },
  {
    title: "クラウド同期について",
    body: "Supabaseクラウド同期は任意で利用できる実験的機能です。利用しなくても、ローカル環境だけでMitruを使えます。",
    icon: Cloud
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
          className="scroll-mt-24 border-y border-amber-300/15 bg-amber-950/10"
        >
          <div className="section-shell py-16">
            <SectionLabel icon={AlertTriangle}>Important</SectionLabel>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="text-3xl font-semibold">注意事項</h2>
                <p className="mt-4 max-w-3xl leading-7 text-slate-300">
                  Mitruは限定ベータ版として配布しています。安心して試していただけるよう、OSの警告表示や実験的機能について事前にご確認ください。
                </p>
              </div>
              <span className="w-fit rounded-full border border-amber-200/25 bg-amber-200/10 px-3 py-1 text-sm font-semibold text-amber-100">
                {releaseVersion}
              </span>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {noticeCards.map((notice) => (
                <article
                  key={notice.title}
                  className={`rounded-lg border p-5 ${
                    notice.tone === "red"
                      ? "border-red-300/20 bg-red-500/10"
                      : notice.tone === "amber"
                        ? "border-amber-300/20 bg-amber-500/10"
                        : "border-cyan-300/20 bg-cyan-500/10"
                  }`}
                >
                  <notice.icon
                    className={`h-6 w-6 ${
                      notice.tone === "red"
                        ? "text-red-200"
                        : notice.tone === "amber"
                          ? "text-amber-200"
                          : "text-cyan-200"
                    }`}
                  />
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {notice.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-200">
                    {notice.body}
                  </p>

                  {notice.command ? (
                    <div className="mt-4">
                      <p className="text-sm font-semibold text-amber-100">
                        必要な場合のコマンド
                      </p>
                      <code className="mt-2 block overflow-x-auto rounded-md border border-white/10 bg-slate-950/80 px-3 py-2 text-sm text-cyan-100">
                        {notice.command}
                      </code>
                      <p className="mt-3 text-sm leading-6 text-amber-50/90">
                        {notice.note}
                      </p>
                    </div>
                  ) : null}

                  {notice.steps ? (
                    <ol className="mt-4 space-y-2 text-sm leading-6 text-slate-200">
                      {notice.steps.map((step, index) => (
                        <li key={step} className="flex gap-3">
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-white/15 text-xs text-slate-200">
                            {index + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  ) : null}
                </article>
              ))}
            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {extraNotes.map((note) => (
                <article
                  key={note.title}
                  className="surface rounded-lg p-5"
                >
                  <note.icon className="h-6 w-6 text-cyan-200" />
                  <h3 className="mt-4 text-lg font-semibold">{note.title}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{note.body}</p>
                </article>
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
                現在の限定ベータ版は{" "}
                <span className="rounded-full border border-cyan-200/25 bg-cyan-200/10 px-2 py-0.5 font-semibold text-cyan-100">
                  {releaseVersion}
                </span>
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
            {downloadOptions.map((option) => (
              <a
                key={option.platform}
                href={option.href}
                download={option.fileName}
                rel="noreferrer"
                className={`flex min-h-[330px] flex-col rounded-lg p-6 transition ${
                  option.highlight
                    ? "border border-cyan-200/25 bg-cyan-300/10 hover:border-cyan-200/45 hover:bg-cyan-300/15"
                    : "border border-white/10 bg-white/[0.04] hover:border-cyan-200/30 hover:bg-white/[0.07]"
                }`}
              >
                <span className="flex flex-wrap items-center gap-2">
                  <span
                    className={`inline-flex whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-widest ${
                      option.highlight
                        ? "border-cyan-200/25 bg-cyan-200/10 text-cyan-100"
                        : "border-white/10 text-slate-300"
                    }`}
                  >
                    {option.format}
                  </span>
                  <span className="inline-flex whitespace-nowrap rounded-full border border-emerald-300/25 bg-emerald-300/10 px-2.5 py-1 text-xs font-semibold text-emerald-100">
                    {releaseVersion}
                  </span>
                </span>
                <option.icon className="mt-5 h-8 w-8 text-cyan-200" />
                <h3 className="mt-4 text-2xl font-semibold">
                  {option.platform}
                </h3>
                <p className="mt-4 flex-1 leading-7 text-slate-300">
                  {option.description}
                </p>
                <p className="mt-4 text-sm text-slate-500">
                  ファイル名: {option.fileName}
                </p>
                <span
                  className={`mt-6 inline-flex w-fit rounded-md px-4 py-2 text-sm font-semibold ${
                    option.highlight
                      ? "bg-cyan-300 text-slate-950"
                      : "border border-white/15 text-white"
                  }`}
                >
                  {option.button}
                </span>
              </a>
            ))}
          </div>
        </section>

        <section
          id="setup"
          className="scroll-mt-24 border-y border-white/10 bg-white/[0.03]"
        >
          <div className="section-shell py-16">
            <SectionLabel icon={FileText}>Setup</SectionLabel>
            <h2 className="text-3xl font-semibold">インストール手順</h2>
            <p className="mt-4 max-w-3xl leading-7 text-slate-300">
              OSごとの導入手順です。どちらもインストーラーを取得したあと、通常のデスクトップアプリと同じ流れでセットアップできます。
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {installGuides.map((guide) => (
                <article
                  key={guide.platform}
                  className="surface rounded-lg p-6"
                >
                  <div className="flex items-center justify-between">
                    <guide.icon className="h-7 w-7 text-cyan-200" />
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-xs font-semibold text-slate-300">
                      {releaseVersion}
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold">
                    {guide.platform}
                  </h3>
                  <ol className="mt-5 space-y-4">
                    {guide.steps.map((step, index) => (
                      <li key={step} className="flex gap-3 leading-7 text-slate-300">
                        <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-cyan-200/25 bg-cyan-200/10 text-xs font-semibold text-cyan-100">
                          {index + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
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
