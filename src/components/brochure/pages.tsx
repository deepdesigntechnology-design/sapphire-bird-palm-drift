import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ELEMENTS, GLOSSARY, PAGES, PROCESS_NOTES, TOOLS, toFa, type PageId } from "@/lib/brochure";
import {
  AdlChart,
  ColorRecipeDiagram,
  CompositionDiagram,
  DistinctionGrid,
  ElementSet,
  GoldenPointsDiagram,
  LeatherCrossSection,
  ProcessFlow,
  ResinRatios,
  StripCutDiagram,
  ThreeLinesDiagram,
  ToranjCompare,
} from "./diagrams";

export function Figure({
  src,
  alt,
  caption,
  className,
  wide,
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  wide?: boolean;
}) {
  return (
    <figure className={cn("overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]", className)}>
      <img src={src} alt={alt} className={cn("w-full object-cover", wide ? "aspect-video" : "aspect-square sm:aspect-video")} />
      <figcaption className="px-4 py-3 text-sm leading-7 text-muted">{caption}</figcaption>
    </figure>
  );
}

function Head({ kicker, title, body }: { kicker: string; title: string; body: string }) {
  return (
    <header className="max-w-3xl">
      <p className="text-xs font-medium tracking-wide text-camel">{kicker}</p>
      <h2 className="mt-2 font-display text-3xl leading-snug text-ink sm:text-4xl">{title}</h2>
      <div className="ornament-rule my-4" />
      <p className="text-base leading-8 text-muted">{body}</p>
    </header>
  );
}

export function CoverPage({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-walnut">
      <img
        src="/images/cover.jpg"
        alt="جعبه چوبی تمام‌شده با معرق چرم، ترنج مرکزی و خال طلایی"
        className="aspect-square w-full object-cover sm:aspect-video"
      />
      <div className="absolute inset-0 bg-linear-to-t from-walnut via-walnut/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 space-y-4 p-5 sm:p-8">
        <p className="text-sm text-brass">گروه خلاقیت‌های تجسمی ایده — عرصه سیمرغ — اصفهان</p>
        <h1 className="font-display text-3xl leading-tight text-paper sm:text-5xl">
          برشور مصور کاربردی
          <span className="mt-2 block text-brass">صنعت نوین معرق چرم</span>
        </h1>
        <p className="max-w-xl text-sm leading-8 text-paper/80 sm:text-base">
          راهنمای فشرده، شماتیک و تصویری کارگاه — دقیقاً منطبق بر درسنامه کتاب استاندارد شغل معرق‌کار چرم. پدیدآورنده
          شیوه: استاد افشین خلیلی.
        </p>
        <dl className="grid max-w-2xl grid-cols-2 gap-2 sm:grid-cols-4">
          {[
            ["کد شغل", "۱-۰۲-۰۰-۷۷-۶۵۳۷"],
            ["مدت دوره", "۱۰۹ ساعت"],
            ["نظری / عملی", "۲۳ / ۸۶"],
            ["صفحات", toFa(PAGES.length)],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg bg-paper/10 p-3">
              <dt className="text-xs text-paper/60">{k}</dt>
              <dd className="mt-1 font-medium text-paper">{v}</dd>
            </div>
          ))}
        </dl>
        <Button onClick={onOpen}>ورق بزنید</Button>
      </div>
    </div>
  );
}

