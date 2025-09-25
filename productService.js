export class ProductService {
  constructor(baseUrl = "https://fakestoreapi.com") {
    this.baseUrl = baseUrl;
  }

  request(endpoint, options = {}) {
    return fetch(`${this.baseUrl}${endpoint}`, options).then((response) =>
      response.json()
    );
  }

  getProducts() {
    return this.request("/products");
  }

  getProductById(id) {
    return this.request(`/products/${id}`);
  }

  addProduct(productData) {
    return this.request("/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });
  }

  updateProduct(id, productData) {
    return this.request(`/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });
  }

  deleteProduct(id) {
    return this.request(`/products/${id}`, {
      method: "DELETE",
    });
  }
}
