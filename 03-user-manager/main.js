/* SELECT ITEMS */
/* ==================================================================================================== */

const addUserBtn = get('.adduser-btn');
const closeBtn = get('.close-btn');
const formCloseBtn = get('.form-close-btn');
const modal = get('.modal');
const form = get('.form');
const usernameInput = get('#username');
const passwordInput = get('#password');
const confirmPasswordInput = get('#confirm-password');
const emailInput = get('#email');
const list = get('.users-list');
const formAlert = get('.alert');

/* EDIT VARIABLES */
/* ==================================================================================================== */

let counter = 0;
usernameInput.maxLength = 30;
passwordInput.maxLength = 30;
confirmPasswordInput.maxLength = 30;
emailInput.maxLength = 50;

/* FUNCTIONS */
/* ==================================================================================================== */

function get(selection) {
    const element = document.querySelector(selection);
    if (element) {
        return element;
    } else {
        throw new Error(`Please check "${selection}" selector, no such element found`);
    }
}

function submitForm(e) {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const email = emailInput.value;
    if (validateForm(username, password, confirmPassword, email)) {
        counter++;
        const element = document.createElement('article');
        element.classList.add('user');
        element.innerHTML = `<div class="column-container">
                            <p class="number">${counter}</p>
                         </div>
                         <div class="column-container">
                            <p class="username">${username}</p>
                         </div>
                         <div class="column-container">
                            <p class="password">${password}</p>
                         </div>
                         <div class="column-container">
                            <p class="email">${email}</p>
                         </div>
                         <div class="column-container">
                            <button type="button" class="edit-btn">
                                <i class="fas fa-edit"></i>
                            </button>
                         </div>
                         <div class="column-container">
                            <button type="button" class="delete-btn">
                                <i class="fas fa-trash"></i>
                            </button>
                         </div>
                        `;
        list.append(element);
        modal.classList.remove('open-modal');
        setBackToDefault();
    } else {
        return;
    }
}

function validateForm(username, password, confirmPassword, email) {
    if (username && password && confirmPassword && email) {
        if (password === confirmPassword) {
            const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/;
            if (password.match(passwordRegex)) {
                return true;
            } else {
                formAlert.textContent = 'Password must have at least 8 characters, 1 number and letter.';
                formAlert.classList.add('show-alert');
                setTimeout(function () {
                    formAlert.textContent = 'Please fill out all the fields!';
                    formAlert.classList.remove('show-alert');
                }, 2000);
                return false;
            }
        } else {
            formAlert.textContent = 'Passwords do not match!';
            formAlert.classList.add('show-alert');
            setTimeout(function () {
                formAlert.textContent = 'Please fill out all the fields!';
                formAlert.classList.remove('show-alert');
            }, 2000);
            return false;
        }
    } else {
        formAlert.textContent = 'Please fill out all fields!';
        formAlert.classList.add('show-alert');
        setTimeout(function () {
            formAlert.classList.remove('show-alert');
        }, 2000);
        return false;
    }
}

function setBackToDefault() {
    usernameInput.value = '';
    passwordInput.value = '';
    confirmPasswordInput.value = '';
    emailInput.value = '';
}

/* EVENT LISTENERS */
/* ==================================================================================================== */

addUserBtn.addEventListener('click', () => modal.classList.add('open-modal'));
closeBtn.addEventListener('click', () => modal.classList.remove('open-modal'));
formCloseBtn.addEventListener('click', () => modal.classList.remove('open-modal'));
form.addEventListener('submit', submitForm);

/* END */
/* ==================================================================================================== */
