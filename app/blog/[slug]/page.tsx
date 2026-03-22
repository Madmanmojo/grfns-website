import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.meta.title} | grfns.com`,
    description: post.meta.excerpt,
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="grid-bg min-h-screen pt-28 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        <Link href="/blog" className="text-[#888] text-xs hover:text-[#00fff0] transition-colors mb-10 inline-block"
          style={{ fontFamily: "'Share Tech Mono', monospace" }}>
          &lt; back to blog
        </Link>

        <header className="mb-10">
          <h1 className="neon-pink text-lg mb-4" style={{ fontFamily: "'Press Start 2P', monospace" }}>
            {post.meta.title}
          </h1>
          <div className="flex items-center gap-4 flex-wrap">
            <time className="text-[#888] text-sm" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
              {post.meta.date}
            </time>
            {post.meta.tags?.map((tag) => (
              <span key={tag} className="text-[#888] text-xs border border-[#1a1a2e] px-2 py-0.5"
                style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                #{tag}
              </span>
            ))}
          </div>
        </header>

        <div className="neon-border-purple p-8 bg-[#0d0d1a] prose-cyber">
          <MDXRemote source={post.content} />
        </div>

        <div className="mt-10 text-center">
          <Link href="/blog" className="neon-border-cyan px-6 py-3 text-xs hover:bg-[#00fff0] hover:text-black transition-all duration-200 inline-block"
            style={{ fontFamily: "'Press Start 2P', monospace" }}>
            &lt; ALL POSTS
          </Link>
        </div>
      </div>
    </div>
  );
}
