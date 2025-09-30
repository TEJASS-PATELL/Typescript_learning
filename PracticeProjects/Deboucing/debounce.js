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
const API = "https://jsonplaceholder.typicode.com/users";
const input = document.getElementById("input");
const List = document.getElementById("names");
function renderOptions(users) {
    List.innerHTML = '';
    users.forEach((user) => {
        const options = document.createElement("option");
        options.value = user.id.toString();
        options.text = user.name;
        List.appendChild(options);
        console.log(options);
    });
}
function fetchUserData(query) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetch(API).then(res => res.json()).then(users => {
                console.log(users);
                const filter = users.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()));
                console.log(filter);
                renderOptions(filter);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
function debounce(fn, delay) {
    let timer;
    return function (...arg) {
        clearTimeout(timer);
        timer = window.setTimeout(() => fn(...arg), delay);
    };
}
const handleSearch = debounce(() => {
    let query = input.value.trim();
    if (query) {
        fetchUserData(query);
    }
    else {
        List.innerHTML = '';
    }
}, 400);
input.addEventListener("input", handleSearch);
fetchUserData("");
