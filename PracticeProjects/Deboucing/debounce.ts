const API = "https://jsonplaceholder.typicode.com/users"
const input = document.getElementById("input") as HTMLInputElement;
const List = document.getElementById("names") as HTMLSelectElement;

interface User {
    id: number,
    name: string,
    username?: string,
    email?: string,
}

function renderOptions(users: User[]) {
    List.innerHTML = '';
    users.forEach((user: User) => {
        const options = document.createElement("option");
        options.value = user.id.toString();
        options.text = user.name;
        List.appendChild(options);
        console.log(options);
    })
}

async function fetchUserData(query: string) {
    try {
        await fetch(API).then(res => res.json()).then(users => {
            console.log(users);
            const filter = users.filter((user: User) =>
                user.name.toLowerCase().includes(query.toLowerCase())
            )
            console.log(filter);
            renderOptions(filter);
        })
    }
    catch (error) {
        console.log(error)
    }
}

function debounce(fn: Function, delay: number){
    let timer : number;
    return function(...arg: any[]){
        clearTimeout(timer);
        timer = window.setTimeout(() => fn(...arg), delay);
    }
}

const handleSearch = debounce(() => {
    let query = input.value.trim();
    if(query){
        fetchUserData(query);
    }
    else{
        List.innerHTML = '';
    }
},400)

input.addEventListener("input", handleSearch);
fetchUserData("");