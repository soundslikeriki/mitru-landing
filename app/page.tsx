import Image from "next/image";
import ScreenshotGallery from "./components/ScreenshotGallery";

const releaseVersion = "v0.9.7-beta";
const macDownloadUrl =
  process.env.NEXT_PUBLIC_MAC_DOWNLOAD_URL ??
  "https://github.com/soundslikeriki/Mitru/releases/download/v0.9.7-beta/Mitru_0.9.7-beta_aarch64.dmg";
const windowsExeDownloadUrl =
  process.env.NEXT_PUBLIC_WINDOWS_EXE_DOWNLOAD_URL ??
  "https://github.com/soundslikeriki/Mitru/releases/download/v0.9.7-beta/Mitru_0.9.7-beta_x64-setup.exe";
const windowsMsiDownloadUrl =
  process.env.NEXT_PUBLIC_WINDOWS_MSI_DOWNLOAD_URL ??
  "https://github.com/soundslikeriki/Mitru/releases/download/v0.9.7-beta/Mitru_0.9.7_x64_ja-JP.msi";
const githubReleasesUrl =
  process.env.NEXT_PUBLIC_GITHUB_RELEASES_URL ??
  "https://github.com/soundslikeriki/Mitru/releases";

const navItems = [
  { label: "Mitruとは", href: "#about" },
  { label: "機能", href: "#features" },
  { label: "同期", href: "#cloud-sync" },
  { label: "画面", href: "#screenshots" },
  { label: "注意事項", href: "#notice" },
  { label: "ダウンロード", href: "#download" },
  { label: "手順", href: "#setup" }
];

const features = [
  {
    title: "Supabaseクラウド同期",
    body: "Bring Your Own Supabase方式で、複数デバイス間でのセキュアなデータ同期を実現。ローカルファースト設計で、オフラインでも完全に使用可能です。"
  },
  {
    title: "落ち着いたデスクトップ体験",
    body: "暗い作業環境にも馴染むUIで、必要な操作へすばやくアクセスできます。"
  },
  {
    title: "限定ベータで先行体験",
    body: "正式リリース前の改善版を試しながら、フィードバックを開発に反映できます。"
  },
  {
    title: "シンプルな導入",
    body: "macOSとWindows向けのインストーラーを用意し、最短手順で開始できます。"
  }
];

const notices = [
  "限定ベータ版のため、正式版に向けて改善中の機能があります。",
  "大切な案件データを扱う前に、念のためバックアップを取っておくと安心です。",
  "クラウド同期を使う場合は、ご自身のSupabaseプロジェクト情報を大切に管理してください。",
  "限定配布のため、ダウンロードリンクやインストーラーの取り扱いにはご配慮ください。"
];

const cloudSyncDetails = [
  {
    title: "Bring Your Own Supabase",
    body: "Mitru側で共有クラウドを預かるのではなく、ユーザー自身のSupabaseプロジェクトを接続する方式です。データの保管先を自分で管理できます。"
  },
  {
    title: "ローカルファースト",
    body: "日々の入力や確認はローカルで動作します。ネットワークが不安定な場所でも作業を続けられ、オンライン復帰後の同期を前提に設計しています。"
  },
  {
    title: "複数デバイスで利用",
    body: "同じSupabase設定を使うことで、オフィスのPCと現場用PCなど、複数環境で案件データを扱いやすくします。"
  },
  {
    title: "ベータ版の制限事項",
    body: "同期機能は検証中です。重要な案件データは定期的にバックアップし、初回設定や権限情報の取り扱いには十分注意してください。"
  }
];

const installSteps = [
  {
    title: "1. GitHub Releasesを開く",
    body: `${releaseVersion} のReleaseページから、お使いのOSに合うファイルを選びます。`
  },
  {
    title: "2. インストール",
    body: "macOSはアプリをApplicationsへ移動し、Windowsはセットアップ画面に沿って進めます。"
  },
  {
    title: "3. 起動して確認",
    body: "初回起動時の警告が表示された場合は、ベータ案内に従って許可してください。"
  }
];

function LogoLink() {
  return (
    <a
      href="#"
      className="group flex items-center gap-3"
      aria-label="Mitruのトップへ戻る"
    >
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
      <span className="text-lg font-semibold tracking-normal text-white">
        Mitru
      </span>
    </a>
  );
}

