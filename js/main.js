// Cart
let cart = [];

try {
  cart = JSON.parse(localStorage.getItem("cart") || "[]");
  if (!Array.isArray(cart)) cart = [];
} catch {
  cart = [];
}

function updateCartCount() {
  const count = document.getElementById("cartCount");
  if (count) count.textContent = cart.length;
}

function addToCart(index) {
  if (typeof products === "undefined" || !products[index]) return;

  cart.push(products[index]);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`${products[index].name} added to cart.`);
}

// Featured products
function renderFeaturedProducts() {
  const container = document.getElementById("featuredProducts");

  if (!container || typeof products === "undefined") return;

  container.innerHTML = products.slice(0, 8).map((product, index) => {
    const price = Number(product.price) || 0;

    return `
      <article class="product-card">
        <div
          class="product-image"
          style="background-image: url('${product.image}')"
          role="img"
          aria-label="${product.name}"
        ></div>
        <h3>${product.name}</h3>
        <p class="price" data-price-usd="${price}">$${price.toFixed(2)}</p>
        <button type="button" onclick="addToCart(${index})">
          ADD TO CART
        </button>
      </article>
    `;
  }).join("");
}

// Search overlay
const searchOpen = document.getElementById("searchOpen");
const searchClose = document.getElementById("searchClose");
const searchBox = document.getElementById("searchBox");

if (searchOpen && searchBox) {
  searchOpen.addEventListener("click", () => {
    searchBox.classList.add("open");
  });
}

if (searchClose && searchBox) {
  searchClose.addEventListener("click", () => {
    searchBox.classList.remove("open");
  });
}

// Newsletter form
const newsletterForm = document.getElementById("newsletterForm");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", event => {
    event.preventDefault();
    alert("Thanks for subscribing!");
    newsletterForm.reset();
  });
}

// Initialize page features
renderFeaturedProducts();
updateCartCount();