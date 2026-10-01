/* Marca que o JS está ativo (o CSS só esconde as seções se isso existir) */
document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#inicio").classList.add("animar");
});

/* Scroll Reveal */
const elementos = document.querySelectorAll("section:not(#inicio)");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visivel");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0,                  /* seções altas nunca atingiam 20% visível */
        rootMargin: "0px 0px -10% 0px"
    });

    elementos.forEach((el) => observer.observe(el));
} else {
    elementos.forEach((el) => el.classList.add("visivel"));
}
