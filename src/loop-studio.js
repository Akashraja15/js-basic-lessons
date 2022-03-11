/* eslint-disable eol-last */
/* eslint-disable semi */
const hamburger = document.querySelector('#open-btn');
const closeBtn = document.querySelector('#close-btn');

const navbarNav = document.querySelector('.navbar-nav');

const navbarToggle = () => navbarNav.classList.toggle('active');

hamburger.addEventListener('click', navbarToggle);
closeBtn.addEventListener('click', navbarToggle);