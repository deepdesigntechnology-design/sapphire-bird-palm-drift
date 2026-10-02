import { useEffect, useState } from "react";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  Menu,
  Printer,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  AdlChart,
  ColorRecipeDiagram,
  CompositionDiagram,
  DistinctionGrid,
  GoldenPointsDiagram,
  LeatherCrossSection,
  ProcessFlow,
  ResinRatios,
  ThreeLinesDiagram,
  ToranjCompare,
} from "./diagrams";

const NAV = [
  { id: "cover", label: "جلد" },
  { id: "identity", label: "هویت" },
  { id: "glossary", label: "واژه‌نامه" },
  { id: "golden", label: "نقاط طلایی" },
  { id: "threelines", label: "سه خط پایه" },
  { id: "composition", label: "ترکیب‌بندی" },
  { id: "elements", label: "عناصر اسلیمی" },
  { id: "leather", label: "شناخت چرم" },
  { id: "tools", label: "ابزار" },
  { id: "process", label: "۱۳ مرحله" },
  { id: "weave", label: "بافت یا پیچ" },
  { id: "chemistry", label: "چسب و رزین" },
  { id: "finish", label: "رنگ و روسازی" },
  { id: "safety", label: "ایمنی" },
] as const;

const GLOSSARY = [
  { t: "موتیف", d: "واحد تزئینی مستقل چرمی که در طرح تکرار یا ترکیب می‌شود." },
  { t: "تریشه", d: "نوار باریک حدود ۱ میلی‌متر از چرم کفی برای بافت یا پیچ." },
  { t: "نوارکشی / دورگیری", d: "اجرای نوارهای چرمی در حاشیه یا کادر اثر." },
  { t: "مشته‌زنی دو مرحله‌ای", d: "فشرده‌سازی با مشته: اولیه پس از نصب، نهایی در دونَم." },
  { t: "دونَم", d: "حالت نیمه‌خشک و قابل شکل‌دهی پس از اعمال رزین زیرکار." },
  { t: "فارسی‌بر", d: "برش مورب لبه‌ها برای اتصال دقیق و بی‌درز." },
  { t: "خمیر دورگیر طلایی ویترای", d: "جایگزین مدرن خمیر طلا برای خال‌زنی." },
  { t: "طاقه", d: "هر ورق یا قواره کامل و یکپارچه چرم کفی." },
  { t: "رخ", d: "سطح رویی و صورت چرم." },
  { t: "لش", d: "پشت پرزدار چرم، سمت مقابل رخ." },
  { t: "لویس", d: "نازک‌سازی کنترل‌شده چرم از سمت لش — هم فرایند و هم ابزار." },
  { t: "پایه کار", d: "چوب، سفال، سرامیک یا هر قطعه‌ای که چسب بپذیرد و استحکام کافی داشته باشد." },
  { t: "چسب آهن", d: "چسب صنعتی تماسی (چسب موکت / چسب خارجی). مارک مرجع کارگاهی: پارس چهار هشت ۸۸۸۸." },
  { t: "منبت چرم", d: "قلمزنی با سمبه نقش‌انداز، بغل‌کوب و زمینه‌کوب + حکاکی با چاقو/کاتر؛ منبع موتیف." },
  { t: "سمبه", d: "نقش‌انداز برای اختلاف سطح رخ؛ برشی دایره‌ای برای سوراخ‌کاری." },
  { t: "تنالیته", d: "شدت اشباع رنگ و شکل رنگبندی." },
  { t: "کنتراست", d: "شدت اشباع نور؛ تیرگی و روشنی کلی و تضاد." },
];

const ELEMENTS = [
  { t: "لچک", d: "عناصر گوشه‌دار میان ترنج و گوشه‌های کادر." },
  { t: "گوشه", d: "ترکیب اسلیمی گوشه کادر؛ معمولاً از ۴ سانت به بالا، موتیف پرکاربرد." },
  { t: "حاشیه", d: "نوار پیرامونی تزئینی که کادر را با نقوش تکراری یا گره‌وار می‌بندد." },
  { t: "شمسه", d: "ستاره هندسی معمولاً ۸ضلعی؛ قابلیت تکرار بالا و موتیف پرکاربرد." },
  { t: "نشان اسلیمی", d: "ترنجی که فقط از دو طرف قرینه می‌شود، نه از چهار طرف." },
  { t: "کتیبه", d: "ترنج ساده و کشیده برای فضای خوشنویسی یا نگارگری." },
  { t: "مشبک", d: "برش متریال برای ایجاد شبکه‌های زیبا و جلوه بصری." },
];

