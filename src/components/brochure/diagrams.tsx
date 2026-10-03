import { useId, useState } from "react";
import { cn } from "@/lib/utils";
import { STEPS, toFa } from "@/lib/brochure";

const ink = "var(--color-ink)";
const leather = "var(--color-leather)";
const camel = "var(--color-camel)";
const brass = "var(--color-brass)";
const muted = "var(--color-muted)";
const paper = "var(--color-paper)";
const surface = "var(--color-surface)";
const walnut = "var(--color-walnut)";

const FONT = "Vazirmatn, Tahoma, sans-serif";

/** Quarter-toranj skeleton extracted from the master's notebook: complete curve + S + short curve. */
const Q1 =
  "M160 130 C 172 86, 214 48, 258 46 C 286 44, 304 76, 286 102 C 270 122, 288 144, 316 150 C 338 154, 334 180, 308 186";

function Caption({ children }: { children: React.ReactNode }) {
  return <figcaption className="mt-3 text-sm leading-7 text-muted">{children}</figcaption>;
}

export function GoldenPointsDiagram() {
  const [hover, setHover] = useState<string | null>(null);
  const points = [
    { id: "nw", x: 110, y: 90, label: "طلایی شمال‌غربی" },
    { id: "ne", x: 190, y: 90, label: "Super Gold Point", super: true },
    { id: "sw", x: 110, y: 150, label: "طلایی جنوب‌غربی" },
    { id: "se", x: 190, y: 150, label: "طلایی جنوب‌شرقی" },
  ];

  return (
    <figure className="rounded-xl bg-surface p-3 shadow-[var(--shadow-border)] sm:p-5">
      <svg viewBox="0 0 300 240" className="h-auto w-full" role="img" aria-labelledby="gp-title">
        <title id="gp-title">نقاط طلایی کادر و Super Gold Point</title>
        <rect x="30" y="30" width="240" height="180" fill={surface} stroke={walnut} strokeWidth="1.8" />
        {[110, 190].map((x) => (
          <line key={x} x1={x} y1="30" x2={x} y2="210" stroke={camel} strokeDasharray="4 5" strokeWidth="1.2" />
        ))}
        {[90, 150].map((y) => (
          <line key={y} x1="30" y1={y} x2="270" y2={y} stroke={camel} strokeDasharray="4 5" strokeWidth="1.2" />
        ))}
        {[110, 190].map((x) => (
          <g key={`tx-${x}`}>
            <line x1={x} y1="26" x2={x} y2="34" stroke={leather} strokeWidth="2" />
            <line x1={x} y1="206" x2={x} y2="214" stroke={leather} strokeWidth="2" />
          </g>
        ))}
        {[90, 150].map((y) => (
          <g key={`ty-${y}`}>
            <line x1="26" y1={y} x2="34" y2={y} stroke={leather} strokeWidth="2" />
            <line x1="266" y1={y} x2="274" y2={y} stroke={leather} strokeWidth="2" />
          </g>
        ))}
        <text x="150" y="18" textAnchor="middle" fill={muted} fontSize="11" fontFamily={FONT}>
          شمال
        </text>
        <text x="288" y="124" textAnchor="middle" fill={muted} fontSize="11" fontFamily={FONT}>
          شرق
        </text>
        <text x="70" y="24" fill={muted} fontSize="9" fontFamily={FONT}>
          ۱/۳
        </text>
        <text x="198" y="24" fill={muted} fontSize="9" fontFamily={FONT}>
          ۲/۳
        </text>
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
              r={hover === p.id ? 9 : 7}
              fill={p.super ? brass : leather}
              stroke={paper}
              strokeWidth="2"
            />
          </g>
        ))}
        <text x="190" y="76" textAnchor="middle" fill={ink} fontSize="10" fontWeight="700" fontFamily={FONT}>
          SGP
        </text>
      </svg>
      <Caption>
        هر ضلع با دو نشانه به سه قسمت مساوی تقسیم می‌شود. تلاقی خطوط فرضی، چهار نقطه طلایی است. شمال‌شرقی‌ترین نقطه{" "}
        <strong className="text-ink">Super Gold Point</strong> است.
        {hover ? (
          <span className="mt-1 block text-leather">{points.find((p) => p.id === hover)?.label}</span>
        ) : null}
      </Caption>
    </figure>
  );
}

