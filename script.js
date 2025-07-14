document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");

    // Sign Up Form Validation
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("name").value.trim();
            const dob = document.getElementById("dob").value;
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            if (!name || !dob || !email || !password) {
                alert("All fields are required!");
                return;
            }

            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            if (password.length < 6) {
                alert("Password must be at least 6 characters.");
                return;
            }

            alert("Sign-up successful! Redirecting to Login...");
            window.location.href = "login.html";
        });
    }

    // Login Form Validation
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("loginEmail").value.trim();
            const password = document.getElementById("loginPassword").value.trim();

            if (!email || !password) {
                alert("Please enter your email and password.");
                return;
            }

            if (!validateEmail(email)) {
                alert("Please enter a valid email.");
                return;
            }

            alert("Login successful! Redirecting to homepage...");
            window.location.href = "saturnhomepage.html"; // ✅ This will now redirect correctly
			 
        });
    }
});

// Email Validation Function
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function searchProducts() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let products = document.querySelectorAll(".product");

    products.forEach(category => {
        let productName = category.querySelector("h3").innerText.toLowerCase(); 
        if (productName.includes(input)) {
            category.style.display = "block";  // Show matching product
        } else {
            category.style.display = "none";   // Hide non-matching product
        }
    });
}
