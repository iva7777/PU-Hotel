let translator = {
    "name": "Вашето име",
    "surname": "Вашата фамилия",
    "age": "Вашите години",
    "email": "Вашия имейл",
    "password": "парола",
    "check-in": "дата на настаняване",
    "check-out": "дата на отпътуване",
    "guests": "брой гости",
    "names": "Вашите имена",
    "message": "Вашето съобщение"
}

let allValidated = true;

let form = document.querySelector("#form");
(!!form) ? form.addEventListener("submit", (event) => {
    event.preventDefault();
    allValidated = true;
    validateReservationForm();
    if (allValidated) {
        if (document.getElementById("card").checked) {
            document.getElementById("credit-card-payment").style.display = "block";
        }
    }
}) : console.log("f");

let paymentForm = document.querySelector("#payment-form");
(!!paymentForm) ? paymentForm.addEventListener("submit", (event) => {
    event.preventDefault();
}) : console.log("f2");

let contactForm = document.querySelector("#contact-form");
(!!contactForm) ? contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    validateContactForm();
}) : console.log("f3");

validateReservationForm = () => {
    validateRequiredFields();
    validateAge();
    validateEmail();
    validatePassword();
    validateDates();
}

validateContactForm = () => {
    validateRequiredField("names");
    validateRequiredField("email");
    validateRequiredField("message");
}

validateRequiredField = (fieldName) => {
    let field = document.getElementById(fieldName).value;
    
    let namesError = document.querySelector("#names-error");
    let emailError = document.querySelector("#email-error");
    let messageError = document.querySelector("#message-error");

    if (field === "") {
        allValidated = false;
        if (!!document.getElementById(`${fieldName}-message`)) {
            return;
        }

        let errorMessage = document.createElement("span");
        errorMessage.classList.add("error-message");
        errorMessage.id = `${fieldName}-message`;
        errorMessage.innerHTML = `Моля, попълнете ${translator[fieldName]}.`;

        if (!!namesError && !!emailError && !!messageError) {
            document.getElementById(`${fieldName}-error`).appendChild(errorMessage);
        }
        else {
            document.getElementById(`${fieldName}-field`).appendChild(errorMessage);
        }

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
    }
    else {
        if (!document.getElementById(`${fieldName}-message`)) {
            return;
        }

        let field = document.getElementById(`${fieldName}-field`);
        if (!!namesError && !!emailError && !!messageError) {
            field = document.getElementById(`${fieldName}-error`);
        }
        
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
        allValidated = false;
        return;
    }

    if (age < 18) {
        allValidated = false;
        if (!!document.getElementById("underage-message")) {
            return;
        }

        let underageMessage = document.createElement("span");
        underageMessage.classList.add("error-message");
        underageMessage.id = "underage-message";
        underageMessage.innerHTML = "Трябва да сте пълнолетен, за да можете да правите резервации.";
        document.getElementById("age-field").appendChild(underageMessage);
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
        allValidated = false;
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        allValidated = false;
        if (!!document.getElementById("valid-email-message")) {
            return;
        }

        let emailMessage = document.createElement("span");
        emailMessage.classList.add("error-message");
        emailMessage.id = "valid-email-message";
        emailMessage.innerHTML = "Моля, попълнете валиден имейл.";
        document.getElementById("email-field").appendChild(emailMessage);
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
        allValidated = false;
        return;
    }
    
    if (!regex.test(password)) {
        allValidated = false;
        if (!!document.getElementById("valid-pass-message")) {
            return;
        }
    
        let passwordMessage = document.createElement("span");
        passwordMessage.classList.add("error-message");
        passwordMessage.id = "valid-pass-message";
        passwordMessage.innerHTML = "Паролата трябва да е дълга поне 8 символа, да има поне една главна/малка буква, да има поне едно число и един символ.";
        document.getElementById("password-field").appendChild(passwordMessage);
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
        allValidated = false;
        return;
    }

    if (new Date(checkInDate) >= new Date(checkOutDate)) {
        allValidated = false;
        if (!!document.getElementById("date-diff-message")) {
            return;
        }

        let passwordMessage = document.createElement("span");
        passwordMessage.classList.add("error-message");
        passwordMessage.id = "date-diff-message";
        passwordMessage.innerHTML = "Датата на настаняване трябва да е преди датата на отпътуване.";
        document.getElementById("dates-field").appendChild(passwordMessage);
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
let cardNumberInput = document.querySelector('.card-number-input');
(!!cardNumberInput) ? cardNumberInput.oninput = () => {
    document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
} : console.log("f4");

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