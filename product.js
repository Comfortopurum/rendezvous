/*import { ProductService } from "./productService.js";

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);

const service = new ProductService();

const product = await service.getProductById(params.get("productId"));
console.log(product)






/*import { ProductService } from "./productService.js";


const productId = params.get("productId");
const params = new URLSearchParams(window.location.search);

const productService = new ProductService();
if (productId) {
  productService.getProductById(productId).then((product) => {
    console.log("Single Product:", product);

    
  });
} */

import { ProductService } from "./productService.js";

const service = new ProductService();
const container = document.getElementById("product-details");

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("productId");

if (!productId) {
  container.innerHTML = `<p class="text-red-500 text-center">No product selected.</p>`;
} else {
  service.getProductById(productId).then((product) => {
    
    const wrapper = document.createElement("div");
    wrapper.className =
      "max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6";

    wrapper.innerHTML = `
      <div class="flex flex-col md:flex-row gap-6">
        <div class="flex-1">
          <img src="${product.image}" alt="${product.title}"
            class="w-full h-80 object-contain rounded-lg " />
        </div>
        <div class="flex-1">
          <h2 class="text-2xl font-bold mb-4">${product.title}</h2>
          <p class="text-gray-700 mb-4">${product.description}</p>
          <p class="text-lg font-semibold mb-4">$${product.price}</p>
          <button onclick="window.location.href='index.html#events-container'"
            class="bg-purple-900 text-white px-4 py-2 rounded-lg hover:bg-purple-800">
            Back to Products
          </button>
        </div>
      </div>
    `;
    console.log("Single Product:", product);
    container.appendChild(wrapper);
  });
}

