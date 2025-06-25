export default async function productDetails({
  params,
}: {
  params: Promise<{ productId: String }>;
}) {
  const { productId } = await params;
  return <h1>{`this is the number ${productId}`}</h1>;
}
