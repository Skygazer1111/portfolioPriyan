import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CJh6utJa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var priyan_default = "/assets/priyan-C9AquHz7.png";
var navLinks = [
	{
		href: "#about",
		label: "01_about"
	},
	{
		href: "#projects",
		label: "02_projects"
	},
	{
		href: "#stack",
		label: "03_stack"
	},
	{
		href: "#experience",
		label: "04_experience"
	},
	{
		href: "#education",
		label: "05_edu"
	},
	{
		href: "#certs",
		label: "06_certs"
	},
	{
		href: "#contact",
		label: "07_contact"
	}
];
var stack = {
	Languages: [
		"Python",
		"C / C++",
		"Java",
		"JavaScript",
		"TypeScript",
		"SQL"
	],
	Frameworks: [
		"React",
		"Next.js",
		"Flask",
		".NET / WPF"
	],
	"Backend & DB": [
		"Node.js",
		"MySQL",
		"PostgreSQL",
		"Prisma",
		"Drizzle ORM",
		"Redis"
	],
	Libraries: [
		"Pandas",
		"NumPy",
		"Recharts",
		"Fabric.js"
	],
	Tools: [
		"Git",
		"GitHub",
		"VS Code",
		"Vercel",
		"IntelliJ",
		"PowerShell",
		"Power BI"
	]
};
var projects = [
	{
		id: "001",
		title: "TidyWindow",
		subtitle: "Windows Maintenance Platform",
		blurb: "Windows system maintenance tool built with WPF (.NET 8) and C# services — cleanup, diagnostics, optimization. PowerShell 7 automation with secure execution, logging, rollback. Software management, registry tuning, system monitoring.",
		tags: [
			".NET 8",
			"C#",
			"WPF",
			"PowerShell"
		],
		links: [{
			label: "src",
			href: "https://github.com/Skygazer1111/TidyWindow"
		}],
		status: "stable"
	},
	{
		id: "002",
		title: "Compus",
		subtitle: "Faculty–HOD Appointment Scheduling",
		blurb: "Full-stack scheduling platform for SRMIST with role-based workflows for Faculty, HODs, Admins. Priority-driven scheduling engine with conflict resolution + concurrency-safe slot allocation via PostgreSQL row locking and Redis. Google Calendar, push notifications, NextAuth + WebAuthn.",
		tags: [
			"Next.js",
			"TypeScript",
			"PostgreSQL",
			"Prisma",
			"Redis"
		],
		links: [{
			label: "live",
			href: "https://compusweb.app/"
		}, {
			label: "src",
			href: "https://github.com/HARIHARAN-38/Compus"
		}],
		status: "beta"
	},
	{
		id: "003",
		title: "UniSlot",
		subtitle: "University Evening Course Scheduling Engine",
		blurb: "NP-Hard timetabling solver for 2,600 students and 306+ courses across 55 evening slots. Models the problem as a weighted conflict graph with ILP constraints, then optimizes via metaheuristics (SA, Tabu Search, GA) and Timefold's incremental scoring. Resolves the student sectioning paradox through edge-minimizing pre-clustering before master timetable generation. Built on insights from ITC 2019 winning architectures.",
		tags: [
			"Python",
			"Timefold",
			"OR-Tools",
			"ILP",
			"Graph Theory",
			"Next.js"
		],
		links: [{
			label: "live",
			href: "https://uni-slot-three.vercel.app"
		}],
		status: "stable"
	}
];
var experience = [{
	role: "Data Science Intern (Power BI)",
	org: "Infoplus MDM Pvt. Ltd.",
	range: "Jun 2026 → Present",
	detail: "Working with large datasets for analysis, visualization, and insight generation in Microsoft Power BI. Building interactive dashboards and reports, applying Power Query + DAX transformations, supporting data-driven decisions with industry teams.",
	active: true
}, {
	role: "Project Intern",
	org: "ISD Lab, SRM Institute of Science and Technology",
	range: "—",
	detail: "// add details here",
	active: false
}];
var education = [{
	school: "B.Tech Computer Science",
	org: "SRM Institute of Science and Technology",
	range: "— → —",
	detail: "// add coursework, GPA, focus areas here",
	active: true
}];
var certifications = [
	{
		code: "NPTEL-JAVA",
		title: "Programming in Java — NPTEL",
		year: "—"
	},
	{
		code: "NPTEL-OS",
		title: "Operating System Fundamentals — NPTEL",
		year: "—"
	},
	{
		code: "NPTEL-OOP",
		title: "Fundamentals of Object-Oriented Programming — NPTEL",
		year: "—"
	},
	{
		code: "NPTEL-DBMS",
		title: "Database Management Systems — NPTEL",
		year: "—"
	}
];
var activities = [
	"Web Developer — IEEE Computer Society SRMIST",
	"Project Intern — ISD Lab, SRMIST",
	"Member — Institution of Engineers India (IEI)",
	"National Hackathon Winner — ULTRON 9.0",
	"UROP Research — Statistical ML for Air Quality Prediction (ongoing)"
];
function Tile({ children, className = "", label, framed = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative bg-surface border border-border rounded-lg ${framed ? "corner-frame" : ""} ${className}`,
		children: [label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute top-0 left-3 -translate-y-1/2 bg-bg px-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
			children: label
		}), children]
	});
}
function PreviewPanel({ id, name, liveUrl }) {
	if (liveUrl) {
		const [isLoaded, setIsLoaded] = (0, import_react.useState)(false);
		const [isBlocked, setIsBlocked] = (0, import_react.useState)(false);
		(0, import_react.useEffect)(() => {
			setIsLoaded(false);
			setIsBlocked(false);
			const timer = window.setTimeout(() => {
				setIsBlocked(true);
			}, 4500);
			return () => {
				window.clearTimeout(timer);
			};
		}, [liveUrl]);
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-48 sm:h-56 bg-bg border-b border-border overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					src: liveUrl,
					title: `${name} live preview`,
					loading: "lazy",
					className: "h-full w-full border-0 bg-bg",
					sandbox: "allow-scripts allow-same-origin allow-forms allow-popups",
					referrerPolicy: "no-referrer-when-downgrade",
					onLoad: () => setIsLoaded(true),
					onError: () => setIsBlocked(true)
				}),
				!isLoaded && !isBlocked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 grid place-items-center bg-bg/90",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground",
						children: "loading live preview..."
					})
				}),
				isBlocked && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 grid place-items-center bg-bg/95 scanlines p-4 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground",
						children: "live preview unavailable"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 font-mono text-[11px] text-stone-600",
						children: "target site blocks iframe embedding"
					})] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: liveUrl,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "absolute right-2 top-2 font-mono text-[10px] uppercase tracking-[0.2em] bg-bg/90 border border-border px-2 py-1 text-accent hover:bg-bg transition-colors",
					children: "open live ↗"
				})
			]
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-48 sm:h-56 bg-bg border-b border-border overflow-hidden scanlines",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 grid place-items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
						children: [
							"./preview/",
							id,
							".png"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 font-mono text-[11px] text-stone-600",
						children: "[ image placeholder — drop yours in ]"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-2 left-2 flex gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-stone-700" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-stone-700" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-accent" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-2 right-3 font-mono text-[10px] text-stone-600",
				children: name
			})
		]
	});
}
function Portfolio() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen text-foreground selection:bg-accent selection:text-accent-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed top-0 z-50 w-full border-b border-border bg-bg/85 backdrop-blur-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 font-mono text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-accent animate-blink" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground",
									children: "priyan.r"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground hidden sm:inline",
									children: "/ portfolio.v2.4"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent hidden sm:inline",
									children: "[CRACKED]"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden md:flex gap-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground",
							children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: l.href,
								className: "hover:text-accent transition-colors",
								children: l.label
							}, l.href))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: "font-mono text-[11px] uppercase tracking-[0.18em] text-accent border border-accent/50 px-3 py-1.5 hover:bg-accent hover:text-accent-foreground transition-colors",
							children: "./contact"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed top-14 left-0 right-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex whitespace-nowrap animate-marquee py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
					children: Array.from({ length: 2 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex shrink-0 gap-8 px-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+++ open to swe / backend roles +++" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent",
								children: "★"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+++ shipping in ts, python, c# +++" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent",
								children: "★"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+++ based in chennai, in +++" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent",
								children: "★"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "+++ dm: priyan123xyz@gmail.com +++" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-accent",
								children: "★"
							})
						]
					}, i))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "relative max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "grid grid-cols-6 gap-3 sm:gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
								className: "col-span-6 lg:col-span-4 p-8 sm:p-12",
								framed: true,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-6",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "~/whoami" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "animate-blink text-accent",
											children: "▌"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "font-display font-medium tracking-tight text-4xl sm:text-6xl lg:text-7xl leading-[0.95]",
										style: { fontFamily: "var(--font-display)" },
										children: [
											"Code, ship, ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"break, repeat ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-accent",
												children: "—"
											}),
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"the loop never ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-accent",
												children: "exits."
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-8 max-w-xl text-muted-foreground leading-relaxed",
										children: "Priyan Rajarajan — CS undergrad at SRMIST. I build full-stack tools, backend systems, and the occasional Windows utility. Comfortable on either side of the API."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 flex flex-wrap gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#projects",
											className: "font-mono text-xs uppercase tracking-[0.2em] bg-accent text-accent-foreground px-4 py-3 hover:brightness-110 transition",
											children: "./view_projects"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "#contact",
											className: "font-mono text-xs uppercase tracking-[0.2em] border border-border-strong text-foreground px-4 py-3 hover:border-accent hover:text-accent transition-colors",
											children: "./hire_me"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
								className: "col-span-3 lg:col-span-2 p-5",
								label: "status",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 font-mono text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-accent animate-blink" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-accent",
											children: "ONLINE"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 font-display text-2xl font-medium leading-tight",
										children: [
											"Open for ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
											"SWE roles"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 font-mono text-[11px] text-muted-foreground",
										children: "chennai · remote ok"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
								className: "col-span-3 lg:col-span-2 p-5",
								label: "git_log",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-mono text-[11px] text-muted-foreground",
										children: "commits / 365d"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 font-display text-4xl font-semibold tracking-tight",
										children: "###"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-4 grid grid-cols-12 gap-[3px]",
										children: Array.from({ length: 60 }).map((_, i) => {
											return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-2 ${[
												"bg-surface-2",
												"bg-accent/20",
												"bg-accent/40",
												"bg-accent/70",
												"bg-accent"
											][i * 37 % 5]} rounded-[1px]` }, i);
										})
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
								className: "col-span-3 lg:col-span-2 p-5",
								label: "loc",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "font-display text-2xl",
										children: "Chennai, IN"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1 font-mono text-[11px] text-muted-foreground",
										children: "13.0827° N, 80.2707° E"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-5 flex items-center justify-between font-mono text-[11px]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-muted-foreground",
											children: "tz"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground",
											children: "IST · UTC+5:30"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
								className: "col-span-3 lg:col-span-2 p-5",
								label: "now",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-[11px] text-muted-foreground mb-2",
									children: "currently"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
									className: "space-y-2 text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-baseline gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-accent font-mono text-xs",
													children: "▸"
												}),
												"interning ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground",
													children: "— Infoplus MDM (Power BI)"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-baseline gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-accent font-mono text-xs",
													children: "▸"
												}),
												"researching ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground",
													children: "— ML for air quality (UROP)"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-baseline gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-accent font-mono text-xs",
													children: "▸"
												}),
												"building ",
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground",
													children: "— side projects, always"
												})
											]
										})
									]
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, { label: "01_about" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "about",
						className: "grid grid-cols-6 gap-3 sm:gap-4 scroll-mt-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
							className: "col-span-6 lg:col-span-4 p-8",
							label: "readme.md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-3xl sm:text-4xl font-medium tracking-tight",
								children: [
									"I build across the stack — and I ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent",
										children: "like the messy parts"
									}),
									"."
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 space-y-4 text-muted-foreground leading-relaxed",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "CS undergrad at SRMIST. I spend most of my time shipping full-stack apps in Next.js + TypeScript, designing schemas in Postgres / MySQL, and occasionally writing C# / WPF for Windows tooling." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Lately I've been into scheduling engines, concurrency-safe data workflows, and figuring out where AI actually pulls weight in a product (and where it just makes things slower)." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Off the keyboard: hackathons, research on ML for air quality, and helping run IEEE CS at SRMIST." })
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
							className: "col-span-6 lg:col-span-2 p-5",
							label: "./me.jpg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: priyan_default,
								alt: "Priyan portrait",
								className: "aspect-square w-full object-cover border border-border rounded-md"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 font-mono text-[11px] text-muted-foreground space-y-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground",
											children: "priyan r."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "based" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground",
											children: "chennai, in"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "role" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground",
											children: "cs student"
										})]
									})
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, { label: "02_projects" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "projects",
						className: "grid grid-cols-6 gap-3 sm:gap-4 scroll-mt-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "col-span-6 flex items-end justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl sm:text-3xl font-medium tracking-tight",
								children: "Selected releases"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground",
								children: [projects.length, " entries"]
							})]
						}), projects.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
							className: `col-span-6 ${i === 0 ? "lg:col-span-4" : "lg:col-span-3"} overflow-hidden group`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewPanel, {
								id: p.id,
								name: p.title,
								liveUrl: p.links.find((l) => l.label === "live")?.href
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["release_", p.id] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-1.5",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-1.5 rounded-full ${p.status === "stable" ? "bg-accent" : p.status === "beta" ? "bg-accent/50" : "bg-stone-600"}` }), p.status]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-xl sm:text-2xl font-medium tracking-tight",
												children: p.title
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "font-mono text-[11px] text-muted-foreground mt-0.5",
												children: p.subtitle
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex gap-3 font-mono text-[11px] shrink-0 mt-1",
											children: p.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
												href: l.href,
												target: "_blank",
												rel: "noopener noreferrer",
												className: "text-accent hover:underline underline-offset-4",
												children: [
													"./",
													l.label,
													" ↗"
												]
											}, l.label))
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-sm text-muted-foreground leading-relaxed",
										children: p.blurb
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5 flex flex-wrap gap-1.5",
										children: p.tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "px-2 py-0.5 border border-border font-mono text-[10px] text-muted-foreground",
											children: t
										}, t))
									})
								]
							})]
						}, p.id))]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, { label: "03_stack" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "stack",
						className: "grid grid-cols-6 gap-3 sm:gap-4 scroll-mt-24",
						children: Object.entries(stack).map(([group, items]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
							className: "col-span-6 sm:col-span-3 lg:col-span-2 p-5",
							label: group.toLowerCase(),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "font-mono text-sm space-y-1.5",
								children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-baseline gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent text-xs",
										children: "›"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: it })]
								}, it))
							})
						}, group))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, { label: "04_experience" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "experience",
						className: "grid grid-cols-6 gap-3 sm:gap-4 scroll-mt-24",
						children: [experience.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
							className: "col-span-6 lg:col-span-3 p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: e.active ? "text-accent" : "text-muted-foreground",
										children: e.active ? "● active" : "○ past"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: e.range
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-xl font-medium tracking-tight",
									children: e.role
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: e.org
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm text-muted-foreground leading-relaxed",
									children: e.detail
								})
							]
						}, e.role + e.org)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
							className: "col-span-6 p-6",
							label: "leadership & activities",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "grid sm:grid-cols-2 gap-x-6 gap-y-2 font-mono text-sm",
								children: activities.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-baseline gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent text-xs",
										children: "▸"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: a
									})]
								}, a))
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, { label: "05_education" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "education",
						className: "grid grid-cols-6 gap-3 sm:gap-4 scroll-mt-24",
						children: education.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
							className: "col-span-6 lg:col-span-3 p-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: e.active ? "text-accent" : "text-muted-foreground",
										children: e.active ? "● active" : "○ past"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: e.range
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-xl font-medium tracking-tight",
									children: e.school
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: e.org
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-sm text-muted-foreground leading-relaxed",
									children: e.detail
								})
							]
						}, e.school))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, { label: "06_certs" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "certs",
						className: "grid grid-cols-6 gap-3 sm:gap-4 scroll-mt-24",
						children: certifications.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
							className: "col-span-6 sm:col-span-3 lg:col-span-3 p-5 flex items-center justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "font-mono text-[10px] uppercase tracking-[0.2em] text-accent",
									children: [
										"[",
										c.code,
										"]"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 text-foreground truncate",
									children: c.title
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-xs text-muted-foreground shrink-0",
								children: c.year
							})]
						}, c.code))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, { label: "07_contact" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "contact",
						className: "grid grid-cols-6 gap-3 sm:gap-4 scroll-mt-24",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tile, {
							className: "col-span-6 lg:col-span-4 p-8 sm:p-12",
							framed: true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-4",
									children: "~/contact > init.sh"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
									className: "font-display text-3xl sm:text-5xl font-medium tracking-tight leading-tight",
									children: [
										"Got a role, a project, or a ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-accent",
											children: "weird idea"
										}),
										"?",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"The inbox is open."
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "mailto:priyan123xyz@gmail.com",
									className: "mt-8 inline-flex items-center gap-3 font-mono text-base sm:text-lg text-accent border-b border-accent/60 hover:border-accent transition-colors pb-1",
									children: ["priyan123xyz@gmail.com", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs",
										children: "↗"
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
							className: "col-span-6 lg:col-span-2 p-5",
							label: "links",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "font-mono text-sm space-y-3",
								children: [
									[
										"github",
										"@Skygazer1111",
										"https://github.com/Skygazer1111"
									],
									[
										"linkedin",
										"/priyan-rajarajan",
										"https://linkedin.com/in/priyan-rajarajan-b8128b2a2"
									],
									[
										"phone",
										"+91 63802 43702",
										"tel:+916380243702"
									],
									[
										"email",
										"priyan123xyz@gmail.com",
										"mailto:priyan123xyz@gmail.com"
									],
									[
										"resume",
										"view resume",
										"https://drive.google.com/file/d/1RrPsUcDj7xGSpxlYU0G4W8mkvIVJRZql/view?usp=sharing"
									]
								].map(([k, v, href]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-baseline justify-between gap-2 border-b border-border pb-2 last:border-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-muted-foreground",
										children: k
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "text-foreground hover:text-accent transition-colors truncate",
										children: [v, " ↗"]
									})]
								}, k))
							})
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "relative max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-10 mt-8 border-t border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col sm:flex-row justify-between items-start gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 priyan rajarajan — assembled by hand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"build ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-accent",
							children: "v2.4.1-cracked"
						}),
						" · chennai · ist"
					] })]
				})
			})
		]
	});
}
function Divider({ label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "my-12 sm:my-16 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-accent",
				children: "┌──"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "flex-1 border-t border-dashed border-border" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-accent",
				children: "──┐"
			})
		]
	});
}
//#endregion
export { Portfolio as component };