export function ThreeLinesDiagram() {
  const [mode, setMode] = useState<"parts" | "quarter" | "full" | "weave">("parts");

  return (
    <figure className="rounded-xl bg-surface p-3 shadow-[var(--shadow-border)] sm:p-5">
      <div className="mb-3 flex flex-wrap gap-2">
        {(
          [
            ["parts", "سه خط جدا"],
            ["quarter", "یک‌چهارم ترنج"],
            ["full", "ترنج کامل"],
            ["weave", "محل بافت یا پیچ"],
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            onClick={() => setMode(id)}
            className={cn(
              "h-11 rounded-md px-3 text-sm",
              mode === id ? "bg-leather text-paper" : "border border-line bg-paper text-ink",
            )}
          >
            {label}
          </button>
        ))}
      </div>
      <svg viewBox="0 0 320 260" className="h-auto w-full" role="img">
        <title>قانون سه خط پایه اسلیمی — استخراج از دفتر استاد</title>
        <rect x="8" y="8" width="304" height="244" fill={surface} rx="10" />
        <line x1="160" y1="22" x2="160" y2="238" stroke="var(--color-line-strong)" strokeWidth="1" />
        <line x1="22" y1="130" x2="298" y2="130" stroke="var(--color-line-strong)" strokeWidth="1" />
        {mode === "parts" ? (
          <>
            <path d="M160 130 C 172 86, 214 48, 258 46" fill="none" stroke={leather} strokeWidth="3.4" strokeLinecap="round" />
            <path
              d="M258 46 C 286 44, 304 76, 286 102 C 270 122, 288 144, 316 150"
              fill="none"
              stroke={camel}
              strokeWidth="3.4"
              strokeLinecap="round"
            />
            <path d="M316 150 C 338 154, 334 180, 308 186" fill="none" stroke={brass} strokeWidth="3.4" strokeLinecap="round" />
            <text x="188" y="44" fill={leather} fontSize="12" fontFamily={FONT}>
              ۱ منحنی کامل
            </text>
            <text x="168" y="118" fill={camel} fontSize="12" fontFamily={FONT}>
              ۲ اس‌شکل
            </text>
            <text x="196" y="208" fill={brass} fontSize="12" fontFamily={FONT}>
              ۳ منحنی کوتاه
            </text>
          </>
        ) : null}
        {mode === "quarter" ? (
          <>
            <path d={Q1} fill="none" stroke={leather} strokeWidth="3.6" strokeLinecap="round" />
            <circle cx="160" cy="130" r="3" fill={walnut} />
            <text x="160" y="236" textAnchor="middle" fill={muted} fontSize="12" fontFamily={FONT}>
              اتصال بدون تغییر = یک‌چهارم ترنج
            </text>
          </>
        ) : null}
        {mode === "full" || mode === "weave" ? (
          <>
            {[0, 90, 180, 270].map((deg) => (
              <g key={deg} transform={`rotate(${deg} 160 130)`}>
                <path d={Q1} fill="none" stroke={leather} strokeWidth="2.6" strokeLinecap="round" />
                <g transform="translate(160 130) scale(0.46) translate(-160 -130)">
                  <path d={Q1} fill="none" stroke={camel} strokeWidth="3.2" strokeLinecap="round" />
                </g>
              </g>
            ))}
            {mode === "weave"
              ? [0, 90, 180, 270].map((deg) => (
                  <g key={`w-${deg}`} transform={`rotate(${deg} 160 130)`}>
                    <path
                      d="M210 92 C 232 78, 248 92, 242 108 C 236 122, 252 132, 268 128"
                      fill="none"
                      stroke={brass}
                      strokeWidth="2.2"
                      strokeDasharray="3 3"
                      strokeLinecap="round"
                    />
                  </g>
                ))
              : null}
            <text x="160" y="236" textAnchor="middle" fill={muted} fontSize="12" fontFamily={FONT}>
              {mode === "full" ? "چرخش ۹۰ درجه × ۴ = ترنج کامل" : "خط‌چین طلایی = محل تریشه ۱ میلی‌متر"}
            </text>
          </>
        ) : null}
      </svg>
      <Caption>
        قانون مؤلف: اگر این سه خط را بدون تغییر شکل، فقط پشت‌سرهم وصل کنیم، خود یک‌چهارم ترنج ساخته می‌شود. فضاهای خالی بین
        پیچش‌ها محل دقیق اجرای نوار یک‌میلیمتری و بافت یا پیچ است.
      </Caption>
    </figure>
  );
}

