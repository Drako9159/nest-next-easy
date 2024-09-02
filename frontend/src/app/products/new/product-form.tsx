"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { createProduct } from "../products.api";
import { useRouter } from "next/navigation";
export default function ProductForm() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    await createProduct({
      ...data,
      price: parseFloat(data.price),
    });
    router.push("/");
    router.refresh();
  });

  return (
    <form onSubmit={onSubmit}>
      <Label>Product Name</Label>
      <Input {...register("name")} />
      <Label>Description</Label>
      <Input {...register("description")} />
      <Label>Price</Label>
      <Input {...register("price")} />
      <Label>Image</Label>
      <Input {...register("image")} />

      <Button>Create Product</Button>
    </form>
  );
}
