
var imageSources = ["images/os3.png","images/os2.jpg" ,"images/os1.png"]; // Add more images as needed

var currentIndex = 0;
var imageElement = document.getElementById('changingImage');

// Function to change image
function changeImage() {
    currentIndex = (currentIndex + 1) % imageSources.length;
    imageElement.src = imageSources[currentIndex];
    imageElement.alt = "Image " + (currentIndex + 1);
}

// Change image every 5 seconds (5000 milliseconds)
setInterval(changeImage, 3000);


document.addEventListener("DOMContentLoaded", function () {
    var disclaimer = document.getElementById("cookieDisclaimer");
    disclaimer.style.display = "block";
});

function acceptCookies() {
    // Set a cookie indicating that the user has accepted cookies
    document.cookie = "cookiesAccepted=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";

    // Hide the disclaimer
    document.getElementById("cookieDisclaimer").style.display = "none";
}
