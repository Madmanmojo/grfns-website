"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#about", label: "ABOUT" },
    { href: "/blog",   label: "BLOG"  },
    { href: "mailto:tim@grfns.com", label: "CONTACT", external: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1a1a2e] bg-[#0a0a0f]/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="neon-pink text-xs hover:opacity-80 transition-opacity"
          style={{ fontFamily: "'Press Start 2P', monospace" }}>
          GRFNS
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label, external }) =>
            external ? (
              <a key={label} href={href}
                className="text-[#888] text-[10px] hover:text-[#00fff0] transition-colors tracking-widest"
                style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                {label}
              </a>
            ) : (
              <Link key={label} href={href}
                className="text-[#888] text-[10px] hover:text-[#00fff0] transition-colors tracking-widest"
                style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                {label}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden neon-cyan text-xs" onClick={() => setOpen(!open)}
          style={{ fontFamily: "'Press Start 2P', monospace" }}>
          {open ? "[ X ]" : "[ = ]"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#1a1a2e] bg-[#0a0a0f] px-6 py-4 flex flex-col gap-4">
          {links.map(({ href, label, external }) =>
            external ? (
              <a key={label} href={href} onClick={() => setOpen(false)}
                className="text-[#888] text-[10px] hover:text-[#00fff0] transition-colors"
                style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                &gt; {label}
              </a>
            ) : (
              <Link key={label} href={href} onClick={() => setOpen(false)}
                className="text-[#888] text-[10px] hover:text-[#00fff0] transition-colors"
                style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                &gt; {label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}
