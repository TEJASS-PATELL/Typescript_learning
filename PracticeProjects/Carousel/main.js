"use strict";
const imagecontainer = document.querySelector(".maindivimg");
const imgs = document.querySelector(".img");
const nextimg = document.querySelector(".nextimg");
const previmg = document.querySelector(".previmg");
let timers = 0;
const img = ["images/b.jpg", "images/c.jpg", "images/d.jpg", "images/e.jpg"];
nextimg.addEventListener("click", () => {
    timers = (timers + 1) % img.length;
    imgs.src = img[timers];
});
previmg.addEventListener("click", () => {
    timers = (timers - 1 + img.length) % img.length;
    imgs.src = img[timers];
});
function createimg() {
    setInterval(() => {
        timers = (timers + 1) % img.length;
        imgs.src = img[timers];
    }, 2000);
}
createimg();
