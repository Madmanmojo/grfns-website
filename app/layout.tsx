import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "grfns.com | Timothy Griffin",
  description: "Technologist. Builder. Creative. Apple TechOps engineer, self-hosting enthusiast, and occasional pixel pusher.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[#1a1a2e] py-8 text-center mt-20">
          <p className="text-[#888] text-xs" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
            © {new Date().getFullYear()} Timothy Griffin &nbsp;·&nbsp; grfns.com
          </p>
        </footer>
      </body>
    </html>
  );
}
