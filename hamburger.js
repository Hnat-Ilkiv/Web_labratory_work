function hamburger() {
    var navElement = document.querySelector("nav");

    if (window.innerWidth <= 800) {
        if (navElement.style.display == "none" || navElement.style.display == "") {
            navElement.style.display = "block";
        } else {
            navElement.style.display = "none";
        }
    }
} 
