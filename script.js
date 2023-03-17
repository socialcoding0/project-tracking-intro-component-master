const close = document.querySelector("#close");
const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("nav");



hamburger.addEventListener("click", function () {
    close.style.display = "block";
    hamburger.style.display = "none";
    nav.classList.add("mobile-active");

});

close.addEventListener("click", function () {
    hamburger.style.display = "block";
    close.style.display = "none";
    nav.classList.remove("mobile-active");
});