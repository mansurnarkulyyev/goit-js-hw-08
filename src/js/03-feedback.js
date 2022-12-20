// Описан в документации
import throttle from "lodash.throttle";

const CONTACT_FORM_LOCAL_STORAGE_KEY = 'feedback-form-state';
const contactFormEl = document.querySelector('.feedback-form');
const contactFormTextarea = document.querySelector('.feedback-form textarea');
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

    const formData = { email: contactFormEl.email.value, message: contactFormEl.message.value }
    console.log(formData)

    localStorage.removeItem(CONTACT_FORM_LOCAL_STORAGE_KEY);
    event.currentTarget.reset();
};

contactFormTextarea.addEventListener('change', throttle(onContactFormElChange, 500));
contactFormEl.addEventListener('submit', onContactFormSubmit);
contactFormEl.addEventListener('input', throttle(onContactFormElChange, 500));



