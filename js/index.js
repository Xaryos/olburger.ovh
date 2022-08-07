// Button up

const btn = document.querySelector(".buttonReturn");

btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
});