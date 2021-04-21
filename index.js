// const title = document.querySelector("#title");

// function handleClick() {
//     title.style.color ="black";
// }

// title.addEventListener("click",handleClick);

// const age = prompt ("How old are you");

// if(age > 18 && age <=21) {
//     console.log("You can drink but you should not");
// }else if(age > 21) {
//     console.log("GO AHEAD")
// }else {
//     console.log("Sorry mate!");
// }

// function handOffline() {
//     console.log("Bye bye");
// }

// function handOnline() {
//     console.log("Welcome back");
// }

// window.addEventListener("offline", handOffline)
// window.addEventListener("online",handOnline)


const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    title.classList.toggle(CLICKED_CLASS)
}

function init() {
    title.addEventListener("click",handleClick)
}

init();

