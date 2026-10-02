import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ChevronRight, i as Menu, o as ChevronLeft, r as Printer, s as BookOpen, t as X } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BjmTDxFP.js
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
function GoldenPointsDiagram() {
	const [hover, setHover] = (0, import_react.useState)(null);
	const points = [
		{
			id: "nw",
			x: 90,
			y: 70,
			label: "طلایی شمال‌غربی"
		},
		{
			id: "ne",
			x: 210,
			y: 70,
			label: "Super Gold Point",
			super: true
		},
		{
			id: "sw",
			x: 90,
			y: 150,
			label: "طلایی جنوب‌غربی"
		},
		{
			id: "se",
			x: 210,
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
					fill: "#fbf6ec",
					stroke: "#3d2418",
					strokeWidth: "1.6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "110",
					y1: "30",
					x2: "110",
					y2: "210",
					stroke: "#b07a4a",
					strokeDasharray: "3 4",
					strokeWidth: "1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "190",
					y1: "30",
					x2: "190",
					y2: "210",
					stroke: "#b07a4a",
					strokeDasharray: "3 4",
					strokeWidth: "1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "30",
					y1: "90",
					x2: "270",
					y2: "90",
					stroke: "#b07a4a",
					strokeDasharray: "3 4",
					strokeWidth: "1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "30",
					y1: "150",
					x2: "270",
					y2: "150",
					stroke: "#b07a4a",
					strokeDasharray: "3 4",
					strokeWidth: "1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "150",
					y: "22",
					textAnchor: "middle",
					fill: "#6d5646",
					fontSize: "9",
					children: "شمال"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "284",
					y: "124",
					textAnchor: "middle",
					fill: "#6d5646",
					fontSize: "9",
					children: "شرق"
				}),
				points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
					onPointerEnter: () => setHover(p.id),
					onPointerLeave: () => setHover(null),
					className: "cursor-pointer",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: p.x,
						cy: p.y,
						r: hover === p.id ? 8 : 6,
						fill: p.super ? "#b8944a" : "#6b2e22",
						stroke: "#f4ead8",
						strokeWidth: "2"
					})
				}, p.id)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "210",
					y: "58",
					textAnchor: "middle",
					fill: "#3d2418",
					fontSize: "8",
					fontWeight: "700",
					children: "SGP"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
			className: "mt-3 text-sm leading-7 text-muted",
			children: [
				"هر ضلع با دو نشانه به سه قسمت مساوی تقسیم می‌شود. تلاقی خطوط فرضی، چهار نقطه طلایی است. شمال‌شرقی‌ترین نقطه",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "text-ink",
					children: "Super Gold Point"
				}),
				" نام دارد — مهم‌ترین توانایی مبانی هنرهای تجسمی.",
				hover ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 block text-leather",
					children: points.find((p) => p.id === hover)?.label
				}) : null
			]
		})]
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
					["full", "ترنج کامل"]
				].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setMode(id),
					className: cn("h-10 rounded-md px-3 text-sm", mode === id ? "bg-leather text-paper" : "bg-paper text-ink border border-line"),
					children: label
				}, id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				viewBox: "0 0 320 260",
				className: "h-auto w-full",
				role: "img",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: "قانون سه خط پایه اسلیمی" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
						x: "8",
						y: "8",
						width: "304",
						height: "244",
						fill: "#fbf6ec",
						rx: "10"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "160",
						y1: "20",
						x2: "160",
						y2: "240",
						stroke: "#d7c4ad",
						strokeWidth: "1"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "24",
						y1: "130",
						x2: "296",
						y2: "130",
						stroke: "#d7c4ad",
						strokeWidth: "1"
					}),
					mode === "parts" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M160 130 C 168 96, 198 62, 236 52",
							fill: "none",
							stroke: "#6b2e22",
							strokeWidth: "3.2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M236 52 C 258 48, 268 72, 252 92 C 238 110, 248 128, 270 136",
							fill: "none",
							stroke: "#b07a4a",
							strokeWidth: "3.2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M270 136 C 286 144, 278 168, 254 172",
							fill: "none",
							stroke: "#b8944a",
							strokeWidth: "3.2"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "196",
							y: "48",
							fill: "#6b2e22",
							fontSize: "11",
							children: "۱ منحنی کامل"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "200",
							y: "118",
							fill: "#b07a4a",
							fontSize: "11",
							children: "۲ اس‌شکل"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: "200",
							y: "196",
							fill: "#8a6a28",
							fontSize: "11",
							children: "۳ منحنی کوتاه"
						})
					] }) : null,
					mode === "quarter" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M160 130 C 168 96, 198 62, 236 52 C 258 48, 268 72, 252 92 C 238 110, 248 128, 270 136 C 286 144, 278 168, 254 172",
						fill: "none",
						stroke: "#6b2e22",
						strokeWidth: "3.4"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "160",
						y: "232",
						textAnchor: "middle",
						fill: "#6d5646",
						fontSize: "11",
						children: "اتصال بدون تغییر = یک‌چهارم ترنج"
					})] }) : null,
					mode === "full" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [[
						0,
						90,
						180,
						270
					].map((deg) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
						transform: `rotate(${deg} 160 130)`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
							d: "M160 130 C 168 96, 198 62, 236 52 C 258 48, 268 72, 252 92 C 238 110, 248 128, 270 136 C 286 144, 278 168, 254 172",
							fill: "none",
							stroke: "#6b2e22",
							strokeWidth: "2.6"
						})
					}, deg)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: "160",
						y: "232",
						textAnchor: "middle",
						fill: "#6d5646",
						fontSize: "11",
						children: "چرخش ۹۰ درجه × ۴ = ترنج کامل"
					})] }) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "mt-3 text-sm leading-7 text-muted",
				children: "قانون کلیدی مؤلف: اگر این سه خط را بدون تغییر شکل، فقط پشت‌سرهم وصل کنیم، خود یک‌چهارم ترنج را می‌سازند. فضاهای خالی بین پیچش‌ها محل دقیق اجرای نوار یک‌میلیمتری و بافت یا پیچ است."
			})
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
						fill: "#fbf6ec",
						rx: "12"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M100 28 C 128 34, 164 62, 172 100 C 164 138, 128 166, 100 172 C 72 166, 36 138, 28 100 C 36 62, 72 34, 100 28 Z",
						fill: "none",
						stroke: "#6b2e22",
						strokeWidth: "2.4"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "mt-2 text-sm leading-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "font-display text-ink",
					children: "ترنج سینه کبوتری"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-muted",
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
						fill: "#fbf6ec",
						rx: "12"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M100 30 C 118 34, 138 48, 146 68 C 132 78, 132 92, 148 100 C 132 108, 132 122, 146 132 C 138 152, 118 166, 100 170 C 82 166, 62 152, 54 132 C 68 122, 68 108, 52 100 C 68 92, 68 78, 54 68 C 62 48, 82 34, 100 30 Z",
						fill: "none",
						stroke: "#b8944a",
						strokeWidth: "2.4"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "mt-2 text-sm leading-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "font-display text-ink",
					children: "ترنج شاهی"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-muted",
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
			viewBox: "0 0 360 260",
			className: "h-auto w-full",
			role: "img",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: "ترکیب‌بندی کلاسیک ایرانی" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "18",
					y: "18",
					width: "324",
					height: "224",
					fill: "#fbf6ec",
					stroke: "#3d2418",
					strokeWidth: "1.5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "36",
					y: "36",
					width: "288",
					height: "188",
					fill: "none",
					stroke: "#b8944a",
					strokeWidth: "10"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: "54,54 118,54 54,110",
					fill: "#b07a4a",
					opacity: "0.55"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: "306,54 242,54 306,110",
					fill: "#b07a4a",
					opacity: "0.55"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: "54,206 118,206 54,150",
					fill: "#b07a4a",
					opacity: "0.55"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", {
					points: "306,206 242,206 306,150",
					fill: "#b07a4a",
					opacity: "0.55"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M54 54 C 90 90, 90 90, 118 54",
					fill: "none",
					stroke: "#6b2e22",
					strokeWidth: "1.6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "180",
					cy: "130",
					rx: "52",
					ry: "40",
					fill: "#6b2e22"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ellipse", {
					cx: "180",
					cy: "130",
					rx: "28",
					ry: "20",
					fill: "#b8944a"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "180",
					y: "134",
					textAnchor: "middle",
					fill: "#f4ead8",
					fontSize: "11",
					children: "ترنج"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "180",
					y: "28",
					textAnchor: "middle",
					fill: "#8a6a28",
					fontSize: "10",
					children: "حاشیه"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "78",
					y: "86",
					fill: "#3d2418",
					fontSize: "10",
					children: "لچک"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "54",
					y: "48",
					fill: "#3d2418",
					fontSize: "9",
					children: "گوشه"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-3 text-sm leading-7 text-muted",
			children: "کادر ایرانی کلاسیک: ترنج در مرکز (تا دو نقطه طلایی)، سپس لچک، گوشه‌های قرینه در چهار سو، و حاشیه که کادر را می‌بندد."
		})]
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
					fill: "#8a4a2a"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "40",
					y: "74",
					width: "280",
					height: "22",
					fill: "#c4a07a"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "40",
					y: "96",
					width: "280",
					height: "28",
					fill: "#e8d3b8"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M40 124 Q 70 136, 100 124 T 160 124 T 220 124 T 280 124 T 320 124",
					fill: "#d8c2a6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "180",
					y: "62",
					textAnchor: "middle",
					fill: "#f4ead8",
					fontSize: "13",
					children: "رخ — سطح رویی و صورت چرم"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "180",
					y: "90",
					textAnchor: "middle",
					fill: "#3d2418",
					fontSize: "12",
					children: "ضخامت طاقه"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "180",
					y: "116",
					textAnchor: "middle",
					fill: "#3d2418",
					fontSize: "13",
					children: "لش — پشت پرزدار"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-2 text-sm leading-7 text-muted",
			children: "لویس: نازک‌سازی کنترل‌شده از سمت لش. ماده اصلی صنعت، چرم کفی ضخیم است نه رخ نازک سوخت."
		})]
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
						stopColor: "#c4a574"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "1",
						stopColor: "#5c3318"
					})]
				}) }),
				Array.from({ length: 10 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: 24 + i * 18,
					y: "28",
					width: "16",
					height: "36",
					rx: "3",
					fill: "#d7c4ad"
				}, `t-${i}`)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "222",
					y: "28",
					width: "16",
					height: "36",
					rx: "3",
					fill: "#5c3318"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "180",
					y: "84",
					textAnchor: "middle",
					fill: "#3d2418",
					fontSize: "12",
					children: "تینر ۲۰۰۰۰ به رنگ اتومبیلی قهوه‌ای = ۱۰ به ۱"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "40",
					y: "104",
					width: "28",
					height: "36",
					rx: "3",
					fill: "#cfc6b4"
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
					fill: "#3d2418",
					fontSize: "12",
					children: "کیلر سلولوزی به مایع رنگ = ۱ به ۱۰"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: "180",
					y: "188",
					textAnchor: "middle",
					fill: "#6d5646",
					fontSize: "11",
					children: "سپس جوهر فامبخش طلایی / فندقی / قهوه‌ای / گردویی — تدریجی و با تست"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "mt-2 text-sm leading-7 text-muted",
			children: "دیکته دقیق استاد. ماسک و دستکش در ساخت رنگ الزامی است. روغن‌دهی پس از رنگ در این شیوه حذف شده است."
		})]
	});
}
function ProcessFlow({ active, onSelect }) {
	const steps = [
		{
			n: 1,
			t: "آماده‌سازی پایه‌کار",
			d: "پاک‌سازی، سمباده، رفع چربی",
			c: "prep"
		},
		{
			n: 2,
			t: "چسب‌کاری یکنواخت",
			d: "چسب آهن ۸۸۸۸ + مکث ۱۰ دقیقه",
			c: "prep"
		},
		{
			n: 3,
			t: "اجرای اولیه و مونتاژ",
			d: "نوارکشی + موتیف + بافت یا پیچ",
			c: "prep"
		},
		{
			n: 4,
			t: "قوام‌آوری اولیه",
			d: "مشته‌زنی پس از نصب هر قطعه",
			c: "mash"
		},
		{
			n: 5,
			t: "تکمیل کامل معرق",
			d: "کنترل درزها و جفت‌کاری",
			c: "prep"
		},
		{
			n: 6,
			t: "اعمال رزین زیرکار",
			d: "چسب چوب + آب نسبت ۱ به ۶",
			c: "resin"
		},
		{
			n: 7,
			t: "قوام‌آوری نهایی (دونم)",
			d: "مشته‌زنی آرام نیمه‌خشک",
			c: "mash"
		},
		{
			n: 8,
			t: "خشک‌شدن کامل",
			d: "خروج رطوبت رزین",
			c: "dry"
		},
		{
			n: 9,
			t: "رنگ‌آمیزی تخصصی پرداز",
			d: "جوهر پایه تینر + سایه‌پاش",
			c: "color"
		},
		{
			n: 10,
			t: "خشک‌شدن رنگ",
			d: "تثبیت جوهر روی رخ چرم",
			c: "dry"
		},
		{
			n: 11,
			t: "خال‌زنی / خال طلایی",
			d: "خمیر دورگیر طلایی ویترای",
			c: "gold"
		},
		{
			n: 12,
			t: "خشک‌شدن خال‌ها",
			d: "تثبیت کامل خمیر ویترای",
			c: "dry"
		},
		{
			n: 13,
			t: "روسازی نهایی",
			d: "کیلر سلولزی / اتومبیلی",
			c: "finish"
		}
	];
	const tone = {
		prep: "border-leather/30 bg-paper",
		mash: "border-camel/50 bg-camel/15",
		resin: "border-brass/40 bg-brass/10",
		dry: "border-line bg-walnut/5",
		color: "border-leather/50 bg-leather/10",
		gold: "border-brass bg-brass/20",
		finish: "border-walnut/30 bg-surface"
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "grid gap-2 sm:grid-cols-2",
		children: steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onSelect(s.n),
			className: cn("flex w-full items-start gap-3 rounded-lg border p-3 text-right transition-colors", tone[s.c], active === s.n && "ring-2 ring-brass"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-walnut text-sm text-paper tabular-nums",
				children: s.n
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block font-medium text-ink",
				children: s.t
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-sm text-muted",
				children: s.d
			})] })]
		}) }, s.n))
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
						className: "flex-1 rounded-lg bg-leather/90 py-4 text-center text-paper",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-2xl tabular-nums",
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
						className: "font-display text-3xl tabular-nums",
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
			className: "w-full min-w-[32rem] text-sm",
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
var NAV = [
	{
		id: "cover",
		label: "جلد"
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
		id: "composition",
		label: "ترکیب‌بندی"
	},
	{
		id: "elements",
		label: "عناصر اسلیمی"
	},
	{
		id: "leather",
		label: "شناخت چرم"
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
		id: "chemistry",
		label: "چسب و رزین"
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
		t: "خمیر دورگیر طلایی ویترای",
		d: "جایگزین مدرن خمیر طلا برای خال‌زنی."
	},
	{
		t: "طاقه",
		d: "هر ورق یا قواره کامل و یکپارچه چرم کفی."
	},
	{
		t: "رخ",
		d: "سطح رویی و صورت چرم."
	},
	{
		t: "لش",
		d: "پشت پرزدار چرم، سمت مقابل رخ."
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
		d: "چسب صنعتی تماسی (چسب موکت / چسب خارجی). مارک مرجع کارگاهی: پارس چهار هشت ۸۸۸۸."
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
		d: "ترکیب اسلیمی گوشه کادر؛ معمولاً از ۴ سانت به بالا، موتیف پرکاربرد."
	},
	{
		t: "حاشیه",
		d: "نوار پیرامونی تزئینی که کادر را با نقوش تکراری یا گره‌وار می‌بندد."
	},
	{
		t: "شمسه",
		d: "ستاره هندسی معمولاً ۸ضلعی؛ قابلیت تکرار بالا و موتیف پرکاربرد."
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
var PROCESS_NOTES = {
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
function scrollToId(id) {
	document.getElementById(id)?.scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
}
function Figure({ src, alt, caption, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: cn("overflow-hidden rounded-xl bg-surface shadow-[var(--shadow-border)]", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: "aspect-[4/3] w-full object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
			className: "px-4 py-3 text-sm leading-7 text-muted",
			children: caption
		})]
	});
}
function SectionHead({ kicker, title, body }) {
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
function Brochure() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("cover");
	const [step, setStep] = (0, import_react.useState)(1);
	(0, import_react.useEffect)(() => {
		const nodes = NAV.map((n) => document.getElementById(n.id)).filter(Boolean);
		const io = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActive(visible.target.id);
		}, {
			rootMargin: "0px 0px -55% 0px",
			threshold: [.15, .4]
		});
		nodes.forEach((n) => io.observe(n));
		return () => io.disconnect();
	}, []);
	const i = NAV.findIndex((n) => n.id === active);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "no-print sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center gap-2 px-3 py-2 sm:px-6",
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
								children: "منطبق بر آموزه‌های کتاب — کد ۱-۰۲-۰۰-۷۷-۶۵۳۷"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "secondary",
							size: "sm",
							onClick: () => window.print(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, {}), "چاپ"]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "no-scrollbar flex gap-1 overflow-x-auto px-3 pb-2 sm:px-6",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => scrollToId(n.id),
						className: cn("h-9 shrink-0 rounded-full px-3 text-xs", active === n.id ? "bg-leather text-paper" : "bg-surface text-muted"),
						children: n.label
					}, n.id))
				})]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "no-print fixed inset-0 z-50 bg-walnut/40",
				onClick: () => setOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "absolute inset-y-0 right-0 flex w-[min(20rem,88vw)] flex-col bg-paper p-4 shadow-[var(--shadow-border)]",
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
						children: NAV.map((n, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => {
								setOpen(false);
								scrollToId(n.id);
							},
							className: cn("flex h-11 w-full items-center justify-between rounded-lg px-3 text-sm", active === n.id ? "bg-leather text-paper" : "hover:bg-camel/15"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: n.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums opacity-60",
								children: idx + 1
							})]
						}, n.id))
					})]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-3 pb-28 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "cover",
						className: "spread grid items-center gap-8 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-14",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "overflow-hidden rounded-[28px] bg-walnut p-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/cover.jpg",
								alt: "تابلوی تمام‌شده معرق چرم با ترنج مرکزی، لچک، گوشه، حاشیه و خال طلایی",
								className: "aspect-[3/4] w-full rounded-[20px] object-cover"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-camel",
								children: "گروه خلاقیت‌های تجسمی ایده — عرصه سیمرغ — اصفهان"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-3 font-display text-4xl leading-tight text-ink sm:text-5xl",
								children: ["برشور مصور کاربردی", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 block text-leather",
									children: "صنعت نوین معرق چرم"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-xl text-base leading-8 text-muted",
								children: "راهنمای فشرده، شماتیک و تصویری برای کارگاه — دقیقاً منطبق بر درسنامه کتاب استاندارد شغل معرق‌کار چرم. پدیدآورنده شیوه: استاد افشین خلیلی."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4",
								children: [
									["کد شغل", "۱-۰۲-۰۰-۷۷-۶۵۳۷"],
									["مدت دوره", "۱۰۹ ساعت"],
									["نظری / عملی", "۲۳ / ۸۶"],
									["فصل‌ها", "۱۰ فصل"]
								].map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl bg-surface p-3 shadow-[var(--shadow-border)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "text-xs text-muted",
										children: k
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 font-medium tabular-nums",
										children: v
									})]
								}, k))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 text-sm leading-7 text-muted",
								children: "ترتیب اجباری: اجرا ← تثبیت ← رنگ‌آمیزی. عبارت صحیح: «اجرای موتیف‌ها و اجرای بافت یا پیچ»."
							})
						] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "identity",
						className: "spread space-y-8 py-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
								kicker: "فصل ۱ — آگاهی پیش‌نیاز",
								title: "این صنعت چیست و با سوخت چرم چه فرقی دارد؟",
								body: "شیوه‌ای تخصصی و مستقل در کار با چرم طبیعی ضخیم که از دهه ۱۳۸۰ به‌صورت نظام اجرایی مستقل شکل گرفت. رنگ پس از شکل‌گیری کامل ساختار زده می‌شود و اثر روی زیرکار مناسب تثبیت می‌گردد."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DistinctionGrid, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 lg:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
									src: "/images/workshop.jpg",
									alt: "میز کار معرق چرم با پایه‌کار چوبی، قطعات چرمی و تریشه",
									caption: "صنعت ثانویه: معرق روی پایه‌کار چوبی، سفالی یا هر بستر پذیرنده چسب اجرا می‌شود."
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-4 rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "font-display text-xl",
											children: "خاستگاه کوتاه"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "leading-8 text-muted",
											children: "معرق چرم برآمده از ظرفیت‌های چرم طبیعی و میراث سوخت چرم است. نقش استاد میرزا آقا مهدی امامی اصفهانی در احیای سوخت معاصر برجسته است؛ صنعت نوین اما با انتقال اندیشه بند معرق به چرم ضخیم، فارسی‌بر، موتیف مستقل و بافت یا پیچ تریشه، مسیر جداگانه‌ای گشود."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "leading-8 text-muted",
											children: "دو نوآوری کلیدی پدیدآورنده شیوه: بافت یا پیچ تریشه با نوار یک‌میلیمتری و نوارکشی کامل کادر؛ و فرمولاسیون رزین زیرکار همراه با مشته‌زنی دو مرحله‌ای."
										})
									]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "glossary",
						className: "spread space-y-8 py-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
							kicker: "اصطلاحات فیکس‌شده",
							title: "واژه‌نامه کارگاهی که نباید جابه‌جا شود",
							body: "این تعاریف از متون دیکته‌شده استاد تثبیت شده‌اند. عبارت «تریشه‌دوزی» در کتاب جایی ندارد."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
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
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "golden",
						className: "spread space-y-8 py-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
							kicker: "فصل ۲ — مبانی هنرهای تجسمی",
							title: "نقاط طلایی کادر و Super Gold Point",
							body: "هر ضلع با دو نشانه به سه قسمت مساوی تقسیم می‌شود. خطوط فرضی به نقطه متناظر ضلع روبرو وصل می‌شوند. تلاقی، چهار نقطه طلایی است. شمال‌شرقی‌ترین نقطه Super Gold Point نام دارد."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid items-start gap-6 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoldenPointsDiagram, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "space-y-3",
									children: [
										"هر ضلع کادر (مربع یا مستطیل) به سه قسمت مساوی.",
										"از هر نشانه، خط فرضی به نقطه متناظر ضلع روبرو.",
										"چهار نقطه تلاقی = نقاط طلایی.",
										"شمال‌شرقی‌ترین = Super Gold Point."
									].map((t, n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3 rounded-xl bg-surface p-3 shadow-[var(--shadow-border)]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "inline-flex size-8 shrink-0 items-center justify-center rounded-md bg-leather text-sm text-paper",
											children: n + 1
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "leading-7",
											children: t
										})]
									}, t))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm leading-7 text-muted",
									children: "ترنج مرکزی تا دو نقطه طلایی را به خود اختصاص می‌دهد. این توانایی بستری برای تمام ترکیب‌بندی‌های بعدی است."
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "threelines",
						className: "spread space-y-8 py-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
								kicker: "قانون سه خط پایه — ابداع مؤلف",
								title: "منحنی کامل، اس‌شکل، منحنی کوتاه",
								body: "ساده‌ترین فرمول ترسیم اسلیمی. سه شکل پایه معرق: ترنج، حاشیه، لچک. اگر سه خط را بدون تغییر پشت‌سرهم وصل کنیم، یک‌چهارم ترنج ساخته می‌شود."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThreeLinesDiagram, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 lg:grid-cols-3",
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
										src: "/notebook/07_060140.jpg",
										alt: "ترسیم یک‌چهارم ترنج در دفتر استاد",
										caption: "اتصال سه خط بدون شکست = یک‌چهارم ترنج."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToranjCompare, {})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "composition",
						className: "spread space-y-8 py-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
							kicker: "کادر ایرانی کلاسیک",
							title: "ترنج، لچک، گوشه، حاشیه",
							body: "همان قانونی که در کاشی پخته و قالی ایرانی دیده می‌شود، اسکلت بسیاری از طرح‌های کاربردی معرق چرم است."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid items-start gap-6 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompositionDiagram, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
								src: "/images/box.jpg",
								alt: "جعبه چوبی با معرق چرم تمام‌شده شامل ترنج و حاشیه",
								caption: "اثر نهایی روی پایه‌کار چوبی پس از خال طلایی و روسازی."
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "elements",
						className: "spread space-y-8 py-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
							kicker: "مفردات اسلیمی",
							title: "از شمسه تا کتیبه — موتیف‌های کاربردی",
							body: "هم کتیبه و هم انواع نشان از جمله موتیف‌های اصلی کاربردی در معرق چرم هستند."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 lg:grid-cols-[1.1fr_0.9fr]",
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
								alt: "موتیف‌های بریده‌شده چرمی: شمسه، کتیبه، گوشه و یک‌چهارم ترنج",
								caption: "قطعات آماده چیدمان: شمسه ۸پر، کتیبه کشیده، گوشه و ربع ترنج."
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "leather",
						className: "spread space-y-8 py-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
								kicker: "فصل ۳ — شناخت چرم",
								title: "گروه دو، ماده اصلی است",
								body: "گروه یک (میشین، آستر، نبوک، رویه، کراست) لطیف است. گروه دو — کفی، زیره و کروپون از گاو و شتر — پایه صنعت نوین معرق چرم است."
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
								children: "چرم بز (کراس / فوتی) در استاندارد به‌عنوان یکی از دو نوع اصلی آمده و برای نقش‌اندازی ظریف مناسب است؛ اما قطعات، تریشه و موتیف اصلی از چرم کفی بریده می‌شوند. فضای مثبت = قسمت پر طرح؛ فضای منفی = خالی‌ها — بعضی فقط خط‌انداز می‌خواهند."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "tools",
						className: "spread space-y-8 py-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
								kicker: "فصل ۵ — ابزارشناسی",
								title: "ابزار درست، نصف مهارت است",
								body: "برای ظریف‌کاری تیغ جراحی یا شیفره؛ برای کار معمولی کاتر. تولید تریشه ۱ میلی‌متری فقط با تمرکز کامل و برش تک‌جهته."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-5 lg:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
									src: "/images/tools.jpg",
									alt: "مجموعه ابزار کارگاه معرق چرم",
									caption: "کاتر، تیغ جراحی، خط‌کش سنگین، مشته، سمبه برشی و چسب تماسی."
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
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border border-danger/30 bg-leather/10 p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-medium text-leather",
									children: "ایمنی برش تریشه"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-7 text-muted",
									children: "تیغه موکت‌بر بی‌اندازه برنده است. خط‌کش سنگین مهار شود. حرکت تیغ فقط در یک جهت، بدون رفت‌وبرگشت. عیب «سر و سر» از فشار نامساوی است؛ «شکم‌دار شدن» از انحراف تیغ."
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "process",
						className: "spread space-y-8 py-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
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
									alt: "انتقال الگوی کاغذی سه خط پایه روی چرم",
									caption: "از طرح تا چرم: اسکیل، الگوی کاغذی، تفکیک مثبت/منفی، انتقال با کاربن یا سوزن‌زنی."
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "weave",
						className: "spread space-y-8 py-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
							kicker: "اجرای موتیف‌ها و اجرای بافت یا پیچ",
							title: "نوار یک‌میلیمتری زبان بصری این صنعت است",
							body: "تریشه مسیر اسلیمی را پر می‌کند. فضاهای خالی بین پیچش‌ها محل دقیق بافت یا پیچ‌اند. اصطلاح دوخت تریشه در این کتاب جایی ندارد."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
							src: "/images/weave.jpg",
							alt: "کلوزآپ بافت تریشه یک‌میلیمتری در فضای منفی اسلیمی",
							caption: "یکنواختی عرض، مسیر مطابق طرح، بدون برجستگی ناخواسته.",
							className: "lg:max-w-none"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "chemistry",
						className: "spread space-y-8 py-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
							kicker: "اتصال و تثبیت",
							title: "چسب آهن، رزین ۱:۶، دونَم",
							body: "چسب آهن ماده متصل‌کننده اصلی است. رزین زیرکار پس از تکمیل ساختار می‌آید. غوطه‌وری ۱:۵ مرحله دیگری است و نباید با رزین مخلوط فهمیده شود."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "finish",
						className: "spread space-y-8 py-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
							kicker: "فصل ۸ و ۹ — رنگ، خال، روسازی",
							title: "رنگ مخصوص، خال طلایی، پوشش نهایی",
							body: "رنگ‌آمیزی پس از خشکی کامل است. خال‌زنی مرحله مستقل پیش از روسازی است. روغن‌دهی پس از رنگ از کتاب حذف شده."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 lg:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Figure, {
								src: "/images/color.jpg",
								alt: "ساخت رنگ مخصوص معرق چرم در بطری شفاف",
								caption: "ساخت در ظرف شفاف دردار؛ تست تدریجی روی نمونه چرم."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ColorRecipeDiagram, {})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "safety",
						className: "spread space-y-8 py-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
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
								className: "rounded-[28px] bg-walnut p-6 text-paper sm:p-8",
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
										children: "پدیدآورنده شیوه: استاد افشین خلیلی — ۹ مهر ۱۴۰۵"
									})
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "no-print fixed bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full bg-walnut/95 px-2 py-1.5 text-paper shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						className: "text-paper hover:bg-paper/10",
						"aria-label": "بخش قبلی",
						onClick: () => scrollToId(NAV[Math.max(0, i - 1)]?.id ?? "cover"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2 px-2 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums",
							children: [
								i + 1,
								" / ",
								NAV.length
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						className: "text-paper hover:bg-paper/10",
						"aria-label": "بخش بعدی",
						onClick: () => scrollToId(NAV[Math.min(NAV.length - 1, i + 1)]?.id ?? "safety"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
					})
				]
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brochure, {});
}
//#endregion
export { Home as component };
