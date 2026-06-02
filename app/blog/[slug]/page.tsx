import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/blog-data';
import { Calendar, Clock, ChevronLeft, Tag, User } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();

  const paragraphs = post.content.split('\n\n');

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: 'https://bmdfreight.com/img/blog-banner.webp',
    author: {
      '@type': 'Organization',
      name: 'BMD Freight',
      url: 'https://bmdfreight.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'BMD Freight',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bmdfreight.com/img/logo.webp',
      },
    },
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://bmdfreight.com/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <section className="relative py-20 bg-navy">
        <div className="absolute inset-0 opacity-20 bg-[url('/img/blog-banner.webp')] bg-cover bg-center" />
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-1 text-slate-300 hover:text-white mb-6 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 max-w-4xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-slate-300 text-sm">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" /> BMD Freight Team
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> {post.readTime}
            </span>
            <span className="inline-flex items-center gap-1 bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-semibold">
              <Tag className="w-3 h-3" /> {post.category}
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <article className="prose prose-lg max-w-none text-slate-600">
            {paragraphs.map((para, i) => {
              if (para.startsWith('## ')) {
                return <h2 key={i} className="text-2xl font-bold text-slate-800 mt-10 mb-4">{para.replace('## ', '')}</h2>;
              }
              if (para.startsWith('|')) {
                const rows = para.split('\n').filter(r => r.trim());
                return (
                  <div key={i} className="overflow-x-auto my-6">
                    <table className="w-full text-sm border border-slate-200">
                      <tbody>
                        {rows.map((row, ri) => {
                          const cells = row.split('|').filter(c => c.trim());
                          const isHeader = row.includes('---');
                          if (isHeader) return null;
                          return (
                            <tr key={ri} className={ri === 0 ? 'bg-slate-50 font-semibold text-slate-700' : 'border-t border-slate-100'}>
                              {cells.map((cell, ci) => (
                                <td key={ci} className="px-4 py-3">{cell.trim()}</td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                );
              }
              if (para.startsWith('**') && para.includes(':**')) {
                return <p key={i} className="font-bold text-slate-700 my-4">{para.replace(/\*\*/g, '')}</p>;
              }
              if (/^\d+\.\s/.test(para)) {
                const lines = para.split('\n');
                return (
                  <ol key={i} className="list-decimal pl-6 my-4 space-y-2">
                    {lines.map((line, li) => (
                      <li key={li} className="text-slate-600">{line.replace(/^\d+\.\s/, '')}</li>
                    ))}
                  </ol>
                );
              }
              if (para.startsWith('- ')) {
                const lines = para.split('\n');
                return (
                  <ul key={i} className="list-disc pl-6 my-4 space-y-2">
                    {lines.map((line, li) => (
                      <li key={li} className="text-slate-600">{line.replace(/^- /, '')}</li>
                    ))}
                  </ul>
                );
              }
              return <p key={i} className="leading-relaxed mb-4">{para.replace(/\*\*/g, '')}</p>;
            })}
          </article>

          <div className="mt-12 pt-8 border-t border-slate-100">
            <Link href="/blog" className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              <ChevronLeft className="w-5 h-5" /> Back to All Posts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
