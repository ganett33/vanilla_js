const body = document.querySelector("body");

const IMG_NUMBER = 10;

// When using the API
// function handleImgLoad(){
//     console.log("finished loading");
// }

function paintImage(imgNumber){
    const image = new Image();
    image.src = `/images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);

    // When using the API
    // image.addEventListener("loadend", handleImgLoad) 
}

function getRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER );
    return number;
}

function init(){
 const randomNumber = getRandom();
 paintImage(randomNumber);
}

init();