const regex = new RegExp("^[0-9]+$");
let lastInput = document.querySelector('.card-number-input').value;

let cardNumberInput = document.querySelector('.card-number-input');
(!!cardNumberInput) ? cardNumberInput.oninput = () => {
    let input = document.querySelector('.card-number-input').value;
    let inputWithoutSpaces = input.replaceAll(" ", "");

    if (!regex.test(inputWithoutSpaces)) {
        document.querySelector('.card-number-input').value = lastInput;
        return;
    }

    if (inputWithoutSpaces.length % 4 == 0) {
        input += " ";
        document.querySelector('.card-number-input').value = input;
    }

    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
    lastInput = document.querySelector('.card-number-input').value;
} 
: console.log("the card number field does not exist :D");

let cardHolderInput = document.querySelector('.card-holder-input');
(!!cardHolderInput) ? cardHolderInput.oninput = () =>{
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
} : console.log("f5");

let monthInput = document.querySelector('.month-input');
(!!monthInput) ? monthInput.oninput = () =>{
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
} : console.log("f6");

let yearInput = document.querySelector('.year-input');
(!!yearInput) ? yearInput.oninput = () =>{
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
} : console.log("f7");

let cvvInput = document.querySelector('.cvv-input');
(!!cvvInput) ? cvvInput.onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
} : console.log("f8");


(!!cvvInput) ? cvvInput.onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
} : console.log("f9");

(!!cvvInput) ? cvvInput.oninput = () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
} : console.log("f10");

//close button
openForm = () => {
    document.getElementById("credit-card-payment").style.display = "block";
}

closeForm = () => {
    document.getElementById("credit-card-payment").style.display = "none";
}