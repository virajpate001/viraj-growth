import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Button from "@/components/Button";
import PostBody from "@/components/PostBody";
import JsonLd from "@/components/JsonLd";
import { posts } from "@/data/posts";
import { site, siteUrl } from "@/lib/site";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import ImageFrame from "@/components/ImageFrame";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return pageMeta({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    openGraph: {
      publishedTime: post.date,
      ...(post.image
        ? { images: [{ url: post.image, alt: post.imageAlt }] }
        : {}),
    },
  });
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== slug);

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
    author: { "@type": "Person", "@id": `${siteUrl}/#person`, name: site.name },
    publisher: { "@id": `${siteUrl}/#person` },
    image: post.image ? `${siteUrl}${post.image}` : undefined,
  };

  return (
    <>
      <JsonLd data={article} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />

      <article>
        <header className="bg-surface py-14">
          <Container className="max-w-3xl">
            <Link href="/blog" className="text-sm text-muted hover:text-ink">
              &larr; All articles
            </Link>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-primary">
              {post.category} · {formatDate(post.date)} · {post.readingTime}
            </p>
            <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg text-muted">{post.description}</p>
          </Container>
        </header>

        {post.image && (
          <Container className="max-w-4xl pt-12">
            <ImageFrame
              src={post.image}
              alt={post.imageAlt}
              ratio="aspect-[16/9] sm:aspect-[21/9]"
              priority
              parallax={6}
              sizes="(min-width: 1024px) 56rem, 100vw"
            />
          </Container>
        )}

        <Container className="max-w-3xl py-12">
          <PostBody blocks={post.body} />

          <div className="mt-12 rounded-3xl bg-primary-dark p-8 text-white">
            <h2 className="text-2xl font-bold">
              What is holding your store back?
            </h2>
            <p className="mt-2 text-white/80">
              Get your free Business Growth Report in about 3 minutes: your
              score, top priorities and a 90-day plan.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button href="/analyzer">Get my free report</Button>
              <Button
                href={post.cta.href}
                variant="outline"
                className="!border-white/40 !text-white hover:!bg-white/10"
              >
                {post.cta.text}
              </Button>
            </div>
          </div>

          {more.length > 0 && (
            <div className="mt-12">
              <h2 className="mb-4 text-xl font-bold">Keep reading</h2>
              <div className="space-y-3">
                {more.map((m) => (
                  <Link
                    key={m.slug}
                    href={`/blog/${m.slug}`}
                    className="block rounded-xl border border-line bg-white p-4 font-semibold hover:shadow-md"
                  >
                    {m.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </article>
    </>
  );
}
