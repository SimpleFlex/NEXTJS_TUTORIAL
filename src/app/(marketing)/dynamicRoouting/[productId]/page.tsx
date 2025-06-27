import { Metadata } from "next";

type props = {
  params: Promise<{ productId: string }>;
};
export const generateMetaData = async ({
  params,
}: props): Promise<Metadata> => {
  const id = (await params).productId;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`ipnone ${id}`);
    });
  });
  return {
    title: `Product ${title}`,
  };
};

export default async function productDetails({ params }: props) {
  const { productId } = await params;
  return <h1>{`this is the number ${productId}`}</h1>;
}
