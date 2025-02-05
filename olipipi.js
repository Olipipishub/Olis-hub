function navigateToWebsite(url) {
    window.location.href = url;
}

function passwordPrompt() {
    var password = prompt("Please enter the password:");
    if (password === "Potato") {
        document.getElementById("buttons").style.display = "flex";
    } else {
        alert("Incorrect password. Please try again.");
    }
}
