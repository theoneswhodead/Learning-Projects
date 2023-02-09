const btn = document.querySelectorAll('.calc__btn');
const bill = document.querySelector('.bill');
const people = document.querySelector('.people');

const amount = document.querySelector('.sum__summary-amount');
const total = document.querySelector('.sum__summary-total');

const reset = document.querySelector('.sum__reset');

 let sum = 0;


// bill.addEventListener('keydown', e => {

// })


sum = parseFloat(bill.value) / parseFloat(people.value);
reset.addEventListener('click', () => {
    total.innerText = `${sum}`;
})
console.log(sum);