const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const btn = document.getElementById('btn');

const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    //get random between 0 -3

   // let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = getRandomColor();
    // document.body.style.backgroundColor=colors[randomNumber];
    color.textContent = getRandomColor();
});


function getRandomNumber() {
    return Math.floor(Math.random() * 4) ;
}

function getRandomColor() {
    let first = hex[Math.floor(Math.random() * hex.length)];
    let second = hex[Math.floor(Math.random() * hex.length)];
    let third = hex[Math.floor(Math.random() * hex.length)];
    let forth = hex[Math.floor(Math.random() * hex.length)];
    let fifth = hex[Math.floor(Math.random() * hex.length)];
    let sixth = hex[Math.floor(Math.random() * hex.length)];

    return `#${first}${second}${third}${forth}${fifth}${sixth}`;
}










// function getRandomColor() {
//    let first = Math.floor(Math.random() * 256) ;
//    let second = Math.floor(Math.random() * 256) ;
//    let third = Math.floor(Math.random() * 256) ;
//    let opacity = Math.random().toFixed(2);

//     return `rgb(${first},${second},${third})`
// }