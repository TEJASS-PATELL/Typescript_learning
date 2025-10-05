"use strict";
const imagecontainer = document.querySelector(".maindivimg");
const imgs = document.querySelector(".img");
const nextimg = document.querySelector(".nextimg");
const previmg = document.querySelector(".previmg");
let timers = 0;
// nextimg.addEventListener("click", () => {
// })
const img = [
    "images/b.jpg",
    "images/c.jpg",
    "images/d.jpg",
    "images/e.jpg"
];
function createimg() {
    setInterval(() => {
        if (img.length <= timers) {
            timers = 0;
        }
        else {
            imgs.src = img[timers++];
        }
    }, 2000);
}
createimg();
