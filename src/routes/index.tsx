import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import portraitImage from "../../priyan.png";
import { MechanicalSnake } from "../components/MechanicalSnake";
import { getGitHubContributions } from "../lib/api/github.functions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "priyan.r // cs portfolio [v2.4-CRACKED]" },
      {
        name: "description",
        content:
          "Priyan Rajarajan — CS student. Full-stack, backend, data, and systems work.",
      },
      { property: "og:title", content: "priyan.r — CS portfolio" },
      {
        property: "og:description",
        content:
          "Priyan Rajarajan — CS student. Full-stack, backend, data, and systems work.",
      },
    ],
  }),
  component: Portfolio,
});

const navLinks = [
  { href: "#about", label: "01_about" },
  { href: "#projects", label: "02_projects" },
  { href: "#stack", label: "03_stack" },
  { href: "#experience", label: "04_experience" },
  { href: "#education", label: "05_edu" },
  { href: "#certs", label: "06_certs" },
  { href: "#contact", label: "07_contact" },
];

const stack = {
  Languages: ["Python", "C / C++", "Java", "JavaScript", "TypeScript", "SQL"],
  Frameworks: [
    "React",
    "Next.js",
    "Flask",
    ".NET / WPF",
    "React Flow",
    "Chrome Extension APIs",
    "Manifest V3",
  ],
  "Backend & DB": ["Node.js", "MySQL", "PostgreSQL", "Prisma", "Drizzle ORM", "Redis"],
  Libraries: ["Pandas", "NumPy", "sql.js", "Zustand", "IndexedDB"],
};

const webProjects = [
  {
    id: "003",
    title: "UniSlot",
    subtitle: "University Evening Course Scheduling Engine",
    blurb:
      "NP-Hard timetabling solver for 2,600 students and 306+ courses across 55 evening slots. Models the problem as a weighted conflict graph with ILP constraints, then optimizes via metaheuristics (SA, Tabu Search, GA) and Timefold's incremental scoring. Resolves the student sectioning paradox through edge-minimizing pre-clustering before master timetable generation. Built on insights from ITC 2019 winning architectures.",
    tags: ["Python", "Timefold", "OR-Tools", "ILP", "Graph Theory", "Next.js"],
    links: [
      { label: "live", href: "https://uni-slot-three.vercel.app" },
    ],
    previewVideo: "/previews/unislot.mp4",
    status: "stable",
  },
  {
    id: "004",
    title: "QueryCraft",
    subtitle: "Database Learning Studio",
    blurb:
      "Next.js learning workspace for database practice — SQL sandbox with in-browser sql.js execution, relational algebra and tuple calculus playgrounds, ER diagram builder, normalization wizard, synthetic table generator, and a searchable DBMS reference. Client-first with Zustand-persisted per-account state; lightweight API routes for seed datasets and Test DB health probes.",
    tags: ["Next.js", "TypeScript", "sql.js", "Zustand", "React Flow", "Tailwind CSS"],
    links: [{ label: "live", href: "https://querycraft.xyz" }],
    previewVideo: "/previews/querycraft.mp4",
    status: "stable",
  },
  {
    id: "002",
    title: "Compus",
    subtitle: "Faculty–HOD Appointment Scheduling",
    blurb:
      "Full-stack scheduling platform for SRMIST with role-based workflows for Faculty, HODs, Admins. Priority-driven scheduling engine with conflict resolution + concurrency-safe slot allocation via PostgreSQL row locking and Redis. Google Calendar, push notifications, NextAuth + WebAuthn.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Redis"],
    links: [
      { label: "live", href: "https://compusweb.app/" },
      { label: "src", href: "https://github.com/HARIHARAN-38/Compus" },
    ],
    previewVideo: "/previews/compus.mp4",
    status: "beta",
  },
];

const desktopProjects = [
  {
    name: "TidyWindow",
    detail:
      "Windows maintenance platform — WPF (.NET 8) + C# services for cleanup, diagnostics, optimization, PowerShell 7 automation, registry tuning, and system monitoring.",
    href: "https://github.com/Skygazer1111/TidyWindow",
  },
];

const extensionProjects = [
  {
    name: "srmsgpa",
    detail:
      "SRM SGPA calculator on the portal Provisional Results page (Chrome MV3)",
    href: "https://chromewebstore.google.com/detail/srm-sgpa-calculator/nbaajhmclhddihjcnkihjbolbkdcfijj",
  },
  {
    name: "AegisStream",
    detail:
      "adaptive HLS/DASH buffering shield with prefetch + IndexedDB cache (Chrome MV3)",
  },
];

