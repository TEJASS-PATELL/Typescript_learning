"use strict";
const imagecontainer = document.querySelector(".maindivimg");
const imgs = document.querySelector(".img");
const nextimg = document.querySelector(".nextimg");
const previmg = document.querySelector(".previmg");
let timers = 0;
let intervals;
const img = ["images/a.jpg", "images/b.jpg", "images/c.jpg", "images/d.jpg", "images/e.jpg"];
imgs.src = img[timers];
nextimg.addEventListener("click", () => {
    clearInterval(intervals);
    timers = (timers + 1) % img.length;
    imgs.src = img[timers];
    createimg();
});
previmg.addEventListener("click", () => {
    clearInterval(intervals);
    timers = (timers - 1 + img.length) % img.length;
    imgs.src = img[timers];
    createimg();
});
imgs.addEventListener("mouseover", () => {
    clearInterval(intervals);
});
imgs.addEventListener("mouseout", () => {
    createimg();
});
//? % arr.length ensures index hamesha 0 to length-1 me rahe
function createimg() {
    intervals = setInterval(() => {
        timers = (timers + 1) % img.length;
        imgs.src = img[timers];
    }, 2000);
}
createimg();
