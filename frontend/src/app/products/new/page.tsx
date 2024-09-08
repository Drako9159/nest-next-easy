import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProductForm from "./product-form";
import { getProduct } from "../products.api";

interface Props {
  params: {
    id: string;
  };
}

export default async function ProductsNewPage({ params }: Props) {
  const product: any = await getProduct(params.id);

  return (
    <div className="h-screem flex justify-center items-center">
      <Card>
        <CardHeader>
          <CardTitle>
            {product.id ? "Update Product" : "Create Product"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ProductForm product={product} />
        </CardContent>
      </Card>
    </div>
  );
}
