import { notFound } from "next/navigation";

export default async function productReview({
  params,
}: {
  params: Promise<{ reviewsId: string; productId: string }>;
}) {
  const { reviewsId, productId } = await params;

  if (parseInt(reviewsId) > 1000) {
    notFound();
  }

  return (
    <h1>
      This is product {reviewsId} with review {productId}
    </h1>
  );
}
