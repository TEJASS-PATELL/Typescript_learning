"use strict";
const inputtab = document.querySelector(".input-area");
const addbutton = document.querySelector(".task-add");
let todo = [];
function saveTodo() {
    localStorage.setItem("todos", JSON.stringify(todo));
}
function getdata() {
    const presenttask = localStorage.getItem("todos");
    if (presenttask) {
        todo = JSON.parse(presenttask);
    }
}
function addtask(heading) {
    const newTodo = {
        id: Date.now(),
        heading,
        isComplete: false
    };
    todo.push(newTodo);
    saveTodo();
    renderTodo();
}
function toggleTasks(id) {
    todo = todo.map(todo => todo.id === id ? Object.assign(Object.assign({}, todo), { isComplete: !todo.isComplete }) : todo); //? Purpose: object ki copy banao aur kuch specific field ko update/override karo.
    console.log(...todo);
    renderTodo();
}
function removetask(id) {
    todo = todo.filter(todo => todo.id !== id);
    console.log(...todo); //! clicked element object 
    saveTodo();
    renderTodo();
}
function renderTodo() {
    const todoList = document.querySelector(".todo-list");
    todoList.innerHTML = '';
    todo.forEach((task, index) => {
        let li = document.createElement("li");
        li.textContent = task.heading;
        const togglebutton = document.createElement("button");
        togglebutton.textContent = task.isComplete ? "Un-Complete" : "Complete";
        togglebutton.onclick = () => toggleTasks(task.id);
        const deletebutton = document.createElement("button");
        deletebutton.textContent = "Delete";
        deletebutton.onclick = () => removetask(task.id);
        li.appendChild(deletebutton);
        li.appendChild(togglebutton);
        todoList.appendChild(li);
    });
}
addbutton.addEventListener("click", () => {
    console.log("hello add task");
    if (inputtab.value.trim() === "") {
        alert("Add a task first");
    }
    else {
        addtask(inputtab.value);
        inputtab.value = ' ';
    }
});
getdata();
renderTodo();
