import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>HOME PAGE</h1>
      <Link href="/articles/articles-page-123?lang=en">read in english</Link>
      <Link href="/articles/articles-page-123?lang=fr">read in french</Link>
      <Link href="/articles/articles-page-123?lang=es">read in spanish</Link>
    </>
  );
}