const experience = [
  {
    role: "Data Science Intern (Power BI)",
    org: "Infoplus MDM Pvt. Ltd.",
    range: "Jun 2026 → Present",
    detail:
      "Working with large datasets for analysis, visualization, and insight generation in Microsoft Power BI. Building interactive dashboards and reports, applying Power Query + DAX transformations, supporting data-driven decisions with industry teams.",
    active: true,
  },
];

const education = [
  {
    school: "B.Tech in Computer Science and Engineering",
    org: "SRM Institute of Science and Technology",
    range: "2024 → 2028",
    detail:
      "CGPA: 9.4 · Honours in Financial Technologies · Chennai, India",
    active: true,
  },
  {
    school: "Higher Secondary Certificate (Class XII)",
    org: "Chettinad Vidyashram",
    range: "— → 2024",
    detail:
      "88.66% · Physics, Chemistry, Mathematics, Biology · Chennai, India",
    active: false,
  },
];

const certifications = [
  { code: "NPTEL-JAVA", title: "Programming in Java — NPTEL", year: "—" },
  { code: "NPTEL-OS", title: "Operating System Fundamentals — NPTEL", year: "—" },
  { code: "NPTEL-OOP", title: "Fundamentals of Object-Oriented Programming — NPTEL", year: "—" },
  { code: "NPTEL-DBMS", title: "Database Management Systems — NPTEL", year: "—" },
];

const activities = [
  "Web Developer — IEEE Computer Society SRMIST",
  "Project Intern — ISD Lab, SRMIST",
  "Member — Institution of Engineers India (IEI)",
  "National Hackathon Winner — ULTRON 9.0",
  "UROP Research — Statistical ML for Air Quality Prediction (ongoing)",
];

function Tile({
  children,
  className = "",
  label,
  framed = false,
}: {
  children: React.ReactNode;
  className?: string;
  label?: string;
  framed?: boolean;
}) {
  return (
    <div
      className={`relative bg-surface border border-border rounded-lg ${
        framed ? "corner-frame" : ""
      } ${className}`}
    >
      {label && (
        <div className="absolute top-0 left-3 -translate-y-1/2 bg-bg px-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </div>
      )}
      {children}
    </div>
  );
}

const contributionColors = [
  "bg-surface-2",
  "bg-accent/20",
  "bg-accent/40",
  "bg-accent/70",
  "bg-accent",
];

function GitLogTile() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["github-contributions"],
    queryFn: () => getGitHubContributions(),
    staleTime: 1000 * 60 * 60,
  });

  const recent =
    data?.recent ??
    Array.from({ length: 60 }, () => ({ date: "", count: 0, level: 0 }));

  return (
    <Tile className="col-span-3 lg:col-span-2 p-5" label="git_log">
      <div className="font-mono text-[11px] text-muted-foreground">
        commits / 365d
      </div>
      <div className="mt-1 font-display text-4xl font-semibold tracking-tight">
        {isLoading ? "···" : isError || !data ? "###" : data.total}
      </div>
      <div className="mt-4 grid grid-cols-12 gap-[3px]">
        {recent.map((day, i) => (
          <div
            key={day.date || i}
            title={day.date ? `${day.date}: ${day.count} commits` : undefined}
            className={`h-2 ${contributionColors[day.level] ?? contributionColors[0]} rounded-[1px]`}
          />
        ))}
      </div>
    </Tile>
  );
}

function VideoPreview({
  name,
  liveUrl,
  previewVideo,
}: {
  name: string;
  liveUrl: string;
  previewVideo: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setShouldLoad(true);
      },
      { rootMargin: "120px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
  }, [previewVideo, shouldLoad]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-video w-full bg-bg border-b border-border overflow-hidden"
    >
      {shouldLoad && !hasError && (
        <video
          key={previewVideo}
          src={previewVideo}
          className="absolute inset-0 h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`${name} landing page preview`}
          onCanPlay={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}
      <div className="absolute inset-0 z-[5]" aria-hidden="true" />
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 z-[4] grid place-items-center bg-bg/90">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            loading preview...
          </div>
        </div>
      )}
      {hasError && (
        <div className="absolute inset-0 z-[4] grid place-items-center bg-bg/95 scanlines p-4 text-center">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              landing preview
            </div>
            <div className="mt-2 font-mono text-[11px] text-stone-600">
              add {previewVideo.split("/").pop()} to public/previews
            </div>
          </div>
        </div>
      )}
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-2 top-2 z-10 font-mono text-[10px] uppercase tracking-[0.2em] bg-bg/90 border border-border px-2 py-1 text-accent hover:bg-bg transition-colors"
      >
        open live ↗
      </a>
    </div>
  );
}

