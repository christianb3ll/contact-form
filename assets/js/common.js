const form = document.querySelector('form');
const submitBtn = document.getElementById('submit-btn');
const successNotification = document.getElementById('success-notification');

const firstNameError = document.getElementById('first-name-error');
const lastNameError = document.getElementById('last-name-error');
const emailAddressError = document.getElementById('email-address-error');
const enquiryTypeError = document.getElementById('enquiry-type-error');
const messageError = document.getElementById('message-error');
const consentError = document.getElementById('consent-error');

form.addEventListener('submit', (event) =>{

    const contactForm = event.target;

    if(ValidateForm(contactForm)){

        console.log('success');
        form.reset();
        HideErrors();
        successNotification.classList.toggle('hidden');
    }
    
    event.preventDefault();
})

function ValidateForm(form){

    const firstName = form['first-name'].value;
    const lastName = form['last-name'].value;
    const emailAddress = form['email-address'].value;
    const enquiryType = form['enquiry-type'].value;
    const message = form['message'].value;
    const consent = form['consent'].value;

    // if required fields are empty the form is invalid
    if (!firstName || !lastName || !emailAddress || !enquiryType || !message || !consent) {
        firstName ? firstNameError.classList.add('hidden') : firstNameError.classList.remove('hidden');
        lastName ? lastNameError.classList.add('hidden') : lastNameError.classList.remove('hidden');
        if(!emailAddress){
            emailAddressError.innerHTML = 'This field is required';
            emailAddressError.classList.remove('hidden');
        } else emailAddressError.classList.add('hidden');

        enquiryType ? enquiryTypeError.classList.add('hidden') : enquiryTypeError.classList.remove('hidden');
        message ? messageError.classList.add('hidden') : messageError.classList.remove('hidden');
        consent.value ? consentError.classList.add('hidden') : consentError.classList.remove('hidden');
        
        return false;
    }
    
    if (!CheckValidEmail(emailAddress)) {
        emailAddressError.innerHTML = 'Please enter a valid email address';
        emailAddressError.classList.remove('hidden');
        return false;
    }

    // form is valid
    return true;
}

// checks for valid email address format and returns true/false
function CheckValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    return emailRegex.test(email);
}

function HideErrors(){
    firstNameError.classList.add('hidden');
    lastNameError.classList.add('hidden');
    emailAddressError.classList.add('hidden');
    enquiryTypeError.classList.add('hidden');
    messageError.classList.add('hidden');
    consentError.classList.add('hidden');
}