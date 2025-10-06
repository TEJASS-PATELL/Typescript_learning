"use strict";
const faq = document.getElementById("faq");
const faqData = [
    {
        id: 1,
        title: "What is JavaScript?",
        content: "JavaScript is a programming language used to make web pages interactive."
    },
    {
        id: 2,
        title: "What is TypeScript?",
        content: "TypeScript is a superset of JavaScript that adds static typing and better tooling."
    },
    {
        id: 3,
        title: "What is an API?",
        content: "API stands for Application Programming Interface, a way for different software to communicate."
    },
    {
        id: 4,
        title: "What is a Promise in JS?",
        content: "A Promise is an object representing the eventual completion or failure of an asynchronous operation."
    },
    {
        id: 5,
        title: "What is Event Loop?",
        content: "The Event Loop handles execution of multiple chunks of code, collects and processes events, and executes queued tasks."
    }
];
faqData.forEach((item, index) => {
    const faqitem = document.createElement("div");
    const question = document.createElement("div");
    const answer = document.createElement("div");
    faqitem.classList.add("faqdiv");
    question.classList.add("question");
    answer.classList.add("answer");
    question.textContent = `Q${item.id}. ${item.title}`;
    answer.textContent = `Ans. ${item.content}`;
    faqitem.appendChild(question);
    faqitem.appendChild(answer);
    faq.appendChild(faqitem);
    question.addEventListener("click", () => {
        answer.classList.toggle("visible");
    });
});