export function ToranjCompare() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <figure className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
        <svg viewBox="0 0 200 200" className="h-auto w-full">
          <title>ترنج سینه کبوتری</title>
          <rect width="200" height="200" fill={surface} rx="12" />
          <path
            d="M100 28 C 128 34, 164 62, 172 100 C 164 138, 128 166, 100 172 C 72 166, 36 138, 28 100 C 36 62, 72 34, 100 28 Z"
            fill="none"
            stroke={leather}
            strokeWidth="2.6"
          />
        </svg>
        <figcaption className="mt-2 text-sm leading-7">
          <strong className="font-display text-ink">ترنج سینه کبوتری</strong>
          <span className="mt-1 block text-muted">
            همه اضلاع به بیرون آمده‌اند؛ هیچ برگشتی به داخل نیست. فرم محدب شبیه سینه کبوتر.
          </span>
        </figcaption>
      </figure>
      <figure className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
        <svg viewBox="0 0 200 200" className="h-auto w-full">
          <title>ترنج شاهی</title>
          <rect width="200" height="200" fill={surface} rx="12" />
          <path
            d="M100 30 C 118 34, 138 48, 146 68 C 132 78, 132 92, 148 100 C 132 108, 132 122, 146 132 C 138 152, 118 166, 100 170 C 82 166, 62 152, 54 132 C 68 122, 68 108, 52 100 C 68 92, 68 78, 54 68 C 62 48, 82 34, 100 30 Z"
            fill="none"
            stroke={brass}
            strokeWidth="2.6"
          />
        </svg>
        <figcaption className="mt-2 text-sm leading-7">
          <strong className="font-display text-ink">ترنج شاهی</strong>
          <span className="mt-1 block text-muted">
            همان سینه کبوتری است که در نقاط مشخص اضلاع به درون برمی‌گردند؛ شباهت به تاج.
          </span>
        </figcaption>
      </figure>
    </div>
  );
}

export function CompositionDiagram() {
  return (
    <figure className="rounded-xl bg-surface p-3 shadow-[var(--shadow-border)] sm:p-5">
      <svg viewBox="0 0 360 280" className="h-auto w-full" role="img">
        <title>ترکیب‌بندی کلاسیک ایرانی: ترنج، لچک، گوشه، حاشیه</title>
        <rect x="16" y="16" width="328" height="248" fill={surface} stroke={walnut} strokeWidth="1.6" />
        <rect x="32" y="32" width="296" height="216" fill="none" stroke={brass} strokeWidth="14" />
        {[
          [48, 48, 1, 1],
          [312, 48, -1, 1],
          [48, 232, 1, -1],
          [312, 232, -1, -1],
        ].map(([x, y, sx, sy], i) => (
          <g key={i} transform={`translate(${x} ${y}) scale(${sx} ${sy})`}>
            <path d="M0 0 C 28 8, 48 28, 56 56 L 0 56 Z" fill={camel} opacity="0.55" />
            <path d="M8 8 C 26 18, 38 34, 44 48" fill="none" stroke={leather} strokeWidth="1.6" />
            <circle cx="10" cy="10" r="5" fill={leather} />
          </g>
        ))}
        {[0, 90, 180, 270].map((deg) => (
          <g key={deg} transform={`rotate(${deg} 180 140) translate(20 10) scale(0.52)`}>
            <path d={Q1} fill="none" stroke={leather} strokeWidth="4" strokeLinecap="round" />
          </g>
        ))}
        <text x="180" y="144" textAnchor="middle" fill={ink} fontSize="13" fontFamily={FONT} fontWeight="700">
          ترنج
        </text>
        <text x="180" y="26" textAnchor="middle" fill={walnut} fontSize="11" fontFamily={FONT}>
          حاشیه
        </text>
        <text x="78" y="92" fill={ink} fontSize="11" fontFamily={FONT}>
          لچک
        </text>
        <text x="40" y="44" fill={ink} fontSize="10" fontFamily={FONT}>
          گوشه
        </text>
      </svg>
      <Caption>
        کادر ایرانی کلاسیک: ترنج در مرکز (تا دو نقطه طلایی)، سپس لچک، گوشه‌های قرینه در چهار سو، و حاشیه که کادر را
        می‌بندد.
      </Caption>
    </figure>
  );
}

