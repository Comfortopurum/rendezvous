/*const events = [
  {
    image: "images/Rectangle 3.svg",
    title: "ISWISS Live Show",
    date: "SAT, OCT 5th • 9pm",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "images/Rectangle 3 (1).svg",
    title: "Music Night",
    date: "FRI, OCT 12th • 7pm",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    image: "images/Rectangle 3 (2).svg",
    title: "Comedy Fest",
    date: "SUN, OCT 20th • 8pm",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

const container = document.getElementById("events-container");

events.forEach((event) => {
  const card = document.createElement("div");
  card.className =
    "bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow";

  const imgWrapper = document.createElement("div");
  imgWrapper.className = "relative h-64";
  const img = document.createElement("img");
  img.src = event.image;
  img.alt = event.title;
  img.className = "absolute inset-0 w-full h-full object-contain";
  imgWrapper.appendChild(img);

  const content = document.createElement("div");
  content.className = "p-6";

  const title = document.createElement("h3");
  title.className = "font-bold mb-2";
  title.textContent = event.title;

  const date = document.createElement("h3");
  date.className = "text-sm mb-2";
  date.textContent = event.date;

  const desc = document.createElement("p");
  desc.className = "text-gray-600 text-sm mb-4";
  desc.textContent = event.description;

  const button = document.createElement("button");
  button.className =
    "text-purple-900 font-semibold hover:text-purple-700 transition-colors flex items-center gap-2";
  button.innerHTML = `
      View details
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
        stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
    `;

  content.appendChild(title);
  content.appendChild(date);
  content.appendChild(desc);
  content.appendChild(button);

  card.appendChild(imgWrapper);
  card.appendChild(content);

  container.appendChild(card);
});

class Product {
  constructor({ id, title, price, description, category, image }) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.image = image;
  }
}

const product1 = new Product({
  id: 1,
  title: "Phone",
  price: 50.1,
  description: "Handset",
  category: "Gadget",
  image: "http://example.com",
});

console.log(product1);

/*class ProductService {
  getProducts() {
    fetch("https://fakestoreapi.com/products")
     .then(response => response.json())
      .then(data => console.log(data));
  }
} 


class ProductService {
  async getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json();
  }

  
  async getProductById(id) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    return response.json();
  }

  async addProduct(product) {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify(product),
      headers: { "Content-Type": "application/json" }
    });
    return response.json();
  }

  async updateProduct(id, product) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(product),
      headers: { "Content-Type": "application/json" }
    });
    return response.json();
  }

  async deleteProduct(id) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE"
    });
    return response.json();
  }
}


const service = new ProductService();
service.getProducts()
.then(data => console.log(data));

*/

/*

class ProductService {
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


const service = new ProductService();

service.getProducts().then((products) => {
  console.log("All Products:", products);

  return service.getProductById(1);
}).then((product) => {
  console.log("Single Product:", product);
});




/////////////////////// teachers code

/*
  class ProductService {

  #handlePromise = async ({ url = '', method = "GET", body = null }) => {

    const response = await fetch(`https://fakestoreapi.com/products/${url}`, {

      method,

      body: body ? JSON.stringify(body) : null,

    });

    return await response.json();

  };

  getProductById = async (id) => {

    const response = await this.#handlePromise({ url: id });

    return response;

  };

  getProducts = async () => {

    const response = await this.#handlePromise({});

    return response;

  };

  addProduct = async () => {

    const product = {

      title: "new product",

      price: 13.5,

      description: "lorem ipsum set",

      image: "https://i.pravatar.cc",

      category: "electronic",

    };

    const response = await this.#handlePromise({

      method: "POST",

      body: product,

    });

    console.log(response);

  };

  deleteProduct = () => {};

}*/



 
import { ProductService } from "./productService.js";

console.log("hello world")

const service = new ProductService();
const container = document.getElementById("events-container");

service.getProducts().then((products) => {
  products.slice(0, 6).forEach((product) => {
    const card = document.createElement("div");

    card.className =
      "bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow";

    const imgWrapper = document.createElement("div");
    imgWrapper.className = "relative h-64";
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.title;
    img.className = "absolute inset-0 w-full h-full object-contain";
    imgWrapper.appendChild(img);

    const content = document.createElement("div");
    content.className = "p-6";

    const title = document.createElement("h3");
    title.className = "font-bold mb-2";
    title.textContent = product.title;

    const price = document.createElement("h3");
    price.className = "text-sm mb-2";
    price.textContent = `$${product.price}`;

    const desc = document.createElement("p");
    desc.className = "text-gray-600 text-sm mb-4 line-clamp-2";
    desc.textContent = product.description;

    const button = document.createElement("button");
    button.className =
      "text-purple-900 font-semibold hover:text-purple-700 transition-colors flex items-center gap-2";
    button.innerHTML = `
        View details
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
          stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
        </svg>
      `;

    button.addEventListener("click", () => {
      window.location.href = `product.html?productId=${product.id}`;
    });

    content.appendChild(title);
    content.appendChild(price);
    content.appendChild(desc);
    content.appendChild(button);
    card.appendChild(imgWrapper);
    card.appendChild(content);

    container.appendChild(card);
  });
});


























/*
button.addEventListener("click", () => {
      service.getProductById(product.id).then((details) => {
        modalImage.src = details.image;
        modalTitle.textContent = details.title;
        modalCategory.textContent = `Category: ${details.category}`;
        modalPrice.textContent = `$${details.price}`;
        modalDescription.textContent = details.description;

        modal.classList.remove("hidden");
        modal.classList.add("flex"); 
      });
    }); */

/*
const modal = document.getElementById("product-modal");
const closeModal = document.getElementById("close-modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");
const modalPrice = document.getElementById("modal-price");
const modalDescription = document.getElementById("modal-description");

*/

/*
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});
*/
