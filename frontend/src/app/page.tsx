import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { getProducts } from "./products/products.api";
import ProductCard from "./products/product-card";


export const dynamic = "force-dynamic";

export default async function page() {
  const products = await getProducts();

  return (
    <>
      <div className="flex justify-between ">
        <h1 className="text-4xl font-bold">NestNestApp</h1>
        <Link className={buttonVariants()} href="/products/new">
          Create Product
        </Link>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
