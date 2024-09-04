import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProduct } from "../products.api";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface Props {
  params: {
    id: string;
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const product = await getProduct(params.id);

  return (
    <div className="flex justify-center items-center h-screen">
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between">
            <h1>{product.name}</h1>
            <Link href="/" className={buttonVariants()}>
              Back
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{product.description}</p>
          <p>${product.price}</p>
          <img
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
          />
        </CardContent>
      </Card>
    </div>
  );
}
