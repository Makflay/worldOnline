import {getUsers} from './Http/getUsers';
import {drawUsers} from './Users/drawUsers';
import {stringSort, objSort, numberSort} from './Users/sorting';
import {openBox} from './ModalBox/openBox';
import {User} from './Users/User';

let users = [];
const sortTag = document.querySelector('#sort');
const eventBodyTable = document.querySelector('#usersBody');
const modalBox = document.querySelector('#openModal');
const closeModalBox = document.querySelector('#close-modal-box');
const addUser = document.querySelector('#add-user');
const bodyForm = document.querySelector('#open-form');
const closeForm = document.querySelector('#close-form');
const saveUserForm = document.querySelector('#save-user');

async function main() {
    await getUsers(users);
    drawUsers(users);
}
main();

document.addEventListener('DOMContentLoaded', () => {
//Sorting
    sortTag.addEventListener('click', {
        handleEvent(event) {
            const key = event.target.innerText.toLowerCase();
            switch(key) {
                case 'address':
                    objSort(users, key, 'city');
                    drawUsers(users);
                    break;
                case 'company':
                    objSort(users, key, 'name');
                    drawUsers(users);
                    break;
                case 'phone number':
                    numberSort(users, 'phone');
                    drawUsers(users);
                    break;
                case 'id':
                    numberSort(users, key);
                    drawUsers(users);
                    break;
                default:
                    stringSort(users, key);
                    drawUsers(users);
                    break;
            }
        }
    });
//Delete User & Modal Box(information)
    eventBodyTable.addEventListener('click', {
        handleEvent(e) {
            const event = e.target.attributes[0];
            if(typeof event === 'undefined') {
                console.log('Empty');
            } else {
                switch(event.name) {
                    case 'address':
                        modalBox.classList.add('modal_active');
                        openBox(users, event.value, event.name);
                        break;
                    case 'company':
                        modalBox.classList.add('modal_active');
                        openBox(users, event.value, event.name);
                        break;
                    case 'del':
                        users.splice(event.value, 1);
                        drawUsers(users);
                        break;
                }
            }
        }
    });
//Close Modal Box(information)
    closeModalBox.addEventListener('click', function(){
        modalBox.classList.remove('modal_active');
    });
//Open Modal Box Add New User
    addUser.addEventListener('click', function() {
        bodyForm.classList.add('modal_active');
    });
//Add New User
    saveUserForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const data = new FormData(saveUserForm);
        const values = [...data.values()];
        const createUser = new User(users.length + 1, values[0], values[1],values[2],values[3],values[4],values[5],values[6],values[7],values[8],values[9], values[10], values[11], values[12], values[13]);
        users.push(createUser);
        drawUsers(users);
        bodyForm.classList.remove('modal_active');
    });
//Close Modal Box Add New User
    closeForm.addEventListener('click', function() {
        bodyForm.classList.remove('modal_active');
    });
});