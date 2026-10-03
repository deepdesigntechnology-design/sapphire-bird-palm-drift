import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ChevronRight, i as Menu, o as ChevronLeft, r as Printer, s as BookOpen, t as X } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BcTiSLCM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,background-color,box-shadow,transform] duration-[var(--motion-quick)] ease-[var(--ease-out)] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass/70 focus-visible:ring-offset-2 focus-visible:ring-offset-paper active:scale-[0.98]", {
	variants: {
		variant: {
			default: "bg-leather text-paper shadow-sm hover:bg-walnut",
			secondary: "bg-surface text-ink border border-line hover:bg-camel/20",
			ghost: "text-ink hover:bg-camel/15",
			brass: "bg-brass text-walnut hover:bg-brass/90"
		},
		size: {
			default: "h-11 px-4 py-2",
			sm: "h-9 rounded-md px-3",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var FA = [
	"۰",
	"۱",
	"۲",
	"۳",
	"۴",
	"۵",
	"۶",
	"۷",
	"۸",
	"۹"
];
function toFa(n) {
	return String(n).replace(/\d/g, (d) => FA[Number(d)] ?? d);
}
var PAGES = [
	{
		id: "cover",
		label: "جلد"
	},
	{
		id: "contents",
		label: "فهرست"
	},
	{
		id: "identity",
		label: "هویت"
	},
	{
		id: "glossary",
		label: "واژه‌نامه"
	},
	{
		id: "golden",
		label: "نقاط طلایی"
	},
	{
		id: "threelines",
		label: "سه خط پایه"
	},
	{
		id: "toranj",
		label: "ترنج"
	},
	{
		id: "composition",
		label: "ترکیب‌بندی"
	},
	{
		id: "elements",
		label: "عناصر"
	},
	{
		id: "leather",
		label: "چرم"
	},
	{
		id: "tools",
		label: "ابزار"
	},
	{
		id: "process",
		label: "۱۳ مرحله"
	},
	{
		id: "weave",
		label: "بافت یا پیچ"
	},
	{
		id: "finish",
		label: "رنگ و روسازی"
	},
	{
		id: "safety",
		label: "ایمنی"
	}
];
var GLOSSARY = [
	{
		t: "موتیف",
		d: "واحد تزئینی مستقل چرمی که در طرح تکرار یا ترکیب می‌شود."
	},
	{
		t: "تریشه",
		d: "نوار باریک حدود ۱ میلی‌متر از چرم کفی برای بافت یا پیچ."
	},
	{
		t: "نوارکشی / دورگیری",
		d: "اجرای نوارهای چرمی در حاشیه یا کادر اثر."
	},
	{
		t: "مشته‌زنی دو مرحله‌ای",
		d: "فشرده‌سازی با مشته: اولیه پس از نصب، نهایی در دونَم."
	},
	{
		t: "دونَم",
		d: "حالت نیمه‌خشک و قابل شکل‌دهی پس از اعمال رزین زیرکار."
	},
	{
		t: "فارسی‌بر",
		d: "برش مورب لبه‌ها برای اتصال دقیق و بی‌درز."
	},
	{
		t: "خال طلایی",
		d: "خمیر دورگیر طلایی ویترای؛ جایگزین مدرن خمیر طلا."
	},
	{
		t: "طاقه",
		d: "هر ورق یا قواره کامل و یکپارچه چرم کفی."
	},
	{
		t: "رخ / لش",
		d: "رخ: سطح رویی و صورت چرم. لش: پشت پرزدار."
	},
	{
		t: "لویس",
		d: "نازک‌سازی کنترل‌شده چرم از سمت لش — هم فرایند و هم ابزار."
	},
	{
		t: "پایه کار",
		d: "چوب، سفال، سرامیک یا هر قطعه‌ای که چسب بپذیرد و استحکام کافی داشته باشد."
	},
	{
		t: "چسب آهن",
		d: "چسب صنعتی تماسی. مارک مرجع کارگاهی: پارس چهار هشت ۸۸۸۸."
	},
	{
		t: "منبت چرم",
		d: "قلمزنی با سمبه نقش‌انداز، بغل‌کوب و زمینه‌کوب + حکاکی با چاقو/کاتر؛ منبع موتیف."
	},
	{
		t: "سمبه",
		d: "نقش‌انداز برای اختلاف سطح رخ؛ برشی دایره‌ای برای سوراخ‌کاری."
	},
	{
		t: "تنالیته",
		d: "شدت اشباع رنگ و شکل رنگبندی."
	},
	{
		t: "کنتراست",
		d: "شدت اشباع نور؛ تیرگی و روشنی کلی و تضاد."
	}
];
var ELEMENTS = [
	{
		t: "لچک",
		d: "عناصر گوشه‌دار میان ترنج و گوشه‌های کادر."
	},
	{
		t: "گوشه",
		d: "ترکیب اسلیمی گوشه کادر؛ معمولاً از ۴ سانت به بالا."
	},
	{
		t: "حاشیه",
		d: "نوار پیرامونی تزئینی که کادر را با نقوش تکراری می‌بندد."
	},
	{
		t: "شمسه",
		d: "ستاره هندسی معمولاً ۸ضلعی؛ قابلیت تکرار بالا."
	},
	{
		t: "نشان اسلیمی",
		d: "ترنجی که فقط از دو طرف قرینه می‌شود، نه از چهار طرف."
	},
	{
		t: "کتیبه",
		d: "ترنج ساده و کشیده برای فضای خوشنویسی یا نگارگری."
	},
	{
		t: "مشبک",
		d: "برش متریال برای ایجاد شبکه‌های زیبا و جلوه بصری."
	}
];
var STEPS = [
	{
		n: 1,
		t: "آماده‌سازی پایه‌کار",
		d: "پاک‌سازی، سمباده، رفع چربی",
		phase: "run"
	},
	{
		n: 2,
		t: "چسب‌کاری یکنواخت",
		d: "چسب آهن ۸۸۸۸ + مکث حدود ۱۰ دقیقه",
		phase: "run"
	},
	{
		n: 3,
		t: "اجرای اولیه و مونتاژ",
		d: "نوارکشی + موتیف + بافت یا پیچ",
		phase: "run"
	},
	{
		n: 4,
		t: "قوام‌آوری اولیه",
		d: "مشته‌زنی پس از نصب هر قطعه",
		phase: "run"
	},
	{
		n: 5,
		t: "تکمیل کامل معرق",
		d: "کنترل درزها و جفت‌کاری",
		phase: "run"
	},
	{
		n: 6,
		t: "اعمال رزین زیرکار",
		d: "چسب چوب + آب نسبت ۱ به ۶",
		phase: "set"
	},
	{
		n: 7,
		t: "قوام‌آوری نهایی (دونَم)",
		d: "مشته‌زنی آرام نیمه‌خشک",
		phase: "set"
	},
	{
		n: 8,
		t: "خشک‌شدن کامل",
		d: "خروج رطوبت رزین — پیش‌شرط رنگ",
		phase: "set"
	},
	{
		n: 9,
		t: "رنگ‌آمیزی تخصصی",
		d: "رنگ مخصوص دیکته استاد + پرداز",
		phase: "color"
	},
	{
		n: 10,
		t: "خشک‌شدن رنگ",
		d: "تثبیت جوهر روی رخ چرم",
		phase: "color"
	},
	{
		n: 11,
		t: "خال‌زنی طلایی",
		d: "خمیر دورگیر طلایی ویترای",
		phase: "color"
	},
	{
		n: 12,
		t: "خشک‌شدن خال‌ها",
		d: "تثبیت کامل خمیر ویترای",
		phase: "color"
	},
	{
		n: 13,
		t: "روسازی نهایی",
		d: "کیلر سلولزی / اتومبیلی / پلی‌استر",
		phase: "color"
	}
];
var PROCESS_NOTES = {
	1: "پایه کار باید صاف، بی‌چربی و پذیرنده چسب باشد. صنعت نوین معرق چرم صنعت ثانویه است.",
	2: "هر دو سطح تمیز، مسطح و آغشته به چسب آهن؛ کاملاً خشک؛ سپس فشار، ضربه و گاه کمی گرما. مکث حدود ۱۰ دقیقه.",
	3: "عبارت اجباری: اجرای موتیف‌ها و اجرای بافت یا پیچ. نوارکشی کادر در همین مرحله است.",
	4: "مشته‌زنی اولیه پس از نصب هر قطعه — فشرده‌سازی اتصال، نه ضربه بی‌مهار.",
	5: "پیش از رزین، معرق از نظر ساختاری باید کامل باشد. درزها و جفت‌کاری کنترل شود.",
	6: "رزین زیرکار: چسب چوب + آب نسبت ۱ به ۶. با غوطه‌وری ۱ به ۵ ادغام نشود.",
	7: "دونَم یعنی نه کاملاً مرطوب و نه کاملاً خشک. مشته‌زنی نهایی آرام‌تر است.",
	8: "رنگ‌آمیزی پیش از خشک‌شدن کامل ممنوع است.",
	9: "رنگ مخصوص طبق دیکته استاد: تینر ۲۰۰۰۰، رنگ اتومبیلی، کیلر سلولوزی، جوهر فامبخش.",
	10: "ورود زودهنگام به خال‌زنی سطح را خراب می‌کند.",
	11: "خال‌زنی مرحله مستقل است و خودِ روسازی محسوب نمی‌شود.",
	12: "خمیر ویترای باید کاملاً تثبیت شود.",
	13: "کیلر سلولزی / اتومبیلی / پلی‌استر / لاک و الکل — یکنواخت و بدون شره. تهویه الزامی."
};
var TOOLS = [
	["کاتر", "برش عمومی و خطوط ساده"],
	["تیغ جراحی", "جزئیات ظریف موتیف"],
	["شیفره", "منحنی‌های نرم اسلیمی"],
	["گرزن / چاقو", "چرم ضخیم کفی"],
	["اره مویی", "فضاهای منفی داخلی"],
	["خط‌کش فلزی سنگین", "برش مستقیم و مهار تریشه"],
	["لویس", "نازک‌سازی از سمت لش"],
	["مشته", "قوام‌آوری دو مرحله‌ای"],
	["سمبه", "نقش‌انداز و برشی"],
	["پنس و پین", "چیدمان قطعات کوچک"]
];
var ink = "var(--color-ink)";
var leather = "var(--color-leather)";
var camel = "var(--color-camel)";
var brass = "var(--color-brass)";
var muted = "var(--color-muted)";
var paper = "var(--color-paper)";
var surface = "var(--color-surface)";
var walnut = "var(--color-walnut)";
var FONT = "Vazirmatn, Tahoma, sans-serif";
/** Quarter-toranj skeleton extracted from the master's notebook: complete curve + S + short curve. */
var Q1 = "M160 130 C 172 86, 214 48, 258 46 C 286 44, 304 76, 286 102 C 270 122, 288 144, 316 150 C 338 154, 334 180, 308 186";
function Caption({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
		className: "mt-3 text-sm leading-7 text-muted",
		children
	});
}
function GoldenPointsDiagram() {
	const [hover, setHover] = (0, import_react.useState)(null);
	const points = [
		{
			id: "nw",
			x: 110,
			y: 90,
			label: "طلایی شمال‌غربی"
		},
		{
			id: "ne",
			x: 190,
			y: 90,
			label: "Super Gold Point",
			super: true
		},
		{
			id: "sw",
			x: 110,
			y: 150,
			label: "طلایی جنوب‌غربی"
		},
		{
			id: "se",
			x: 190,
			y: 150,
			label: "طلایی جنوب‌شرقی"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "rounded-xl bg-surface p-3 shadow-[var(--shadow-border)] sm:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 300 240",
			className: "h-auto w-full",
			role: "img",
			"aria-labelledby": "gp-title",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", {
					id: "gp-title",
					children: "نقاط طلایی کادر و Super Gold Point"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "30",
					y: "30",
					width: "240",
					height: "180",
					fill: surface,
					stroke: walnut,
					strokeWidth: "1.8"
				}),
				[110, 190].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: x,
					y1: "30",
					x2: x,
					y2: "210",
					stroke: camel,
					strokeDasharray: "4 5",
					strokeWidth: "1.2"
				}, x)),
				[90, 150].map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "30",
					y1: y,
					x2: "270",
					y2: y,
					stroke: camel,
					strokeDasharray: "4 5",
					strokeWidth: "1.2"
				}, y)),
				[110, 190].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: x,
					y1: "26",
					x2: x,
					y2: "34",
					stroke: leather,
					strokeWidth: "2"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: x,
					y1: "206",
					x2: x,
					y2: "214",
					stroke: leather,
					strokeWidth: "2"
				})] }, `tx-${x}`)),
				[90, 150].map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "26",
					y1: y,
					x2: "34",
					y2: y,
					stroke: leather,
					strokeWidth: "2"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "266",
					y1: y,
					x2: "274",
					y2: y,
					stroke: leather,
					strokeWidth: "2"
				})] }, `ty-${y}`)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "150",
					y: "18",
					textAnchor: "middle",
					fill: muted,
					fontSize: "11",
					fontFamily: FONT,
					children: "شمال"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "288",
					y: "124",
					textAnchor: "middle",
					fill: muted,
					fontSize: "11",
					fontFamily: FONT,
					children: "شرق"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "70",
					y: "24",
					fill: muted,
					fontSize: "9",
					fontFamily: FONT,
					children: "۱/۳"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "198",
					y: "24",
					fill: muted,
					fontSize: "9",
					fontFamily: FONT,
					children: "۲/۳"
				}),
				points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
					onPointerEnter: () => setHover(p.id),
					onPointerLeave: () => setHover(null),
					className: "cursor-pointer",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: p.x,
						cy: p.y,
						r: hover === p.id ? 9 : 7,
						fill: p.super ? brass : leather,
						stroke: paper,
						strokeWidth: "2"
					})
				}, p.id)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "190",
					y: "76",
					textAnchor: "middle",
					fill: ink,
					fontSize: "10",
					fontWeight: "700",
					fontFamily: FONT,
					children: "SGP"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Caption, { children: [
			"هر ضلع با دو نشانه به سه قسمت مساوی تقسیم می‌شود. تلاقی خطوط فرضی، چهار نقطه طلایی است. شمال‌شرقی‌ترین نقطه",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
				className: "text-ink",
				children: "Super Gold Point"
			}),
			" است.",
			hover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-1 block text-leather",
				children: points.find((p) => p.id === hover)?.label
			}) : null
		] })]
	});
}
function ThreeLinesDiagram() {
	const [mode, setMode] = (0, import_react.useState)("parts");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "rounded-xl bg-surface p-3 shadow-[var(--shadow-border)] sm:p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3 flex flex-wrap gap-2",
				children: [
					["parts", "سه خط جدا"],
					["quarter", "یک‌چهارم ترنج"],
					["full", "ترنج کامل"],
					["weave", "محل بافت یا پیچ"]
				].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setMode(id),
					className: cn("h-11 rounded-md px-3 text-sm", mode === id ? "bg-leather text-paper" : "border border-line bg-paper text-ink"),
					children: label
				}, id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 320 260",
				className: "h-auto w-full",
				role: "img",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: "قانون سه خط پایه اسلیمی — استخراج از دفتر استاد" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "8",
						y: "8",
						width: "304",
						height: "244",
						fill: surface,
						rx: "10"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "160",
						y1: "22",
						x2: "160",
						y2: "238",
						stroke: "var(--color-line-strong)",
						strokeWidth: "1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "22",
						y1: "130",
						x2: "298",
						y2: "130",
						stroke: "var(--color-line-strong)",
						strokeWidth: "1"
					}),
					mode === "parts" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M160 130 C 172 86, 214 48, 258 46",
							fill: "none",
							stroke: leather,
							strokeWidth: "3.4",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M258 46 C 286 44, 304 76, 286 102 C 270 122, 288 144, 316 150",
							fill: "none",
							stroke: camel,
							strokeWidth: "3.4",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M316 150 C 338 154, 334 180, 308 186",
							fill: "none",
							stroke: brass,
							strokeWidth: "3.4",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "188",
							y: "44",
							fill: leather,
							fontSize: "12",
							fontFamily: FONT,
							children: "۱ منحنی کامل"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "168",
							y: "118",
							fill: camel,
							fontSize: "12",
							fontFamily: FONT,
							children: "۲ اس‌شکل"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "196",
							y: "208",
							fill: brass,
							fontSize: "12",
							fontFamily: FONT,
							children: "۳ منحنی کوتاه"
						})
					] }) : null,
					mode === "quarter" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: Q1,
							fill: "none",
							stroke: leather,
							strokeWidth: "3.6",
							strokeLinecap: "round"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "160",
							cy: "130",
							r: "3",
							fill: walnut
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "160",
							y: "236",
							textAnchor: "middle",
							fill: muted,
							fontSize: "12",
							fontFamily: FONT,
							children: "اتصال بدون تغییر = یک‌چهارم ترنج"
						})
					] }) : null,
					mode === "full" || mode === "weave" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						[
							0,
							90,
							180,
							270
						].map((deg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							transform: `rotate(${deg} 160 130)`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: Q1,
								fill: "none",
								stroke: leather,
								strokeWidth: "2.6",
								strokeLinecap: "round"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
								transform: "translate(160 130) scale(0.46) translate(-160 -130)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									d: Q1,
									fill: "none",
									stroke: camel,
									strokeWidth: "3.2",
									strokeLinecap: "round"
								})
							})]
						}, deg)),
						mode === "weave" ? [
							0,
							90,
							180,
							270
						].map((deg) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
							transform: `rotate(${deg} 160 130)`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
								d: "M210 92 C 232 78, 248 92, 242 108 C 236 122, 252 132, 268 128",
								fill: "none",
								stroke: brass,
								strokeWidth: "2.2",
								strokeDasharray: "3 3",
								strokeLinecap: "round"
							})
						}, `w-${deg}`)) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "160",
							y: "236",
							textAnchor: "middle",
							fill: muted,
							fontSize: "12",
							fontFamily: FONT,
							children: mode === "full" ? "چرخش ۹۰ درجه × ۴ = ترنج کامل" : "خط‌چین طلایی = محل تریشه ۱ میلی‌متر"
						})
					] }) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Caption, { children: "قانون مؤلف: اگر این سه خط را بدون تغییر شکل، فقط پشت‌سرهم وصل کنیم، خود یک‌چهارم ترنج ساخته می‌شود. فضاهای خالی بین پیچش‌ها محل دقیق اجرای نوار یک‌میلیمتری و بافت یا پیچ است." })
		]
	});
}
function ToranjCompare() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-3 sm:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 200 200",
				className: "h-auto w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: "ترنج سینه کبوتری" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "200",
						height: "200",
						fill: surface,
						rx: "12"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M100 28 C 128 34, 164 62, 172 100 C 164 138, 128 166, 100 172 C 72 166, 36 138, 28 100 C 36 62, 72 34, 100 28 Z",
						fill: "none",
						stroke: leather,
						strokeWidth: "2.6"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "mt-2 text-sm leading-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "font-display text-ink",
					children: "ترنج سینه کبوتری"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 block text-muted",
					children: "همه اضلاع به بیرون آمده‌اند؛ هیچ برگشتی به داخل نیست. فرم محدب شبیه سینه کبوتر."
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 200 200",
				className: "h-auto w-full",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: "ترنج شاهی" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						width: "200",
						height: "200",
						fill: surface,
						rx: "12"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M100 30 C 118 34, 138 48, 146 68 C 132 78, 132 92, 148 100 C 132 108, 132 122, 146 132 C 138 152, 118 166, 100 170 C 82 166, 62 152, 54 132 C 68 122, 68 108, 52 100 C 68 92, 68 78, 54 68 C 62 48, 82 34, 100 30 Z",
						fill: "none",
						stroke: brass,
						strokeWidth: "2.6"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "mt-2 text-sm leading-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "font-display text-ink",
					children: "ترنج شاهی"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 block text-muted",
					children: "همان سینه کبوتری است که در نقاط مشخص اضلاع به درون برمی‌گردند؛ شباهت به تاج."
				})]
			})]
		})]
	});
}
function CompositionDiagram() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "rounded-xl bg-surface p-3 shadow-[var(--shadow-border)] sm:p-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 360 280",
			className: "h-auto w-full",
			role: "img",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: "ترکیب‌بندی کلاسیک ایرانی: ترنج، لچک، گوشه، حاشیه" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "16",
					y: "16",
					width: "328",
					height: "248",
					fill: surface,
					stroke: walnut,
					strokeWidth: "1.6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "32",
					y: "32",
					width: "296",
					height: "216",
					fill: "none",
					stroke: brass,
					strokeWidth: "14"
				}),
				[
					[
						48,
						48,
						1,
						1
					],
					[
						312,
						48,
						-1,
						1
					],
					[
						48,
						232,
						1,
						-1
					],
					[
						312,
						232,
						-1,
						-1
					]
				].map(([x, y, sx, sy], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: `translate(${x} ${y}) scale(${sx} ${sy})`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M0 0 C 28 8, 48 28, 56 56 L 0 56 Z",
							fill: camel,
							opacity: "0.55"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M8 8 C 26 18, 38 34, 44 48",
							fill: "none",
							stroke: leather,
							strokeWidth: "1.6"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: "10",
							cy: "10",
							r: "5",
							fill: leather
						})
					]
				}, i)),
				[
					0,
					90,
					180,
					270
				].map((deg) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
					transform: `rotate(${deg} 180 140) translate(20 10) scale(0.52)`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: Q1,
						fill: "none",
						stroke: leather,
						strokeWidth: "4",
						strokeLinecap: "round"
					})
				}, deg)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "180",
					y: "144",
					textAnchor: "middle",
					fill: ink,
					fontSize: "13",
					fontFamily: FONT,
					fontWeight: "700",
					children: "ترنج"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "180",
					y: "26",
					textAnchor: "middle",
					fill: walnut,
					fontSize: "11",
					fontFamily: FONT,
					children: "حاشیه"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "78",
					y: "92",
					fill: ink,
					fontSize: "11",
					fontFamily: FONT,
					children: "لچک"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "40",
					y: "44",
					fill: ink,
					fontSize: "10",
					fontFamily: FONT,
					children: "گوشه"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Caption, { children: "کادر ایرانی کلاسیک: ترنج در مرکز (تا دو نقطه طلایی)، سپس لچک، گوشه‌های قرینه در چهار سو، و حاشیه که کادر را می‌بندد." })]
	});
}
function ElementSet() {
	const items = [
		{
			t: "شمسه",
			node: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
				points: "80,18 92,52 128,52 98,74 110,108 80,86 50,108 62,74 32,52 68,52",
				fill: "none",
				stroke: leather,
				strokeWidth: "2.2"
			})
		},
		{
			t: "کتیبه",
			node: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M28 70 L 48 48 H 112 L 132 70 L 112 92 H 48 Z",
				fill: "none",
				stroke: leather,
				strokeWidth: "2.2"
			})
		},
		{
			t: "گوشه",
			node: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M28 28 H 132 V 48 C 90 52, 52 90, 48 132 H 28 Z",
				fill: "none",
				stroke: leather,
				strokeWidth: "2.2"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M48 48 C 72 58, 88 88, 92 112",
				fill: "none",
				stroke: camel,
				strokeWidth: "1.6"
			})] })
		},
		{
			t: "نشان",
			node: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M80 28 C 118 48, 118 92, 80 112 C 42 92, 42 48, 80 28 Z",
				fill: "none",
				stroke: leather,
				strokeWidth: "2.2"
			})
		},
		{
			t: "لچک",
			node: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M28 28 H 132 L 28 132 Z",
				fill: "none",
				stroke: leather,
				strokeWidth: "2.2"
			})
		},
		{
			t: "مشبک",
			node: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: [
				40,
				80,
				120
			].map((x) => [
				40,
				80,
				120
			].map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: x,
				cy: y,
				r: "14",
				fill: "none",
				stroke: leather,
				strokeWidth: "1.6"
			}, `${x}-${y}`))) })
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-3 sm:grid-cols-3",
		children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
			className: "rounded-xl bg-surface p-3 shadow-[var(--shadow-border)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 160 140",
				className: "h-auto w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: "160",
					height: "140",
					fill: surface,
					rx: "8"
				}), it.node]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "mt-1 text-center font-display text-ink",
				children: it.t
			})]
		}, it.t))
	});
}
function LeatherCrossSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 360 170",
			className: "h-auto w-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: "برش طاقه چرم کفی: رخ و لش" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "40",
					y: "38",
					width: "280",
					height: "36",
					fill: leather
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "40",
					y: "74",
					width: "280",
					height: "22",
					fill: camel
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "40",
					y: "96",
					width: "280",
					height: "28",
					fill: "var(--color-hide)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M40 124 Q 70 136, 100 124 T 160 124 T 220 124 T 280 124 T 320 124",
					fill: "var(--color-suede)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "180",
					y: "62",
					textAnchor: "middle",
					fill: paper,
					fontSize: "13",
					fontFamily: FONT,
					children: "رخ — سطح رویی و صورت چرم"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "180",
					y: "90",
					textAnchor: "middle",
					fill: walnut,
					fontSize: "12",
					fontFamily: FONT,
					children: "ضخامت طاقه"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "180",
					y: "116",
					textAnchor: "middle",
					fill: walnut,
					fontSize: "13",
					fontFamily: FONT,
					children: "لش — پشت پرزدار"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Caption, { children: "لویس: نازک‌سازی کنترل‌شده از سمت لش. ماده اصلی صنعت، چرم کفی ضخیم است نه رخ نازک سوخت." })]
	});
}
function ColorRecipeDiagram() {
	const uid = (0, import_react.useId)();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 360 210",
			className: "h-auto w-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: "شیوه ساخت رنگ مخصوص آثار معرق چرم" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
					id: `${uid}-mix`,
					x1: "0",
					x2: "1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0",
						stopColor: "var(--color-thinner)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "1",
						stopColor: "var(--color-walnut)"
					})]
				}) }),
				Array.from({ length: 10 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: 24 + i * 18,
					y: "28",
					width: "16",
					height: "36",
					rx: "3",
					fill: "var(--color-thinner)"
				}, `t-${i}`)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "222",
					y: "28",
					width: "16",
					height: "36",
					rx: "3",
					fill: "var(--color-walnut)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "180",
					y: "84",
					textAnchor: "middle",
					fill: ink,
					fontSize: "12",
					fontFamily: FONT,
					children: "تینر ۲۰۰۰۰ به رنگ اتومبیلی قهوه‌ای = ۱۰ به ۱"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "40",
					y: "104",
					width: "28",
					height: "36",
					rx: "3",
					fill: "var(--color-thinner)"
				}),
				Array.from({ length: 10 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: 92 + i * 18,
					y: "104",
					width: "16",
					height: "36",
					rx: "3",
					fill: `url(#${uid}-mix)`
				}, `m-${i}`)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "180",
					y: "160",
					textAnchor: "middle",
					fill: ink,
					fontSize: "12",
					fontFamily: FONT,
					children: "کیلر سلولوزی به مایع رنگ = ۱ به ۱۰"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "180",
					y: "188",
					textAnchor: "middle",
					fill: muted,
					fontSize: "11",
					fontFamily: FONT,
					children: "سپس جوهر فامبخش طلایی / فندقی / قهوه‌ای / گردویی — تدریجی و با تست"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Caption, { children: "دیکته دقیق استاد. ماسک و دستکش در ساخت رنگ الزامی است. روغن‌دهی پس از رنگ در این شیوه حذف شده است." })]
	});
}
function ProcessFlow({ active, onSelect }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 lg:grid-cols-3",
			children: [
				{
					id: "run",
					title: "۱. اجرا",
					sub: "ساختار کامل شود"
				},
				{
					id: "set",
					title: "۲. تثبیت",
					sub: "رزین و دونَم"
				},
				{
					id: "color",
					title: "۳. رنگ و روسازی",
					sub: "پس از خشکی کامل"
				}
			].map((ph, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl bg-surface p-3 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-baseline justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg text-leather",
							children: ph.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted",
							children: ph.sub
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-2",
						children: STEPS.filter((s) => s.phase === ph.id).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => onSelect(s.n),
							className: cn("flex h-auto min-h-11 w-full items-start gap-3 rounded-md border px-3 py-2 text-right", active === s.n ? "border-brass bg-brass/20 ring-2 ring-brass" : "border-line bg-paper"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-walnut text-sm text-paper tabular-nums",
								children: toFa(s.n)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-medium text-ink",
								children: s.t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm text-muted",
								children: s.d
							})] })]
						}) }, s.n))
					}),
					idx < 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-center text-xs text-camel lg:hidden",
						children: "سپس مرحله بعد"
					}) : null
				]
			}, ph.id))
		})
	});
}
function AdlChart() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-3 sm:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg text-ink",
					children: "چرم کفی گاوی"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex items-end gap-3",
					children: [
						["۱۰", "ورقی"],
						["۱۶", "ورقی"],
						["۲۰", "ورقی"]
					].map(([n, u]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 rounded-lg bg-leather py-4 text-center text-paper",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-2xl",
							children: n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs opacity-80",
							children: u
						})]
					}, n))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted",
					children: "وزن معمول عدل حدود ۷۰ کیلوگرم."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg text-ink",
					children: "چرم کفی شتر"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 rounded-lg bg-camel py-6 text-center text-walnut",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-3xl",
						children: "۳۵"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm",
						children: "کیلویی"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-danger",
					children: "سیزده‌ورقی و هجده‌ورقی کاملاً رد شده‌اند."
				})
			]
		})]
	});
}
function DistinctionGrid() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "overflow-x-auto rounded-xl bg-surface shadow-[var(--shadow-border)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
				className: "bg-walnut text-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-4 py-3 text-right font-medium",
						children: "محور"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-4 py-3 text-right font-medium",
						children: "صنعت نوین معرق چرم"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-4 py-3 text-right font-medium",
						children: "سوخت چرم کهن و معاصر"
					})
				] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: [
				[
					"ماده اصلی",
					"چرم کفی، زیره و کروپون ضخیم",
					"ورق بسیار نازک رخ"
				],
				[
					"بستر اجرا",
					"زیرکارهای متنوع — صنعت ثانویه",
					"جلد یا تابلو سنتی"
				],
				[
					"زمان رنگ",
					"پس از تثبیت کامل ساختار",
					"همزمان یا پیشین"
				]
			].map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", {
				className: "border-t border-line",
				children: r.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
					className: cn("px-4 py-3 leading-7", i === 0 && "font-medium text-leather"),
					children: c
				}, i))
			}, r[0])) })]
		})
	});
}
function ResinRatios() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-3 sm:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-brass/40 bg-brass/10 p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-wide text-muted",
					children: "رزین زیرکار — مرحله تثبیت"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-display text-2xl text-ink",
					children: "۱ به ۶"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "چسب چوب به آب. پس از تکمیل کامل معرق."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border border-line bg-surface p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs tracking-wide text-muted",
					children: "غوطه‌وری محلول چسب چوب"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-display text-2xl text-ink",
					children: "۱ به ۵"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "مرحله‌ای جدا؛ با رزین ۱:۶ ادغام نشود."
				})
			]
		})]
	});
}
function StripCutDiagram() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 360 140",
			className: "h-auto w-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: "برش تریشه یک‌میلیمتری" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "24",
					y: "36",
					width: "220",
					height: "72",
					fill: camel,
					rx: "4"
				}),
				Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: 44 + i * 24,
					y1: "36",
					x2: 44 + i * 24,
					y2: "108",
					stroke: walnut,
					strokeWidth: "1.2",
					strokeDasharray: "3 3"
				}, i)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "260",
					y: "28",
					width: "6",
					height: "88",
					fill: leather
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "272",
					y: "28",
					width: "6",
					height: "88",
					fill: leather
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "284",
					y: "28",
					width: "6",
					height: "88",
					fill: leather
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "300",
					y: "18",
					width: "36",
					height: "108",
					fill: "var(--color-muted)",
					rx: "2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "134",
					y: "128",
					textAnchor: "middle",
					fill: muted,
					fontSize: "11",
					fontFamily: FONT,
					children: "طاقه کفی"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "276",
					y: "128",
					textAnchor: "middle",
					fill: muted,
					fontSize: "11",
					fontFamily: FONT,
					children: "تریشه ۱mm"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "318",
					y: "14",
					textAnchor: "middle",
					fill: muted,
					fontSize: "11",
					fontFamily: FONT,
					children: "خط‌کش سنگین"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Caption, { children: "حرکت تیغ فقط در یک جهت. عیب «سر و سر» از فشار نامساوی است؛ «شکم‌دار شدن» از انحراف تیغ." })]
	});
}
function Figure({ src, alt, caption, className, wide }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: cn("overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: cn("w-full object-cover", wide ? "aspect-video" : "aspect-square sm:aspect-video")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "px-4 py-3 text-sm leading-7 text-muted",
			children: caption
		})]
	});
}
function Head({ kicker, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-wide text-camel",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-3xl leading-snug text-ink sm:text-4xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "ornament-rule my-4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-base leading-8 text-muted",
				children: body
			})
		]
	});
}
function CoverPage({ onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-xl bg-walnut",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/cover.jpg",
				alt: "جعبه چوبی تمام‌شده با معرق چرم، ترنج مرکزی و خال طلایی",
				className: "aspect-square w-full object-cover sm:aspect-video"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-walnut via-walnut/50 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-0 bottom-0 space-y-4 p-5 sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-brass",
						children: "گروه خلاقیت‌های تجسمی ایده — عرصه سیمرغ — اصفهان"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display text-3xl leading-tight text-paper sm:text-5xl",
						children: ["برشور مصور کاربردی", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block text-brass",
							children: "صنعت نوین معرق چرم"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xl text-sm leading-8 text-paper/80 sm:text-base",
						children: "راهنمای فشرده، شماتیک و تصویری کارگاه — دقیقاً منطبق بر درسنامه کتاب استاندارد شغل معرق‌کار چرم. پدیدآورنده شیوه: استاد افشین خلیلی."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
						className: "grid max-w-2xl grid-cols-2 gap-2 sm:grid-cols-4",
						children: [
							["کد شغل", "۱-۰۲-۰۰-۷۷-۶۵۳۷"],
							["مدت دوره", "۱۰۹ ساعت"],
							["نظری / عملی", "۲۳ / ۸۶"],
							["صفحات", toFa(PAGES.length)]
						].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg bg-paper/10 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-xs text-paper/60",
								children: k
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 font-medium text-paper",
								children: v
							})]
						}, k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: onOpen,
						children: "ورق بزنید"
					})
				]
			})
		]
	});
}
function ContentsPage({ go }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {
			kicker: "نقشه برشور",
			title: "پانزده صفحه، از جلد تا ایمنی",
			body: "هر صفحه یک آموزه فیکس‌شده کتاب است. شماتیک‌ها از دفتر استاد استخراج شده‌اند."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "grid gap-2 sm:grid-cols-2 lg:grid-cols-3",
			children: PAGES.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				"data-page": p.id,
				onClick: () => go(p.id),
				className: "flex h-14 w-full items-center justify-between rounded-lg bg-surface px-4 text-right shadow-[var(--shadow-border)] hover:bg-camel/15",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: p.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-muted tabular-nums",
					children: toFa(i + 1)
				})]
			}, p.id) }, p.id))
		})]
	});
}
function IdentityPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {
				kicker: "فصل ۱ — آگاهی پیش‌نیاز",
				title: "این صنعت چیست و با سوخت چرم چه فرقی دارد؟",
				body: "شیوه‌ای تخصصی و مستقل در کار با چرم طبیعی ضخیم که از دهه ۱۳۸۰ به‌صورت نظام اجرایی مستقل شکل گرفت. رنگ پس از شکل‌گیری کامل ساختار زده می‌شود."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DistinctionGrid, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/images/workshop.jpg",
					alt: "میز کار معرق چرم با پایه‌کار چوبی و قطعات چرمی",
					caption: "صنعت ثانویه: معرق روی پایه‌کار چوبی، سفالی یا هر بستر پذیرنده چسب اجرا می‌شود."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl",
							children: "دو نوآوری کلیدی شیوه"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "leading-8 text-muted",
							children: "بافت یا پیچ تریشه با نوار یک‌میلیمتری و نوارکشی کامل کادر؛ و فرمولاسیون رزین زیرکار همراه با مشته‌زنی دو مرحله‌ای. نقش استاد میرزا آقا مهدی امامی اصفهانی در احیای سوخت معاصر برجسته است؛ صنعت نوین اما با انتقال اندیشه بند معرق به چرم ضخیم مسیر جداگانه‌ای گشود."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-md bg-leather/10 px-3 py-2 text-sm leading-7 text-leather",
							children: "ترتیب اجباری: اجرا ← تثبیت ← رنگ‌آمیزی. عبارت صحیح: «اجرای موتیف‌ها و اجرای بافت یا پیچ»."
						})
					]
				})]
			})
		]
	});
}
function GlossaryPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {
			kicker: "اصطلاحات فیکس‌شده",
			title: "واژه‌نامه کارگاهی که نباید جابه‌جا شود",
			body: "این تعاریف از متون دیکته‌شده استاد تثبیت شده‌اند. عبارت «تریشه‌دوزی» در کتاب جایی ندارد."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-3 sm:grid-cols-2",
			children: GLOSSARY.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-lg text-leather",
					children: g.t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-7 text-muted",
					children: g.d
				})]
			}, g.t))
		})]
	});
}
function GoldenPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {
			kicker: "فصل ۲ — مبانی هنرهای تجسمی",
			title: "نقاط طلایی کادر و Super Gold Point",
			body: "هر ضلع با دو نشانه به سه قسمت مساوی تقسیم می‌شود. خطوط فرضی به نقطه متناظر ضلع روبرو وصل می‌شوند. تلاقی، چهار نقطه طلایی است."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-start gap-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldenPointsDiagram, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-3",
				children: [
					"هر ضلع کادر (مربع یا مستطیل) به سه قسمت مساوی.",
					"از هر نشانه، خط فرضی به نقطه متناظر ضلع روبرو.",
					"چهار نقطه تلاقی = نقاط طلایی.",
					"شمال‌شرقی‌ترین = Super Gold Point.",
					"ترنج مرکزی تا دو نقطه طلایی را به خود اختصاص می‌دهد."
				].map((t, n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-3 rounded-xl bg-surface p-3 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-leather text-sm text-paper",
						children: toFa(n + 1)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "leading-7",
						children: t
					})]
				}, t))
			})]
		})]
	});
}
function ThreeLinesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {
				kicker: "قانون سه خط پایه — ابداع مؤلف",
				title: "منحنی کامل، اس‌شکل، منحنی کوتاه",
				body: "ساده‌ترین فرمول ترسیم اسلیمی. سه شکل پایه معرق: ترنج، حاشیه، لچک. اگر سه خط را بدون تغییر پشت‌سرهم وصل کنیم، یک‌چهارم ترنج ساخته می‌شود."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThreeLinesDiagram, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
						src: "/notebook/01_054958.jpg",
						alt: "صفحه دفتر استاد: سه شکل پایه ترنج، حاشیه و لچک",
						caption: "از دفتر استاد: سه شکل پایه — ترنج، حاشیه، لچک."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
						src: "/notebook/03_055138.jpg",
						alt: "صفحه دفتر استاد با سه خط پایه شماره‌گذاری‌شده",
						caption: "خط ۱ منحنی کامل، خط ۲ اس‌شکل، خط ۳ کوتاه."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
						src: "/notebook/04_055228.jpg",
						alt: "ادامه ترسیم سه خط در دفتر استاد",
						caption: "همان سه خط، با مسیر اتصال به‌سوی ربع ترنج."
					})
				]
			})
		]
	});
}
function ToranjPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {
				kicker: "از ربع تا کامل",
				title: "یک‌چهارم ترنج و دو گونه کلاسیک",
				body: "چرخش نود درجه × چهار = ترنج کامل. ترنج سینه کبوتری محدب است؛ ترنج شاهی در نقاط مشخص به درون برمی‌گردد."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/notebook/07_060140.jpg",
					alt: "ترسیم یک‌چهارم ترنج در دفتر استاد",
					caption: "اتصال سه خط بدون شکست = یک‌چهارم ترنج."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/notebook/06_060030.jpg",
					alt: "ترنج کامل با تقارن چهارگانه در دفتر استاد",
					caption: "تکثیر چهارگانه همان ربع، با ترنج درونی کوچک‌تر."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
						src: "/notebook/02_055024.jpg",
						alt: "تمرین ساخت ربع در دفتر",
						caption: "تمرین ساخت از مرکز کادر."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
						src: "/notebook/08_060307.jpg",
						alt: "ربع ترنج تکمیل‌شده",
						caption: "ربع با پیچش‌های داخلی."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
						src: "/notebook/10_060403.jpg",
						alt: "گسترش طرح اسلیمی",
						caption: "گسترش همان قانون به طرح پرکار."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToranjCompare, {})
		]
	});
}
function CompositionPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {
				kicker: "کادر ایرانی کلاسیک",
				title: "ترنج، لچک، گوشه، حاشیه",
				body: "همان قانونی که در کاشی پخته و قالی ایرانی دیده می‌شود، اسکلت بسیاری از طرح‌های کاربردی معرق چرم است."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-start gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompositionDiagram, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/images/panel.jpg",
					alt: "تابلوی مربعی معرق چرم با ترنج مرکزی، لچک، گوشه و حاشیه",
					caption: "اثر نهایی: ترنج در مرکز، لچک و گوشه در چهار سو، حاشیه کادر را می‌بندد، خال طلایی روی مسیر اسلیمی."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
				src: "/images/box.jpg",
				alt: "جعبه چوبی با معرق چرم تمام‌شده",
				caption: "همان ترکیب‌بندی روی پایه‌کار حجمی — صنعت ثانویه.",
				wide: true
			})
		]
	});
}
function ElementsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {
				kicker: "مفردات اسلیمی",
				title: "از شمسه تا کتیبه — موتیف‌های کاربردی",
				body: "هم کتیبه و هم انواع نشان از جمله موتیف‌های اصلی کاربردی در معرق چرم هستند."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElementSet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: ELEMENTS.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg text-leather",
							children: e.t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-7 text-muted",
							children: e.d
						})]
					}, e.t))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/images/motifs.jpg",
					alt: "موتیف‌های بریده‌شده چرمی",
					caption: "قطعات آماده چیدمان: شمسه، کتیبه، گوشه و ربع ترنج."
				})]
			})
		]
	});
}
function LeatherPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {
				kicker: "فصل ۳ — شناخت چرم",
				title: "گروه دو، ماده اصلی است",
				body: "گروه یک (میشین، آستر، نبوک، رویه، کراست) لطیف است. گروه دو — کفی، زیره و کروپون از گاو و شتر — پایه این صنعت است."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/images/leather.jpg",
					alt: "طاقه چرم کفی با رخ صاف و لش پرزدار",
					caption: "رخ = صورت صاف. لش = پشت پرزدار. لویس فقط از سمت لش."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeatherCrossSection, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdlChart, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-7 text-muted",
				children: "چرم بز (کراس / فوتی) در استاندارد به‌عنوان یکی از دو نوع اصلی آمده و برای نقش‌اندازی ظریف مناسب است؛ اما قطعات، تریشه و موتیف اصلی از چرم کفی بریده می‌شوند. فضای مثبت = قسمت پر طرح؛ فضای منفی = خالی‌ها."
			})
		]
	});
}
function ToolsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {
				kicker: "فصل ۵ — ابزارشناسی",
				title: "ابزار درست، نصف مهارت است",
				body: "برای ظریف‌کاری تیغ جراحی یا شیفره؛ برای کار معمولی کاتر. تولید تریشه ۱ میلی‌متری فقط با تمرکز کامل و برش تک‌جهته."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
				src: "/images/bench.jpg",
				alt: "میز کار با مشته، خط‌کش، کاتر و الگوی کاغذی",
				caption: "چیدمان کارگاهی: مشته برای قوام، خط‌کش سنگین برای مهار تریشه، الگوی کاغذی برای انتقال.",
				wide: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/images/tools.jpg",
					alt: "مجموعه ابزار کارگاه معرق چرم",
					caption: "کاتر، تیغ جراحی، خط‌کش، مشته، سمبه و چسب تماسی."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid grid-cols-2 gap-2",
					children: TOOLS.map(([n, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl bg-surface p-3 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium",
							children: n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted",
							children: d
						})]
					}, n))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StripCutDiagram, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-xl border border-danger/30 bg-leather/10 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium text-leather",
					children: "ایمنی برش تریشه"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-7 text-muted",
					children: "تیغه موکت‌بر بی‌اندازه برنده است. خط‌کش سنگین مهار شود. حرکت تیغ فقط در یک جهت، بدون رفت‌وبرگشت."
				})]
			})
		]
	});
}
function ProcessPage({ step, setStep }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {
				kicker: "فصل ۶ تا ۹ — زنجیره اجرایی",
				title: "سیزده مرحله که جابه‌جا نمی‌شوند",
				body: "کیفیت نهایی فقط به نقش وابسته نیست؛ به ترتیب عملیات وابسته است. هر مرحله شرط مرحله بعد است."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessFlow, {
				active: step,
				onSelect: setStep
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "rounded-xl bg-walnut px-4 py-3 text-sm leading-7 text-paper",
				children: PROCESS_NOTES[step]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/images/mashteh.jpg",
					alt: "مشته‌زنی قطعات چرمی روی پایه‌کار",
					caption: "مشته‌زنی بخشی از قوام‌آوری است، نه کوبیدن سطح."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/images/transfer.jpg",
					alt: "انتقال الگوی کاغذی روی چرم",
					caption: "از طرح تا چرم: اسکیل، الگوی کاغذی، تفکیک مثبت/منفی، انتقال با کاربن یا سوزن‌زنی."
				})]
			})
		]
	});
}
function WeavePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {
				kicker: "اجرای موتیف‌ها و اجرای بافت یا پیچ",
				title: "نوار یک‌میلیمتری زبان بصری این صنعت است",
				body: "تریشه مسیر اسلیمی را پر می‌کند. فضاهای خالی بین پیچش‌ها محل دقیق بافت یا پیچ‌اند. اصطلاح دوخت تریشه در این کتاب جایی ندارد."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
				src: "/images/weave.jpg",
				alt: "بافت تریشه یک‌میلیمتری در فضای منفی اسلیمی",
				caption: "یکنواختی عرض، مسیر مطابق طرح، بدون برجستگی ناخواسته.",
				wide: true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/notebook/05_055352.jpg",
					alt: "گسترش سه خط در دفتر",
					caption: "فضاهای خالی میان پیچش‌ها، محل تریشه است."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/notebook/09_060341.jpg",
					alt: "ربع ترنج با جزئیات داخلی",
					caption: "جزئیات داخلی همان قانون سه خط را تکرار می‌کند."
				})]
			})
		]
	});
}
function FinishPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {
				kicker: "فصل ۸ و ۹ — چسب، رنگ، خال، روسازی",
				title: "چسب آهن، رزین ۱:۶، رنگ مخصوص، خال طلایی",
				body: "چسب آهن ماده متصل‌کننده اصلی است. رنگ‌آمیزی پس از خشکی کامل. خال‌زنی مرحله مستقل پیش از روسازی است. روغن‌دهی پس از رنگ از کتاب حذف شده."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl",
						children: "چسب آهن ۸۸۸۸"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-8 text-muted",
						children: "هر دو سطح کاملاً تمیز، مسطح و آغشته شوند و پیش از چسباندن کاملاً خشک باشند. سپس فشار، ضربه و گاه کمی گرم کردن. چسب زیاد باعث لغزش طرح می‌شود؛ چسب کم باعث جداشدن."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResinRatios, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
					src: "/images/color.jpg",
					alt: "ساخت رنگ مخصوص معرق چرم در بطری شفاف",
					caption: "ساخت در ظرف شفاف دردار؛ تست تدریجی روی نمونه چرم."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorRecipeDiagram, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
				src: "/images/gold.jpg",
				alt: "کلوزآپ خال‌های طلایی ویترای روی مسیر اسلیمی",
				caption: "خال‌زنی با خمیر دورگیر طلایی ویترای — مرحله مستقل، نه خودِ روسازی.",
				wide: true
			})
		]
	});
}
function SafetyPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Head, {
				kicker: "کارگاه",
				title: "ایمنی، ارزیابی، و مسیر هنرجو",
				body: "کار با تیغ دور از بدن. تهویه هنگام چسب آهن و تینر. دستکش و ماسک. ضایعات تیز فوراً جمع شود."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [
					["برش", "تمرکز کامل، جهت دور از بدن، تیغه سالم."],
					["چسب و رنگ", "ماسک، دستکش، تهویه اجباری."],
					["میز", "نور یکنواخت، صفحه صاف، سطل ضایعات جدا."],
					["ترتیب", "هرگز رنگ پیش از تثبیت و خشکی کامل."]
				].map(([t, d]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-medium text-leather",
						children: t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-7 text-muted",
						children: d
					})]
				}, t))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "rounded-xl bg-walnut p-6 text-paper sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-brass",
						children: "گروه خلاقیت‌های تجسمی ایده — عرصه سیمرغ — اصفهان"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-2xl",
						children: "صنعت نوین معرق چرم"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-sm leading-8 text-paper/80",
						children: "این برشور خلاصه کاربردی درسنامه است، نه جایگزین کتاب کامل. منبع: کتاب یکپارچه ده‌فصلی، نمودار گردشی ۱۳ مرحله، تعاریف فیکس‌شده و دیکته‌های دفتر استاد."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs text-paper/60",
						children: "پدیدآورنده شیوه: استاد افشین خلیلی"
					})
				]
			})
		]
	});
}
function PrintAll({ step, setStep, go }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "print-spread",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverPage, { onOpen: () => go("contents") })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "print-spread",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentsPage, { go })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "print-spread",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdentityPage, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "print-spread",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlossaryPage, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "print-spread",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldenPage, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "print-spread",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThreeLinesPage, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "print-spread",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToranjPage, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "print-spread",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompositionPage, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "print-spread",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElementsPage, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "print-spread",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeatherPage, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "print-spread",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolsPage, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "print-spread",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessPage, {
					step,
					setStep
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "print-spread",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeavePage, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "print-spread",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinishPage, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "print-spread",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafetyPage, {})
			})
		]
	});
}
function Brochure() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [step, setStep] = (0, import_react.useState)(1);
	const [printing, setPrinting] = (0, import_react.useState)(false);
	const touch = (0, import_react.useRef)(null);
	const page = PAGES[index] ?? PAGES[0];
	const goIndex = (next) => {
		const n = Math.min(PAGES.length - 1, Math.max(0, next));
		setIndex(n);
		const id = PAGES[n]?.id;
		if (id) history.replaceState(null, "", `#${id}`);
	};
	const go = (id) => {
		const i = PAGES.findIndex((p) => p.id === id);
		if (i >= 0) goIndex(i);
	};
	(0, import_react.useLayoutEffect)(() => {
		const apply = () => {
			const raw = decodeURIComponent(window.location.hash.replace(/^#/, ""));
			const i = PAGES.findIndex((p) => p.id === raw);
			if (i >= 0) setIndex(i);
		};
		apply();
		window.addEventListener("hashchange", apply);
		return () => window.removeEventListener("hashchange", apply);
	}, []);
	(0, import_react.useEffect)(() => {
		const onBefore = () => setPrinting(true);
		const onAfter = () => setPrinting(false);
		window.addEventListener("beforeprint", onBefore);
		window.addEventListener("afterprint", onAfter);
		return () => {
			window.removeEventListener("beforeprint", onBefore);
			window.removeEventListener("afterprint", onAfter);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		window.scrollTo({
			top: 0,
			behavior: "instant"
		});
	}, [index]);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key === "ArrowLeft") goIndex(index + 1);
			if (e.key === "ArrowRight") goIndex(index - 1);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [index]);
	const onTouchStart = (e) => {
		const t = e.changedTouches[0];
		if (t) touch.current = {
			x: t.clientX,
			y: t.clientY
		};
	};
	const onTouchEnd = (e) => {
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
			case "cover": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoverPage, { onOpen: () => goIndex(1) });
			case "contents": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContentsPage, { go });
			case "identity": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IdentityPage, {});
			case "glossary": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlossaryPage, {});
			case "golden": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldenPage, {});
			case "threelines": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThreeLinesPage, {});
			case "toranj": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToranjPage, {});
			case "composition": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompositionPage, {});
			case "elements": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElementsPage, {});
			case "leather": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeatherPage, {});
			case "tools": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToolsPage, {});
			case "process": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessPage, {
				step,
				setStep
			});
			case "weave": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeavePage, {});
			case "finish": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinishPage, {});
			case "safety": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafetyPage, {});
			default: return null;
		}
	})();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "no-print sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-5xl items-center gap-2 px-3 py-2 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							"aria-label": "فهرست",
							onClick: () => setOpen(true),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate font-display text-sm text-ink",
								children: "برشور آموزشی صنعت نوین معرق چرم"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-xs text-muted",
								children: page.label
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "secondary",
							size: "sm",
							onClick: () => {
								setPrinting(true);
								requestAnimationFrame(() => window.print());
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {}), "چاپ"]
						})
					]
				})
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "no-print fixed inset-0 z-50 bg-walnut/40",
				onClick: () => setOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "absolute inset-y-0 right-0 flex w-80 max-w-full flex-col bg-paper p-4 shadow-[var(--shadow-border)]",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg",
							children: "فهرست برشور"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							"aria-label": "بستن",
							onClick: () => setOpen(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 space-y-1 overflow-y-auto",
						children: PAGES.map((n, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								setOpen(false);
								goIndex(idx);
							},
							className: cn("flex h-11 w-full items-center justify-between rounded-lg px-3 text-sm", index === idx ? "bg-leather text-paper" : "hover:bg-camel/15"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: n.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums opacity-60",
								children: toFa(idx + 1)
							})]
						}, n.id))
					})]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto w-full max-w-5xl flex-1 px-3 py-4 sm:px-6",
				onTouchStart,
				onTouchEnd,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
					className: "page-enter print:hidden",
					children: inner
				}, page.id), printing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden print:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrintAll, {
						step,
						setStep,
						go
					})
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "no-print sticky bottom-0 z-30 border-t border-line bg-paper/95 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-5xl items-center gap-2 px-3 py-2 sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							"aria-label": "صفحه بعد",
							disabled: index >= PAGES.length - 1,
							onClick: () => goIndex(index + 1),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "no-scrollbar flex min-w-0 flex-1 items-center justify-center gap-1 overflow-x-auto",
							children: PAGES.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": n.label,
								onClick: () => goIndex(i),
								className: cn("size-2.5 shrink-0 rounded-full", i === index ? "bg-leather" : "bg-camel/40")
							}, n.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1 text-xs text-muted tabular-nums",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-3.5" }),
								toFa(index + 1),
								" / ",
								toFa(PAGES.length)
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							"aria-label": "صفحه قبل",
							disabled: index <= 0,
							onClick: () => goIndex(index - 1),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
						})
					]
				})
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brochure, {});
}
//#endregion
export { Home as component };
