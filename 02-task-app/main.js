/* SELECT ITEMS */
/* ==================================================================================================== */

const taskBtn = get('.task-btn');
const closeBtn = get('.close-btn');
const formCloseBtn = get('.form-close-btn');
const formAddBtn = get('.form-add-btn');
const clearBtn = get('.clear-btn');
const modal = get('.modal');
const form = get('.form');
const title = get('#title');
const date = get('#date');
const description = get('#description');
const taskList = get('.task-list');
const container = get('.tasks');
const formAlert = get('.alert');

/* EDIT VARIABLES */
/* ==================================================================================================== */

let editFlag = false;
let editID;
let editTitle;
let editDate;
let editDescription;
let maxTitleLength = 30;
let maxDescriptionLength = 100;

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
    const value = { title: title.value, date: date.value, description: description.value };
    const id = new Date().getTime().toString();
    if (value.title && value.date && value.description && !editFlag) {
        createTask(id, value);
        modal.classList.remove('open-modal');
        container.classList.add('show-container');
        setBackToDefault();
        addToLocalStorage(id, value);
    } else if (value.title && value.date && value.description && editFlag) {
        editTitle.textContent = title.value;
        editDate.textContent = date.value;
        editDescription.textContent = description.value;
        modal.classList.remove('open-modal');
        editLocalStorage(editID, value);
        setBackToDefault();
    } else {
        formAlert.classList.add('show-alert');
        setTimeout(function () {
            formAlert.classList.remove('show-alert');
        }, 2000);
    }
}

function editItem(e) {
    editFlag = true;
    editID = e.currentTarget.parentElement.parentElement.dataset.id;
    editTitle = e.currentTarget.parentElement.parentElement.firstElementChild;
    editDate = e.currentTarget.parentElement.parentElement.firstElementChild.nextElementSibling;
    editDescription = e.currentTarget.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling;
    title.value = editTitle.textContent;
    date.value = editDate.textContent;
    description.value = editDescription.textContent;
    formAddBtn.textContent = 'edit';
    modal.classList.add('open-modal');
}

function deleteItem(e) {
    removeFromLocalStorage(e.currentTarget.parentElement.parentElement.dataset.id);
    e.currentTarget.parentElement.parentElement.remove();
    if (taskList.children.length < 1) {
        localStorage.removeItem('task');
        container.classList.remove('show-container');
    }
}

function clearItems() {
    taskList.innerHTML = '';
    container.classList.remove('show-container');
    localStorage.removeItem('task');
    setBackToDefault();
}

function setBackToDefault() {
    title.value = '';
    date.value = '';
    description.value = '';
    editFlag = false;
    formAddBtn.textContent = 'Add';
}

function getLocalStorage() {
    return localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : [];
}

function addToLocalStorage(id, value) {
    const task = { id, value };
    let tasks = getLocalStorage();
    tasks.push(task);
    localStorage.setItem('task', JSON.stringify(tasks));
}

function editLocalStorage(id, value) {
    let items = getLocalStorage();
    items = items.map(function (item) {
        if (item.id === id) {
            item.value = value;
        }
        return item;
    });
    localStorage.setItem('task', JSON.stringify(items));
}

function removeFromLocalStorage(id) {
    let items = getLocalStorage();
    items = items.filter(function (item) {
        if (id !== item.id) {
            return item;
        }
    });
    localStorage.setItem('task', JSON.stringify(items));
}

function loadFromLocalStorage() {
    let items = getLocalStorage();
    items = items.map(function (item) {
        createTask(item.id, item.value);
    });
    if (items.length > 0) {
        container.classList.add('show-container');
    }
}

function createTask(id, value) {
    let element = document.createElement('article');
    element.classList.add('task');
    element.setAttribute('data-id', id);
    element.innerHTML = `<h5 class="task-title"></h5>
                             <p class="task-date"></p>
                             <p class="task-description"></p>
                             <div class="btn-container">
                                <button type="button" class="edit-btn">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="delete-btn">
                                    <i class="fas fa-trash"></i>
                                </button>
                             </div>`;
    const taskTitle = element.querySelector('.task-title');
    const taskDate = element.querySelector('.task-date');
    const taskDescription = element.querySelector('.task-description');
    taskTitle.textContent = value.title;
    taskDate.textContent = value.date;
    taskDescription.textContent = value.description;
    taskList.append(element);
    const editBtn = element.querySelector('.edit-btn');
    const deleteBtn = element.querySelector('.delete-btn');
    editBtn.addEventListener('click', editItem);
    deleteBtn.addEventListener('click', deleteItem);
}

/* EVENT LISTENERS */
/* ==================================================================================================== */

taskBtn.addEventListener('click', () => modal.classList.add('open-modal'));
clearBtn.addEventListener('click', clearItems);
closeBtn.addEventListener('click', () => {
    setBackToDefault();
    modal.classList.remove('open-modal');
});
formCloseBtn.addEventListener('click', () => {
    setBackToDefault();
    modal.classList.remove('open-modal');
});
title.addEventListener('input', function () {
    if (title.value.length > maxTitleLength) {
        title.value = title.value.substring(0, maxTitleLength);
    }
});
description.addEventListener('input', function () {
    if (description.value.length > maxDescriptionLength) {
        description.value = description.value.substring(0, maxDescriptionLength);
    }
});
form.addEventListener('submit', submitForm);
window.addEventListener('DOMContentLoaded', loadFromLocalStorage);

/* END */
/* ==================================================================================================== */
