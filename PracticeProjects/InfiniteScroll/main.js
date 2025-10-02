"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let isLoading = false;
let Limit = 1;
const POSTAPI = (limit) => `https://jsonplaceholder.typicode.com/posts?_page=${limit}&_limit=10`;
const main_container = document.getElementById("maincontainer");
const loader = document.getElementById("loader");
function fetchPostData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            isLoading = true;
            loader.textContent = "Loading.....";
            loader.style.display = "block";
            // console.log("loading.....")
            const res = yield fetch(POSTAPI(Limit++));
            const posts = yield res.json();
            if (posts.length === 0) {
                loader.textContent = "No more data";
                loader.style.display = "block";
                return;
            }
            posts.forEach((postdata) => {
                const card = document.createElement("div");
                card.classList.add("card");
                const p = document.createElement("p");
                const h = document.createElement("h2");
                p.textContent = postdata.body;
                h.textContent = postdata.title.toUpperCase();
                main_container.appendChild(card);
                card.appendChild(h);
                card.appendChild(p);
            });
            loader.style.display = "none";
        }
        catch (error) {
            console.log(error);
            loader.textContent = "Error loading data!";
            loader.style.display = "block";
        }
        finally {
            isLoading = false;
        }
    });
}
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY; // kitna scroll kiya
    const windowHeight = window.innerHeight; // visible window height
    const docHeight = document.documentElement.scrollHeight; // total document height
    if (!isLoading && scrollTop + windowHeight >= docHeight - 10) {
        fetchPostData();
    }
});
fetchPostData();
