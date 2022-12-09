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
let editTitle;
let editDate;
let editDescription;

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
    const titleValue = title.value;
    const dateValue = date.value;
    const descriptionValue = description.value;
    if (titleValue && dateValue && descriptionValue && !editFlag) {
        let element = document.createElement('article');
        element.classList.add('task');
        element.innerHTML = `<h5 class="task-title">${titleValue}</h5>
                             <p class="task-date">${dateValue}</p>
                             <p class="task-description">${descriptionValue}</p>
                             <div class="btn-container">
                                <button type="button" class="edit-btn">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="delete-btn">
                                    <i class="fas fa-trash"></i>
                                </button>
                             </div>`;
        taskList.append(element);
        container.classList.add('show-container');
        modal.classList.remove('open-modal');
        const editBtn = element.querySelector('.edit-btn');
        const deleteBtn = element.querySelector('.delete-btn');
        editBtn.addEventListener('click', editItem);
        deleteBtn.addEventListener('click', deleteItem);
        setBackToDefault();
    } else if (titleValue && dateValue && descriptionValue && editFlag) {
        editTitle.textContent = title.value;
        editDate.textContent = date.value;
        editDescription.textContent = description.value;
        modal.classList.remove('open-modal');
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
    e.currentTarget.parentElement.parentElement.remove();
    if (taskList.children.length < 1) {
        container.classList.remove('show-container');
    }
}

function clearItems() {
    taskList.innerHTML = '';
    container.classList.remove('show-container');
    setBackToDefault();
}

function setBackToDefault() {
    title.value = '';
    date.value = '';
    description.value = '';
    editFlag = false;
    formAddBtn.textContent = 'Add';
}

/* EVENT LISTENERS */
/* ==================================================================================================== */

taskBtn.addEventListener('click', () => modal.classList.add('open-modal'));
closeBtn.addEventListener('click', () => {
    setBackToDefault();
    modal.classList.remove('open-modal');
});
formCloseBtn.addEventListener('click', () => {
    setBackToDefault();
    modal.classList.remove('open-modal');
});
form.addEventListener('submit', submitForm);
clearBtn.addEventListener('click', clearItems);

/* END */
/* ==================================================================================================== */
