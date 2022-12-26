let translator = {
    "name": "Вашето име",
    "surname": "Вашата фамилия",
    "age": "Вашите години",
    "email": "Вашия имейл",
    "password": "парола",
    "check-in": "дата на настаняване",
    "check-out": "дата на отпътуване",
    "guests": "брой гости"
}

let allValidated = true;

document.querySelector("#form").addEventListener("submit", (event) => {
    event.preventDefault();
    allValidated = true;
    validateReservationForm();
    if (allValidated) {
        if (document.getElementById("card").checked) {
            document.getElementById("credit-card-payment").style.display = "block";
        }
    }
});

document.querySelector("#payment-form").addEventListener("submit", (event) => {
    event.preventDefault();
});

validateReservationForm = () => {
    validateRequiredFields();
    validateAge();
    validateEmail();
    validatePassword();
    validateDates();
}

validateRequiredField = (fieldName) => {
    let field = document.getElementById(fieldName).value;

    if (field === "") {
        if (!!document.getElementById(`${fieldName}-message`)) {
            return;
        }

        let errorMessage = document.createElement("span");
        errorMessage.classList.add("error-message");
        errorMessage.id = `${fieldName}-message`;
        errorMessage.innerHTML = `Моля, попълнете ${translator[fieldName]}.`;
        document.getElementById(`${fieldName}-field`).appendChild(errorMessage);

        if (!!document.getElementById("underage-message")) {
            let field = document.getElementById("age-field");
            let message = document.getElementById("underage-message");
            field.removeChild(message);
        }

        if (!!document.getElementById("valid-email-message")) {
            let field = document.getElementById("email-field");
            let message = document.getElementById("valid-email-message");
            field.removeChild(message);
        }

        if (!!document.getElementById("valid-pass-message")) {
            let field = document.getElementById("password-field");
            let message = document.getElementById("valid-pass-message");
            field.removeChild(message);
        }

        if (!!document.getElementById("date-diff-message")) {
            let field = document.getElementById("dates-field");
            let message = document.getElementById("date-diff-message");
            field.removeChild(message);
        }

        allValidated = false;

    }
    else {
        if (!document.getElementById(`${fieldName}-message`)) {
            return;
        }

        let field = document.getElementById(`${fieldName}-field`);
        let message = document.getElementById(`${fieldName}-message`);
        field.removeChild(message);
    }
}

validateRequiredFields = () => {

    validateRequiredField("name");
    validateRequiredField("surname");
    validateRequiredField("age")
    validateRequiredField("email");
    validateRequiredField("password");
    validateRequiredField("check-in");
    validateRequiredField("check-out");
    validateRequiredField("guests");
}

validateAge = () => {
    let age = document.getElementById("age").value;

    if (age === "") {
        return;
    }

    if (age < 18) {
        if (!!document.getElementById("underage-message")) {
            return;
        }

        let underageMessage = document.createElement("span");
        underageMessage.classList.add("error-message");
        underageMessage.id = "underage-message";
        underageMessage.innerHTML = "Трябва да сте пълнолетен, за да можете да правите резервации.";
        document.getElementById("age-field").appendChild(underageMessage);

        allValidated = false;
    }
    else {
        if (!document.getElementById("underage-message")) {
            return;
        }

        let field = document.getElementById("age-field");
        let message = document.getElementById("underage-message");
        field.removeChild(message);
    }
}

validateEmail = () => {
let email = document.getElementById("email").value;

    if (email === "") {
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        if (!!document.getElementById("valid-email-message")) {
            return;
        }

        let emailMessage = document.createElement("span");
        emailMessage.classList.add("error-message");
        emailMessage.id = "valid-email-message";
        emailMessage.innerHTML = "Моля, попълнете валиден имейл.";
        document.getElementById("email-field").appendChild(emailMessage);

        allValidated = false;
    }
    else {
        if (!document.getElementById("valid-email-message")) {
            return;
        }

        let field = document.getElementById("email-field");
        let message = document.getElementById("valid-email-message");
        field.removeChild(message);
    }
}

validatePassword = () => {
    let password = document.getElementById("password").value;
    const regex = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
        
    if (password === "") {
        return;
    }
    
    if (!regex.test(password)) {
        if (!!document.getElementById("valid-pass-message")) {
            return;
        }
    
        let passwordMessage = document.createElement("span");
        passwordMessage.classList.add("error-message");
        passwordMessage.id = "valid-pass-message";
        passwordMessage.innerHTML = "Паролата трябва да е дълга поне 8 символа, да има поне една главна/малка буква, да има поне едно число и един символ.";
        document.getElementById("password-field").appendChild(passwordMessage);

        allValidated = false;
    }
    else {
        if (!document.getElementById("valid-pass-message")) {
            return;
        }
    
        let field = document.getElementById("password-field");
        let message = document.getElementById("valid-pass-message");
        field.removeChild(message);
    }
}

validateDates = () => {
    let checkInDate = document.getElementById("check-in").value;
    let checkOutDate = document.getElementById("check-out").value;

    if (checkInDate === "" || checkOutDate === "") {
        return;
    }

    if (new Date(checkInDate) >= new Date(checkOutDate)) {
        if (!!document.getElementById("date-diff-message")) {
            return;
        }

        let passwordMessage = document.createElement("span");
        passwordMessage.classList.add("error-message");
        passwordMessage.id = "date-diff-message";
        passwordMessage.innerHTML = "Датата на настаняване трябва да е преди датата на отпътуване.";
        document.getElementById("dates-field").appendChild(passwordMessage);

        allValidated = false;
    }
    else {
        if (!document.getElementById("date-diff-message")) {
            return;
        }

        let field = document.getElementById("dates-field");
        let message = document.getElementById("date-diff-message");
        field.removeChild(message);
    }
}

//credit card payment form
document.querySelector('.card-number-input').oninput = () =>{
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
}

document.querySelector('.card-holder-input').oninput = () =>{
    document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
}

document.querySelector('.month-input').oninput = () =>{
    document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
}

document.querySelector('.year-input').oninput = () =>{
    document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
}

document.querySelector('.cvv-input').onmouseenter = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
}

document.querySelector('.cvv-input').onmouseleave = () =>{
    document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
    document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
}

document.querySelector('.cvv-input').oninput = () =>{
    document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
}

//close button
function show_pop() {
    document.getElementsByClassName('credit-card-payment').style.display = 'block';
}
window.onload = show_pop;
$('.close').click(function() {
    $('.credit-card-payment').hide();
});