const seconddiv = document.getElementById("seconddiv");
const maindiv = document.querySelector(".maindiv");
const text = document.querySelector(".text");

const total_star = 5;
let select_rating = 0;

function createStar(){
    for(let i=1; i<=total_star; i++){
        const star = document.createElement("span");
        star.classList.add("star");
        star.dataset.value = i.toString();
        star.textContent = "☆";
        text.textContent = `Your current rating is: 0/${total_star}`;
        
        star.addEventListener("mouseover", handleover);
        star.addEventListener("click", handleclick);
        star.addEventListener("mouseout", handleout);

        seconddiv.appendChild(star);
    }
}

function handleclick(){
    select_rating = parseInt(this.dataset.value);
    text.textContent = `Your current rating is: ${select_rating}/${total_star}`;
    showstar(select_rating);
}

function handleover(){
    const hovervalue = parseInt(this.dataset.value);
    showstar(hovervalue);
}

function handleout(){
    showstar(select_rating);
    console.log(select_rating);
}

function showstar(rating){
    const stars = document.querySelectorAll("span");
    stars.forEach((star, index) => {
           if (index < rating) {       //* decides which star is filed and which is not.
            star.textContent = "★"; 
            star.style.color = "gold";
        } else {
            star.textContent = "☆"; 
            star.style.color = "black";
        }
    })
}

createStar();
showstar(select_rating);