// Описан в документации
import throttle from "lodash.throttle";


const CONTACT_FORM_LOCAL_STORAGE_KEY = 'feedback-form-state';
const contactFormEl = document.querySelector('.feedback-form');
const formData = {};

const fillContactFormElements = form => {
    const formDataFromLocalStorage = JSON.parse(localStorage.getItem(CONTACT_FORM_LOCAL_STORAGE_KEY));
    const formElements = form.elements;

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

    localStorage.setItem(CONTACT_FORM_LOCAL_STORAGE_KEY, JSON.stringify(formData));
};

const onContactFormSubmit = event => {
    event.preventDefault();

    // throttle((event) => {
    //     localStorage.removeItem(CONTACT_FORM_LOCAL_STORAGE_KEY);
    //     event.currentTarget.reset();
    // }, 500)

    localStorage.removeItem(CONTACT_FORM_LOCAL_STORAGE_KEY);
    event.currentTarget.reset();

};

contactFormEl.addEventListener('change', onContactFormElChange);
contactFormEl.addEventListener('submit', onContactFormSubmit);
contactFormEl.addEventListener('input', throttle(onContactFormElChange, 1500));
// contactFormEl.addEventListener('input', throttle(onContactFormSubmit, 5000));

// contactFormEl.addEventListener(
//     "load",
//     _.throttle((event) => {
//         localStorage.removeItem(CONTACT_FORM_LOCAL_STORAGE_KEY);
//         event.currentTarget.reset();
//     }, 500)
// );

// player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });




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
