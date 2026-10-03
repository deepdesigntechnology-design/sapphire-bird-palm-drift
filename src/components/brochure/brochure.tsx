import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { BookOpen, ChevronLeft, ChevronRight, Menu, Printer, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PAGES, toFa, type PageId } from "@/lib/brochure";
import {
  CompositionPage,
  ContentsPage,
  CoverPage,
  ElementsPage,
  FinishPage,
  GlossaryPage,
  GoldenPage,
  IdentityPage,
  LeatherPage,
  ProcessPage,
  SafetyPage,
  ThreeLinesPage,
  ToolsPage,
  ToranjPage,
  WeavePage,
} from "./pages";

function PrintAll({
  step,
  setStep,
  go,
}: {
  step: number;
  setStep: (n: number) => void;
  go: (id: PageId) => void;
}) {
  return (
    <div className="space-y-16">
      <section className="print-spread">
        <CoverPage onOpen={() => go("contents")} />
      </section>
      <section className="print-spread">
        <ContentsPage go={go} />
      </section>
      <section className="print-spread">
        <IdentityPage />
      </section>
      <section className="print-spread">
        <GlossaryPage />
      </section>
      <section className="print-spread">
        <GoldenPage />
      </section>
      <section className="print-spread">
        <ThreeLinesPage />
      </section>
      <section className="print-spread">
        <ToranjPage />
      </section>
      <section className="print-spread">
        <CompositionPage />
      </section>
      <section className="print-spread">
        <ElementsPage />
      </section>
      <section className="print-spread">
        <LeatherPage />
      </section>
      <section className="print-spread">
        <ToolsPage />
      </section>
      <section className="print-spread">
        <ProcessPage step={step} setStep={setStep} />
      </section>
      <section className="print-spread">
        <WeavePage />
      </section>
      <section className="print-spread">
        <FinishPage />
      </section>
      <section className="print-spread">
        <SafetyPage />
      </section>
    </div>
  );
}

export function Brochure() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [printing, setPrinting] = useState(false);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const page = PAGES[index] ?? PAGES[0];

  const goIndex = (next: number) => {
    const n = Math.min(PAGES.length - 1, Math.max(0, next));
    setIndex(n);
    const id = PAGES[n]?.id;
    if (id) history.replaceState(null, "", `#${id}`);
  };

  const go = (id: PageId) => {
    const i = PAGES.findIndex((p) => p.id === id);
    if (i >= 0) goIndex(i);
  };

  useLayoutEffect(() => {
    const apply = () => {
      const raw = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      const i = PAGES.findIndex((p) => p.id === raw);
      if (i >= 0) setIndex(i);
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  useEffect(() => {
    const onBefore = () => setPrinting(true);
    const onAfter = () => setPrinting(false);
    window.addEventListener("beforeprint", onBefore);
    window.addEventListener("afterprint", onAfter);
    return () => {
      window.removeEventListener("beforeprint", onBefore);
      window.removeEventListener("afterprint", onAfter);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [index]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goIndex(index + 1);
      if (e.key === "ArrowRight") goIndex(index - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  const onTouchStart = (e: React.TouchEvent) => {
    const t = e.changedTouches[0];
    if (t) touch.current = { x: t.clientX, y: t.clientY };
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const t = e.changedTouches[0];
    if (!t || !touch.current) return;
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    touch.current = null;
    if (Math.abs(dx) < 56 || Math.abs(dx) < Math.abs(dy)) return;
    if (dx < 0) goIndex(index + 1);
    else goIndex(index - 1);
  };

  const inner = (() => {
    switch (page.id) {
      case "cover":
        return <CoverPage onOpen={() => goIndex(1)} />;
      case "contents":
        return <ContentsPage go={go} />;
      case "identity":
        return <IdentityPage />;
      case "glossary":
        return <GlossaryPage />;
      case "golden":
        return <GoldenPage />;
      case "threelines":
        return <ThreeLinesPage />;
      case "toranj":
        return <ToranjPage />;
      case "composition":
        return <CompositionPage />;
      case "elements":
        return <ElementsPage />;
      case "leather":
        return <LeatherPage />;
      case "tools":
        return <ToolsPage />;
      case "process":
        return <ProcessPage step={step} setStep={setStep} />;
      case "weave":
        return <WeavePage />;
      case "finish":
        return <FinishPage />;
      case "safety":
        return <SafetyPage />;
      default:
        return null;
    }
  })();

  return (
    <div className="flex min-h-dvh flex-col">
      <nav className="no-print sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center gap-2 px-3 py-2 sm:px-6">
          <Button variant="ghost" size="icon" aria-label="فهرست" onClick={() => setOpen(true)}>
            <Menu />
          </Button>
          <div className="min-w-0 flex-1">
            <p className="truncate font-display text-sm text-ink">برشور آموزشی صنعت نوین معرق چرم</p>
            <p className="truncate text-xs text-muted">{page.label}</p>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              setPrinting(true);
              requestAnimationFrame(() => window.print());
            }}
          >
            <Printer />
            چاپ
          </Button>
        </div>
      </nav>

      {open ? (
        <div className="no-print fixed inset-0 z-50 bg-walnut/40" onClick={() => setOpen(false)}>
          <aside
            className="absolute inset-y-0 right-0 flex w-80 max-w-full flex-col bg-paper p-4 shadow-[var(--shadow-border)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="font-display text-lg">فهرست برشور</p>
              <Button variant="ghost" size="icon" aria-label="بستن" onClick={() => setOpen(false)}>
                <X />
              </Button>
            </div>
            <div className="flex-1 space-y-1 overflow-y-auto">
              {PAGES.map((n, idx) => (
                <button
                  key={n.id}
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    goIndex(idx);
                  }}
                  className={cn(
                    "flex h-11 w-full items-center justify-between rounded-lg px-3 text-sm",
                    index === idx ? "bg-leather text-paper" : "hover:bg-camel/15",
                  )}
                >
                  <span>{n.label}</span>
                  <span className="tabular-nums opacity-60">{toFa(idx + 1)}</span>
                </button>
              ))}
            </div>
          </aside>
        </div>
      ) : null}

      <main
        className="mx-auto w-full max-w-5xl flex-1 px-3 py-4 sm:px-6"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <article key={page.id} className="page-enter print:hidden">
          {inner}
        </article>
        {printing ? (
          <div className="hidden print:block">
            <PrintAll step={step} setStep={setStep} go={go} />
          </div>
        ) : null}
      </main>

      <div className="no-print sticky bottom-0 z-30 border-t border-line bg-paper/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center gap-2 px-3 py-2 sm:px-6">
          <Button
            variant="ghost"
            size="icon"
            aria-label="صفحه بعد"
            disabled={index >= PAGES.length - 1}
            onClick={() => goIndex(index + 1)}
          >
            <ChevronLeft />
          </Button>
          <div className="no-scrollbar flex min-w-0 flex-1 items-center justify-center gap-1 overflow-x-auto">
            {PAGES.map((n, i) => (
              <button
                key={n.id}
                type="button"
                aria-label={n.label}
                onClick={() => goIndex(i)}
                className={cn(
                  "size-2.5 shrink-0 rounded-full",
                  i === index ? "bg-leather" : "bg-camel/40",
                )}
              />
            ))}
          </div>
          <span className="flex items-center gap-1 text-xs text-muted tabular-nums">
            <BookOpen className="size-3.5" />
            {toFa(index + 1)} / {toFa(PAGES.length)}
          </span>
          <Button
            variant="ghost"
            size="icon"
            aria-label="صفحه قبل"
            disabled={index <= 0}
            onClick={() => goIndex(index - 1)}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
