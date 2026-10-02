import { useId, useState } from "react";
import { cn } from "@/lib/utils";

export function GoldenPointsDiagram() {
  const [hover, setHover] = useState<string | null>(null);
  const points = [
    { id: "nw", x: 90, y: 70, label: "طلایی شمال‌غربی" },
    { id: "ne", x: 210, y: 70, label: "Super Gold Point", super: true },
    { id: "sw", x: 90, y: 150, label: "طلایی جنوب‌غربی" },
    { id: "se", x: 210, y: 150, label: "طلایی جنوب‌شرقی" },
  ];

  return (
    <figure className="rounded-xl bg-surface p-3 shadow-[var(--shadow-border)] sm:p-5">
      <svg viewBox="0 0 300 240" className="h-auto w-full" role="img" aria-labelledby="gp-title">
        <title id="gp-title">نقاط طلایی کادر و Super Gold Point</title>
        <rect x="30" y="30" width="240" height="180" fill="#fbf6ec" stroke="#3d2418" strokeWidth="1.6" />
        <line x1="110" y1="30" x2="110" y2="210" stroke="#b07a4a" strokeDasharray="3 4" strokeWidth="1" />
        <line x1="190" y1="30" x2="190" y2="210" stroke="#b07a4a" strokeDasharray="3 4" strokeWidth="1" />
        <line x1="30" y1="90" x2="270" y2="90" stroke="#b07a4a" strokeDasharray="3 4" strokeWidth="1" />
        <line x1="30" y1="150" x2="270" y2="150" stroke="#b07a4a" strokeDasharray="3 4" strokeWidth="1" />
        <text x="150" y="22" textAnchor="middle" fill="#6d5646" fontSize="9">شمال</text>
        <text x="284" y="124" textAnchor="middle" fill="#6d5646" fontSize="9">شرق</text>
        {points.map((p) => (
          <g
            key={p.id}
            onPointerEnter={() => setHover(p.id)}
            onPointerLeave={() => setHover(null)}
            className="cursor-pointer"
          >
            <circle
              cx={p.x}
              cy={p.y}
              r={hover === p.id ? 8 : 6}
              fill={p.super ? "#b8944a" : "#6b2e22"}
              stroke="#f4ead8"
              strokeWidth="2"
            />
          </g>
        ))}
        <text x="210" y="58" textAnchor="middle" fill="#3d2418" fontSize="8" fontWeight="700">
          SGP
        </text>
      </svg>
      <figcaption className="mt-3 text-sm leading-7 text-muted">
        هر ضلع با دو نشانه به سه قسمت مساوی تقسیم می‌شود. تلاقی خطوط فرضی، چهار نقطه طلایی است.
        شمال‌شرقی‌ترین نقطه{" "}
        <strong className="text-ink">Super Gold Point</strong> نام دارد — مهم‌ترین توانایی مبانی هنرهای تجسمی.
        {hover ? (
          <span className="mt-1 block text-leather">
            {points.find((p) => p.id === hover)?.label}
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
}

export function ThreeLinesDiagram() {
  const [mode, setMode] = useState<"parts" | "quarter" | "full">("parts");

  return (
    <figure className="rounded-xl bg-surface p-3 shadow-[var(--shadow-border)] sm:p-5">
      <div className="mb-3 flex flex-wrap gap-2">
        {(
          [
            ["parts", "سه خط جدا"],
            ["quarter", "یک‌چهارم ترنج"],
            ["full", "ترنج کامل"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setMode(id)}
            className={cn(
              "h-10 rounded-md px-3 text-sm",
              mode === id ? "bg-leather text-paper" : "bg-paper text-ink border border-line",
            )}
          >
            {label}
          </button>
        ))}
      </div>
      <svg viewBox="0 0 320 260" className="h-auto w-full" role="img">
        <title>قانون سه خط پایه اسلیمی</title>
        <rect x="8" y="8" width="304" height="244" fill="#fbf6ec" rx="10" />
        <line x1="160" y1="20" x2="160" y2="240" stroke="#d7c4ad" strokeWidth="1" />
        <line x1="24" y1="130" x2="296" y2="130" stroke="#d7c4ad" strokeWidth="1" />
        {mode === "parts" ? (
          <>
            <path d="M160 130 C 168 96, 198 62, 236 52" fill="none" stroke="#6b2e22" strokeWidth="3.2" />
            <path d="M236 52 C 258 48, 268 72, 252 92 C 238 110, 248 128, 270 136" fill="none" stroke="#b07a4a" strokeWidth="3.2" />
            <path d="M270 136 C 286 144, 278 168, 254 172" fill="none" stroke="#b8944a" strokeWidth="3.2" />
            <text x="196" y="48" fill="#6b2e22" fontSize="11">۱ منحنی کامل</text>
            <text x="200" y="118" fill="#b07a4a" fontSize="11">۲ اس‌شکل</text>
            <text x="200" y="196" fill="#8a6a28" fontSize="11">۳ منحنی کوتاه</text>
          </>
        ) : null}
        {mode === "quarter" ? (
          <>
            <path
              d="M160 130 C 168 96, 198 62, 236 52 C 258 48, 268 72, 252 92 C 238 110, 248 128, 270 136 C 286 144, 278 168, 254 172"
              fill="none"
              stroke="#6b2e22"
              strokeWidth="3.4"
            />
            <text x="160" y="232" textAnchor="middle" fill="#6d5646" fontSize="11">
              اتصال بدون تغییر = یک‌چهارم ترنج
            </text>
          </>
        ) : null}
        {mode === "full" ? (
          <>
            {[0, 90, 180, 270].map((deg) => (
              <g key={deg} transform={`rotate(${deg} 160 130)`}>
                <path
                  d="M160 130 C 168 96, 198 62, 236 52 C 258 48, 268 72, 252 92 C 238 110, 248 128, 270 136 C 286 144, 278 168, 254 172"
                  fill="none"
                  stroke="#6b2e22"
                  strokeWidth="2.6"
                />
              </g>
            ))}
            <text x="160" y="232" textAnchor="middle" fill="#6d5646" fontSize="11">
              چرخش ۹۰ درجه × ۴ = ترنج کامل
            </text>
          </>
        ) : null}
      </svg>
      <figcaption className="mt-3 text-sm leading-7 text-muted">
        قانون کلیدی مؤلف: اگر این سه خط را بدون تغییر شکل، فقط پشت‌سرهم وصل کنیم، خود یک‌چهارم ترنج را می‌سازند.
        فضاهای خالی بین پیچش‌ها محل دقیق اجرای نوار یک‌میلیمتری و بافت یا پیچ است.
      </figcaption>
    </figure>
  );
}

export function ToranjCompare() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <figure className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
        <svg viewBox="0 0 200 200" className="h-auto w-full">
          <title>ترنج سینه کبوتری</title>
          <rect width="200" height="200" fill="#fbf6ec" rx="12" />
          <path
            d="M100 28 C 128 34, 164 62, 172 100 C 164 138, 128 166, 100 172 C 72 166, 36 138, 28 100 C 36 62, 72 34, 100 28 Z"
            fill="none"
            stroke="#6b2e22"
            strokeWidth="2.4"
          />
        </svg>
        <figcaption className="mt-2 text-sm leading-7">
          <strong className="font-display text-ink">ترنج سینه کبوتری</strong>
          <span className="block text-muted">همه اضلاع به بیرون آمده‌اند؛ هیچ برگشتی به داخل نیست. فرم محدب شبیه سینه کبوتر.</span>
        </figcaption>
      </figure>
      <figure className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
        <svg viewBox="0 0 200 200" className="h-auto w-full">
          <title>ترنج شاهی</title>
          <rect width="200" height="200" fill="#fbf6ec" rx="12" />
          <path
            d="M100 30 C 118 34, 138 48, 146 68 C 132 78, 132 92, 148 100 C 132 108, 132 122, 146 132 C 138 152, 118 166, 100 170 C 82 166, 62 152, 54 132 C 68 122, 68 108, 52 100 C 68 92, 68 78, 54 68 C 62 48, 82 34, 100 30 Z"
            fill="none"
            stroke="#b8944a"
            strokeWidth="2.4"
          />
        </svg>
        <figcaption className="mt-2 text-sm leading-7">
          <strong className="font-display text-ink">ترنج شاهی</strong>
          <span className="block text-muted">همان سینه کبوتری است که در نقاط مشخص اضلاع به درون برمی‌گردند؛ شباهت به تاج.</span>
        </figcaption>
      </figure>
    </div>
  );
}

export function CompositionDiagram() {
  return (
    <figure className="rounded-xl bg-surface p-3 shadow-[var(--shadow-border)] sm:p-5">
      <svg viewBox="0 0 360 260" className="h-auto w-full" role="img">
        <title>ترکیب‌بندی کلاسیک ایرانی</title>
        <rect x="18" y="18" width="324" height="224" fill="#fbf6ec" stroke="#3d2418" strokeWidth="1.5" />
        <rect x="36" y="36" width="288" height="188" fill="none" stroke="#b8944a" strokeWidth="10" />
        <polygon points="54,54 118,54 54,110" fill="#b07a4a" opacity="0.55" />
        <polygon points="306,54 242,54 306,110" fill="#b07a4a" opacity="0.55" />
        <polygon points="54,206 118,206 54,150" fill="#b07a4a" opacity="0.55" />
        <polygon points="306,206 242,206 306,150" fill="#b07a4a" opacity="0.55" />
        <path d="M54 54 C 90 90, 90 90, 118 54" fill="none" stroke="#6b2e22" strokeWidth="1.6" />
        <ellipse cx="180" cy="130" rx="52" ry="40" fill="#6b2e22" />
        <ellipse cx="180" cy="130" rx="28" ry="20" fill="#b8944a" />
        <text x="180" y="134" textAnchor="middle" fill="#f4ead8" fontSize="11">ترنج</text>
        <text x="180" y="28" textAnchor="middle" fill="#8a6a28" fontSize="10">حاشیه</text>
        <text x="78" y="86" fill="#3d2418" fontSize="10">لچک</text>
        <text x="54" y="48" fill="#3d2418" fontSize="9">گوشه</text>
      </svg>
      <figcaption className="mt-3 text-sm leading-7 text-muted">
        کادر ایرانی کلاسیک: ترنج در مرکز (تا دو نقطه طلایی)، سپس لچک، گوشه‌های قرینه در چهار سو، و حاشیه که کادر را می‌بندد.
      </figcaption>
    </figure>
  );
}

export function LeatherCrossSection() {
  return (
    <figure className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
      <svg viewBox="0 0 360 170" className="h-auto w-full">
        <title>برش طاقه چرم کفی: رخ و لش</title>
        <rect x="40" y="38" width="280" height="36" fill="#8a4a2a" />
        <rect x="40" y="74" width="280" height="22" fill="#c4a07a" />
        <rect x="40" y="96" width="280" height="28" fill="#e8d3b8" />
        <path d="M40 124 Q 70 136, 100 124 T 160 124 T 220 124 T 280 124 T 320 124" fill="#d8c2a6" />
        <text x="180" y="62" textAnchor="middle" fill="#f4ead8" fontSize="13">رخ — سطح رویی و صورت چرم</text>
        <text x="180" y="90" textAnchor="middle" fill="#3d2418" fontSize="12">ضخامت طاقه</text>
        <text x="180" y="116" textAnchor="middle" fill="#3d2418" fontSize="13">لش — پشت پرزدار</text>
      </svg>
      <figcaption className="mt-2 text-sm leading-7 text-muted">
        لویس: نازک‌سازی کنترل‌شده از سمت لش. ماده اصلی صنعت، چرم کفی ضخیم است نه رخ نازک سوخت.
      </figcaption>
    </figure>
  );
}

export function ColorRecipeDiagram() {
  const uid = useId();
  return (
    <figure className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
      <svg viewBox="0 0 360 210" className="h-auto w-full">
        <title>شیوه ساخت رنگ مخصوص آثار معرق چرم</title>
        <defs>
          <linearGradient id={`${uid}-mix`} x1="0" x2="1">
            <stop offset="0" stopColor="#c4a574" />
            <stop offset="1" stopColor="#5c3318" />
          </linearGradient>
        </defs>
        {Array.from({ length: 10 }).map((_, i) => (
          <rect key={`t-${i}`} x={24 + i * 18} y="28" width="16" height="36" rx="3" fill="#d7c4ad" />
        ))}
        <rect x="222" y="28" width="16" height="36" rx="3" fill="#5c3318" />
        <text x="180" y="84" textAnchor="middle" fill="#3d2418" fontSize="12">
          تینر ۲۰۰۰۰ به رنگ اتومبیلی قهوه‌ای = ۱۰ به ۱
        </text>
        <rect x="40" y="104" width="28" height="36" rx="3" fill="#cfc6b4" />
        {Array.from({ length: 10 }).map((_, i) => (
          <rect key={`m-${i}`} x={92 + i * 18} y="104" width="16" height="36" rx="3" fill={`url(#${uid}-mix)`} />
        ))}
        <text x="180" y="160" textAnchor="middle" fill="#3d2418" fontSize="12">
          کیلر سلولوزی به مایع رنگ = ۱ به ۱۰
        </text>
        <text x="180" y="188" textAnchor="middle" fill="#6d5646" fontSize="11">
          سپس جوهر فامبخش طلایی / فندقی / قهوه‌ای / گردویی — تدریجی و با تست
        </text>
      </svg>
      <figcaption className="mt-2 text-sm leading-7 text-muted">
        دیکته دقیق استاد. ماسک و دستکش در ساخت رنگ الزامی است. روغن‌دهی پس از رنگ در این شیوه حذف شده است.
      </figcaption>
    </figure>
  );
}

export function ProcessFlow({ active, onSelect }: { active: number; onSelect: (n: number) => void }) {
  const steps = [
    { n: 1, t: "آماده‌سازی پایه‌کار", d: "پاک‌سازی، سمباده، رفع چربی", c: "prep" },
    { n: 2, t: "چسب‌کاری یکنواخت", d: "چسب آهن ۸۸۸۸ + مکث ۱۰ دقیقه", c: "prep" },
    { n: 3, t: "اجرای اولیه و مونتاژ", d: "نوارکشی + موتیف + بافت یا پیچ", c: "prep" },
    { n: 4, t: "قوام‌آوری اولیه", d: "مشته‌زنی پس از نصب هر قطعه", c: "mash" },
    { n: 5, t: "تکمیل کامل معرق", d: "کنترل درزها و جفت‌کاری", c: "prep" },
    { n: 6, t: "اعمال رزین زیرکار", d: "چسب چوب + آب نسبت ۱ به ۶", c: "resin" },
    { n: 7, t: "قوام‌آوری نهایی (دونم)", d: "مشته‌زنی آرام نیمه‌خشک", c: "mash" },
    { n: 8, t: "خشک‌شدن کامل", d: "خروج رطوبت رزین", c: "dry" },
    { n: 9, t: "رنگ‌آمیزی تخصصی پرداز", d: "جوهر پایه تینر + سایه‌پاش", c: "color" },
    { n: 10, t: "خشک‌شدن رنگ", d: "تثبیت جوهر روی رخ چرم", c: "dry" },
    { n: 11, t: "خال‌زنی / خال طلایی", d: "خمیر دورگیر طلایی ویترای", c: "gold" },
    { n: 12, t: "خشک‌شدن خال‌ها", d: "تثبیت کامل خمیر ویترای", c: "dry" },
    { n: 13, t: "روسازی نهایی", d: "کیلر سلولزی / اتومبیلی", c: "finish" },
  ] as const;

  const tone: Record<string, string> = {
    prep: "border-leather/30 bg-paper",
    mash: "border-camel/50 bg-camel/15",
    resin: "border-brass/40 bg-brass/10",
    dry: "border-line bg-walnut/5",
    color: "border-leather/50 bg-leather/10",
    gold: "border-brass bg-brass/20",
    finish: "border-walnut/30 bg-surface",
  };

  return (
    <ol className="grid gap-2 sm:grid-cols-2">
      {steps.map((s) => (
        <li key={s.n}>
          <button
            type="button"
            onClick={() => onSelect(s.n)}
            className={cn(
              "flex w-full items-start gap-3 rounded-lg border p-3 text-right transition-colors",
              tone[s.c],
              active === s.n && "ring-2 ring-brass",
            )}
          >
            <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-walnut text-sm text-paper tabular-nums">
              {s.n}
            </span>
            <span>
              <span className="block font-medium text-ink">{s.t}</span>
              <span className="block text-sm text-muted">{s.d}</span>
            </span>
          </button>
        </li>
      ))}
    </ol>
  );
}

export function AdlChart() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
        <p className="font-display text-lg text-ink">چرم کفی گاوی</p>
        <div className="mt-3 flex items-end gap-3">
          {[
            ["۱۰", "ورقی"],
            ["۱۶", "ورقی"],
            ["۲۰", "ورقی"],
          ].map(([n, u]) => (
            <div key={n} className="flex-1 rounded-lg bg-leather/90 py-4 text-center text-paper">
              <div className="font-display text-2xl tabular-nums">{n}</div>
              <div className="text-xs opacity-80">{u}</div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm text-muted">وزن معمول عدل حدود ۷۰ کیلوگرم.</p>
      </div>
      <div className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
        <p className="font-display text-lg text-ink">چرم کفی شتر</p>
        <div className="mt-3 rounded-lg bg-camel py-6 text-center text-walnut">
          <div className="font-display text-3xl tabular-nums">۳۵</div>
          <div className="text-sm">کیلویی</div>
        </div>
        <p className="mt-3 text-sm text-danger">سیزده‌ورقی و هجده‌ورقی کاملاً رد شده‌اند.</p>
      </div>
    </div>
  );
}

export function DistinctionGrid() {
  const rows = [
    ["ماده اصلی", "چرم کفی، زیره و کروپون ضخیم", "ورق بسیار نازک رخ"],
    ["بستر اجرا", "زیرکارهای متنوع — صنعت ثانویه", "جلد یا تابلو سنتی"],
    ["زمان رنگ", "پس از تثبیت کامل ساختار", "همزمان یا پیشین"],
  ];
  return (
    <div className="overflow-x-auto rounded-xl bg-surface shadow-[var(--shadow-border)]">
      <table className="w-full min-w-[32rem] text-sm">
        <thead className="bg-walnut text-paper">
          <tr>
            <th className="px-4 py-3 text-right font-medium">محور</th>
            <th className="px-4 py-3 text-right font-medium">صنعت نوین معرق چرم</th>
            <th className="px-4 py-3 text-right font-medium">سوخت چرم کهن و معاصر</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]} className="border-t border-line">
              {r.map((c, i) => (
                <td key={i} className={cn("px-4 py-3 leading-7", i === 0 && "font-medium text-leather")}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ResinRatios() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="rounded-xl border border-brass/40 bg-brass/10 p-4">
        <p className="text-xs tracking-wide text-muted">رزین زیرکار — مرحله تثبیت</p>
        <p className="mt-1 font-display text-2xl text-ink">۱ به ۶</p>
        <p className="mt-1 text-sm text-muted">چسب چوب به آب. پس از تکمیل کامل معرق.</p>
      </div>
      <div className="rounded-xl border border-line bg-surface p-4">
        <p className="text-xs tracking-wide text-muted">غوطه‌وری محلول چسب چوب</p>
        <p className="mt-1 font-display text-2xl text-ink">۱ به ۵</p>
        <p className="mt-1 text-sm text-muted">مرحله‌ای جدا؛ با رزین ۱:۶ ادغام نشود.</p>
      </div>
    </div>
  );
}
