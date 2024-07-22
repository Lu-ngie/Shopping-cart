// Initialize cart and total variables
let cart = [];
let total = 0;

// Function to add item to cart
function addItem(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

// Function to update cart display
function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalDisplay = document.getElementById('cart-total');
    
    // Clear existing cart items
    cartList.innerHTML = '';
    
    // Update cart items and total
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
    });
    
    totalDisplay.textContent = total;
}

// Function to clear the cart
function clearCart() {
    cart = [];
    total = 0;
    updateCart();
}
