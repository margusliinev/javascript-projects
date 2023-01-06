import '../navigation.js';
import '../setupCart.js';
import { get, getStorageItem, setStorageItem } from '../utils.js';

let booking = getStorageItem('booking');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = get('form');
const dateField = get('.form-field-date');
const submitBtn = get('.submit-btn');
const bookingAlert = get('.booking-alert');

const emailInput = get('#email');
const peopleInput = get('#people');
const dateInput = get('#date');
const textInput = get('#text');

window.addEventListener('DOMContentLoaded', function () {
    const currentDate = new Date();

    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    const dateOption1 = get('.form-field-date .option1');
    dateOption1.setAttribute('value', `${months[currentMonth].toLowerCase()}${currentDay}`);
    dateOption1.textContent = `${months[currentMonth]} ${currentDay}th`;
    const dateOption2 = get('.form-field-date .option2');
    dateOption2.setAttribute('value', `${months[currentMonth].toLowerCase()}${currentDay + 1}`);
    dateOption2.textContent = `${months[currentMonth]} ${currentDay + 1}th`;
    const dateOption3 = get('.form-field-date .option3');
    dateOption3.setAttribute('value', `${months[currentMonth].toLowerCase()}${currentDay + 2}`);
    dateOption3.textContent = `${months[currentMonth]} ${currentDay + 2}th`;

    dateField.append(dateOption1, dateOption2, dateOption3);
    dateOption1.setAttribute('selected', true);
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = emailInput.value;
    const people = peopleInput.value;
    const date = dateInput.value;
    const text = textInput.value;
    let bookingData = { email, people, date, text };
    if (email && people && date && text) {
        bookingAlert.classList.add('success');
        submitBtn.disabled = true;
        setTimeout(() => {
            bookingAlert.classList.remove('success');
            submitBtn.disabled = false;
        }, 3000);
        bookingData = { ...bookingData };
        booking = [...booking, bookingData];
        setStorageItem('booking', booking);
        form.reset();
    } else {
        bookingAlert.textContent = 'Request failed, please make sure to fill out all fields!';
        bookingAlert.classList.add('alert');
        submitBtn.disabled = true;
        setTimeout(() => {
            bookingAlert.textContent = 'We have received your request, please check your email to confirm the request!';
            bookingAlert.classList.remove('alert');
            submitBtn.disabled = false;
        }, 3000);
    }
});
