
let cart = [];
let total = 0;

function addItem(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  cart.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.name} - R ${item.price}`;
    cartItems.appendChild(div);
  });
  document.getElementById('total').textContent = total;
}

function clearCart() {
  cart = [];
  total = 0;
  updateCart();
}
