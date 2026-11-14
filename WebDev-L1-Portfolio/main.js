// Mobile menu kholna aur band karna
var navToggle = document.getElementById("nav-toggle");
var navLink = document.getElementById("nav-link");

navToggle.addEventListener("click", function () {
    navLink.classList.toggle("active");
});

// Kisi link par click karne par menu band ho jaye
var links = document.querySelectorAll(".nav-link a");

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        navLink.classList.remove("active");
    });
}

// Scroll karne par menu mein current section highlight ho
var sections = document.querySelectorAll("#about, #skills, #services, #work, #education, #contact");

window.addEventListener("scroll", function () {
    var current = "index.html";

    for (var i = 0; i < sections.length; i++) {
        if (window.scrollY >= sections[i].offsetTop - 120) {
            current = "#" + sections[i].id;
        }
    }

    for (var j = 0; j < links.length; j++) {
        if (links[j].getAttribute("href") === current) {
            links[j].classList.add("current");
        } else {
            links[j].classList.remove("current");
        }
    }
});

// Contact form (Formspree)
var contactForm = document.getElementById("contact");
var submitBtn = document.getElementById("submit");
var message = document.createElement("p");

message.className = "form-status";
contactForm.querySelector(".container").appendChild(message);

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    submitBtn.value = "SENDING...";

    fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { Accept: "application/json" }
    })
        .then(function (response) {
            if (response.ok) {
                message.textContent = "Thank you! Your message was sent.";
                message.className = "form-status ok";
                contactForm.reset();
            } else {
                message.textContent = "Something went wrong. Please try again.";
                message.className = "form-status err";
            }
            submitBtn.value = "SUBMIT";
        })
        .catch(function () {
            message.textContent = "Network error. Please try again.";
            message.className = "form-status err";
            submitBtn.value = "SUBMIT";
        });
});