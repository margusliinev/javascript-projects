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
        const element = document.createElement('article');
        element.classList.add('grocery-item');
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `<p class="title">${value}</p>
                            <div class="btn-container">
                                <button type="button" class="edit-btn">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="delete-btn">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>`;
        list.appendChild(element);
        displayAlert('item added to the list', 'success');
        container.classList.add('show-container');
        // add to local storage
        addToLocalStorage(id, value);
        // set back to default
        setBackToDefault();
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

function addToLocalStorage(id, value) {
    console.log('added to local storage');
}

function setBackToDefault() {
    console.log('set back to default');
}

/* EVENT LISTENERS */
/* ==================================================================================================== */

form.addEventListener('submit', addItem);

/* END */
/* ==================================================================================================== */
