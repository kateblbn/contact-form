// import { user, showUser } from "../modules/userInfo.js";

// console.log(user);
// showUser('Mari');
// showUser('Fibi');
import { userInfo } from "../modules/userInfo.js";
import { userContact } from "../modules/userContact.js";
import { userForm } from "../modules/userForm.js";

const wrapp = document.querySelector('.wrapp');

function app() {
    return `
    <div class="app">
    <div class="info-contact">
    ${userInfo()}
    ${userContact()}
    </div>
    ${userForm()}
    </div>
    `
}
wrapp.innerHTML  = app();