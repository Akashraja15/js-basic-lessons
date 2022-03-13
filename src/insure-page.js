/* eslint-disable keyword-spacing */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable semi */
/* eslint-disable quotes */
const menu = document.getElementById("menu");
const imgPattern = document.querySelector(".img-bottom-pattern");
const navBar = document.querySelector("nav");
const header = document.querySelector("header");
let isNavbarShowed = false;

menu.addEventListener("click", () => {
    isNavbarShowed = !isNavbarShowed;
    isNavbarShowed ? openMenu() : closeMenu();
});

const openMenu = () => {
    menu.classList.add("active");
    imgPattern.style.opacity = "1";
    navBar.style.display = "block";
    navBar.classList.remove("close");
    imgPattern.classList.remove("close");
    setTimeout(() => {
        imgPattern.style.display = "block";
    }, 500);
};

const closeMenu = () => {
    menu.classList.remove("active");
    navBar.classList.add("close");
    imgPattern.style.display = "none";
    setTimeout(() => {
        navBar.style.display = "none";
    }, 500);
};

const startSection = document.getElementById("section_1");
const differentSection = document.getElementById("section_2");
const workSection = document.getElementById("section_3");

const loadSection = (entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    })
}

const observer = new IntersectionObserver(loadSection, {
    root: null,
    threshold: 0.5
});

observer.observe(differentSection);
observer.observe(workSection);

setTimeout(() => {
    startSection.classList.add("visible");
}, 1000);