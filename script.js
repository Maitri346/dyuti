// script.js
let cart = [];

function addToCart(product) {
  cart.push(product);
  updateCartCount();
  saveCart();
}

function updateCartCount() {
  const cartCount = document.getElementById('cart-count');
  cartCount.textContent = cart.length;
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
  const savedCart = localStorage.getItem('cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartCount();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadCart();

  const addToCartButtons = document.querySelectorAll('.product-item button');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const product = {
        name: button.parentElement.querySelector('a').textContent,
        price: button.parentElement.querySelector('p').textContent,
        image: button.parentElement.parentElement.querySelector('img').src
      };
      addToCart(product);
    });
  });
});