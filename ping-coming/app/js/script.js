let btn = document.getElementsByClassName('form__btn');
let email = document.getElementsByClassName('form__email');
let form = document.querySelector('form')
console.log(btn);


form.addEventListener('focusin', (e) => {
        btn[0].classList.add('margin');
    });

    form.addEventListener('focusout', (e) => {
        btn[0].classList.remove('margin');
    });
    // form.addEventListener('focus', (e) => {
    //     btn[0].classList.toggle('margin');
    // });

