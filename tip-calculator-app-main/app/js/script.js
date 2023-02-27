const btn = document.querySelectorAll('.calc__btn');
const bill = document.querySelector('.bill');
const people = document.querySelector('.people');

const amount = document.querySelector('.sum__summary-amount');
const total = document.querySelector('.sum__summary-total');

const reset = document.querySelector('.sum__reset');

let tip = 0;

function updateTotal() {
    const billValue = parseInt(document.getElementById('bill').value);
    const peopleValue = parseInt(document.getElementById('people').value);

    let sum = 0;
    let amountTip = billValue;
    console.log('xd ' + tip);

    if(peopleValue > 0) {
        sum = (billValue / peopleValue);
        console.log('xd4 ' + tip + 'sadsad' + sum);
        amountTip *= tip /  peopleValue;
        console.log('xd2 ' + amountTip);
    }else {
        sum = 0;
        amountTip = 0;
    }
    
    total.innerText = `${sum.toFixed(2)}`;
    amount.innerText = `${amountTip.toFixed(2)}`;

}

    btn.forEach(button => {
        button.addEventListener('click', (e) => {
           tip = (parseInt(button.value))/100;
        });
    });

people.addEventListener('change', (e) => {

    updateTotal();

})

reset.addEventListener('click', e => {
    location.reload()
})