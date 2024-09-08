const host = "http://172.20.216.166:4000";

export async function createProduct(productData: any) {
  const response = await fetch(`${host}/api/products`, {
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
  const response = await fetch(`${host}/api/products`, {
    cache: "no-store",
  });
  return await response.json();
}

export async function getProduct(id: string) {
  const response = await fetch(`${host}/api/products/${id}`);
  return await response.json();
}

export async function deleteProduct(id: string) {
  const response = await fetch(`${host}/api/products/${id}`, {
    method: "DELETE",
  });
  return await response.json();
}

export async function updateProduct(id: string, productData: any) {
  const response = await fetch(`${host}/api/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
    cache: "no-store",
  });
  return await response.json();
}
