/* SELECT ITEMS */
/* ==================================================================================================== */

const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.querySelector('#grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

/* EDIT VARIABLES */
/* ==================================================================================================== */

let editElement;
let editFlag = false;
let editID = '';

/* FUNCTIONS */
/* ==================================================================================================== */

function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    if (value && !editFlag) {
    } else if (value && editFlag) {
    } else {
        displayAlert('Please enter value', 'danger');
    }
}

function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    setTimeout(function () {
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}

/* EVENT LISTENERS */
/* ==================================================================================================== */

form.addEventListener('submit', addItem);

/* END */
/* ==================================================================================================== */