function PreviewPanel({
  id,
  name,
  liveUrl,
  previewVideo,
}: {
  id: string;
  name: string;
  liveUrl?: string;
  previewVideo?: string;
}) {
  if (liveUrl && previewVideo) {
    return (
      <VideoPreview
        name={name}
        liveUrl={liveUrl}
        previewVideo={previewVideo}
      />
    );
  }

  if (liveUrl) {
    return (
      <div className="relative aspect-video w-full bg-bg border-b border-border overflow-hidden scanlines">
        <div className="absolute inset-0 grid place-items-center p-4 text-center">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              landing preview pending
            </div>
            <div className="mt-2 font-mono text-[11px] text-stone-600">
              drop a screen recording in public/previews
            </div>
          </div>
        </div>
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-2 top-2 z-10 font-mono text-[10px] uppercase tracking-[0.2em] bg-bg/90 border border-border px-2 py-1 text-accent hover:bg-bg transition-colors"
        >
          open live ↗
        </a>
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full bg-bg border-b border-border overflow-hidden scanlines">
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            ./preview/{id}.png
          </div>
          <div className="mt-2 font-mono text-[11px] text-stone-600">
            [ image placeholder — drop yours in ]
          </div>
        </div>
      </div>
      <div className="absolute top-2 left-2 flex gap-1">
        <span className="size-2 rounded-full bg-stone-700" />
        <span className="size-2 rounded-full bg-stone-700" />
        <span className="size-2 rounded-full bg-accent" />
      </div>
      <div className="absolute bottom-2 right-3 font-mono text-[10px] text-stone-600">
        {name}
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="relative min-h-screen text-foreground selection:bg-accent selection:text-accent-foreground">
      <MechanicalSnake />

      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-bg/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="size-1.5 rounded-full bg-accent animate-blink" />
            <span className="text-foreground">priyan.r</span>
            <span className="text-muted-foreground hidden sm:inline">
              / portfolio.v2.4
            </span>
            <span className="text-accent hidden sm:inline">[CRACKED]</span>
          </div>
          <div className="hidden md:flex gap-5 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-accent transition-colors">
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent border border-accent/50 px-3 py-1.5 hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            ./contact
          </a>
        </div>
      </nav>

      {/* Marquee */}
      <div className="fixed top-14 left-0 right-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 gap-8 px-4">
              <span>+++ open to swe / ai dev / data roles +++</span>
              <span className="text-accent">★</span>
              <span>+++ shipping in ts, python, c# +++</span>
              <span className="text-accent">★</span>
              <span>+++ based in chennai, in +++</span>
              <span className="text-accent">★</span>
              <span>+++ dm: priyan123xyz@gmail.com +++</span>
              <span className="text-accent">★</span>
            </div>
          ))}
        </div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16">
        {/* HERO bento */}
        <section className="grid grid-cols-6 gap-3 sm:gap-4">
          {/* Hero headline */}
          <Tile className="col-span-6 lg:col-span-4 p-8 sm:p-12" framed>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-6">
              <span>~/whoami</span>
              <span className="animate-blink text-accent">▌</span>
            </div>
            <h1
              className="font-display font-medium tracking-tight text-4xl sm:text-6xl lg:text-7xl leading-[0.95]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Code, ship, <br />
              break, repeat <span className="text-accent">—</span> <br />
              the loop never <br />
              <span className="text-accent">exits.</span>
            </h1>
            <p className="mt-8 max-w-xl text-muted-foreground leading-relaxed">
              Priyan Rajarajan — CS undergrad at SRMIST. I build full-stack tools,
              backend systems, and the occasional Windows utility. Comfortable on
              either side of the API.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="font-mono text-xs uppercase tracking-[0.2em] bg-accent text-accent-foreground px-4 py-3 hover:brightness-110 transition"
              >
                ./view_projects
              </a>
              <a
                href="#contact"
                className="font-mono text-xs uppercase tracking-[0.2em] border border-border-strong text-foreground px-4 py-3 hover:border-accent hover:text-accent transition-colors"
              >
                ./hire_me
              </a>
            </div>
          </Tile>

          {/* status tile */}
          <Tile className="col-span-3 lg:col-span-2 p-5" label="status">
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="size-2 rounded-full bg-accent animate-blink" />
              <span className="text-accent">ONLINE</span>
            </div>
            <div className="mt-4 font-display text-xl font-medium leading-tight">
              Open for roles
            </div>
            <ul className="mt-3 space-y-1.5 font-mono text-[11px]">
              <li className="flex items-baseline justify-between gap-2">
                <span className="text-foreground">software engineer</span>
                <span className="text-accent shrink-0">open</span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span className="text-foreground">ai developer</span>
                <span className="text-accent shrink-0">open</span>
              </li>
              <li className="flex items-baseline justify-between gap-2">
                <span className="text-foreground">data analyst</span>
                <span className="text-muted-foreground shrink-0">interning</span>
              </li>
            </ul>
            <div className="mt-3 font-mono text-[11px] text-muted-foreground">
              data analyst @ infoplus mdm · power bi
            </div>
            <div className="mt-2 font-mono text-[11px] text-muted-foreground">
              chennai · remote ok
            </div>
          </Tile>

          <GitLogTile />

          {/* location */}
          <Tile className="col-span-3 lg:col-span-2 p-5" label="loc">
            <div className="font-display text-2xl">Chennai, IN</div>
            <div className="mt-1 font-mono text-[11px] text-muted-foreground">
              13.0827° N, 80.2707° E
            </div>
            <div className="mt-5 flex items-center justify-between font-mono text-[11px]">
              <span className="text-muted-foreground">tz</span>
              <span className="text-foreground">IST · UTC+5:30</span>
            </div>
          </Tile>

          {/* currently */}
          <Tile className="col-span-3 lg:col-span-2 p-5" label="now">
            <div className="font-mono text-[11px] text-muted-foreground mb-2">
              currently
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-baseline gap-2">
                <span className="text-accent font-mono text-xs">▸</span>
                interning <span className="text-muted-foreground">— Infoplus MDM (Power BI)</span>
              </li>
              <li className="flex items-baseline gap-2">
                <span className="text-accent font-mono text-xs">▸</span>
                researching <span className="text-muted-foreground">— ML for air quality (UROP)</span>
              </li>
              <li className="flex items-baseline gap-2">
                <span className="text-accent font-mono text-xs">▸</span>
                building <span className="text-muted-foreground">— side projects, always</span>
              </li>
            </ul>
          </Tile>
        </section>

        <Divider label="01_about" />

        {/* ABOUT */}
        <section id="about" className="grid grid-cols-6 gap-3 sm:gap-4 scroll-mt-24">
          <Tile className="col-span-6 lg:col-span-4 p-8" label="readme.md">
            <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight">
              I build across the stack — and I{" "}
              <span className="text-accent">like the messy parts</span>.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                CS undergrad at SRMIST. I spend most of my time shipping web
                apps, working with databases, building browser extensions, and
                occasionally tinkering with Windows tools when the mood hits.
              </p>
              <p>
                Lately I've been into scheduling problems, making sure things
                don't fall apart when they get busy, and figuring out where AI
                actually helps — and where it just gets in the way.
              </p>
              <p>
                Off the keyboard: hackathons, research on air quality, and
                helping run IEEE CS at SRMIST.
              </p>
            </div>
          </Tile>

          <Tile className="col-span-6 lg:col-span-2 p-5" label="./me.jpg">
            <img
              src={portraitImage}
              alt="Priyan portrait"
              className="aspect-square w-full object-cover border border-border rounded-md"
            />
            <div className="mt-4 font-mono text-[11px] text-muted-foreground space-y-1">
              <div className="flex justify-between"><span>name</span><span className="text-foreground">priyan r.</span></div>
              <div className="flex justify-between"><span>based</span><span className="text-foreground">chennai, in</span></div>
              <div className="flex justify-between"><span>role</span><span className="text-foreground">cs student</span></div>
            </div>
          </Tile>
        </section>

        <Divider label="02_projects" />

        {/* PROJECTS */}
        <section id="projects" className="grid grid-cols-6 gap-3 sm:gap-4 scroll-mt-24">
          <div className="col-span-6 flex items-end justify-between">
            <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight">
              Selected releases
            </h2>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {webProjects.length + desktopProjects.length + extensionProjects.length}{" "}
              entries
            </span>
          </div>

          <div className="col-span-6 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            web apps
          </div>

          {webProjects.map((p) => (
            <Tile
              key={p.id}
              className="col-span-6 lg:col-span-3 overflow-hidden group"
            >
              <PreviewPanel
                id={p.id}
                name={p.title}
                liveUrl={p.links.find((l) => l.label === "live")?.href}
                previewVideo={p.previewVideo}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  <span>release_{p.id}</span>
                  <span className="flex items-center gap-1.5">
                    <span
                      className={`size-1.5 rounded-full ${
                        p.status === "stable"
                          ? "bg-accent"
                          : p.status === "beta"
                          ? "bg-accent/50"
                          : "bg-stone-600"
                      }`}
                    />
                    {p.status}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h3 className="font-display text-xl sm:text-2xl font-medium tracking-tight">
                      {p.title}
                    </h3>
                    <div className="font-mono text-[11px] text-muted-foreground mt-0.5">
                      {p.subtitle}
                    </div>
                  </div>
                  <div className="flex gap-3 font-mono text-[11px] shrink-0 mt-1">
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline underline-offset-4"
                      >
                        ./{l.label} ↗
                      </a>
                    ))}
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {p.blurb}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 border border-border font-mono text-[10px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Tile>
          ))}

          <Tile className="col-span-6 p-5" label="desktop apps">
            <ul className="font-mono text-sm space-y-2">
              {desktopProjects.map((app) => (
                <li key={app.name} className="flex items-baseline gap-2">
                  <span className="text-accent text-xs">▸</span>
                  <span className="text-muted-foreground">
                    {app.href ? (
                      <a
                        href={app.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-accent transition-colors"
                      >
                        {app.name}
                      </a>
                    ) : (
                      app.name
                    )}
                    {" — "}
                    {app.detail}
                    {app.href ? " ↗" : ""}
                  </span>
                </li>
              ))}
            </ul>
          </Tile>

          <Tile className="col-span-6 p-5" label="chrome extensions">
            <ul className="font-mono text-sm space-y-2">
              {extensionProjects.map((ext) => (
                <li key={ext.name} className="flex items-baseline gap-2">
                  <span className="text-accent text-xs">▸</span>
                  <span className="text-muted-foreground">
                    {ext.href ? (
                      <a
                        href={ext.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-accent transition-colors"
                      >
                        {ext.name}
                      </a>
                    ) : (
                      ext.name
                    )}
                    {" — "}
                    {ext.detail}
                    {ext.href ? " ↗" : ""}
                  </span>
                </li>
              ))}
            </ul>
          </Tile>
        </section>

        <Divider label="03_stack" />

        {/* STACK */}
        <section id="stack" className="grid grid-cols-6 gap-3 sm:gap-4 scroll-mt-24">
          {Object.entries(stack).map(([group, items]) => (
            <Tile
              key={group}
              className="col-span-6 sm:col-span-3 lg:col-span-2 p-5"
              label={group.toLowerCase()}
            >
              <ul className="font-mono text-sm space-y-1.5">
                {items.map((it) => (
                  <li key={it} className="flex items-baseline gap-2">
                    <span className="text-accent text-xs">›</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </Tile>
          ))}
        </section>

        <Divider label="04_experience" />

        {/* EXPERIENCE */}
        <section id="experience" className="grid grid-cols-6 gap-3 sm:gap-4 scroll-mt-24">
          {experience.map((e) => (
            <Tile key={e.role + e.org} className="col-span-6 lg:col-span-3 p-6">
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em]">
                <span className={e.active ? "text-accent" : "text-muted-foreground"}>
                  {e.active ? "● active" : "○ past"}
                </span>
                <span className="text-muted-foreground">{e.range}</span>
              </div>
              <h3 className="mt-3 font-display text-xl font-medium tracking-tight">
                {e.role}
              </h3>
              <p className="text-sm text-muted-foreground">{e.org}</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {e.detail}
              </p>
            </Tile>
          ))}

          <Tile className="col-span-6 p-6" label="leadership & activities">
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 font-mono text-sm">
              {activities.map((a) => (
                <li key={a} className="flex items-baseline gap-2">
                  <span className="text-accent text-xs">▸</span>
                  <span className="text-muted-foreground">{a}</span>
                </li>
              ))}
            </ul>
          </Tile>
        </section>

        <Divider label="05_education" />

         {/* EDUCATION */}
        <section
          id="education"
          className="grid grid-cols-6 gap-3 sm:gap-4 scroll-mt-24"
        >
          <div className="col-span-6 flex items-end justify-between">
            <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight">
              Education
            </h2>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {education.length} entries
            </span>
          </div>

          {education.map((e) => (
            <Tile key={e.org + e.school} className="col-span-6 lg:col-span-3 p-6">
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em]">
                <span
                  className={e.active ? "text-accent" : "text-muted-foreground"}
                >
                  {e.active ? "● active" : "○ past"}
                </span>
                <span className="text-muted-foreground">{e.range}</span>
              </div>
              <h3 className="mt-3 font-display text-xl font-medium tracking-tight">
                {e.school}
              </h3>
              <p className="text-sm text-muted-foreground">{e.org}</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                {e.detail}
              </p>
            </Tile>
          ))}
        </section>

        <Divider label="06_certs" />

        {/* CERTS */}
        <section id="certs" className="grid grid-cols-6 gap-3 sm:gap-4 scroll-mt-24">
          {certifications.map((c) => (
            <Tile
              key={c.code}
              className="col-span-6 sm:col-span-3 lg:col-span-3 p-5 flex items-center justify-between gap-4"
            >
              <div className="min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  [{c.code}]
                </div>
                <div className="mt-1 text-foreground truncate">{c.title}</div>
              </div>
              <div className="font-mono text-xs text-muted-foreground shrink-0">
                {c.year}
              </div>
            </Tile>
          ))}
        </section>

        <Divider label="07_contact" />

        {/* CONTACT */}
        <section id="contact" className="grid grid-cols-6 gap-3 sm:gap-4 scroll-mt-24">
          <Tile className="col-span-6 lg:col-span-4 p-8 sm:p-12" framed>
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
              ~/contact &gt; init.sh
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight leading-tight">
              Got a role, a project, or a <span className="text-accent">weird idea</span>?<br />
              The inbox is open.
            </h2>
            <a
              href="mailto:priyan123xyz@gmail.com"
              className="mt-8 inline-flex items-center gap-3 font-mono text-base sm:text-lg text-accent border-b border-accent/60 hover:border-accent transition-colors pb-1"
            >
              priyan123xyz@gmail.com
              <span className="text-xs">↗</span>
            </a>
          </Tile>

          <Tile className="col-span-6 lg:col-span-2 p-5" label="links">
            <ul className="font-mono text-sm space-y-3">
              {[
                ["github", "@Skygazer1111", "https://github.com/Skygazer1111"],
                ["linkedin", "/priyan-rajarajan", "https://linkedin.com/in/priyan-rajarajan-b8128b2a2"],
                ["phone", "+91 63802 43702", "tel:+916380243702"],
                ["instagram", "@priyxn__ig__", "https://www.instagram.com/priyxn__ig__?igsh=MTE0bDhlaXkyY2t2Ng%3D%3D&utm_source=qr"],
                ["resume", "view resume", "https://drive.google.com/file/d/1RrPsUcDj7xGSpxlYU0G4W8mkvIVJRZql/view?usp=sharing"],
              ].map(([k, v, href]) => (
                <li key={k} className="flex items-baseline justify-between gap-2 border-b border-border pb-2 last:border-0">
                  <span className="text-muted-foreground">{k}</span>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors truncate">
                    {v} ↗
                  </a>
                </li>
              ))}
            </ul>
          </Tile>
        </section>
      </main>

      <footer className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-10 mt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <p>© 2026 priyan rajarajan — assembled by hand</p>
          <p>
            build <span className="text-accent">v2.4.1-cracked</span> · chennai · ist
          </p>
        </div>
      </footer>
    </div>
  );
}

function Divider({ label }: { label: string }) {
  return (
    <div className="my-12 sm:my-16 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
      <span className="text-accent">┌──</span>
      <span>{label}</span>
      <span className="flex-1 border-t border-dashed border-border" />
      <span className="text-accent">──┐</span>
    </div>
  );
}
