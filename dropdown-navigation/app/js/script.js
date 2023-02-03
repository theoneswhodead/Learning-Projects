const accordion = document.querySelectorAll('.nav__accordion');
const options = document.querySelectorAll('.nav__options');


accordion[0].addEventListener('click', ()=> {
    options[0].classList.toggle('hidden');
    //options[1].classList.remove('hidden');
    console.log(accordion);
});

accordion[1].addEventListener('click', ()=> {
    options[1].classList.toggle('hidden');
   // options[0].classList.remove('hidden');
});





//nextElementSibling;