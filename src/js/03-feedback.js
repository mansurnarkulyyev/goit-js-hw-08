// Описан в документации
import throttle from "lodash.throttle";


const CONTACT_FORM_LOCAL_STORAGE_KEY = 'feedback-form-state';
const contactFormEl = document.querySelector('.feedback-form');
// const contactFormInput = document.querySelector('.feedback-form input');
const contactFormTextarea = document.querySelector('.feedback-form textarea');
const formData = {};


const fillContactFormElements = form => {
    const formDataFromLocalStorage = JSON.parse(localStorage.getItem(CONTACT_FORM_LOCAL_STORAGE_KEY));
    const formElements = form.elements;
    // console.log(formElements);
    // console.log(formElements['email'].value);
    for (const key in formDataFromLocalStorage) {
        if (formDataFromLocalStorage.hasOwnProperty(key)) {
            formElements[key].value = formDataFromLocalStorage[key];
        }
    }

};


fillContactFormElements(contactFormEl);

const onContactFormElChange = event => {
    const { target } = event;

    const contactFormElValue = target.value;
    const contactFormElName = target.name;

    formData[contactFormElName] = contactFormElValue;

    // console.log(JSON.stringify(formData));

    localStorage.setItem(CONTACT_FORM_LOCAL_STORAGE_KEY, JSON.stringify(formData));

};

const onContactFormSubmit = event => {
    event.preventDefault();

    // const contactFormElValue = target.value;
    // const contactFormElName = target.name;
    // const contactFormElValue = currentTarget.value;
    // const contactFormElName = currentTarget.name;

    // formData[contactFormElName] = contactFormElValue;
    // console.log(formData);

    const formData = { email: contactFormEl.email.value, message: contactFormEl.message.value }
    console.log(formData)

    localStorage.removeItem(CONTACT_FORM_LOCAL_STORAGE_KEY);
    event.currentTarget.reset();
    // console.log(JSON.stringify(formData));

};

contactFormTextarea.addEventListener('change', throttle(onContactFormElChange, 500));
contactFormEl.addEventListener('submit', onContactFormSubmit);
contactFormEl.addEventListener('input', throttle(onContactFormElChange, 500));




// contactFormEl.addEventListener('input', throttle(onContactFormSubmit, 5000));


// *****
// const form = document.querySelector(".feedback-form");
// // const output = document.querySelector("#output");
// const LOCALSTORAGE_KEY = "feedback-form-state";

// // updateOutput();
// form.addEventListener("submit", saveMessage);

// function saveMessage(evt) {
//     evt.preventDefault();
//     localStorage.setItem(LOCALSTORAGE_KEY, form.elements.message.value);
//     updateOutput();
//     form.reset();
// }
// ****
