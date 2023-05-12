const nav = document.querySelector(".nav");
const searchIcon = document.querySelector("#searchIcon");
const navOpenBtn = document.querySelector(".navOpenBtn");
const navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
    nav.classList.toggle("openSearch");
    nav.classList.remove("openNav");
    if (nav.classList.contains("openSearch")) {
        searchIcon.classList.remove("fa-search"); // Primero remueve la clase
        searchIcon.classList.add("fa-times"); // Luego agrega la nueva clase
    } else {
        searchIcon.classList.remove("fa-times");
        searchIcon.classList.add("fa-search");
    }
});

navOpenBtn.addEventListener("click", () => {
    nav.classList.add("openNav");
    nav.classList.remove("openSearch");
    searchIcon.classList.remove("fa-times");
    searchIcon.classList.add("fa-search");
});

navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("openNav");
});
