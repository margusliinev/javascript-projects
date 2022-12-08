/* SELECT ITEMS */
/* ==================================================================================================== */

const taskBtn = get('.task-btn');
const closeBtn = get('.close-btn');
const formCloseBtn = get('.form-close-btn');
const modal = get('.modal');
const form = get('.form');
const title = get('#title');
const date = get('#date');
const description = get('#description');
const taskList = get('.task-list');
const container = get('.tasks');

/* EDIT VARIABLES */
/* ==================================================================================================== */

let editFlag = false;

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
    if ((titleValue, dateValue, descriptionValue && !editFlag)) {
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
    }
    modal.classList.remove('open-modal');
}

/* EVENT LISTENERS */
/* ==================================================================================================== */

taskBtn.addEventListener('click', () => modal.classList.add('open-modal'));
closeBtn.addEventListener('click', () => modal.classList.remove('open-modal'));
formCloseBtn.addEventListener('click', () => modal.classList.remove('open-modal'));
form.addEventListener('submit', submitForm);

/* END */
/* ==================================================================================================== */
