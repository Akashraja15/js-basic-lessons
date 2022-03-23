/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable quotes */
/* eslint-disable spaced-comment */
const countDownDate = new Date("April 1, 2022 12:00:00 AM").getTime();

let x = setInterval(() => {
  const today = new Date().getTime();

  let distance = countDownDate - today;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));

  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}, 1000);