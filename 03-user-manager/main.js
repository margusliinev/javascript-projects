/* SELECT ITEMS */
/* ==================================================================================================== */

const addUserBtn = get('.adduser-btn');
const closeBtn = get('.close-btn');
const formCloseBtn = get('.form-close-btn');
const modal = get('.modal');

/* EDIT VARIABLES */
/* ==================================================================================================== */

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

/* EVENT LISTENERS */
/* ==================================================================================================== */

addUserBtn.addEventListener('click', () => modal.classList.add('open-modal'));
closeBtn.addEventListener('click', () => modal.classList.remove('open-modal'));
formCloseBtn.addEventListener('click', () => modal.classList.remove('open-modal'));

/* END */
/* ==================================================================================================== */
