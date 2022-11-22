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

/* FUNCTIONS */
/* ==================================================================================================== */

function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    if (value && !editFlag) {
        const element = document.createElement('article');
        element.classList.add('grocery-item');
        element.innerHTML = `<p class="title">${value}</p>
                            <div class="btn-container">
                                <button type="button" class="edit-btn">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="delete-btn">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>`;
        const deleteBtn = element.querySelector('.delete-btn');
        const editBtn = element.querySelector('.edit-btn');
        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem);
        list.append(element);
        displayAlert('item added to the list', 'success');
        container.classList.add('show-container');
        setBackToDefault();
    } else if (value && editFlag) {
        editElement.innerHTML = value;
        displayAlert('value changed', 'success');
        setBackToDefault();
    } else {
        displayAlert('Please enter value', 'danger');
    }
}

function deleteItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    element.remove();
    if (list.children.length === 0) {
        container.classList.remove('show-container');
    }
    displayAlert('item removed', 'danger');
    setBackToDefault();
}

function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    grocery.value = editElement.innerHTML;
    editFlag = true;
    submitBtn.textContent = 'edit';
}

function clearItems() {
    const items = document.querySelectorAll('.grocery-item');
    if (items.length > 0) {
        items.forEach(function (item) {
            item.remove();
        });
    }
    container.classList.remove('show-container');
    displayAlert('empty list', 'danger');
    setBackToDefault();
}

function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    setTimeout(function () {
        alert.classList.remove(`alert-${action}`);
    }, 1000);
}

function setBackToDefault() {
    grocery.value = '';
    editFlag = false;
    submitBtn.textContent = 'submit';
}

/* EVENT LISTENERS */
/* ==================================================================================================== */

form.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearItems);

/* END */
/* ==================================================================================================== */
