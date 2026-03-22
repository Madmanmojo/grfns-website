import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog | grfns.com",
  description: "Thoughts on tech, homelab, automation, and whatever else I feel like writing about.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="grid-bg min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="neon-cyan text-xl mb-2 text-center" style={{ fontFamily: "'Press Start 2P', monospace" }}>
          &gt; BLOG
        </h1>
        <p className="text-center text-[#888] text-sm mb-14" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
          dispatches from the terminal
        </p>

        {posts.length === 0 ? (
          <div className="neon-border-purple p-8 text-center bg-[#0d0d1a]">
            <p className="neon-purple text-xs" style={{ fontFamily: "'Press Start 2P', monospace" }}>
              NO POSTS FOUND
            </p>
            <p className="text-[#888] text-sm mt-4" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
              &gt; initializing blog module...
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post, i) => {
              const colors = ["pink", "cyan", "purple"] as const;
              const color = colors[i % 3];
              return (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                  <article className={`neon-border-${color} p-6 bg-[#0d0d1a] transition-all duration-200 group-hover:bg-[#0f0f1f]`}>
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <h2 className={`neon-${color} text-[11px] group-hover:opacity-80`}
                        style={{ fontFamily: "'Press Start 2P', monospace" }}>
                        {post.title}
                      </h2>
                      <time className="text-[#888] text-xs shrink-0" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                        {post.date}
                      </time>
                    </div>
                    {post.excerpt && (
                      <p className="text-sm text-[#ccc]" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                        {post.excerpt}
                      </p>
                    )}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex gap-2 mt-3 flex-wrap">
                        {post.tags.map((tag) => (
                          <span key={tag} className="text-[#888] text-[10px] border border-[#1a1a2e] px-2 py-0.5"
                            style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
