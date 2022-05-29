const bars = document.querySelector(".fa-bars");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const link = document.querySelectorAll(".overlay-content a");
const toTop = document.querySelector(".to-top");

// Navigation menu 
bars.addEventListener("click", function () {
    overlay.style.width = "100%";
});

close.addEventListener("click", function () {
    overlay.style.width = "0%";
});

for (var item of link) {
    item.addEventListener("click", function () {
        overlay.style.width = "0%";
    })
}

// To top button
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})
