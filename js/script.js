const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const overlay = document.querySelector(".overlay");
const link = document.querySelectorAll(".overlay-content a");
const toTop = document.querySelector(".to-top");
const details = document.querySelector(".details");
const modal = document.querySelector(".modal");
const heading = document.querySelectorAll("#portfolio h3");
const circleClose = document.querySelector(".fa-circle-xmark");
const detailsHeading = document.querySelector(".details-heading");
const toolsUsed = document.querySelector(".tools");


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

// Modal request
heading.forEach(function(item) {
    item.addEventListener("click", function() {
        if (item.classList.contains("subscription")) {
            if (modal.classList.contains("hide")) {
                modal.classList.remove("hide");
                detailsHeading.innerText = `Subscription Calculator`;
                details.innerText = `This subscription calculator calculates the total cost of a subscription using the duration in months and the cost of the plan selected. I utilized change event listeners and functions.`;
                toolsUsed.innerHTML = `<strong>Tools used:</strong> HTML, CSS, JavaScript`;
            }
        } else if (item.classList.contains("guess")) {
            if (modal.classList.contains("hide")) {
                modal.classList.remove("hide");
                detailsHeading.innerText = `Guessing Game`;
                details.innerText = `The user inputs one letter at a time to guess the word. When they guess correctly, the letter is shown. Utilized arrays and their methods, event listeners and functions.`;
                toolsUsed.innerHTML = `<strong>Tools used:</strong> HTML, CSS, JavaScript`;
            }
        } else if (item.classList.contains("github")) {
            if (modal.classList.contains("hide")) {
                modal.classList.remove("hide");
                detailsHeading.innerText = `Github Repo Gallery`;
                details.innerText = `This project is as it's named a gallery of all my git repos to date. They can be sorted and filtered using the search bar. Utilized APIs, async functions and objects.`;
                toolsUsed.innerHTML = `<strong>Tools used:</strong> HTML, CSS, JavaScript`;
            }
        } else if (item.classList.contains("potluck")) {
            if (modal.classList.contains("hide")) {
                modal.classList.remove("hide");
                detailsHeading.innerText = `Potluck Guestlist`;
                details.innerText = `The app user can input the names of their guests and then randomly assign a list of dishes for each guest to bring. No dish is repeated when assigned to the guests. I used arrays, click and keyboard event listeners, and conditional loops.`;
                toolsUsed.innerHTML = `<strong>Tools used:</strong> HTML, CSS, JavaScript`;
            }
        } else if (item.classList.contains("rogue")) {
            if (modal.classList.contains("hide")) {
                modal.classList.remove("hide");
                detailsHeading.innerText = `Rogue Pickings`;
                details.innerText = `I built a responsive landing page for a food truck to provide important information to potential customers ranging from the menu to contact information. I utilized flex-box and media queries to build a responsive site.`;
                toolsUsed.innerHTML = `<strong>Tools used:</strong> HTML, CSS`;
            }
        } else if (item.classList.contains("unplugged")) {
            if (modal.classList.contains("hide")) {
                modal.classList.remove("hide");
                detailsHeading.innerText = `Unplugged`;
                details.innerText = `This multiple page website for a retreat provides information for a tech retreat, a registration form, a map and an FAQ page. I utilized flex-box, media queries, forms, and iframes.`;
                toolsUsed.innerHTML = `<strong>Tools used:</strong> HTML, CSS`;
                detailsHeading.style.width = "100%";
                detailsHeading.style.textAlign = "center";
            }
        }
    }); 
});

circleClose.addEventListener("click", function() {
    if (!modal.classList.contains("hide")) {
        modal.classList.add("hide");
    }
});