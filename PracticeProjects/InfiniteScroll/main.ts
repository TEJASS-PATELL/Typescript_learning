let isLoading = false;
let Limit = 1;
const POSTAPI = (limit: number) => `https://jsonplaceholder.typicode.com/posts?_page=${limit}&_limit=10`
const main_container = document.getElementById("maincontainer") as HTMLDivElement;
const loader = document.getElementById("loader") as HTMLDivElement;

interface Post {
    userId: number,
    id: number,
    title: string,
    body: string
}

async function fetchPostData() {
    try {
        isLoading = true;
        loader.textContent = "Loading.....";
        loader.style.display = "block";
        // console.log("loading.....")
        const res = await fetch(POSTAPI(Limit++));
        const posts: Post[] = await res.json();
        if (posts.length === 0) {
            loader.textContent = "No more data";
            loader.style.display = "block";
            return;
        }
        posts.forEach((postdata: Post) => {
            const card = document.createElement("div");
            card.classList.add("card")
            const p = document.createElement("p");
            const h = document.createElement("h2");
            p.textContent = postdata.body;
            h.textContent = postdata.title.toUpperCase();
            main_container.appendChild(card);
            card.appendChild(h);
            card.appendChild(p);
        })
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
}

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY; // kitna scroll kiya
    const windowHeight = window.innerHeight;  // visible window height
    const docHeight = document.documentElement.scrollHeight; // total document height

    if (!isLoading && scrollTop + windowHeight >= docHeight - 10) {
        fetchPostData();
    }
})

fetchPostData();