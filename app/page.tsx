export default function Home() {
  return (
    <div className="grid-bg min-h-screen">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-32 pb-24">
        <p className="text-[#888] text-xs tracking-[0.4em] uppercase mb-6" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
          &gt; initializing...
        </p>

        <h1
          className="glitch flicker text-3xl md:text-5xl mb-6 neon-pink"
          data-text="TIMOTHY GRIFFIN"
          style={{ fontFamily: "'Press Start 2P', monospace" }}
        >
          TIMOTHY GRIFFIN
        </h1>

        <p className="neon-cyan text-sm md:text-base tracking-widest mb-10 cursor" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
          TECHNOLOGIST · BUILDER · CREATIVE
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#about" className="neon-border-pink px-6 py-3 text-xs hover:bg-[#ff2d78] hover:text-black transition-all duration-200"
            style={{ fontFamily: "'Press Start 2P', monospace" }}>
            ABOUT.EXE
          </a>
          <a href="/blog" className="neon-border-cyan px-6 py-3 text-xs hover:bg-[#00fff0] hover:text-black transition-all duration-200"
            style={{ fontFamily: "'Press Start 2P', monospace" }}>
            BLOG
          </a>
          <a href="https://linkedin.com/in/tfgriffin" target="_blank" rel="noopener noreferrer"
            className="neon-border-purple px-6 py-3 text-xs hover:bg-[#b026ff] hover:text-black transition-all duration-200"
            style={{ fontFamily: "'Press Start 2P', monospace" }}>
            LINKEDIN
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="neon-cyan text-lg mb-12 text-center" style={{ fontFamily: "'Press Start 2P', monospace" }}>
          &gt; ABOUT_ME
        </h2>

        <div className="neon-border-purple p-8 mb-10 bg-[#0d0d1a]">
          <p className="text-[#e0e0e0] leading-relaxed mb-4" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
            I&apos;m an IT professional with 20+ years in the Apple ecosystem — currently working as
            TechOps Infrastructure at Apple&apos;s App Store Review, where I keep the systems running
            that keep the App Store running for millions of developers worldwide.
          </p>
          <p className="text-[#e0e0e0] leading-relaxed mb-4" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
            My career spans the full Apple stack: Genius Bar repairs, remote support, app evaluation,
            and now global infrastructure across Sunnyvale, Cork, and Singapore. I&apos;ve shipped
            MDM rollouts for hundreds of devices, built VPN solutions for secure remote work,
            and kept 24/7 operations running without breaking a sweat.
          </p>
          <p className="text-[#e0e0e0] leading-relaxed" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
            Outside of work I run a self-hosted homelab — Docker stacks, media automation,
            WireGuard VPN tunnels, Nextcloud, and more. If it can be automated, it will be automated.
            I hold a BFA from the Kansas City Art Institute and I&apos;m currently pursuing a
            Graduate Degree in IT Management at Colorado State Global Campus.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {[
            {
              label: "EXPERTISE",
              color: "pink" as const,
              items: ["Apple Ecosystem", "macOS / iOS / tvOS", "MDM & Fleet Mgmt", "IT Infrastructure", "Cross-functional Ops"],
            },
            {
              label: "HOMELAB",
              color: "cyan" as const,
              items: ["Docker / Linux", "WireGuard VPN", "Self-hosted Cloud", "Media Automation", "Python Scripting"],
            },
            {
              label: "BACKGROUND",
              color: "purple" as const,
              items: ["BFA — KCAI", "MS IT Mgmt (WIP)", "Graphic Design", "Technical Training", "Process Improvement"],
            },
          ].map(({ label, color, items }) => (
            <div key={label} className={`neon-border-${color} p-5 bg-[#0d0d1a]`}>
              <h3 className={`neon-${color} text-[10px] mb-4`} style={{ fontFamily: "'Press Start 2P', monospace" }}>
                {label}
              </h3>
              <ul className="space-y-1">
                {items.map((item) => (
                  <li key={item} className="text-xs text-[#e0e0e0]" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                    <span className="neon-pink mr-2">&gt;</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <h2 className="neon-cyan text-lg mb-10 text-center" style={{ fontFamily: "'Press Start 2P', monospace" }}>
          &gt; CAREER_LOG
        </h2>

        <div className="space-y-6">
          {[
            {
              role: "App Review TechOps",
              company: "Apple",
              period: "2017 — Present",
              desc: "Infrastructure engineer supporting 500+ App Review staff across three global locations. MDM rollouts, cross-functional ops, process engineering, 24/7 on-call.",
              color: "pink" as const,
            },
            {
              role: "App Specialist",
              company: "Apple",
              period: "2015 — 2017",
              desc: "Evaluated app features and UX, collaborated with dev teams, gathered user research, and maintained technical documentation across the Apple app portfolio.",
              color: "cyan" as const,
            },
            {
              role: "Remote Genius (Joint Venture)",
              company: "Apple",
              period: "2011 — 2015",
              desc: "Remote technical support lead. Built training programs, coordinated scheduling, and developed cross-functional solutions for Apple customers and retail teams.",
              color: "purple" as const,
            },
            {
              role: "Genius",
              company: "Apple",
              period: "2008 — 2011",
              desc: "Hardware repairs, triage, and customer consulting across all Apple product lines. Developed data transfer workflows that improved team speed and accuracy.",
              color: "pink" as const,
            },
            {
              role: "Adjunct Instructor",
              company: "St. Louis Community College",
              period: "2009",
              desc: "Taught Computer Art Studio — Photoshop, Illustrator, InDesign, and typography to first-year students.",
              color: "cyan" as const,
            },
          ].map(({ role, company, period, desc, color }) => (
            <div key={role} className={`neon-border-${color} p-5 bg-[#0d0d1a] relative`}>
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div>
                  <span className={`neon-${color} text-[10px]`} style={{ fontFamily: "'Press Start 2P', monospace" }}>
                    {role}
                  </span>
                  <span className="text-[#888] text-xs ml-3" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                    @ {company}
                  </span>
                </div>
                <span className="text-[#888] text-xs" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                  {period}
                </span>
              </div>
              <p className="text-sm text-[#ccc]" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
