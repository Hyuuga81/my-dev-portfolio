const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const overlay = document.querySelector(".overlay");
const link = document.querySelectorAll(".overlay-content a");
const toTop = document.querySelector(".to-top");

// Navigation menu 
bars.addEventListener("click", function () {
        overlay.style.width = "100%";
        bars.classList.add("hide");
        xmark.classList.remove("hide");
});

xmark.addEventListener("click", function () {
        overlay.style.width = "0%";
        bars.classList.remove("hide");
        xmark.classList.add("hide");
});

//Navigation links
for (var item of link) {
    item.addEventListener("click", function () {
        overlay.style.width = "0%";
        xmark.classList.add("hide");
        bars.classList.remove("hide");
    })
};

// To top button
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});
