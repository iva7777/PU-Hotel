let translator = {
    "email": "Вашия имейл",
    "names": "Вашите имена",
    "message": "Вашето съобщение"
}


let contactForm = document.querySelector("#contact-form");
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    allValidated = true;
    validateContactForm();

    allValidated ? sendContactEmail() : console.log("not validated :D");
});

validateContactForm = () => {
    validateRequiredField("names");
    validateRequiredField("email");
    validateRequiredField("message");
}

validateRequiredField = (fieldName) => {
    let field = document.getElementById(fieldName).value;

    if (field === "") {
        allValidated = false;
        if (!!document.getElementById(`${fieldName}-message`)) {
            return;
        }

        let errorMessage = document.createElement("span");
        errorMessage.classList.add("error-message");
        errorMessage.id = `${fieldName}-message`;
        errorMessage.innerHTML = `Моля, попълнете ${translator[fieldName]}.`;
        document.getElementById(`${fieldName}-error`).appendChild(errorMessage);
        
    }
    else {
        if (!document.getElementById(`${fieldName}-message`)) {
            return;
        }
        field = document.getElementById(`${fieldName}-error`);
        let message = document.getElementById(`${fieldName}-message`);
        field.removeChild(message);
    }
}