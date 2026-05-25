"use client";

import Image from "next/image";
import { useState } from "react";

type Screenshot = {
  title: string;
  label: string;
  description: string;
  src: string;
};

const screenshots: Screenshot[] = [
  {
    title: "業績予測ダッシュボード",
    label: "Dashboard",
    description:
      "売上、粗利、平均粗利率、未入金や締め予定まで、経営判断に必要な数字を一画面で確認できます。",
    src: "/screenshots/01-dashboard-forecast-risk.png"
  },
  {
    title: "リスク案件の可視化",
    label: "Risk Monitor",
    description:
      "粗利率が低い案件や対応が近い案件を目立たせ、見落としや後追い対応を減らします。",
    src: "/screenshots/01b-dashboard-risk.png"
  },
  {
    title: "階層積算",
    label: "Calculation",
    description:
      "工事項目、材料、数量、原価、粗利を階層で整理しながら、見積の根拠を分かりやすく積み上げられます。",
    src: "/screenshots/02-calculation.png"
  },
  {
    title: "見積書プレビュー",
    label: "Quote",
    description:
      "入力した積算内容をそのまま見積書へ反映し、発行前に金額や明細を確認できます。",
    src: "/screenshots/03-quote-preview.png"
  },
  {
    title: "請求書プレビュー",
    label: "Invoice",
    description:
      "請求履歴、入金登録、残額管理をまとめて扱い、案件ごとの請求状況を追跡できます。",
    src: "/screenshots/04-invoice-preview.png"
  },
  {
    title: "案件一覧",
    label: "Projects",
    description:
      "案件番号、顧客、工事場所、工事期間を一覧化し、進行中の案件をすばやく探せます。",
    src: "/screenshots/05-projects.png"
  }
];

export default function ScreenshotGallery() {
  const [activeScreenshot, setActiveScreenshot] = useState<Screenshot | null>(null);

  function closeLightbox() {
    setActiveScreenshot(null);
  }

  return (
    <>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {screenshots.map((screenshot) => (
          <button
            key={screenshot.src}
            type="button"
            onClick={() => setActiveScreenshot(screenshot)}
            className="group overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] text-left transition hover:border-cyan-200/35 hover:bg-white/[0.07]"
          >
            <span className="block overflow-hidden border-b border-white/10 bg-slate-950/70">
              <Image
                src={screenshot.src}
                alt={screenshot.title}
                width={1200}
                height={675}
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="aspect-video h-auto w-full object-cover transition duration-300 group-hover:scale-[1.025]"
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
                {screenshot.description}
              </span>
              <span className="mt-4 block text-sm font-semibold text-cyan-200">
                クリックして拡大
              </span>
            </span>
          </button>
        ))}
      </div>

      {activeScreenshot ? (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-slate-950/88 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeScreenshot.title}の拡大表示`}
          onClick={closeLightbox}
        >
          <div
            className="w-full max-w-6xl overflow-hidden rounded-lg border border-white/15 bg-slate-950 shadow-2xl shadow-black/60"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 p-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-200">
                  {activeScreenshot.label}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-white">
                  {activeScreenshot.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={closeLightbox}
                className="rounded-md border border-white/15 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                閉じる
              </button>
            </div>
            <Image
              src={activeScreenshot.src}
              alt={activeScreenshot.title}
              width={1200}
              height={675}
              sizes="100vw"
              className="h-auto max-h-[78vh] w-full object-contain"
              priority
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
