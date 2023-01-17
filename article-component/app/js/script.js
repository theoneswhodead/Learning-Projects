const share =  document.querySelector(body);
const footer = document.querySelector('.article__footer');
const focus = document.querySelector('.article__share');
console.log('elo');
share.addEventListener('click', (e) => {
    console.log('click');
    footer.classList.remove('.visible');
    focus.classList.add('.hidden');
});
    