const PROCESS_NOTES: Record<number, string> = {
  1: "پایه کار باید صاف، بی‌چربی و پذیرنده چسب باشد. صنعت نوین معرق چرم صنعت ثانویه است.",
  2: "هر دو سطح تمیز، مسطح و آغشته به چسب آهن؛ کاملاً خشک؛ سپس فشار، ضربه و گاه کمی گرما. مکث حدود ۱۰ دقیقه.",
  3: "عبارت اجباری: اجرای موتیف‌ها و اجرای بافت یا پیچ. نوارکشی کادر در همین مرحله است.",
  4: "مشته‌زنی اولیه پس از نصب هر قطعه — فشرده‌سازی اتصال، نه ضربه بی‌مهار.",
  5: "پیش از رزین، معرق از نظر ساختاری باید کامل باشد. درزها و جفت‌کاری کنترل شود.",
  6: "رزین زیرکار: چسب چوب + آب نسبت ۱ به ۶. با غوطه‌وری ۱ به ۵ ادغام نشود.",
  7: "دونَم یعنی نه کاملاً مرطوب و نه کاملاً خشک. مشته‌زنی نهایی آرام‌تر است.",
  8: "رنگ‌آمیزی پیش از خشک‌شدن کامل ممنوع است.",
  9: "رنگ مخصوص طبق دیکته استاد (تینر ۲۰۰۰۰، رنگ اتومبیلی، کیلر سلولوزی، جوهر فامبخش).",
  10: "ورود زودهنگام به خال‌زنی سطح را خراب می‌کند.",
  11: "خال‌زنی مرحله مستقل است و خودِ روسازی محسوب نمی‌شود.",
  12: "خمیر ویترای باید کاملاً تثبیت شود.",
  13: "کیلر سلولزی / اتومبیلی / پلی‌استر / لاک و الکل — یکنواخت و بدون شره. تهویه الزامی.",
};