function AppPreview() {
  return (
    <div className="rounded-lg border border-white/10 bg-slate-900/70 p-3 shadow-2xl shadow-cyan-950/30">
      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <span className="ml-2 text-xs text-slate-400">Mitru Beta</span>
      </div>
      <div className="grid min-h-64 place-items-center rounded-md border border-cyan-300/15 bg-[linear-gradient(135deg,rgba(34,211,238,0.12),rgba(20,184,166,0.08)),#070b18] p-6">
        <div className="w-full max-w-xs">
          <div className="mb-5 flex items-center gap-3">
            <Image
              src="/logo.png"
              alt=""
              width={44}
              height={44}
              className="h-11 w-11 object-contain drop-shadow-[0_0_18px_rgba(34,211,238,0.5)]"
            />
            <div>
              <div className="h-3 w-24 rounded bg-white/45" />
              <div className="mt-2 h-2 w-32 rounded bg-white/15" />
            </div>
          </div>
          <div className="space-y-3 rounded-md border border-white/10 bg-white/[0.04] p-4">
            <div className="h-3 rounded bg-cyan-200/50" />
            <div className="h-3 w-5/6 rounded bg-white/25" />
            <div className="h-3 w-2/3 rounded bg-white/15" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:py-4">
          <LogoLink />

          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <a key={item.href} className="transition hover:text-white" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#download"
            className="rounded-md bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Betaを入手
          </a>
        </div>
        <nav className="mx-auto flex max-w-6xl gap-4 overflow-x-auto px-5 pb-3 text-sm text-slate-300 md:hidden">
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

      <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 pt-16 sm:pt-20 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
        <div>
          <p className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
            Limited Beta Program
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
            Mitru 限定ベータ版
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Mitruを正式リリース前に体験できる、限定ベータ参加者向けの公式ダウンロードページです。
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#download"
              className="rounded-md bg-cyan-300 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              ダウンロードへ進む
            </a>
            <a
              href="#notice"
              className="rounded-md border border-white/15 px-6 py-3 text-center font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
            >
              注意事項を確認
            </a>
          </div>
        </div>

        <AppPreview />
      </section>

      <section id="about" className="scroll-mt-24 border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200">
            About
          </p>
          <h2 className="mt-3 text-3xl font-semibold">Mitruとは？</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            Mitruは、日々の作業をより見通しよく進めるためのデスクトップアプリです。
            ベータ版では、正式版に向けた使いやすさと安定性の改善を重視しています。
          </p>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200">
          Features
        </p>
        <h2 className="mt-3 text-3xl font-semibold">主な機能</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="cloud-sync" className="scroll-mt-24 border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200">
              Cloud Sync
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Supabaseクラウド同期</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Mitruはローカルファーストで使えるデスクトップアプリです。必要に応じて、ご自身のSupabaseプロジェクトを接続し、複数デバイス間でデータを同期できます。
            </p>
            <p className="mt-4 rounded-lg border border-cyan-200/20 bg-cyan-300/10 p-4 text-sm leading-7 text-cyan-50">
              共有クラウドを強制しないため、データの置き場所とアクセス権限をユーザー自身で管理できます。
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {cloudSyncDetails.map((detail) => (
              <article
                key={detail.title}
                className="rounded-lg border border-white/10 bg-slate-950/55 p-5"
              >
                <h3 className="text-lg font-semibold text-white">{detail.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{detail.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="screenshots" className="scroll-mt-24 border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200">
              Screenshots
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Mitruの実際の画面</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              建築見積から積算、請求、案件管理まで、実務の流れをひとつのデスクトップ体験にまとめています。
            </p>
          </div>

          <ScreenshotGallery />
        </div>
      </section>

      <section id="notice" className="scroll-mt-24 border-y border-red-400/20 bg-red-950/25">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-red-200">
            Important
          </p>
          <h2 className="mt-3 text-3xl font-semibold">注意事項</h2>
          <ul className="mt-6 grid gap-3">
            {notices.map((notice) => (
              <li
                key={notice}
                className="rounded-md border border-red-300/20 bg-red-500/10 px-4 py-3 text-red-50"
              >
                {notice}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="download" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200">
              Download
            </p>
            <h2 className="mt-3 text-3xl font-semibold">ダウンロード</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-300">
              最新の限定ベータ版はGitHub Releasesから配布しています。現在のバージョンは
              <span className="font-semibold text-white"> {releaseVersion}</span> です。
            </p>
          </div>
          <a
            href={githubReleasesUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-white/15 px-4 py-2 text-center text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
          >
            GitHub Releasesページで全ファイルを確認
          </a>
        </div>

        <div className="mt-8 grid items-stretch gap-4 md:grid-cols-3">
          <a
            href={macDownloadUrl}
            target="_blank"
            rel="noreferrer"
            className="flex h-full min-h-[340px] flex-col rounded-lg border border-cyan-200/20 bg-cyan-300/10 p-6 transition hover:border-cyan-200/45 hover:bg-cyan-300/15"
          >
            <span className="flex flex-nowrap items-center gap-2">
              <span className="inline-flex whitespace-nowrap rounded-full border border-cyan-200/25 bg-cyan-200/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-100">
                macOS .dmg
              </span>
              <span className="inline-flex whitespace-nowrap rounded-full border border-white/10 px-2.5 py-1 text-xs font-semibold text-slate-200">
                Apple Silicon向け
              </span>
            </span>
            <span className="mt-3 block text-2xl font-semibold">
              macOS版
            </span>
            <span className="mt-4 block flex-1 leading-7 text-slate-300">
              Apple Silicon向けのdmgファイルを直接開きます。Intel Macをご利用の場合は、Releasesページで対応ファイルをご確認ください。
            </span>
            <span className="mt-6 inline-flex w-fit rounded-md bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950">
              macOS版をダウンロード (.dmg)
            </span>
          </a>

          <a
            href={windowsExeDownloadUrl}
            target="_blank"
            rel="noreferrer"
            className="flex h-full min-h-[340px] flex-col rounded-lg border border-white/10 bg-white/[0.04] p-6 transition hover:border-cyan-200/30 hover:bg-white/[0.07]"
          >
            <span className="flex flex-nowrap items-center gap-2">
              <span className="inline-flex whitespace-nowrap rounded-full border border-cyan-200/25 bg-cyan-200/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-100">
                Windows .exe
              </span>
              <span className="inline-flex whitespace-nowrap rounded-full border border-emerald-300/25 bg-emerald-300/10 px-2.5 py-1 text-xs font-semibold text-emerald-100">
                推奨インストーラー
              </span>
            </span>
            <span className="mt-3 block text-2xl font-semibold">
              Windows版
            </span>
            <span className="mt-4 block flex-1 leading-7 text-slate-300">
              Windows 10 / 11で通常はこちらを選んでください。セットアップウィザードでスムーズに導入できます。
            </span>
            <span className="mt-6 inline-flex w-fit rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-white">
              Windows版をダウンロード (.exe) ※推奨
            </span>
          </a>

          <a
            href={windowsMsiDownloadUrl}
            target="_blank"
            rel="noreferrer"
            className="flex h-full min-h-[340px] flex-col rounded-lg border border-white/10 bg-white/[0.04] p-6 transition hover:border-cyan-200/30 hover:bg-white/[0.07]"
          >
            <span className="flex flex-nowrap items-center gap-2">
              <span className="inline-flex whitespace-nowrap rounded-full border border-cyan-200/25 bg-cyan-200/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-100">
                Windows .msi
              </span>
              <span className="inline-flex whitespace-nowrap rounded-full border border-white/10 px-2.5 py-1 text-xs font-semibold text-slate-200">
                企業・社内配布向け
              </span>
            </span>
            <span className="mt-3 block text-2xl font-semibold">
              MSI版
            </span>
            <span className="mt-4 block flex-1 leading-7 text-slate-300">
              管理者による展開や社内配布に向いたmsiパッケージです。通常利用では.exe版がおすすめです。
            </span>
            <span className="mt-6 inline-flex w-fit rounded-md border border-white/15 px-4 py-2 text-sm font-semibold text-white">
              Windows版をダウンロード (.msi)
            </span>
          </a>
        </div>

        <p className="mt-5 rounded-lg border border-yellow-300/20 bg-yellow-300/10 p-4 text-sm leading-7 text-yellow-50">
          GitHub Releasesには複数のファイルが表示されます。お使いのOSに合ったインストーラーを選び、ダウンロード後にインストール手順を確認してください。
        </p>
      </section>

      <section id="setup" className="scroll-mt-24 border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200">
            Setup
          </p>
          <h2 className="mt-3 text-3xl font-semibold">インストール手順</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {installSteps.map((step) => (
              <article key={step.title} className="rounded-lg border border-white/10 p-5">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <LogoLink />
        <p>© 2026 Mitru. Limited beta participants only.</p>
      </footer>
    </main>
  );
}
