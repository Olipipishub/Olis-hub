function navigateToWebsite(url) {
    window.location.href = url;
}

function passwordPrompt() {
    var password = prompt("Please enter the password:");
    if (password === "Potato") {
        // Unhide buttons or show content if the password is correct
        document.getElementById("buttons").style.display = "block";
    } else {
        alert("Incorrect password. Please try again.");
    }
}
