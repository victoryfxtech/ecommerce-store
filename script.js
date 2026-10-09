// Product Database
const products = [
  // Home Category
  { id: 1, name: "Ceramic Mug Set", category: "home", price: 24.99, image: "🫖", rating: 4.8, inStock: true },
  { id: 2, name: "Marble Coasters", category: "home", price: 18.99, image: "⬜", rating: 4.6, inStock: true },
  { id: 3, name: "Linen Throw Pillow", category: "home", price: 32.99, image: "🛏️", rating: 4.9, inStock: true },
  { id: 4, name: "Wood Cutting Board", category: "home", price: 42.99, image: "🪵", rating: 4.7, inStock: true },
  { id: 5, name: "Glass Storage Jars", category: "home", price: 28.99, image: "🫙", rating: 4.5, inStock: true },
  { id: 6, name: "Ceramic Planter", category: "home", price: 34.99, image: "🪴", rating: 4.8, inStock: false },
  
  // Fashion Category
  { id: 7, name: "Linen Button Shirt", category: "fashion", price: 64.99, image: "👕", rating: 4.7, inStock: true },
  { id: 8, name: "Canvas Tote Bag", category: "fashion", price: 45.99, image: "👜", rating: 4.9, inStock: true },
  { id: 9, name: "Wool Beanie", category: "fashion", price: 38.99, image: "🧢", rating: 4.6, inStock: true },
  { id: 10, name: "Minimalist Watch", category: "fashion", price: 89.99, image: "⌚", rating: 4.8, inStock: true },
  { id: 11, name: "Cotton Socks Pack", category: "fashion", price: 22.99, image: "🧦", rating: 4.4, inStock: true },
  { id: 12, name: "Linen Scarf", category: "fashion", price: 52.99, image: "🧣", rating: 4.7, inStock: true },
  
  // Decor Category
  { id: 13, name: "Minimalist Wall Art", category: "decor", price: 56.99, image: "🖼️", rating: 4.8, inStock: true },
  { id: 14, name: "Brass Floor Lamp", category: "decor", price: 78.99, image: "💡", rating: 4.6, inStock: true },
  { id: 15, name: "Woven Wall Hanging", category: "decor", price: 48.99, image: "🧵", rating: 4.9, inStock: true },
  { id: 16, name: "Wooden Shelf Unit", category: "decor", price: 125.99, image: "📦", rating: 4.7, inStock: true },
  { id: 17, name: "Ceramic Vase", category: "decor", price: 35.99, image: "🏺", rating: 4.5, inStock: true },
  { id: 18, name: "Rattan Mirror", category: "decor", price: 64.99, image: "🪞", rating: 4.8, inStock: true },
];

// State Management
let cart = JSON.parse(localStorage.getItem('lumaCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('lumaWishlist')) || [];
let currentFilter = 'all';
let currentSort = 'newest';
let filteredProducts = [...products];

// DOM Elements
const productsContainer = document.getElementById('products');
const cartContainer = document.getElementById('cart');
const cartDrawer = document.getElementById('drawer');
const wishlistDrawer = document.getElementById('wishlist');
const wishlistContainer = document.getElementById('wishlist-items');
const overlay = document.getElementById('overlay');
const cartCountEl = document.getElementById('count');
const searchInput = document.getElementById('searchInput');
const searchBar = document.getElementById('searchBar');
const searchToggle = document.querySelector('.search-toggle');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navOverlay = document.querySelector('.nav-overlay');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
  // Search Toggle
  searchToggle.addEventListener('click', () => {
    searchBar.classList.add('active');
    searchInput.focus();
  });

  // Search Input
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    if (query.length > 0) {
      filteredProducts = products.filter(p => 
        p.name.toLowerCase().includes(query) &&
        (currentFilter === 'all' || p.category === currentFilter)
      );
    } else {
      filteredProducts = currentFilter === 'all' 
        ? [...products] 
        : products.filter(p => p.category === currentFilter);
    }
    sortProductsArray();
    renderProducts();
  });

  // Menu Toggle
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isOpen);
    navMenu.classList.toggle('active');
    navOverlay.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  // Close menu on link click
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      navMenu.classList.remove('active');
      navOverlay.classList.remove('active');
      overlay.classList.remove('active');
    });
  });

  // Close menu on overlay click
  navOverlay.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('active');
    navOverlay.classList.remove('active');
    overlay.classList.remove('active');
  });

  // Overlay click closes drawers
  overlay.addEventListener('click', () => {
    cartDrawer.classList.remove('open');
    wishlistDrawer.classList.remove('open');
    overlay.classList.remove('active');
  });
}

