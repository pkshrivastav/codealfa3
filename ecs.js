// Selecting DOM elements
const cartItems = document.getElementById('cart-items');
const totalPriceEl = document.getElementById('total-price');
let cart = [];
let totalPrice = 0;

// Function to add product to the cart
function addToCart(product) {
    const productId = product.dataset.id;
    const productName = product.dataset.name;
    const productPrice = parseFloat(product.dataset.price);

    // Add product to the cart array
    cart.push({ id: productId, name: productName, price: productPrice });

    // Update total price
    totalPrice += productPrice;
    updateCartDisplay();
}

// Function to update cart display
function updateCartDisplay() {
    // Clear current cart items
    cartItems.innerHTML = '';

    // Add all cart items to the list
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    // Update total price
    totalPriceEl.textContent = totalPrice.toFixed(2);
}

// Adding event listeners to all 'Add to Cart' buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const product = event.target.closest('.product');
        addToCart(product);
    });
});
