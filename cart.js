console.log("cart.js loaded!");

// Function to add an item to the cart
function addToCart(name, image, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, image, price });
    localStorage.setItem("cart", JSON.stringify(cart));

    console.log("Cart Updated:", cart); // Debugging

    // Redirect to cart page after a short delay
    setTimeout(() => {
        console.log("Redirecting to cart page...");
        window.location.href = "cart.html";
    }, 500);
}

// Function to handle "Buy Now" button click
function buyNow(name, price) {
    console.log(`Buying ${name} for ₹${price}`);
    alert(`You are buying ${name} for ₹${price}. Proceeding to checkout...`);
    window.location.href = "checkout.html";
}

// Function to display cart items on the cart page
function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContainer = document.getElementById("cart-items");
    let totalPriceElement = document.getElementById("total-price");

    if (!cartContainer || !totalPriceElement) return;

    cartContainer.innerHTML = "";

    let totalPrice = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        cart.forEach((item, index) => {
            totalPrice += item.price;

            let itemDiv = document.createElement("div");
            itemDiv.classList.add("cart-item");
            itemDiv.innerHTML = `
                <img src="${item.image}" alt="${item.name}" width="100">
                <h3>${item.name}</h3>
                <p>₹${item.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartContainer.appendChild(itemDiv);
        });
    }

    totalPriceElement.innerText = `Total: ₹${totalPrice.toFixed(2)}`;
}

// Function to remove an item from the cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

// Function to clear the entire cart
function clearCart() {
    localStorage.removeItem("cart");
    displayCart();
}

// Function to proceed to payment
function proceedToPayment() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        window.location.href = "pages/pay.html";
    }
}

// Attach event listeners
document.addEventListener("DOMContentLoaded", () => {
    // Add to Cart buttons
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const name = button.getAttribute("data-name");
            const image = button.getAttribute("data-image");
            const price = parseFloat(button.getAttribute("data-price"));
            addToCart(name, image, price);
        });
    });

    // Buy Now buttons
    document.querySelectorAll(".buy-now").forEach(button => {
        button.addEventListener("click", () => {
            const name = button.getAttribute("data-name");
            const price = parseFloat(button.getAttribute("data-price"));
            buyNow(name, price);
        });
    });

    // Load cart if on the cart page
    if (window.location.pathname.includes("cart.html")) {
        displayCart();

        // Attach event listener to Proceed to Payment button
        const proceedBtn = document.getElementById("proceed-to-payment");
        if (proceedBtn) {
            proceedBtn.addEventListener("click", proceedToPayment);
        }
    }
});
