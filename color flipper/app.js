const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');

const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    //get random between 0 -3

    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = getRandomColor();
    // document.body.style.backgroundColor=colors[randomNumber];
    color.textContent = getRandomColor();
});


function getRandomNumber() {
    return Math.floor(Math.random() * 4) ;
}

function getRandomColor() {
   let first = Math.floor(Math.random() * 256) ;
   let second = Math.floor(Math.random() * 256) ;
   let third = Math.floor(Math.random() * 256) ;
   let opacity = Math.random().toFixed(2);

    return `rgb(${first},${second},${third})`
}