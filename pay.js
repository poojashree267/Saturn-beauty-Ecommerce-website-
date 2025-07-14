// Function to proceed to payment
function proceedToPayment() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Your cart is empty! Add some products before proceeding to payment.");
    } else {
        console.log("Proceeding to payment...");
        window.location.href = "pay.html"; // Redirect to payment page
    }
}

// Attach event listener to the "Proceed to Payment" button
document.addEventListener("DOMContentLoaded", () => {
    // Load cart if on the cart page
    if (window.location.pathname.includes("cart.html")) {
        displayCart();

        // Attach event listener to the "Proceed to Payment" button
        const proceedToPaymentButton = document.querySelector("#proceed-to-payment");
        if (proceedToPaymentButton) {
            proceedToPaymentButton.addEventListener("click", proceedToPayment);
        }
    }
});