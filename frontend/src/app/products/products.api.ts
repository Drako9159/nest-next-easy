export async function createProduct(productData: any) {
  const response = await fetch("http://localhost:4000/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  const data = await response.json();
  console.log(data);
}

export async function getProducts() {
  const response = await fetch("http://localhost:4000/api/products", {
    cache: "no-store",
  });
  return await response.json();
}

export async function deleteProduct(id: string) {
  const response = await fetch(`http://localhost:4000/api/products/${id}`, {
    method: "DELETE",
  });
  return await response.json();
}

