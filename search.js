document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchForm = document.getElementById("searchForm");

    if (searchForm) {
        searchForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page reload

            let query = searchInput.value.trim().toLowerCase();

            // Redirect based on search input
            if (query === "haircare") {
                window.location.href = "haircare.html";
            } else if (query === "makeup") {
                window.location.href = "makeup.html";
            } else if (query === "skincare") {
                window.location.href = "skincare.html";
            } else {
                alert("No matching category found! Try searching 'Haircare', 'Makeup', or 'Skincare'.");
            }
        });
    }
});
