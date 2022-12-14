/* SELECT ITEMS */
/* ==================================================================================================== */

const addUserBtn = get('.adduser-btn');
const closeBtn = get('.close-btn');
const formCloseBtn = get('.form-close-btn');
const formAddBtn = get('.form-add-btn');
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
let editFlag = false;
let editUsername;
let editPassword;
let editConfirmPassword;
let editEmail;
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
    if (validateForm(username, password, confirmPassword, email) && !editFlag) {
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
        const editBtn = element.querySelector('.edit-btn');
        const deleteBtn = element.querySelector('.delete-btn');
        editBtn.addEventListener('click', editItem);
        deleteBtn.addEventListener('click', deleteItem);
        list.append(element);
        modal.classList.remove('open-modal');
        setBackToDefault();
    } else if (validateForm(username, password, confirmPassword, email) && editFlag) {
        editUsername.textContent = usernameInput.value;
        editPassword.textContent = passwordInput.value;
        editConfirmPassword.textContent = confirmPasswordInput.value;
        editEmail.textContent = emailInput.value;
        modal.classList.remove('open-modal');
        setBackToDefault();
    } else {
        return;
    }
}

function validateForm(username, password, confirmPassword, email) {
    if (username && password && confirmPassword && email) {
        if (username.length >= 3) {
            if (password === confirmPassword) {
                const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/;
                if (password.match(passwordRegex)) {
                    return true;
                } else {
                    displayAlert('Password must have at least 8 characters, 1 number and letter.');
                }
            } else {
                displayAlert('Passwords do not match!');
            }
        } else {
            displayAlert('Username must be at least 3 characters long!');
        }
    } else {
        displayAlert('Please fill out all fields!');
    }
}

function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    element.remove();
    counter--;
    const users = [...list.querySelectorAll('.user')];
    users.forEach(function (user, index) {
        const number = user.querySelector('.number');
        number.textContent = index + 1;
    });
}

function editItem(e) {
    editFlag = true;
    editUsername = e.currentTarget.parentElement.parentElement.querySelector('.username');
    editPassword = e.currentTarget.parentElement.parentElement.querySelector('.password');
    editConfirmPassword = e.currentTarget.parentElement.parentElement.querySelector('.password');
    editEmail = e.currentTarget.parentElement.parentElement.querySelector('.email');
    usernameInput.value = editUsername.textContent;
    passwordInput.value = editPassword.textContent;
    confirmPasswordInput.value = editPassword.textContent;
    emailInput.value = editEmail.textContent;
    modal.classList.add('open-modal');
    formAddBtn.textContent = 'Edit';
}

function displayAlert(message) {
    formAlert.textContent = message;
    formAlert.classList.add('show-alert');
    setTimeout(function () {
        formAlert.textContent = '';
        formAlert.classList.remove('show-alert');
    }, 2000);
    return false;
}

function setBackToDefault() {
    editFlag = false;
    formAddBtn.textContent = 'Add';
    usernameInput.value = '';
    passwordInput.value = '';
    confirmPasswordInput.value = '';
    emailInput.value = '';
}

/* EVENT LISTENERS */
/* ==================================================================================================== */

addUserBtn.addEventListener('click', () => modal.classList.add('open-modal'));
closeBtn.addEventListener('click', () => {
    setBackToDefault();
    modal.classList.remove('open-modal');
});
formCloseBtn.addEventListener('click', () => {
    setBackToDefault();
    modal.classList.remove('open-modal');
});
form.addEventListener('submit', submitForm);

/* END */
/* ==================================================================================================== */