export function ContentsPage({ go }: { go: (id: PageId) => void }) {
  return (
    <div className="space-y-8">
      <Head
        kicker="نقشه برشور"
        title="هفده صفحه، از جلد تا ایمنی"
        body="هر صفحه یک آموزه فیکس‌شده کتاب است. شماتیک‌ها از دفتر استاد استخراج شده‌اند."
      />
      <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {PAGES.map((p, i) => (
          <li key={p.id}>
            <button
              key={p.id}
              type="button"
              data-page={p.id}
              onClick={() => go(p.id)}
              className="flex h-14 w-full items-center justify-between rounded-lg bg-surface px-4 text-right shadow-[var(--shadow-border)] hover:bg-camel/15"
            >
              <span className="font-medium">{p.label}</span>
              <span className="text-sm text-muted tabular-nums">{toFa(i + 1)}</span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function IdentityPage() {
  return (
    <div className="space-y-8">
      <Head
        kicker="فصل ۱ — آگاهی و مهارت‌های پیش‌نیاز"
        title="این صنعت چیست و با سوخت چرم چه فرقی دارد؟"
        body="مستندات پروژه، خاستگاه شکل‌گیری این مسیر را در اصفهان و نیمه دهه ۱۳۷۰ نشان می‌دهد. صنعت نوین معرق چرم در ادامه به‌صورت هنرـ‌صنعتی مستقل با روش‌های اجرایی و نظام آموزشی مشخص تدوین شده است."
      />
      <DistinctionGrid />
      <div className="grid gap-5 lg:grid-cols-2">
        <Figure
          src="/images/workshop.jpg"
          alt="میز کار معرق چرم با پایه‌کار چوبی و قطعات چرمی"
          caption="اثر می‌تواند روی زیرکار مناسب و پذیرنده چسب، مانند چوب یا سفال، اجرا شود؛ این ویژگی کاربردی، هویت مستقل صنعت را تغییر نمی‌دهد."
        />
        <div className="space-y-4 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
          <h3 className="font-display text-xl">سه روش اجرایی اختصاصی</h3>
          <p className="leading-8 text-muted">
            پیچ/بافت تریشه؛ ساخت شکل‌های بسته با دورگیری (فارسی‌بُر)؛ و برجسته‌سازی چندسطحی به شیوه مطبق. این سه روش، ستون‌های فنی اصلی صنعت‌اند و در صفحه مستقل روش‌ها معرفی می‌شوند.
          </p>
          <p className="rounded-md bg-leather/10 px-3 py-2 text-sm leading-7 text-leather">
            ترتیب اجباری: اجرا ← تثبیت ← رنگ‌آمیزی. عبارت صحیح: «اجرای موتیف‌ها و اجرای بافت یا پیچ».
          </p>
        </div>
      </div>
    </div>
  );
}

export function GlossaryPage() {
  return (
    <div className="space-y-8">
      <Head
        kicker="اصطلاحات فیکس‌شده"
        title="واژه‌نامه کارگاهی که نباید جابه‌جا شود"
        body="این تعاریف از متون دیکته‌شده استاد تثبیت شده‌اند. عبارت «تریشه‌دوزی» در کتاب جایی ندارد."
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {GLOSSARY.map((g) => (
          <article key={g.t} className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
            <h3 className="font-display text-lg text-leather">{g.t}</h3>
            <p className="mt-2 text-sm leading-7 text-muted">{g.d}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function VisualPage() {
  return (
    <div className="space-y-8">
      <Head
        kicker="فصل ۳ — مبانی هنرهای تجسمی و طراحی نقوش"
        title="زبان بصری: عناصر و اصول ترکیب‌بندی"
        body="پیش از طراحی نقوش و الگوسازی، هنرجو باید عناصر سازنده تصویر و روابط میان آن‌ها را بشناسد. این مبانی عمومی هنرهای تجسمی‌اند؛ نقاط طلایی و سه خط پایه در صفحات جداگانه به‌عنوان آموزه‌های اختصاصی مؤلف معرفی می‌شوند."
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {[
          ["نقطه", "نشانه دیداری کوچک که می‌تواند کانون توجه یا آغاز سازمان‌دهی نقش باشد."],
          ["خط", "مسیر حرکت نقطه؛ با جهت، ضخامت، طول و کیفیت مستقیم یا منحنی."],
          ["سطح و شکل", "محدوده دوبعدی که با خط، لبه، رنگ یا تفاوت بافت تعریف می‌شود."],
          ["فرم و حجم", "ساختار سه‌بعدی یا القای حجم با نور، سایه و اختلاف سطح."],
          ["رنگ", "دارای فام، ارزش روشنایی و اشباع؛ رابطه رنگ‌ها بر خوانایی نقش اثر می‌گذارد."],
          ["بافت", "کیفیت دیداری یا لمسی سطح که می‌تواند از خود ماده و شیوه اجرا پدید آید."],
          ["فضا", "رابطه عناصر با محیط پیرامون، فاصله‌ها و عمق؛ شامل فضای مثبت و منفی."],
          ["اندازه و جهت", "مقیاس و راستای عناصر که بر حرکت چشم و سلسله‌مراتب بصری اثر می‌گذارند."],
        ].map(([t, d]) => (
          <article key={t} className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
            <h3 className="font-display text-lg text-leather">{t}</h3>
            <p className="mt-2 text-sm leading-7 text-muted">{d}</p>
          </article>
        ))}
      </div>
      <div className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
        <h3 className="font-display text-xl text-leather">اصول سازمان‌دهی و ترکیب‌بندی</h3>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {[
            ["تعادل", "توزیع سنجیده وزن دیداری؛ متقارن، نامتقارن یا شعاعی."],
            ["تناسب و مقیاس", "رابطه اندازه اجزا با یکدیگر و با کادر یا زیرکار."],
            ["ریتم و تکرار", "تکرار منظم یا متنوع عناصر برای ایجاد حرکت و پیوستگی."],
            ["تأکید و سلسله‌مراتب", "تعیین کانون اصلی و ترتیب هدایت نگاه."],
            ["کنتراست", "ایجاد تمایز برای خوانایی و برجسته‌شدن عناصر."],
            ["وحدت و هماهنگی", "پیوند اجزا در یک کل منسجم بدون یکنواختی ملال‌آور."],
          ].map(([t, d]) => (
            <li key={t} className="rounded-lg border border-line p-3 text-sm leading-7">
              <strong>{t}:</strong> {d}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <article className="rounded-xl border border-line p-4">
          <h3 className="font-medium text-leather">فضای مثبت</h3>
          <p className="mt-2 text-sm leading-7 text-muted">بخش‌هایی که عناصر یا قطعات طرح در آن‌ها قرار می‌گیرند.</p>
        </article>
        <article className="rounded-xl border border-line p-4">
          <h3 className="font-medium text-leather">فضای منفی</h3>
          <p className="mt-2 text-sm leading-7 text-muted">فاصله‌ها و خلأهای پیرامون یا میان عناصر؛ شکل و پیوستگی آن به‌اندازه خود نقش اهمیت دارد.</p>
        </article>
      </div>
    </div>
  );
}

export function GoldenPage() {
  return (
    <div className="space-y-8">
      <Head
        kicker="آموزه اختصاصی مؤلف — نقاط طلایی کادر"
        title="نقاط طلایی کادر و Super Gold Point"
        body="هر ضلع با دو نشانه به سه قسمت مساوی تقسیم می‌شود. خطوط فرضی به نقطه متناظر ضلع روبرو وصل می‌شوند. تلاقی، چهار نقطه طلایی است."
      />
      <div className="grid items-start gap-6 lg:grid-cols-2">
        <GoldenPointsDiagram />
        <ol className="space-y-3">
          {[
            "هر ضلع کادر (مربع یا مستطیل) به سه قسمت مساوی.",
            "از هر نشانه، خط فرضی به نقطه متناظر ضلع روبرو.",
            "چهار نقطه تلاقی = نقاط طلایی.",
            "شمال‌شرقی‌ترین = Super Gold Point.",
            "ترنج مرکزی تا دو نقطه طلایی را به خود اختصاص می‌دهد.",
          ].map((t, n) => (
            <li key={t} className="flex gap-3 rounded-xl bg-surface p-3 shadow-[var(--shadow-border)]">
              <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-leather text-sm text-paper">
                {toFa(n + 1)}
              </span>
              <span className="leading-7">{t}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export function ThreeLinesPage() {
  return (
    <div className="space-y-8">
      <Head
        kicker="قانون سه خط پایه — ابداع مؤلف"
        title="منحنی کامل، اس‌شکل، منحنی کوتاه"
        body="ساده‌ترین فرمول ترسیم اسلیمی. سه شکل پایه معرق: ترنج، حاشیه، لچک. اگر سه خط را بدون تغییر پشت‌سرهم وصل کنیم، یک‌چهارم ترنج ساخته می‌شود."
      />
      <ThreeLinesDiagram />
      <div className="grid gap-4 sm:grid-cols-3">
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
          src="/notebook/04_055228.jpg"
          alt="ادامه ترسیم سه خط در دفتر استاد"
          caption="همان سه خط، با مسیر اتصال به‌سوی ربع ترنج."
        />
      </div>
    </div>
  );
}

export function ToranjPage() {
  return (
    <div className="space-y-8">
      <Head
        kicker="از ربع تا کامل"
        title="یک‌چهارم ترنج و دو گونه کلاسیک"
        body="چرخش نود درجه × چهار = ترنج کامل. ترنج سینه کبوتری محدب است؛ ترنج شاهی در نقاط مشخص به درون برمی‌گردد."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        <Figure
          src="/notebook/07_060140.jpg"
          alt="ترسیم یک‌چهارم ترنج در دفتر استاد"
          caption="اتصال سه خط بدون شکست = یک‌چهارم ترنج."
        />
        <Figure
          src="/notebook/06_060030.jpg"
          alt="ترنج کامل با تقارن چهارگانه در دفتر استاد"
          caption="تکثیر چهارگانه همان ربع، با ترنج درونی کوچک‌تر."
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <Figure src="/notebook/02_055024.jpg" alt="تمرین ساخت ربع در دفتر" caption="تمرین ساخت از مرکز کادر." />
        <Figure src="/notebook/08_060307.jpg" alt="ربع ترنج تکمیل‌شده" caption="ربع با پیچش‌های داخلی." />
        <Figure src="/notebook/10_060403.jpg" alt="گسترش طرح اسلیمی" caption="گسترش همان قانون به طرح پرکار." />
      </div>
      <ToranjCompare />
    </div>
  );
}

export function CompositionPage() {
  return (
    <div className="space-y-8">
      <Head
        kicker="کادر ایرانی کلاسیک"
        title="ترنج، لچک، گوشه، حاشیه"
        body="همان قانونی که در کاشی پخته و قالی ایرانی دیده می‌شود، اسکلت بسیاری از طرح‌های کاربردی معرق چرم است."
      />
      <div className="grid items-start gap-6 lg:grid-cols-2">
        <CompositionDiagram />
        <Figure
          src="/images/panel.jpg"
          alt="تابلوی مربعی معرق چرم با ترنج مرکزی، لچک، گوشه و حاشیه"
          caption="اثر نهایی: ترنج در مرکز، لچک و گوشه در چهار سو، حاشیه کادر را می‌بندد، خال طلایی روی مسیر اسلیمی."
        />
      </div>
      <Figure
        src="/images/box.jpg"
        alt="جعبه چوبی با معرق چرم تمام‌شده"
        caption="همان ترکیب‌بندی روی زیرکار حجمی؛ شیوه نصب اثر، هویت مستقل صنعت را تغییر نمی‌دهد."
        wide
      />
    </div>
  );
}

export function ElementsPage() {
  return (
    <div className="space-y-8">
      <Head
        kicker="مفردات اسلیمی"
        title="از شمسه تا کتیبه — موتیف‌های کاربردی"
        body="هم کتیبه و هم انواع نشان از جمله موتیف‌های اصلی کاربردی در معرق چرم هستند."
      />
      <ElementSet />
      <div className="grid gap-5 lg:grid-cols-2">
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
          alt="موتیف‌های بریده‌شده چرمی"
          caption="قطعات آماده چیدمان: شمسه، کتیبه، گوشه و ربع ترنج."
        />
      </div>
    </div>
  );
}

export function LeatherPage() {
  return (
    <div className="space-y-8">
      <Head
        kicker="فصل ۲ — شناخت چرم، مواد اولیه و اصطلاحات تخصصی"
        title="گروه دو، ماده اصلی است"
        body="گروه یک (میشین، آستر، نبوک، رویه، کراست) لطیف است. گروه دو — کفی، زیره و کروپون از گاو و شتر — پایه این صنعت است."
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
        چرم بز (کراس / فوتی) در استاندارد به‌عنوان یکی از دو نوع اصلی آمده و برای نقش‌اندازی ظریف مناسب است؛ اما قطعات،
        تریشه و موتیف اصلی از چرم کفی بریده می‌شوند. فضای مثبت = قسمت پر طرح؛ فضای منفی = خالی‌ها.
      </p>
    </div>
  );
}

export function ToolsPage() {
  return (
    <div className="space-y-8">
      <Head
        kicker="فصل ۵ — ابزارشناسی"
        title="ابزار درست، نصف مهارت است"
        body="برای ظریف‌کاری تیغ جراحی یا شیفره؛ برای کار معمولی کاتر. تولید تریشه ۱ میلی‌متری فقط با تمرکز کامل و برش تک‌جهته."
      />
      <Figure
        src="/images/bench.jpg"
        alt="میز کار با مشته، خط‌کش، کاتر و الگوی کاغذی"
        caption="چیدمان کارگاهی: مشته برای قوام، خط‌کش سنگین برای مهار تریشه، الگوی کاغذی برای انتقال."
        wide
      />
      <div className="grid gap-5 lg:grid-cols-2">
        <Figure src="/images/tools.jpg" alt="مجموعه ابزار کارگاه معرق چرم" caption="کاتر، تیغ جراحی، خط‌کش، مشته، سمبه و چسب تماسی." />
        <ul className="grid grid-cols-2 gap-2">
          {TOOLS.map(([n, d]) => (
            <li key={n} className="rounded-xl bg-surface p-3 shadow-[var(--shadow-border)]">
              <p className="font-medium">{n}</p>
              <p className="text-sm text-muted">{d}</p>
            </li>
          ))}
        </ul>
      </div>
      <StripCutDiagram />
      <div className="rounded-xl border border-danger/30 bg-leather/10 p-4">
        <p className="font-medium text-leather">ایمنی برش تریشه</p>
        <p className="mt-2 text-sm leading-7 text-muted">
          تیغه موکت‌بر بی‌اندازه برنده است. خط‌کش سنگین مهار شود. حرکت تیغ فقط در یک جهت، بدون رفت‌وبرگشت.
        </p>
      </div>
    </div>
  );
}

export function ProcessPage({ step, setStep }: { step: number; setStep: (n: number) => void }) {
  return (
    <div className="space-y-8">
      <Head
        kicker="فصل‌های ۶ تا ۸ — زنجیره اجرایی"
        title="۱۲ گام اصلی اجرای اثر"
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
          alt="انتقال الگوی کاغذی روی چرم"
          caption="از طرح تا چرم: اسکیل، الگوی کاغذی، تفکیک مثبت/منفی، انتقال با کاربن یا سوزن‌زنی."
        />
      </div>
    </div>
  );
}

export function TechniquesPage() {
  return (
    <div className="space-y-8">
      <Head
        kicker="فصل ۷ — سه روش اجرایی اختصاصی"
        title="سه ستون فنی صنعت نوین معرق چرم"
        body="این سه روش، متمایز و مکمل‌اند. پیچ و بافت تریشه دو روش جدا نیستند؛ دو صورت اجرای یک روش واحدند."
      />
      <div className="grid gap-4 lg:grid-cols-3">
        <article className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
          <span className="font-display text-2xl text-brass">۱</span>
          <h3 className="mt-2 font-display text-xl text-leather">پیچ/بافت تریشه</h3>
          <p className="mt-3 text-sm leading-8 text-muted">نوار تریشه حدود یک میلی‌متر در مسیرهای تعریف‌شده طرح پیچانده یا بافته می‌شود. بافت منظم، نامنظم و درختی از صورت‌های اجرایی این روش‌اند.</p>
        </article>
        <article className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
          <span className="font-display text-2xl text-brass">۲</span>
          <h3 className="mt-2 font-display text-xl text-leather">شکل‌های بسته با دورگیری (فارسی‌بُر)</h3>
          <p className="mt-3 text-sm leading-8 text-muted">فرم‌های بسته با نوارهای دورگیر و اتصال فارسی‌بُر ساخته می‌شوند. عرض‌های آموزشی حدود ۲ تا ۵ میلی‌متر است و زاویه برش با اندازه و وضعیت قطعه تغییر می‌کند.</p>
        </article>
        <article className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
          <span className="font-display text-2xl text-brass">۳</span>
          <h3 className="mt-2 font-display text-xl text-leather">برجسته‌سازی چندسطحی به شیوه مطبق</h3>
          <p className="mt-3 text-sm leading-8 text-muted">با لایه‌گذاری فوم و کراست نازک بزی، اختلاف سطح و برجستگی ایجاد می‌شود. ابزار مخط برای شکل‌دهی و خواباندن لایه‌ها در این روش به‌کار می‌رود؛ جزئیات اجرا باید طبق آموزش مؤلف رعایت شود.</p>
        </article>
      </div>
    </div>
  );
}

export function WeavePage() {
  return (
    <div className="space-y-8">
      <Head
        kicker="اجرای موتیف‌ها و اجرای بافت یا پیچ"
        title="نوار یک‌میلیمتری زبان بصری این صنعت است"
        body="تریشه مسیر اسلیمی را پر می‌کند. فضاهای خالی بین پیچش‌ها محل دقیق بافت یا پیچ‌اند. اصطلاح دوخت تریشه در این کتاب جایی ندارد."
      />
      <Figure
        src="/images/weave.jpg"
        alt="بافت تریشه یک‌میلیمتری در فضای منفی اسلیمی"
        caption="یکنواختی عرض، مسیر مطابق طرح، بدون برجستگی ناخواسته."
        wide
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <Figure src="/notebook/05_055352.jpg" alt="گسترش سه خط در دفتر" caption="فضاهای خالی میان پیچش‌ها، محل تریشه است." />
        <Figure src="/notebook/09_060341.jpg" alt="ربع ترنج با جزئیات داخلی" caption="جزئیات داخلی همان قانون سه خط را تکرار می‌کند." />
      </div>
    </div>
  );
}

export function FinishPage() {
  return (
    <div className="space-y-8">
      <Head
        kicker="فصل ۷ — تثبیت، رنگ‌آمیزی و روسازی"
        title="چسب آهن، رزین ۱:۶، رنگ مخصوص، خال طلایی"
        body="چسب آهن ماده متصل‌کننده اصلی است. رنگ‌آمیزی پس از خشکی کامل. خال‌زنی مرحله مستقل پیش از روسازی است. روغن‌دهی پس از رنگ از کتاب حذف شده."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
          <h3 className="font-display text-xl">چسب آهن ۸۸۸۸</h3>
          <p className="mt-3 text-sm leading-8 text-muted">
            هر دو سطح کاملاً تمیز، مسطح و آغشته شوند و پیش از چسباندن کاملاً خشک باشند. سپس فشار، ضربه و گاه کمی گرم کردن.
            چسب زیاد باعث لغزش طرح می‌شود؛ چسب کم باعث جداشدن.
          </p>
        </article>
        <ResinRatios />
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        <Figure
          src="/images/color.jpg"
          alt="ساخت رنگ مخصوص معرق چرم در بطری شفاف"
          caption="ساخت در ظرف شفاف دردار؛ تست تدریجی روی نمونه چرم."
        />
        <ColorRecipeDiagram />
      </div>
      <Figure
        src="/images/gold.jpg"
        alt="کلوزآپ خال‌های طلایی ویترای روی مسیر اسلیمی"
        caption="خال‌زنی با خمیر دورگیر طلایی ویترای — مرحله مستقل، نه خودِ روسازی."
        wide
      />
    </div>
  );
}

export function SafetyPage() {
  return (
    <div className="space-y-8">
      <Head
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
      <footer className="rounded-xl bg-walnut p-6 text-paper sm:p-8">
        <p className="text-sm text-brass">گروه خلاقیت‌های تجسمی ایده — عرصه سیمرغ — اصفهان</p>
        <p className="mt-2 font-display text-2xl">صنعت نوین معرق چرم</p>
        <p className="mt-3 max-w-2xl text-sm leading-8 text-paper/80">
          این برشور خلاصه کاربردی درسنامه است، نه جایگزین کتاب کامل. منبع: ساختار مرجع هشت‌فصلی کتاب، زنجیره ۱۲ گام اصلی،
          تعاریف فیکس‌شده و دیکته‌های دفتر استاد.
        </p>
        <p className="mt-4 text-xs text-paper/60">پدیدآورنده شیوه: استاد افشین خلیلی</p>
      </footer>
    </div>
  );
}