export function ElementSet() {
  const items = [
    {
      t: "شمسه",
      node: (
        <polygon
          points="80,18 92,52 128,52 98,74 110,108 80,86 50,108 62,74 32,52 68,52"
          fill="none"
          stroke={leather}
          strokeWidth="2.2"
        />
      ),
    },
    {
      t: "کتیبه",
      node: (
        <path
          d="M28 70 L 48 48 H 112 L 132 70 L 112 92 H 48 Z"
          fill="none"
          stroke={leather}
          strokeWidth="2.2"
        />
      ),
    },
    {
      t: "گوشه",
      node: (
        <>
          <path d="M28 28 H 132 V 48 C 90 52, 52 90, 48 132 H 28 Z" fill="none" stroke={leather} strokeWidth="2.2" />
          <path d="M48 48 C 72 58, 88 88, 92 112" fill="none" stroke={camel} strokeWidth="1.6" />
        </>
      ),
    },
    {
      t: "نشان",
      node: (
        <path
          d="M80 28 C 118 48, 118 92, 80 112 C 42 92, 42 48, 80 28 Z"
          fill="none"
          stroke={leather}
          strokeWidth="2.2"
        />
      ),
    },
    {
      t: "لچک",
      node: <path d="M28 28 H 132 L 28 132 Z" fill="none" stroke={leather} strokeWidth="2.2" />,
    },
    {
      t: "مشبک",
      node: (
        <>
          {[40, 80, 120].map((x) =>
            [40, 80, 120].map((y) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="14" fill="none" stroke={leather} strokeWidth="1.6" />
            )),
          )}
        </>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {items.map((it) => (
        <figure key={it.t} className="rounded-xl bg-surface p-3 shadow-[var(--shadow-border)]">
          <svg viewBox="0 0 160 140" className="h-auto w-full">
            <rect width="160" height="140" fill={surface} rx="8" />
            {it.node}
          </svg>
          <figcaption className="mt-1 text-center font-display text-ink">{it.t}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export function LeatherCrossSection() {
  return (
    <figure className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
      <svg viewBox="0 0 360 170" className="h-auto w-full">
        <title>برش طاقه چرم کفی: رخ و لش</title>
        <rect x="40" y="38" width="280" height="36" fill={leather} />
        <rect x="40" y="74" width="280" height="22" fill={camel} />
        <rect x="40" y="96" width="280" height="28" fill="var(--color-hide)" />
        <path d="M40 124 Q 70 136, 100 124 T 160 124 T 220 124 T 280 124 T 320 124" fill="var(--color-suede)" />
        <text x="180" y="62" textAnchor="middle" fill={paper} fontSize="13" fontFamily={FONT}>
          رخ — سطح رویی و صورت چرم
        </text>
        <text x="180" y="90" textAnchor="middle" fill={walnut} fontSize="12" fontFamily={FONT}>
          ضخامت طاقه
        </text>
        <text x="180" y="116" textAnchor="middle" fill={walnut} fontSize="13" fontFamily={FONT}>
          لش — پشت پرزدار
        </text>
      </svg>
      <Caption>لویس: نازک‌سازی کنترل‌شده از سمت لش. ماده اصلی صنعت، چرم کفی ضخیم است نه رخ نازک سوخت.</Caption>
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
            <stop offset="0" stopColor="var(--color-thinner)" />
            <stop offset="1" stopColor="var(--color-walnut)" />
          </linearGradient>
        </defs>
        {Array.from({ length: 10 }).map((_, i) => (
          <rect key={`t-${i}`} x={24 + i * 18} y="28" width="16" height="36" rx="3" fill="var(--color-thinner)" />
        ))}
        <rect x="222" y="28" width="16" height="36" rx="3" fill="var(--color-walnut)" />
        <text x="180" y="84" textAnchor="middle" fill={ink} fontSize="12" fontFamily={FONT}>
          تینر ۲۰۰۰۰ به رنگ اتومبیلی قهوه‌ای = ۱۰ به ۱
        </text>
        <rect x="40" y="104" width="28" height="36" rx="3" fill="var(--color-thinner)" />
        {Array.from({ length: 10 }).map((_, i) => (
          <rect key={`m-${i}`} x={92 + i * 18} y="104" width="16" height="36" rx="3" fill={`url(#${uid}-mix)`} />
        ))}
        <text x="180" y="160" textAnchor="middle" fill={ink} fontSize="12" fontFamily={FONT}>
          کیلر سلولوزی به مایع رنگ = ۱ به ۱۰
        </text>
        <text x="180" y="188" textAnchor="middle" fill={muted} fontSize="11" fontFamily={FONT}>
          سپس جوهر فامبخش طلایی / فندقی / قهوه‌ای / گردویی — تدریجی و با تست
        </text>
      </svg>
      <Caption>دیکته دقیق استاد. ماسک و دستکش در ساخت رنگ الزامی است. روغن‌دهی پس از رنگ در این شیوه حذف شده است.</Caption>
    </figure>
  );
}

export function ProcessFlow({ active, onSelect }: { active: number; onSelect: (n: number) => void }) {
  const phases = [
    { id: "run", title: "۱. اجرا", sub: "ساختار کامل شود" },
    { id: "set", title: "۲. تثبیت", sub: "رزین و دونَم" },
    { id: "color", title: "۳. رنگ و روسازی", sub: "پس از خشکی کامل" },
  ] as const;

  return (
    <div className="space-y-4">
      <div className="grid gap-3 lg:grid-cols-3">
        {phases.map((ph, idx) => (
          <div key={ph.id} className="rounded-xl bg-surface p-3 shadow-[var(--shadow-border)]">
            <div className="mb-3 flex items-baseline justify-between gap-2">
              <p className="font-display text-lg text-leather">{ph.title}</p>
              <p className="text-xs text-muted">{ph.sub}</p>
            </div>
            <ol className="space-y-2">
              {STEPS.filter((s) => s.phase === ph.id).map((s) => (
                <li key={s.n}>
                  <button
                    type="button"
                    onClick={() => onSelect(s.n)}
                    className={cn(
                      "flex h-auto min-h-11 w-full items-start gap-3 rounded-md border px-3 py-2 text-right",
                      active === s.n ? "border-brass bg-brass/20 ring-2 ring-brass" : "border-line bg-paper",
                    )}
                  >
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-walnut text-sm text-paper tabular-nums">
                      {toFa(s.n)}
                    </span>
                    <span>
                      <span className="block font-medium text-ink">{s.t}</span>
                      <span className="block text-sm text-muted">{s.d}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ol>
            {idx < 2 ? (
              <p className="mt-3 text-center text-xs text-camel lg:hidden">سپس مرحله بعد</p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
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
            <div key={n} className="flex-1 rounded-lg bg-leather py-4 text-center text-paper">
              <div className="font-display text-2xl">{n}</div>
              <div className="text-xs opacity-80">{u}</div>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm text-muted">وزن معمول عدل حدود ۷۰ کیلوگرم.</p>
      </div>
      <div className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
        <p className="font-display text-lg text-ink">چرم کفی شتر</p>
        <div className="mt-3 rounded-lg bg-camel py-6 text-center text-walnut">
          <div className="font-display text-3xl">۳۵</div>
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
      <table className="w-full text-sm">
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

export function StripCutDiagram() {
  return (
    <figure className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
      <svg viewBox="0 0 360 140" className="h-auto w-full">
        <title>برش تریشه یک‌میلیمتری</title>
        <rect x="24" y="36" width="220" height="72" fill={camel} rx="4" />
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={i}
            x1={44 + i * 24}
            y1="36"
            x2={44 + i * 24}
            y2="108"
            stroke={walnut}
            strokeWidth="1.2"
            strokeDasharray="3 3"
          />
        ))}
        <rect x="260" y="28" width="6" height="88" fill={leather} />
        <rect x="272" y="28" width="6" height="88" fill={leather} />
        <rect x="284" y="28" width="6" height="88" fill={leather} />
        <rect x="300" y="18" width="36" height="108" fill="var(--color-muted)" rx="2" />
        <text x="134" y="128" textAnchor="middle" fill={muted} fontSize="11" fontFamily={FONT}>
          طاقه کفی
        </text>
        <text x="276" y="128" textAnchor="middle" fill={muted} fontSize="11" fontFamily={FONT}>
          تریشه ۱mm
        </text>
        <text x="318" y="14" textAnchor="middle" fill={muted} fontSize="11" fontFamily={FONT}>
          خط‌کش سنگین
        </text>
      </svg>
      <Caption>حرکت تیغ فقط در یک جهت. عیب «سر و سر» از فشار نامساوی است؛ «شکم‌دار شدن» از انحراف تیغ.</Caption>
    </figure>
  );
}