// Filter Products
function filter(category) {
  currentFilter = category;
  
  // Update active button
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  
  // Filter products
  filteredProducts = category === 'all' 
    ? [...products] 
    : products.filter(p => p.category === category);
  
  sortProductsArray();
  renderProducts();
  
  // Scroll to products
  setTimeout(() => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

// Sort Products
function sortProducts() {
  currentSort = document.getElementById('sortSelect').value;
  sortProductsArray();
  renderProducts();
}

function sortProductsArray() {
  switch(currentSort) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'name':
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'newest':
    default:
      filteredProducts.sort((a, b) => b.id - a.id);
  }
}

// Render Products
function renderProducts() {
  productsContainer.innerHTML = '';
  
  if (filteredProducts.length === 0) {
    productsContainer.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #999;">No products found.</p>';
    return;
  }
  
  filteredProducts.forEach(product => {
    const isInWishlist = wishlist.some(item => item.id === product.id);
    const cartItem = cart.find(item => item.id === product.id);
    
    const productEl = document.createElement('div');
    productEl.className = 'product';
    productEl.innerHTML = `
      <div class="product-image">${product.image}</div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <div class="product-rating">
          ${'⭐'.repeat(Math.round(product.rating))} ${product.rating}
        </div>
        <p class="product-price">$${product.price.toFixed(2)}</p>
        <div class="product-stock ${product.inStock ? 'in-stock' : 'out-of-stock'}">
          ${product.inStock ? 'In Stock' : 'Out of Stock'}
        </div>
        <div class="product-actions">
          <button 
            class="btn btn-add ${cartItem ? 'in-cart' : ''}" 
            onclick="addToCart(${product.id})"
            ${!product.inStock ? 'disabled' : ''}
          >
            ${cartItem ? `✓ (${cartItem.quantity})` : 'Add to Cart'}
          </button>
          <button 
            class="btn-wishlist ${isInWishlist ? 'active' : ''}" 
            onclick="toggleWishlistItem(${product.id})"
            title="${isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}"
          >
            ♥
          </button>
        </div>
      </div>
    `;
    productsContainer.appendChild(productEl);
  });
}

// Cart Functions
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const cartItem = cart.find(item => item.id === productId);
  
  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    });
  }
  
  saveCart();
  updateCartUI();
  renderProducts();
  
  // Visual feedback
  showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  updateCartUI();
  renderProducts();
}

function updateQuantity(productId, quantity) {
  const cartItem = cart.find(item => item.id === productId);
  if (cartItem) {
    cartItem.quantity = Math.max(1, quantity);
    saveCart();
    updateCartUI();
  }
}

function updateCartUI() {
  cartCountEl.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartContainer.innerHTML = '';
  
  if (cart.length === 0) {
    cartContainer.innerHTML = '<p style="padding: 40px 0; text-align: center; color: #999;">Your cart is empty</p>';
    document.getElementById('subtotal').textContent = '0.00';
    document.getElementById('total').textContent = '0.00';
    return;
  }
  
  let subtotal = 0;
  cart.forEach(item => {
    subtotal += item.price * item.quantity;
    
    const cartItemEl = document.createElement('div');
    cartItemEl.className = 'cart-item';
    cartItemEl.innerHTML = `
      <div class="cart-item-info">
        <div class="cart-item-image">${item.image}</div>
        <div>
          <p class="cart-item-name">${item.name}</p>
          <p class="cart-item-price">$${item.price.toFixed(2)}</p>
        </div>
      </div>
      <div class="cart-item-controls">
        <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">−</button>
        <span class="cart-quantity">${item.quantity}</span>
        <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
      </div>
      <button class="remove-btn" onclick="removeFromCart(${item.id})">✕</button>
    `;
    cartContainer.appendChild(cartItemEl);
  });
  
  const shipping = subtotal > 50 ? 0 : 8.99;
  const total = subtotal + shipping;
  
  document.getElementById('subtotal').textContent = subtotal.toFixed(2);
  document.getElementById('shippingCost').textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
  document.getElementById('total').textContent = total.toFixed(2);
}

function toggleCart() {
  cartDrawer.classList.toggle('open');
  overlay.classList.toggle('active');
}

function saveCart() {
  localStorage.setItem('lumaCart', JSON.stringify(cart));
}

// Wishlist Functions
function toggleWishlistItem(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  
  const exists = wishlist.some(item => item.id === productId);
  
  if (exists) {
    wishlist = wishlist.filter(item => item.id !== productId);
    showNotification('Removed from wishlist');
  } else {
    wishlist.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    showNotification('Added to wishlist!');
  }
  
  saveWishlist();
  updateWishlistUI();
  renderProducts();
}

function updateWishlistUI() {
  wishlistContainer.innerHTML = '';
  
  if (wishlist.length === 0) {
    wishlistContainer.innerHTML = '<p style="padding: 40px 0; text-align: center; color: #999;">Your wishlist is empty</p>';
    return;
  }
  
  wishlist.forEach(item => {
    const wishlistItemEl = document.createElement('div');
    wishlistItemEl.className = 'wishlist-item';
    wishlistItemEl.innerHTML = `
      <div class="wishlist-item-image">${item.image}</div>
      <div class="wishlist-item-info">
        <p class="wishlist-item-name">${item.name}</p>
        <p class="wishlist-item-price">$${item.price.toFixed(2)}</p>
      </div>
      <div class="wishlist-item-actions">
        <button class="btn btn-small" onclick="addToCart(${item.id})">Add to Cart</button>
        <button class="remove-btn" onclick="toggleWishlistItem(${item.id})">✕</button>
      </div>
    `;
    wishlistContainer.appendChild(wishlistItemEl);
  });
}

function toggleWishlist() {
  wishlistDrawer.classList.toggle('open');
  overlay.classList.toggle('active');
}

function saveWishlist() {
  localStorage.setItem('lumaWishlist', JSON.stringify(wishlist));
}

// Search Functions
function closeSearch() {
  searchBar.classList.remove('active');
  searchInput.value = '';
  filteredProducts = currentFilter === 'all' 
    ? [...products] 
    : products.filter(p => p.category === currentFilter);
  sortProductsArray();
  renderProducts();
}

// Checkout
function checkout() {
  alert('Demo checkout — no payment is processed.\n\nIn a real store, you would:\n1. Verify shipping address\n2. Select payment method\n3. Complete secure payment\n4. Receive order confirmation');
  cart = [];
  saveCart();
  updateCartUI();
  renderProducts();
  toggleCart();
  showNotification('Order placed successfully!');
}

// Notification System
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.classList.add('show');
  }, 10);
  
  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

// Escape key closes drawers
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    cartDrawer.classList.remove('open');
    wishlistDrawer.classList.remove('open');
    overlay.classList.remove('active');
    searchBar.classList.remove('active');
  }
});
