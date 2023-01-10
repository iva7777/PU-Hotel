let paymentForm = document.querySelector("#payment-form");
paymentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (areAllFieldsFilled()) {
        document.getElementById("card-message").style.display = "none";
        sendReservationEmail();
    }
    else {
        document.getElementById("card-message").style.display = "block";
    }
});

const regex = new RegExp("^[0-9]+$");
let lastInput = document.querySelector('.card-number-input').value;
let inputLength = lastInput.length;

let cardNumberInput = document.querySelector('.card-number-input');
cardNumberInput.oninput = () => {
    let input = document.querySelector('.card-number-input').value;
    let inputWithoutSpaces = input.replaceAll(" ", "");
    if (input.length > inputLength)
    {
        if (!regex.test(inputWithoutSpaces)) {
            document.querySelector('.card-number-input').value = lastInput;
            return;
        }

        if (inputWithoutSpaces.length % 4 == 0) {
            input += " ";
            document.querySelector('.card-number-input').value = input;
        }
    }
    let finalInput = document.querySelector('.card-number-input').value;
    document.querySelector('.card-number-box').innerText = finalInput
    inputLength = finalInput.length;
    lastInput = finalInput;
}

let cardHolderInput = document.querySelector('.card-holder-input');
cardHolderInput.oninput = () =>{
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

let monthInput = document.querySelector('.month-input');
monthInput.oninput = () =>{
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

let yearInput = document.querySelector('.year-input');
yearInput.oninput = () =>{
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

let cvvInput = document.querySelector('.cvv-input');
cvvInput.onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}


cvvInput.onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

cvvInput.oninput = () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}

let button = document.getElementById("submit-btn");

//close button
openForm = () => {
    document.getElementById("credit-card-payment").style.display = "block";
}

closeForm = () => {
    document.getElementById("credit-card-payment").style.display = "none";
    document.getElementById("payment-form").reset();
    document.querySelector('.card-number-box').innerText = "################";
    document.querySelector('.card-holder-name').innerText = "име";
    document.querySelector('.exp-month').innerText = "мм";
    document.querySelector('.exp-year').innerText = "гг";
    document.querySelector('.cvv-box').innerText = "";

}

areAllFieldsFilled = () => {
    let cardNumberInput = document.querySelector('.card-number-input').value;
    let cardHolderInput = document.querySelector('.card-holder-input').value;
    let monthInput = document.querySelector('.month-input').value;
    let yearInput = document.querySelector('.year-input').value;
    let cvvInput = document.querySelector('.cvv-input').value;

    if (cardNumberInput.length > 16 
        && cardHolderInput.length > 5 
        && monthInput.length > 0 
        && yearInput.length > 0 
        && cvvInput.length > 2) {
        return true;
    }
    return false;
}