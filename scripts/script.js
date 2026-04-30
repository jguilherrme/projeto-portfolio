document.addEventListener("DOMContentLoaded", () => {
    const inicio = document.querySelector("#inicio");

    inicio.classList.add("animar");
});

/* Scroll Reveal */

const elementos = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visivel");
        }
    });
}, {
    threshold: 0.2
});

elementos.forEach((el) => observer.observe(el));