export default async function ({
  params,
}: {
  params: Promise<{ slugs: String[] }>;
}) {
  const { slugs } = await params;
  if (slugs?.length === 2) {
    return (
      <h1>
        viewing docs for features {slugs[0]} and concepts {slugs[1]}
      </h1>
    );
  } else if (slugs?.length === 1) {
    return <h1>this is viewing the docs in {slugs[0]}</h1>;
  }
}
