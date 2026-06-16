import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "alex.chen // cs portfolio [v2.4-CRACKED]" },
      {
        name: "description",
        content:
          "Computer Science student. Backend, distributed systems, low-level performance work.",
      },
      { property: "og:title", content: "alex.chen — CS portfolio" },
      {
        property: "og:description",
        content:
          "Computer Science student. Backend, distributed systems, low-level performance work.",
      },
    ],
  }),
  component: Portfolio,
});

const navLinks = [
  { href: "#about", label: "01_about" },
  { href: "#projects", label: "02_projects" },
  { href: "#stack", label: "03_stack" },
  { href: "#education", label: "04_edu" },
  { href: "#certs", label: "05_certs" },
  { href: "#contact", label: "06_contact" },
];

const stack = {
  Languages: ["Rust", "C / C++", "Python", "Go", "TypeScript"],
  Runtimes: ["Linux / eBPF", "Kubernetes", "Docker", "WASM"],
  Data: ["PostgreSQL", "Redis", "ClickHouse", "Kafka"],
  Cloud: ["AWS", "GCP", "Cloudflare", "Fly.io"],
};

const projects = [
  {
    id: "001",
    title: "Nexus Graph Engine",
    blurb:
      "High-performance graph processor in C++ — billions of edges, sub-ms traversals via SIMD + CUDA kernels.",
    tags: ["C++20", "CUDA", "SIMD"],
    links: [
      { label: "src", href: "#" },
      { label: "demo", href: "#" },
    ],
    status: "stable",
  },
  {
    id: "002",
    title: "Aura Cloud Platform",
    blurb:
      "Self-hosted PaaS for student teams. git-push deploys, container orchestration, zero-config TLS.",
    tags: ["Go", "Docker", "gRPC"],
    links: [{ label: "src", href: "#" }],
    status: "beta",
  },
  {
    id: "003",
    title: "kx — kernel tracer",
    blurb:
      "eBPF-based syscall tracer with a flamegraph TUI. Built to debug a misbehaving DB driver.",
    tags: ["Rust", "eBPF", "TUI"],
    links: [
      { label: "src", href: "#" },
      { label: "writeup", href: "#" },
    ],
    status: "wip",
  },
];

const education = [
  {
    school: "B.S. Computer Science",
    org: "University of Technology",
    range: "2021 → 2025",
    detail:
      "OS, compilers, distributed systems, advanced algorithms. GPA 3.9 / 4.0.",
    active: true,
  },
  {
    school: "Systems Engineering Intern",
    org: "CloudScale Infrastructure",
    range: "Summer 2023",
    detail: "Built an internal metrics pipeline. Cut p99 ingest latency by 38%.",
    active: false,
  },
];

