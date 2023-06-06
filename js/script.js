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

// Mouse over menu
const projects = document.querySelectorAll(".project");
if (window.innerWidth >= 1200) {
    projects.forEach(project => {
        project.addEventListener("mouseover", function() {
            const glide = project.querySelector(".glide");
            if(glide.classList.contains("hide")) {
                glide.classList.remove("hide");
            }
        });
    
        project.addEventListener("mouseout", function() {
            const glide = project.querySelector(".glide");
            if (!glide.classList.contains("hide")) {
                glide.classList.add("hide");
            }
        });
    });
}

 





// Modal request


heading.forEach(function(item) {
    item.addEventListener("click", function() {
        if (item.classList.contains("guess")) {
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
        } else if (item.classList.contains("unplugged")) {
            if (modal.classList.contains("hide")) {
                modal.classList.remove("hide");
                detailsHeading.innerText = `Unplugged`;
                details.innerText = `This multiple page website for a retreat provides information for a tech retreat, a registration form, a map and an FAQ page. I utilized flex-box, media queries, forms, and iframes.`;
                toolsUsed.innerHTML = `<strong>Tools used:</strong> HTML, CSS`;
                detailsHeading.style.width = "100%";
                detailsHeading.style.textAlign = "center";
            }
        } else if (item.classList.contains("sticky-notes")) {
            if (modal.classList.contains("hide")) {
                modal.classList.remove("hide");
                detailsHeading.innerText = `Sticky Notes App`;
                details.innerText = `This react app allows you to make a sticky note with a title and description, add  or delete any notes on the list. The app also stores your existing notes in memory until the next time you load the app. The app makes use of React lifecycle components to save your exising notes.`;
                toolsUsed.innerHTML = `<strong>Tools used:</strong> React`;
            }
        } else if (item.classList.contains("name-tag")) { 
            if (modal.classList.contains("hide")) {
                modal.classList.remove("hide");
                detailsHeading.innerText = `Name Tag Generator`;
                details.innerText = `Using this app you can generate a name tag by typing a name into the input box. You are able to create and delete name tags as you see fit.`;
                toolsUsed.innerHTML = `<strong>Tools used:</strong> React`;
            }
        } else if (item.classList.contains("sunnyside")) { 
            if (modal.classList.contains("hide")) {
                modal.classList.remove("hide");
                detailsHeading.innerText = `Sunnyside Agency`;
                details.innerText = `A design agency website that has a speech bubble navigation in the mobile view and a call to action that stands out in the menu.`;
                toolsUsed.innerHTML = `<strong>Tools used:</strong> HTML, CSS, JavaScript`;
            }
        }

        // Remove mouse over effect when a heading is selected
        const glides = document.querySelectorAll(".glide");
        for(let glide of glides) {
            glide.classList.add("hide");
        }

    }); 
});

circleClose.addEventListener("click", function() {
    if (!modal.classList.contains("hide")) {
        modal.classList.add("hide");
    }
});