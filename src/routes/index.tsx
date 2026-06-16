import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Chen — Computer Science Portfolio" },
      {
        name: "description",
        content:
          "Computer Science student specializing in backend architecture, high-performance computing, and cloud infrastructure.",
      },
      { property: "og:title", content: "Alex Chen — Computer Science Portfolio" },
      {
        property: "og:description",
        content:
          "Computer Science student building efficient distributed systems from the ground up.",
      },
    ],
  }),
  component: Portfolio,
});

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

const languages = ["Rust / C++", "Python", "TypeScript", "Go"];
const technologies = ["Kubernetes", "PostgreSQL", "AWS / GCP", "React / Next.js"];

const projects = [
  {
    title: "Nexus Graph Engine",
    description:
      "A high-performance graph processing engine built in C++ capable of handling billions of edges in real-time.",
    tags: ["C++20", "CUDA", "SIMD"],
    links: [
      { label: "GITHUB", href: "#" },
      { label: "DEMO", href: "#" },
    ],
  },
  {
    title: "Aura Cloud Platform",
    description:
      "A custom-built PaaS using Docker and Kubernetes orchestration to simplify microservice deployment for student teams.",
    tags: ["Go", "Docker", "gRPC"],
    links: [{ label: "GITHUB", href: "#" }],
  },
];

const education = [
  {
    school: "B.S. Computer Science",
    meta: "University of Technology • 2021 — 2025",
    detail:
      "Relevant Coursework: Data Structures, Operating Systems, Compilers, Distributed Computing.",
    active: true,
  },
  {
    school: "High School Diploma",
    meta: "Science & Math Academy • 2017 — 2021",
    active: false,
  },
];

const certifications = [
  { title: "AWS Certified Developer", sub: "Associate Level", year: "2023" },
  { title: "Google Cloud Engineer", sub: "Professional Cert", year: "2023" },
  { title: "Meta Front-End Developer", sub: "Professional Certificate", year: "2022" },
];

function ImagePlaceholder({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={`grid place-items-center bg-bg border border-border ${className ?? ""}`}
    >
      <span className="text-[10px] font-mono uppercase tracking-widest text-stone-600">
        {label}
      </span>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-bg text-stone-300 font-sans selection:bg-accent/30 selection:text-white">
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-border bg-bg/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono text-sm tracking-tight text-white">
            root@portfolio:~$
          </span>
          <div className="flex gap-4 sm:gap-8 text-xs font-mono uppercase tracking-widest">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        {/* Hero */}
        <section className="mb-32">
          <div className="inline-block px-3 py-1 rounded-full border border-accent/30 bg-accent/5 text-accent text-[10px] font-mono mb-6">
            AVAILABLE FOR INTERNSHIPS 2024
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8">
            Building efficient <br />
            <span className="text-accent">distributed systems</span> <br />
            from the ground up.
          </h1>
          <p className="max-w-xl text-lg text-stone-400 leading-relaxed">
            I'm Alex Chen, a Computer Science student specializing in backend
            architecture, high-performance computing, and cloud infrastructure.
          </p>
        </section>

        {/* About */}
        <section id="about" className="grid md:grid-cols-12 gap-12 mb-40 scroll-mt-24">
          <div className="md:col-span-7">
            <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-6">
              01. About Me
            </h2>
            <div className="space-y-6 text-stone-400 leading-relaxed">
              <p>
                Currently pursuing my B.S. in Computer Science at the University of
                Technology. I spend my time optimizing database queries and
                exploring the internals of Linux kernels.
              </p>
              <p>
                My approach to engineering is grounded in clarity and performance.
                Whether it's a microservice in Go or a machine learning pipeline,
                I focus on writing maintainable, scalable code.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <h4 className="text-white text-sm font-semibold mb-3">Languages</h4>
                  <ul className="font-mono text-xs space-y-2">
                    {languages.map((x) => (
                      <li key={x}>&gt; {x}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-white text-sm font-semibold mb-3">
                    Technologies
                  </h4>
                  <ul className="font-mono text-xs space-y-2">
                    {technologies.map((x) => (
                      <li key={x}>&gt; {x}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-5">
            <ImagePlaceholder
              label="Portrait Placeholder"
              className="w-full aspect-[4/5] bg-surface rounded-2xl"
            />
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mb-40 scroll-mt-24">
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-12">
            02. Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((p) => (
              <article
                key={p.title}
                className="group bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent/40 transition-colors"
              >
                <ImagePlaceholder
                  label={`${p.title} Preview`}
                  className="w-full aspect-video border-0 border-b border-border group-hover:opacity-80 transition-opacity"
                />
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4 gap-4">
                    <h3 className="text-xl font-bold text-white">{p.title}</h3>
                    <div className="flex gap-4 font-mono text-[10px] text-accent shrink-0">
                      {p.links.map((l) => (
                        <a key={l.label} href={l.href} className="hover:underline">
                          {l.label}
                        </a>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-stone-400 mb-6">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 bg-bg border border-border rounded text-[10px] font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Education & Certs */}
        <section
          id="education"
          className="grid md:grid-cols-12 gap-12 mb-40 scroll-mt-24"
        >
          <div className="md:col-span-6">
            <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-10">
              03. Education
            </h2>
            <div className="space-y-8">
              {education.map((e) => (
                <div key={e.school} className="relative pl-8 border-l border-border">
                  <div
                    className={`absolute -left-[5px] top-1 w-2 h-2 rounded-full ${
                      e.active ? "bg-accent" : "bg-border"
                    }`}
                  />
                  <h4 className="text-white font-bold">{e.school}</h4>
                  <p className="text-sm text-stone-400">{e.meta}</p>
                  {e.detail && (
                    <p className="text-xs text-stone-500 mt-2">{e.detail}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-6">
            <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-10">
              04. Certifications
            </h2>
            <div className="space-y-4">
              {certifications.map((c) => (
                <div
                  key={c.title}
                  className="p-4 bg-surface border border-border rounded-xl flex items-center justify-between"
                >
                  <div>
                    <p className="text-white font-medium">{c.title}</p>
                    <p className="text-xs text-stone-500">{c.sub}</p>
                  </div>
                  <span className="text-[10px] font-mono text-stone-600">
                    {c.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="text-center py-24 border-t border-border scroll-mt-24"
        >
          <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-8">
            05. Get In Touch
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Let's build something <br /> remarkable together.
          </h3>
          <a
            href="mailto:hello@alexchen.dev"
            className="inline-block px-10 py-4 bg-white text-bg font-bold rounded-full hover:bg-accent hover:text-white transition-all transform hover:-translate-y-1"
          >
            Say Hello
          </a>
          <div className="mt-16 flex justify-center gap-8 font-mono text-xs text-stone-500">
            <a href="#" className="hover:text-white">GITHUB</a>
            <a href="#" className="hover:text-white">LINKEDIN</a>
            <a href="#" className="hover:text-white">TWITTER</a>
            <a href="#" className="hover:text-white">RESUME</a>
          </div>
        </section>
      </main>

      <footer className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-2 border-t border-border/50 text-stone-600 text-[10px] font-mono">
        <p>© 2024 ALEX CHEN. DESIGNED FOR PERFORMANCE.</p>
        <p>LAST DEPLOY: 2024-10-24_V1.0.4</p>
      </footer>
    </div>
  );
}
