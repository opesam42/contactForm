firstName = document.getElementById("first-name"),
lastName = document.getElementById("last-name"),
userEmail = document.getElementById("user-email"),
userMessage = message = document.getElementById("message")

generalEnquiry = document.getElementById('general-enquiry');
supportRequest = document.getElementById('support-request');

consentField = document.getElementById('confirm-box');

const inputs = [firstName, lastName, userMessage];
submit = document.getElementById("submit-btn")

function showError(inputElement, message){
    const errorMessage = document.createElement("div");
    errorMessage.className = "error";
    errorMessage.textContent = message
    inputElement.parentElement.append(errorMessage);
    inputElement.style.borderColor = 'red';
}

submit.addEventListener('click', (event)=>{
    document.querySelectorAll('.error').forEach(error => error.remove());
    let hasError = false;

    inputs.forEach(input => {
        if(input.value.trim() === ""){
            hasError = true;
            showError(input, "This field is required");
        }
    });

    if(userEmail.value.trim() === ""){
        hasError = true;
        showError(userEmail, "This field is required");
    } else{
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if(!userEmail.value.match(validRegex)){
            hasError = true;
            showError(userEmail, "Please enter a valid email address");
        }
    }

    if(!generalEnquiry.checked && !supportRequest.checked){
        hasError = true;
        showError(document.getElementsByClassName('wrapper')[0], "Please select a query type")
    }
    if(!consentField.checked){
        hasError = true;
        showError(consentField.parentElement, "To submit this form, please consent to being contacted")
    }
    if (hasError){
        event.preventDefault();
    }
});

/* queryRadio = [generalEnquiry, supportRequest]
queryRadio.forEach(query=>query.addEventListener('change', function(){
    if(query.checked){
        query.parentElement.style.backgroundColor = "hsl(148, 38%, 91%)";
    } else{
        query.parentElement.style.backgroundColor = "white";
    }
})) */
// const allInputs = [firstName, lastName, userEmail, message]
// allInputs.forEach(input => input.addEventListener('focus', function(){
//     this.style.borderColor = "yellow";
// }));

// allInputs.forEach(input => input.addEventListener('blur', function(){
//     this.style.borderColor = "inherit";
// }))
