import Link from "next/link";

export default async function Articles({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "es" | "fr" }>;
}) {
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;
  return (
    <>
      <h1>THIS IS THE ARTICLE {articleId} </h1>
      <p>reading in {lang}</p>
      <Link href="/articles/id?lang=en">english </Link>
      <Link href={`/articles/${articleId}?lang=en`}>English </Link>
      <Link href={`/articles/${articleId}?lang=fr`}>French </Link>
      <Link href={`/articles/${articleId}?lang=es`}>Spain </Link>
    </>
  );
}
