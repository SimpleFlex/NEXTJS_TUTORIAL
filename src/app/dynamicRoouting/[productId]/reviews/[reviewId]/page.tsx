export default async function indexReview({
  params,
}: {
  params: Promise<{ indexReview: String; productId: String }>;
}) {
  const { indexReview, productId } = await params;
  return (
    <>
      <h1>
        this is the {productId} of the {indexReview}
      </h1>
    </>
  );
}
