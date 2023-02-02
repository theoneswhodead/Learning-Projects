const formName = document.querySelector('#name');
const formNumber = document.querySelector('#number');
const formMonth = document.querySelector('#month');
const formYear = document.querySelector('#year');
const formCvc = document.querySelector('#cvc');

let chars = ['0','1','2','3','4','5','6','7','8','9',];

formName.addEventListener('keydown', e => {
    const cardName = document.querySelector('.top__front-name');
    const placeholder = 'Jane Appleseed';
    let keypress = e.key
    console.log(`Keypress: ${keypress}`);
    //cardName.dataset.letters = e.key;
    if(keypress.length == 1 && cardName.dataset.letters.length < 30) {
        updateSign(keypress, cardName);
    } else if(keypress == 'Backspace') {
        deleteSign(cardName, placeholder);
    }

});

formNumber.addEventListener('keydown', e => {
    const cardNumber = document.querySelector('.top__front-number');
    const placeholder = '0000 0000 0000 0000';
    let keypress = e.key
    console.log(`Keypress: ${keypress}`);

    if(keypress.length == 1 && cardNumber.dataset.letters.length < 19
            && chars.includes(keypress)
        ) {
        if(cardNumber.dataset.letters.length > 0 && (cardNumber.dataset.letters.length +1) % 5 == 0){

            cardNumber.dataset.letters += ' ';
             updateSign(keypress, cardNumber);
        }else {
            updateSign(keypress, cardNumber);
        }
        
    } else if(keypress == 'Backspace') {
        deleteSign(cardNumber, placeholder);
    }

}); 

formMonth.addEventListener('keydown', e => {
    const cardDate= document.querySelector('.top__front-month');
    const placeholder = '00';
    let keypress = e.key


    if(keypress.length == 1 && cardDate.dataset.letters.length < 2
            &&( keypress == '0'
            || keypress == '1'
            || keypress == '2'
            || keypress == '3'
            || keypress == '4'
            || keypress == '5'
            || keypress == '6'
            || keypress == '7'
            || keypress == '8'
            || keypress == '9')
        
        ) {
        updateSign(keypress, cardDate);
        
    } else if(keypress == 'Backspace') {
        deleteSign(cardDate, placeholder);
    }

});
formYear.addEventListener('keydown', e => {
    const cardDate= document.querySelector('.top__front-year');
    const placeholder = '00';
    let keypress = e.key

    if(keypress.length == 1 && cardDate.dataset.letters.length < 2
            &&( keypress == '0'
            || keypress == '1'
            || keypress == '2'
            || keypress == '3'
            || keypress == '4'
            || keypress == '5'
            || keypress == '6'
            || keypress == '7'
            || keypress == '8'
            || keypress == '9')
        ) {
        updateSign(keypress, cardDate);
    } else if(keypress == 'Backspace') {
        deleteSign(cardDate, placeholder);
    }

});



formCvc.addEventListener('keydown', e => {
    const cardCvc= document.querySelector('.top__back-cvc');
    const placeholder = '000';
    let keypress = e.key

    if(keypress.length == 1 && cardCvc.dataset.letters.length < 3
            &&( keypress == '0'
            || keypress == '1'
            || keypress == '2'
            || keypress == '3'
            || keypress == '4'
            || keypress == '5'
            || keypress == '6'
            || keypress == '7'
            || keypress == '8'
            || keypress == '9')
        ) {
        updateSign(keypress, cardCvc);
        
    } else if(keypress == 'Backspace') {
        deleteSign(cardCvc, placeholder);
    }
});



const updateSign = (char, place) => {
    let oldCharacters = place.dataset.letters;
    let newCharacters = oldCharacters + char;

    place.dataset.letters = newCharacters;
    place.textContent = newCharacters;
};

const deleteSign = (place, placeholder) => {
    let oldCharacters = place.dataset.letters;
    let newCharacters = oldCharacters.slice(0, -1);
    place.dataset.letters = newCharacters;
    place.textContent = newCharacters;

    if(place.dataset.letters.length == 0){
        place.textContent = placeholder;
    }
    
};
