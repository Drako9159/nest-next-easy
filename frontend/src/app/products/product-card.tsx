"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { deleteProduct } from "./products.api";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }: any) {
  const router = useRouter();

  async function handleRemoveProduct(id: string) {
    await deleteProduct(id);
    router.refresh();
  }

  return (
    <Card onClick={() => router.push(`/products/${product.id}`)}>
      <CardHeader>
        <CardTitle className="flex justify-between">
          {product.name}
          <span className="text-sm font-bold text-gray-500">
            ${product.price}
          </span>
        </CardTitle>
      </CardHeader>
      {/* <Image src={product.image} alt={product.name} width={200} height={200} /> */}
      <img src={product.image} alt={product.name} width={200} height={200} />
      <CardContent>
        <p>
          <strong>Description:</strong> {product.description}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="mt-4" onClick={(e) => {
          e.stopPropagation();
          router.push(`/products/${product.id}/edit`)
        }}
        >Edit</Button>
        <Button
          onClick={() => handleRemoveProduct(product.id)}
          className="mt-4"
          variant="destructive"
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