const TOOLS = [
  ["کاتر", "برش عمومی و خطوط ساده"],
  ["تیغ جراحی", "جزئیات ظریف موتیف"],
  ["شیفره", "منحنی‌های نرم اسلیمی"],
  ["گرزن / چاقو", "چرم ضخیم کفی"],
  ["اره مویی", "فضاهای منفی داخلی"],
  ["خط‌کش فلزی سنگین", "برش مستقیم و مهار تریشه"],
  ["لویس", "نازک‌سازی از سمت لش"],
  ["مشته", "قوام‌آوری دو مرحله‌ای"],
  ["سمبه", "نقش‌انداز و برشی"],
  ["پنس و پین", "چیدمان قطعات کوچک"],
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Figure({
  src,
  alt,
  caption,
  className,
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
}) {
  return (
    <figure className={cn("overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]", className)}>
      <img src={src} alt={alt} className="aspect-[4/3] w-full object-cover" />
      <figcaption className="px-4 py-3 text-sm leading-7 text-muted">{caption}</figcaption>
    </figure>
  );
}

function SectionHead({ kicker, title, body }: { kicker: string; title: string; body: string }) {
  return (
    <header className="max-w-3xl">
      <p className="text-xs font-medium tracking-wide text-camel">{kicker}</p>
      <h2 className="mt-2 font-display text-3xl leading-snug text-ink sm:text-4xl">{title}</h2>
      <div className="ornament-rule my-4" />
      <p className="text-base leading-8 text-muted">{body}</p>
    </header>
  );
}

export function Brochure() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("cover");
  const [step, setStep] = useState(1);

  useEffect(() => {
    const nodes = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "0px 0px -55% 0px", threshold: [0.15, 0.4] },
    );
    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, []);

  const i = NAV.findIndex((n) => n.id === active);

  return (
    <div className="min-h-dvh">
      <nav className="no-print sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-3 py-2 sm:px-6">
          <Button variant="ghost" size="icon" aria-label="فهرست" onClick={() => setOpen(true)}>
            <Menu />
          </Button>
          <div className="min-w-0 flex-1">
            <p className="truncate font-display text-sm text-ink">برشور آموزشی صنعت نوین معرق چرم</p>
            <p className="truncate text-xs text-muted">منطبق بر آموزه‌های کتاب — کد ۱-۰۲-۰۰-۷۷-۶۵۳۷</p>
          </div>
          <Button variant="secondary" size="sm" onClick={() => window.print()}>
            <Printer />
            چاپ
          </Button>
        </div>
        <div className="no-scrollbar flex gap-1 overflow-x-auto px-3 pb-2 sm:px-6">
          {NAV.map((n) => (
            <button
              key={n.id}
              type="button"
              onClick={() => scrollToId(n.id)}
              className={cn(
                "h-9 shrink-0 rounded-full px-3 text-xs",
                active === n.id ? "bg-leather text-paper" : "bg-surface text-muted",
              )}
            >
              {n.label}
            </button>
          ))}
        </div>
      </nav>

      {open ? (
        <div className="no-print fixed inset-0 z-50 bg-walnut/40" onClick={() => setOpen(false)}>
          <aside
            className="absolute inset-y-0 right-0 flex w-[min(20rem,88vw)] flex-col bg-paper p-4 shadow-[var(--shadow-border)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="font-display text-lg">فهرست برشور</p>
              <Button variant="ghost" size="icon" aria-label="بستن" onClick={() => setOpen(false)}>
                <X />
              </Button>
            </div>
            <div className="flex-1 space-y-1 overflow-y-auto">
              {NAV.map((n, idx) => (
                <button
                  key={n.id}
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    scrollToId(n.id);
                  }}
                  className={cn(
                    "flex h-11 w-full items-center justify-between rounded-lg px-3 text-sm",
                    active === n.id ? "bg-leather text-paper" : "hover:bg-camel/15",
                  )}
                >
                  <span>{n.label}</span>
                  <span className="tabular-nums opacity-60">{idx + 1}</span>
                </button>
              ))}
            </div>
          </aside>
        </div>
      ) : null}

      <main className="mx-auto max-w-6xl px-3 pb-28 sm:px-6">
        <section id="cover" className="spread grid items-center gap-8 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-14">
          <div className="overflow-hidden rounded-[28px] bg-walnut p-2">
            <img
              src="/images/cover.jpg"
              alt="تابلوی تمام‌شده معرق چرم با ترنج مرکزی، لچک، گوشه، حاشیه و خال طلایی"
              className="aspect-[3/4] w-full rounded-[20px] object-cover"
            />
          </div>
          <div>
            <p className="text-sm text-camel">گروه خلاقیت‌های تجسمی ایده — عرصه سیمرغ — اصفهان</p>
            <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl">
              برشور مصور کاربردی
              <span className="mt-2 block text-leather">صنعت نوین معرق چرم</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted">
              راهنمای فشرده، شماتیک و تصویری برای کارگاه — دقیقاً منطبق بر درسنامه کتاب استاندارد شغل
              معرق‌کار چرم. پدیدآورنده شیوه: استاد افشین خلیلی.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                ["کد شغل", "۱-۰۲-۰۰-۷۷-۶۵۳۷"],
                ["مدت دوره", "۱۰۹ ساعت"],
                ["نظری / عملی", "۲۳ / ۸۶"],
                ["فصل‌ها", "۱۰ فصل"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-xl bg-surface p-3 shadow-[var(--shadow-border)]">
                  <dt className="text-xs text-muted">{k}</dt>
                  <dd className="mt-1 font-medium tabular-nums">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm leading-7 text-muted">
              ترتیب اجباری: اجرا ← تثبیت ← رنگ‌آمیزی. عبارت صحیح: «اجرای موتیف‌ها و اجرای بافت یا پیچ».
            </p>
          </div>
        </section>

        <section id="identity" className="spread space-y-8 py-10">
          <SectionHead
            kicker="فصل ۱ — آگاهی پیش‌نیاز"
            title="این صنعت چیست و با سوخت چرم چه فرقی دارد؟"
            body="شیوه‌ای تخصصی و مستقل در کار با چرم طبیعی ضخیم که از دهه ۱۳۸۰ به‌صورت نظام اجرایی مستقل شکل گرفت. رنگ پس از شکل‌گیری کامل ساختار زده می‌شود و اثر روی زیرکار مناسب تثبیت می‌گردد."
          />
          <DistinctionGrid />
          <div className="grid gap-5 lg:grid-cols-2">
            <Figure
              src="/images/workshop.jpg"
              alt="میز کار معرق چرم با پایه‌کار چوبی، قطعات چرمی و تریشه"
              caption="صنعت ثانویه: معرق روی پایه‌کار چوبی، سفالی یا هر بستر پذیرنده چسب اجرا می‌شود."
            />
            <div className="space-y-4 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
              <h3 className="font-display text-xl">خاستگاه کوتاه</h3>
              <p className="leading-8 text-muted">
                معرق چرم برآمده از ظرفیت‌های چرم طبیعی و میراث سوخت چرم است. نقش استاد میرزا آقا مهدی امامی اصفهانی در احیای سوخت معاصر برجسته است؛ صنعت نوین اما با انتقال اندیشه بند معرق به چرم ضخیم، فارسی‌بر، موتیف مستقل و بافت یا پیچ تریشه، مسیر جداگانه‌ای گشود.
              </p>
              <p className="leading-8 text-muted">
                دو نوآوری کلیدی پدیدآورنده شیوه: بافت یا پیچ تریشه با نوار یک‌میلیمتری و نوارکشی کامل کادر؛ و فرمولاسیون رزین زیرکار همراه با مشته‌زنی دو مرحله‌ای.
              </p>
            </div>
          </div>
        </section>

        <section id="glossary" className="spread space-y-8 py-10">
          <SectionHead
            kicker="اصطلاحات فیکس‌شده"
            title="واژه‌نامه کارگاهی که نباید جابه‌جا شود"
            body="این تعاریف از متون دیکته‌شده استاد تثبیت شده‌اند. عبارت «تریشه‌دوزی» در کتاب جایی ندارد."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {GLOSSARY.map((g) => (
              <article key={g.t} className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
                <h3 className="font-display text-lg text-leather">{g.t}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{g.d}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="golden" className="spread space-y-8 py-10">
          <SectionHead
            kicker="فصل ۲ — مبانی هنرهای تجسمی"
            title="نقاط طلایی کادر و Super Gold Point"
            body="هر ضلع با دو نشانه به سه قسمت مساوی تقسیم می‌شود. خطوط فرضی به نقطه متناظر ضلع روبرو وصل می‌شوند. تلاقی، چهار نقطه طلایی است. شمال‌شرقی‌ترین نقطه Super Gold Point نام دارد."
          />
          <div className="grid items-start gap-6 lg:grid-cols-2">
            <GoldenPointsDiagram />
            <div className="space-y-4">
              <ol className="space-y-3">
                {[
                  "هر ضلع کادر (مربع یا مستطیل) به سه قسمت مساوی.",
                  "از هر نشانه، خط فرضی به نقطه متناظر ضلع روبرو.",
                  "چهار نقطه تلاقی = نقاط طلایی.",
                  "شمال‌شرقی‌ترین = Super Gold Point.",
                ].map((t, n) => (
                  <li key={t} className="flex gap-3 rounded-xl bg-surface p-3 shadow-[var(--shadow-border)]">
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-leather text-sm text-paper">
                      {n + 1}
                    </span>
                    <span className="leading-7">{t}</span>
                  </li>
                ))}
              </ol>
              <p className="text-sm leading-7 text-muted">
                ترنج مرکزی تا دو نقطه طلایی را به خود اختصاص می‌دهد. این توانایی بستری برای تمام ترکیب‌بندی‌های بعدی است.
              </p>
            </div>
          </div>
        </section>

        <section id="threelines" className="spread space-y-8 py-10">
          <SectionHead
            kicker="قانون سه خط پایه — ابداع مؤلف"
            title="منحنی کامل، اس‌شکل، منحنی کوتاه"
            body="ساده‌ترین فرمول ترسیم اسلیمی. سه شکل پایه معرق: ترنج، حاشیه، لچک. اگر سه خط را بدون تغییر پشت‌سرهم وصل کنیم، یک‌چهارم ترنج ساخته می‌شود."
          />
          <ThreeLinesDiagram />
          <div className="grid gap-4 lg:grid-cols-3">
            <Figure
              src="/notebook/01_054958.jpg"
              alt="صفحه دفتر استاد: سه شکل پایه ترنج، حاشیه و لچک"
              caption="از دفتر استاد: سه شکل پایه — ترنج، حاشیه، لچک."
            />
            <Figure
              src="/notebook/03_055138.jpg"
              alt="صفحه دفتر استاد با سه خط پایه شماره‌گذاری‌شده"
              caption="خط ۱ منحنی کامل، خط ۲ اس‌شکل، خط ۳ کوتاه."
            />
            <Figure
              src="/notebook/07_060140.jpg"
              alt="ترسیم یک‌چهارم ترنج در دفتر استاد"
              caption="اتصال سه خط بدون شکست = یک‌چهارم ترنج."
            />
          </div>
          <ToranjCompare />
        </section>

        <section id="composition" className="spread space-y-8 py-10">
          <SectionHead
            kicker="کادر ایرانی کلاسیک"
            title="ترنج، لچک، گوشه، حاشیه"
            body="همان قانونی که در کاشی پخته و قالی ایرانی دیده می‌شود، اسکلت بسیاری از طرح‌های کاربردی معرق چرم است."
          />
          <div className="grid items-start gap-6 lg:grid-cols-2">
            <CompositionDiagram />
            <Figure
              src="/images/box.jpg"
              alt="جعبه چوبی با معرق چرم تمام‌شده شامل ترنج و حاشیه"
              caption="اثر نهایی روی پایه‌کار چوبی پس از خال طلایی و روسازی."
            />
          </div>
        </section>

        <section id="elements" className="spread space-y-8 py-10">
          <SectionHead
            kicker="مفردات اسلیمی"
            title="از شمسه تا کتیبه — موتیف‌های کاربردی"
            body="هم کتیبه و هم انواع نشان از جمله موتیف‌های اصلی کاربردی در معرق چرم هستند."
          />
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-3 sm:grid-cols-2">
              {ELEMENTS.map((e) => (
                <article key={e.t} className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
                  <h3 className="font-display text-lg text-leather">{e.t}</h3>
                  <p className="mt-2 text-sm leading-7 text-muted">{e.d}</p>
                </article>
              ))}
            </div>
            <Figure
              src="/images/motifs.jpg"
              alt="موتیف‌های بریده‌شده چرمی: شمسه، کتیبه، گوشه و یک‌چهارم ترنج"
              caption="قطعات آماده چیدمان: شمسه ۸پر، کتیبه کشیده، گوشه و ربع ترنج."
            />
          </div>
        </section>

        <section id="leather" className="spread space-y-8 py-10">
          <SectionHead
            kicker="فصل ۳ — شناخت چرم"
            title="گروه دو، ماده اصلی است"
            body="گروه یک (میشین، آستر، نبوک، رویه، کراست) لطیف است. گروه دو — کفی، زیره و کروپون از گاو و شتر — پایه صنعت نوین معرق چرم است."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <Figure
              src="/images/leather.jpg"
              alt="طاقه چرم کفی با رخ صاف و لش پرزدار"
              caption="رخ = صورت صاف. لش = پشت پرزدار. لویس فقط از سمت لش."
            />
            <LeatherCrossSection />
          </div>
          <AdlChart />
          <p className="text-sm leading-7 text-muted">
            چرم بز (کراس / فوتی) در استاندارد به‌عنوان یکی از دو نوع اصلی آمده و برای نقش‌اندازی ظریف مناسب است؛ اما قطعات، تریشه و موتیف اصلی از چرم کفی بریده می‌شوند. فضای مثبت = قسمت پر طرح؛ فضای منفی = خالی‌ها — بعضی فقط خط‌انداز می‌خواهند.
          </p>
        </section>

        <section id="tools" className="spread space-y-8 py-10">
          <SectionHead
            kicker="فصل ۵ — ابزارشناسی"
            title="ابزار درست، نصف مهارت است"
            body="برای ظریف‌کاری تیغ جراحی یا شیفره؛ برای کار معمولی کاتر. تولید تریشه ۱ میلی‌متری فقط با تمرکز کامل و برش تک‌جهته."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <Figure
              src="/images/tools.jpg"
              alt="مجموعه ابزار کارگاه معرق چرم"
              caption="کاتر، تیغ جراحی، خط‌کش سنگین، مشته، سمبه برشی و چسب تماسی."
            />
            <ul className="grid grid-cols-2 gap-2">
              {TOOLS.map(([n, d]) => (
                <li key={n} className="rounded-xl bg-surface p-3 shadow-[var(--shadow-border)]">
                  <p className="font-medium">{n}</p>
                  <p className="text-sm text-muted">{d}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-danger/30 bg-leather/10 p-4">
            <p className="font-medium text-leather">ایمنی برش تریشه</p>
            <p className="mt-2 text-sm leading-7 text-muted">
              تیغه موکت‌بر بی‌اندازه برنده است. خط‌کش سنگین مهار شود. حرکت تیغ فقط در یک جهت، بدون رفت‌وبرگشت.
              عیب «سر و سر» از فشار نامساوی است؛ «شکم‌دار شدن» از انحراف تیغ.
            </p>
          </div>
        </section>

        <section id="process" className="spread space-y-8 py-10">
          <SectionHead
            kicker="فصل ۶ تا ۹ — زنجیره اجرایی"
            title="سیزده مرحله که جابه‌جا نمی‌شوند"
            body="کیفیت نهایی فقط به نقش وابسته نیست؛ به ترتیب عملیات وابسته است. هر مرحله شرط مرحله بعد است."
          />
          <ProcessFlow active={step} onSelect={setStep} />
          <p className="rounded-xl bg-walnut px-4 py-3 text-sm leading-7 text-paper">{PROCESS_NOTES[step]}</p>
          <div className="grid gap-5 lg:grid-cols-2">
            <Figure
              src="/images/mashteh.jpg"
              alt="مشته‌زنی قطعات چرمی روی پایه‌کار"
              caption="مشته‌زنی بخشی از قوام‌آوری است، نه کوبیدن سطح."
            />
            <Figure
              src="/images/transfer.jpg"
              alt="انتقال الگوی کاغذی سه خط پایه روی چرم"
              caption="از طرح تا چرم: اسکیل، الگوی کاغذی، تفکیک مثبت/منفی، انتقال با کاربن یا سوزن‌زنی."
            />
          </div>
        </section>

        <section id="weave" className="spread space-y-8 py-10">
          <SectionHead
            kicker="اجرای موتیف‌ها و اجرای بافت یا پیچ"
            title="نوار یک‌میلیمتری زبان بصری این صنعت است"
            body="تریشه مسیر اسلیمی را پر می‌کند. فضاهای خالی بین پیچش‌ها محل دقیق بافت یا پیچ‌اند. اصطلاح دوخت تریشه در این کتاب جایی ندارد."
          />
          <Figure
            src="/images/weave.jpg"
            alt="کلوزآپ بافت تریشه یک‌میلیمتری در فضای منفی اسلیمی"
            caption="یکنواختی عرض، مسیر مطابق طرح، بدون برجستگی ناخواسته."
            className="lg:max-w-none"
          />
        </section>

        <section id="chemistry" className="spread space-y-8 py-10">
          <SectionHead
            kicker="اتصال و تثبیت"
            title="چسب آهن، رزین ۱:۶، دونَم"
            body="چسب آهن ماده متصل‌کننده اصلی است. رزین زیرکار پس از تکمیل ساختار می‌آید. غوطه‌وری ۱:۵ مرحله دیگری است و نباید با رزین مخلوط فهمیده شود."
          />
          <div className="grid gap-4 lg:grid-cols-2">
            <article className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
              <h3 className="font-display text-xl">چسب آهن ۸۸۸۸</h3>
              <p className="mt-3 text-sm leading-8 text-muted">
                هر دو سطح کاملاً تمیز، مسطح و آغشته شوند و پیش از چسباندن کاملاً خشک باشند. سپس فشار، ضربه و گاه کمی گرم کردن. چسب زیاد باعث لغزش طرح می‌شود؛ چسب کم باعث جداشدن.
              </p>
            </article>
            <ResinRatios />
          </div>
        </section>

        <section id="finish" className="spread space-y-8 py-10">
          <SectionHead
            kicker="فصل ۸ و ۹ — رنگ، خال، روسازی"
            title="رنگ مخصوص، خال طلایی، پوشش نهایی"
            body="رنگ‌آمیزی پس از خشکی کامل است. خال‌زنی مرحله مستقل پیش از روسازی است. روغن‌دهی پس از رنگ از کتاب حذف شده."
          />
          <div className="grid gap-5 lg:grid-cols-2">
            <Figure
              src="/images/color.jpg"
              alt="ساخت رنگ مخصوص معرق چرم در بطری شفاف"
              caption="ساخت در ظرف شفاف دردار؛ تست تدریجی روی نمونه چرم."
            />
            <ColorRecipeDiagram />
          </div>
        </section>

        <section id="safety" className="spread space-y-8 py-10">
          <SectionHead
            kicker="کارگاه"
            title="ایمنی، ارزیابی، و مسیر هنرجو"
            body="کار با تیغ دور از بدن. تهویه هنگام چسب آهن و تینر. دستکش و ماسک. ضایعات تیز فوراً جمع شود."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              ["برش", "تمرکز کامل، جهت دور از بدن، تیغه سالم."],
              ["چسب و رنگ", "ماسک، دستکش، تهویه اجباری."],
              ["میز", "نور یکنواخت، صفحه صاف، سطل ضایعات جدا."],
              ["ترتیب", "هرگز رنگ پیش از تثبیت و خشکی کامل."],
            ].map(([t, d]) => (
              <article key={t} className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
                <h3 className="font-medium text-leather">{t}</h3>
                <p className="mt-2 text-sm leading-7 text-muted">{d}</p>
              </article>
            ))}
          </div>
          <footer className="rounded-[28px] bg-walnut p-6 text-paper sm:p-8">
            <p className="text-sm text-brass">گروه خلاقیت‌های تجسمی ایده — عرصه سیمرغ — اصفهان</p>
            <p className="mt-2 font-display text-2xl">صنعت نوین معرق چرم</p>
            <p className="mt-3 max-w-2xl text-sm leading-8 text-paper/80">
              این برشور خلاصه کاربردی درسنامه است، نه جایگزین کتاب کامل. منبع: کتاب یکپارچه ده‌فصلی، نمودار گردشی ۱۳ مرحله، تعاریف فیکس‌شده و دیکته‌های دفتر استاد.
            </p>
            <p className="mt-4 text-xs text-paper/60">پدیدآورنده شیوه: استاد افشین خلیلی — ۹ مهر ۱۴۰۵</p>
          </footer>
        </section>
      </main>

      <div className="no-print fixed bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full bg-walnut/95 px-2 py-1.5 text-paper shadow-[var(--shadow-border)]">
        <Button
          variant="ghost"
          size="icon"
          className="text-paper hover:bg-paper/10"
          aria-label="بخش قبلی"
          onClick={() => scrollToId(NAV[Math.max(0, i - 1)]?.id ?? "cover")}
        >
          <ChevronRight />
        </Button>
        <span className="flex items-center gap-2 px-2 text-xs">
          <BookOpen className="size-3.5" />
          <span className="tabular-nums">
            {i + 1} / {NAV.length}
          </span>
        </span>
        <Button
          variant="ghost"
          size="icon"
          className="text-paper hover:bg-paper/10"
          aria-label="بخش بعدی"
          onClick={() => scrollToId(NAV[Math.min(NAV.length - 1, i + 1)]?.id ?? "safety")}
        >
          <ChevronLeft />
        </Button>
      </div>
    </div>
  );
}
