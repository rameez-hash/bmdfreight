import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/lib/blog-data';
import { Calendar, Clock, ChevronRight, Tag } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Car Shipping Blog | Tips, Guides & Industry Insights | BMD Freight',
  description: 'Practical car shipping guides, cost-saving tips, and auto transport advice from the BMD Freight team. Learn how to ship smarter.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="relative py-20 bg-navy">
        <div className="absolute inset-0 opacity-20 bg-[url('/img/blog-banner.webp')] bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Car Shipping Tips & Guides</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Practical advice, cost breakdowns, and expert guidance from the BMD Freight team — so you always know exactly what you are paying for and why.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-slate-50 rounded-xl overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow flex flex-col">
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex items-center gap-1 bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full">
                      <Tag className="w-3 h-3" /> {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-800 mb-3 leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-accent font-semibold text-sm hover:underline">
                    Read More <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