const certifications = [
  { code: "AWS-DEV-A", title: "AWS Certified Developer — Associate", year: "2023" },
  { code: "GCP-PCE", title: "Google Cloud Professional Engineer", year: "2023" },
  { code: "CKAD", title: "Certified Kubernetes Application Developer", year: "2024" },
  { code: "META-FE", title: "Meta Front-End Developer", year: "2022" },
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

function PreviewPlaceholder({ id, name }: { id: string; name: string }) {
  return (
    <div className="relative h-48 sm:h-56 bg-bg border-b border-border overflow-hidden scanlines">
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
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-bg/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-mono text-xs">
            <span className="size-1.5 rounded-full bg-accent animate-blink" />
            <span className="text-foreground">alex.chen</span>
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
              <span>+++ available for summer 2025 internships +++</span>
              <span className="text-accent">★</span>
              <span>+++ shipping in rust, go, c++ +++</span>
              <span className="text-accent">★</span>
              <span>+++ 04:21 PT • uptime 22y +++</span>
              <span className="text-accent">★</span>
              <span>+++ open to dm — keybase / signal +++</span>
              <span className="text-accent">★</span>
            </div>
          ))}
        </div>
      </div>

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16">
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
              Building things <br />
              that shouldn't <br />
              <span className="text-accent">scale</span>
              <span className="text-accent">.</span> Then making <br />
              them scale anyway.
            </h1>
            <p className="mt-8 max-w-xl text-muted-foreground leading-relaxed">
              Alex Chen — CS student. I write low-level systems, ship tools other
              devs actually use, and reverse-engineer things that don't have docs.
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
                ./hire_me --full-time
              </a>
            </div>
          </Tile>

          {/* status tile */}
          <Tile className="col-span-3 lg:col-span-2 p-5" label="status">
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="size-2 rounded-full bg-accent animate-blink" />
              <span className="text-accent">ONLINE</span>
            </div>
            <div className="mt-4 font-display text-2xl font-medium leading-tight">
              Open for <br />
              summer '25
            </div>
            <div className="mt-4 font-mono text-[11px] text-muted-foreground">
              SF • remote ok • visa: none
            </div>
          </Tile>

          {/* metric tile - commits */}
          <Tile className="col-span-3 lg:col-span-2 p-5" label="git_log">
            <div className="font-mono text-[11px] text-muted-foreground">
              commits / 365d
            </div>
            <div className="mt-1 font-display text-4xl font-semibold tracking-tight">
              1,284
            </div>
            <div className="mt-4 grid grid-cols-12 gap-[3px]">
              {Array.from({ length: 60 }).map((_, i) => {
                const h = (i * 37) % 5;
                const colors = [
                  "bg-surface-2",
                  "bg-accent/20",
                  "bg-accent/40",
                  "bg-accent/70",
                  "bg-accent",
                ];
                return <div key={i} className={`h-2 ${colors[h]} rounded-[1px]`} />;
              })}
            </div>
          </Tile>

          {/* uptime / location */}
          <Tile className="col-span-3 lg:col-span-2 p-5" label="loc">
            <div className="font-display text-2xl">San Francisco</div>
            <div className="mt-1 font-mono text-[11px] text-muted-foreground">
              37.7749° N, 122.4194° W
            </div>
            <div className="mt-5 flex items-center justify-between font-mono text-[11px]">
              <span className="text-muted-foreground">local</span>
              <span className="text-foreground">04:21 PT</span>
            </div>
          </Tile>

          {/* now playing / currently */}
          <Tile className="col-span-3 lg:col-span-2 p-5" label="now">
            <div className="font-mono text-[11px] text-muted-foreground mb-2">
              currently
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-baseline gap-2">
                <span className="text-accent font-mono text-xs">▸</span>
                reading <span className="text-muted-foreground">— Designing Data-Intensive Apps</span>
              </li>
              <li className="flex items-baseline gap-2">
                <span className="text-accent font-mono text-xs">▸</span>
                hacking on <span className="text-muted-foreground">— a tiny Raft impl</span>
              </li>
              <li className="flex items-baseline gap-2">
                <span className="text-accent font-mono text-xs">▸</span>
                listening to <span className="text-muted-foreground">— Aphex Twin</span>
              </li>
            </ul>
          </Tile>
        </section>

        <Divider label="01_about" />

        {/* ABOUT */}
        <section id="about" className="grid grid-cols-6 gap-3 sm:gap-4 scroll-mt-24">
          <Tile className="col-span-6 lg:col-span-4 p-8" label="readme.md">
            <h2 className="font-display text-3xl sm:text-4xl font-medium tracking-tight">
              I like the parts of computers <span className="text-accent">most people skip</span>.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Currently doing a B.S. in Computer Science. Most of my time goes
                into systems work — kernels, allocators, query planners, the
                stuff that breaks in production at 3am.
              </p>
              <p>
                I care about correctness, then performance, then ergonomics, in
                that order. I write a lot of Rust because it forces me to be
                honest with myself.
              </p>
              <p>
                Outside of school I maintain a couple of small OSS tools and
                occasionally publish writeups on things I had to figure out the
                hard way.
              </p>
            </div>
          </Tile>

          <Tile className="col-span-6 lg:col-span-2 p-5" label="./me.jpg">
            <div className="aspect-square w-full bg-bg border border-border rounded-md grid place-items-center scanlines">
              <div className="text-center">
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  portrait
                </div>
                <div className="font-mono text-[10px] text-stone-600 mt-1">
                  // placeholder
                </div>
              </div>
            </div>
            <div className="mt-4 font-mono text-[11px] text-muted-foreground space-y-1">
              <div className="flex justify-between"><span>name</span><span className="text-foreground">alex chen</span></div>
              <div className="flex justify-between"><span>pronouns</span><span className="text-foreground">they/them</span></div>
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
              {projects.length} entries
            </span>
          </div>

          {projects.map((p, i) => (
            <Tile
              key={p.id}
              className={`col-span-6 ${
                i === 0 ? "lg:col-span-4" : "lg:col-span-3"
              } overflow-hidden group`}
            >
              <PreviewPlaceholder id={p.id} name={p.title} />
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
                  <h3 className="font-display text-xl sm:text-2xl font-medium tracking-tight">
                    {p.title}
                  </h3>
                  <div className="flex gap-3 font-mono text-[11px] shrink-0 mt-1">
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
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
        </section>

        <Divider label="03_stack" />

        {/* STACK */}
        <section id="stack" className="grid grid-cols-6 gap-3 sm:gap-4 scroll-mt-24">
          {Object.entries(stack).map(([group, items]) => (
            <Tile
              key={group}
              className="col-span-6 sm:col-span-3 lg:col-span-3 xl:col-span-3 p-5"
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

        <Divider label="04_education" />

        {/* EDUCATION */}
        <section
          id="education"
          className="grid grid-cols-6 gap-3 sm:gap-4 scroll-mt-24"
        >
          {education.map((e) => (
            <Tile key={e.school} className="col-span-6 lg:col-span-3 p-6">
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

        <Divider label="05_certs" />

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

        <Divider label="06_contact" />

        {/* CONTACT */}
        <section id="contact" className="grid grid-cols-6 gap-3 sm:gap-4 scroll-mt-24">
          <Tile className="col-span-6 lg:col-span-4 p-8 sm:p-12" framed>
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-4">
              ~/contact &gt; init.sh
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight leading-tight">
              If you're shipping <span className="text-accent">hard problems</span>,<br />
              I want to hear about it.
            </h2>
            <a
              href="mailto:hello@alexchen.dev"
              className="mt-8 inline-flex items-center gap-3 font-mono text-base sm:text-lg text-accent border-b border-accent/60 hover:border-accent transition-colors pb-1"
            >
              hello@alexchen.dev
              <span className="text-xs">↗</span>
            </a>
          </Tile>

          <Tile className="col-span-6 lg:col-span-2 p-5" label="links">
            <ul className="font-mono text-sm space-y-3">
              {[
                ["github", "@alexchen"],
                ["linkedin", "/alex-chen-cs"],
                ["x / twitter", "@alxchn"],
                ["read.cv", "/alexchen"],
                ["resume", "alexchen.pdf"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-baseline justify-between gap-2 border-b border-border pb-2 last:border-0">
                  <span className="text-muted-foreground">{k}</span>
                  <a href="#" className="text-foreground hover:text-accent transition-colors">
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
          <p>© 2025 alex.chen — assembled by hand</p>
          <p>
            build <span className="text-accent">v2.4.1-cracked</span> · deployed 2026-06-16
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
