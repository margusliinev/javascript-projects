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
        element.innerHTML = `<p class="title"></p>
                             <div class="btn-container">
                                <button type="button" class="edit-btn">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="delete-btn">
                                    <i class="fas fa-trash"></i>
                                </button>
                             </div>`;
        element.setAttribute('data-id', id);
        const title = element.querySelector('.title');
        title.textContent = value;
        const editBtn = element.querySelector('.edit-btn');
        const deleteBtn = element.querySelector('.delete-btn');
        editBtn.addEventListener('click', editItem);
        deleteBtn.addEventListener('click', deleteItem);
        list.append(element);
        container.classList.add('show-container');
        displayAlert('item added to the list', 'success');
        addToLocalStorage(id, value);
        setBackToDefault();
    } else if (value && editFlag) {
        editElement.textContent = grocery.value;
        displayAlert('item has been updated', 'success');
        editLocalStorage(editID, value);
        setBackToDefault();
    } else {
        displayAlert('please enter value', 'danger');
    }
}

function editItem(e) {
    editElement = e.currentTarget.parentElement.previousElementSibling;
    grocery.value = editElement.textContent;
    editFlag = true;
    editID = e.currentTarget.parentElement.parentElement.dataset.id;
    submitBtn.textContent = 'edit';
}

function deleteItem(e) {
    const id = e.currentTarget.parentElement.parentElement.dataset.id;
    e.currentTarget.parentElement.parentElement.remove();
    displayAlert('Item removed from the list', 'danger');
    setBackToDefault();
    if (list.children.length === 0) {
        container.classList.remove('show-container');
    }
    removeFromLocalStorage(id);
}

function clearItems() {
    const items = document.querySelectorAll('.grocery-item');
    items.forEach(function (item) {
        item.remove();
    });
    displayAlert('items removed', 'danger');
    container.classList.remove('show-container');
    setBackToDefault();
    localStorage.removeItem('list');
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

function getLocalStorage() {
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}

function addToLocalStorage(id, value) {
    const grocery = { id, value };
    let items = getLocalStorage();
    items.push(grocery);
    localStorage.setItem('list', JSON.stringify(items));
}

function removeFromLocalStorage(id) {
    let items = getLocalStorage();
    items = items.filter(function (item) {
        if (item.id !== id) {
            return item;
        }
    });
    localStorage.setItem('list', JSON.stringify(items));
}

function editLocalStorage(id, value) {
    let items = getLocalStorage();
    items = items.map(function (item) {
        if (item.id === id) {
            item.value = value;
        }
        return item;
    });
    localStorage.setItem('list', JSON.stringify(items));
}

/* EVENT LISTENERS */
/* ==================================================================================================== */

form.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearItems);

/* END */
/* ==================================================================================================== */
