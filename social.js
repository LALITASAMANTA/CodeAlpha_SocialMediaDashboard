const btn = document.getElementById("toggle");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");

// Listen for a click on the button
btn.addEventListener("click", function () {
    // If the current URL contains "ligh-theme.css"
    if (theme.getAttribute("href") == "resources/css/style.css") {
        
        theme.href = "resources/css/dark-theme.css";
    } else {
        // ... switch it to "light-theme.css"
        theme.href = "resources/css/style.css";
    }
});



