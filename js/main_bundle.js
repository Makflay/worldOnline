/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/Http/getUsers.js":
/*!*****************************!*\
  !*** ./js/Http/getUsers.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUsers\": () => (/* binding */ getUsers)\n/* harmony export */ });\nconst url = 'http://jsonplaceholder.typicode.com/users';\r\nasync function getUsers(arr) {\r\n    const res = await fetch(url)\r\n    if (res.ok) {\r\n        const json = await res.json();\r\n        for(const key in json) {\r\n            arr.push(json[key])\r\n        }\r\n        return arr\r\n    } else {\r\n        return console.log(`Errr ${res.status}`)\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack/./js/Http/getUsers.js?");

/***/ }),

/***/ "./js/ModalBox/openBox.js":
/*!********************************!*\
  !*** ./js/ModalBox/openBox.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"openBox\": () => (/* binding */ openBox)\n/* harmony export */ });\nfunction openBox(arr, index, key) {\r\n    //console.log(`modalBox index: ${index}, key: ${key}`);\r\n    const h3Title = document.querySelector('.modal-title');\r\n    h3Title.textContent = `${arr[index].name}'s ${key}:`;\r\n    const divDescription = document.querySelector('.modal-description');\r\n    if(divDescription.childNodes.length > 0) {\r\n        console.log('Delete child divDescription')\r\n        while (divDescription.firstChild) {\r\n            divDescription.removeChild(divDescription.firstChild);\r\n        }\r\n    }\r\n    for(const i in arr[index][key]){\r\n        const span = document.createElement('span');\r\n        const br = document.createElement('br');\r\n        if(typeof arr[index][key][i] === 'object' && arr[index][key][i] !== null) {\r\n            //Check value === 'object'\r\n            const geoSpan = document.createElement('span');\r\n            const geoBr = document.createElement('br');\r\n            geoSpan.textContent = `${i}:`;\r\n            divDescription.appendChild(geoSpan);\r\n            divDescription.appendChild(geoBr);\r\n            for(let j in arr[index][key][i]) {\r\n                const spanj = document.createElement('span');\r\n                const brj = document.createElement('br');\r\n                spanj.textContent = `-${j}: ${arr[index][key][i][j]}`;\r\n                divDescription.appendChild(spanj);\r\n                divDescription.appendChild(brj);\r\n            }\r\n        } else {\r\n            span.textContent = `${i}: ${arr[index][key][i]}`;\r\n            divDescription.appendChild(span);\r\n            divDescription.appendChild(br);\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack/./js/ModalBox/openBox.js?");

/***/ }),

/***/ "./js/Users/User.js":
/*!**************************!*\
  !*** ./js/Users/User.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"User\": () => (/* binding */ User)\n/* harmony export */ });\nclass User {\r\n    constructor(id, name, username, email, website, phone, city, street, suite, zipcode, lat, lng, bs, catchPhrase, companyName) {\r\n        this.id = id;\r\n        this.name = name;\r\n        this.username = username;\r\n        this.email = email;\r\n        this.website = website;\r\n        this.address = {\r\n            city: city,\r\n            geo: {\r\n                lat,\r\n                lng\r\n            },\r\n            street: street,\r\n            suite: suite,\r\n            zipcode: zipcode\r\n        };\r\n        this.company = {\r\n        bs: bs,\r\n        catchPhrase: catchPhrase,\r\n        name: companyName\r\n        };\r\n        this.phone = phone;\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack/./js/Users/User.js?");

/***/ }),

/***/ "./js/Users/drawUsers.js":
/*!*******************************!*\
  !*** ./js/Users/drawUsers.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawUsers\": () => (/* binding */ drawUsers)\n/* harmony export */ });\nconst tableTag = document.querySelector('#usersBody');\r\nfunction drawUsers(arr){\r\n    if(tableTag.childNodes.length > 0) {\r\n        console.log('Delete child')\r\n        while (tableTag.firstChild) {\r\n            tableTag.removeChild(tableTag.firstChild);\r\n        }\r\n    }\r\n    arr.map((el, index) => {\r\n        let trTag = document.createElement('tr');\r\n\r\n        //Id\r\n        let tdIndex = document.createElement('td');\r\n        tdIndex.textContent = el.id;\r\n        //tdIndex.textContent = index + 1; --> don't save sort\r\n        tdIndex.setAttribute('data-label', 'ID');\r\n        trTag.appendChild(tdIndex);\r\n\r\n        //Name\r\n        let tdName = document.createElement('td');\r\n        tdName.textContent = el.name;\r\n        tdName.setAttribute('data-label', 'Name');\r\n        trTag.appendChild(tdName);\r\n\r\n        //Username\r\n        let tdUsername = document.createElement('td');\r\n        tdUsername.textContent = el.username;\r\n        tdUsername.setAttribute('data-label', 'Username');\r\n        trTag.appendChild(tdUsername);\r\n\r\n        //Email\r\n        let tdEmail = document.createElement('td');\r\n        tdEmail.textContent = el.email;\r\n        tdEmail.setAttribute('data-label', 'Email');\r\n        trTag.appendChild(tdEmail);\r\n\r\n        //Website\r\n        let tdWebsite = document.createElement('td');\r\n        tdWebsite.textContent = el.website;\r\n        tdWebsite.setAttribute('data-label', 'Website');\r\n        trTag.appendChild(tdWebsite);\r\n\r\n        //Address\r\n        let tdAddress = document.createElement('td');\r\n        let aAddress = document.createElement('a');\r\n        aAddress.textContent = el.address.city;\r\n        aAddress.setAttribute('address', index);\r\n        tdAddress.appendChild(aAddress);\r\n        tdAddress.setAttribute('data-label', 'Address');\r\n        trTag.appendChild(tdAddress);\r\n\r\n        //Company\r\n        let tdCompany = document.createElement('td');\r\n        tdCompany.textContent = el.company.name;\r\n        tdCompany.setAttribute('company', index);\r\n        tdCompany.setAttribute('data-label', 'Company');\r\n        trTag.appendChild(tdCompany);\r\n\r\n        //Phone\r\n        let tdPhone = document.createElement('td');\r\n        tdPhone.textContent = el.phone;\r\n        tdPhone.setAttribute('data-label', 'Phone');\r\n        trTag.appendChild(tdPhone);\r\n\r\n        //Delete\r\n        let tdDel = document.createElement('td');\r\n        let bDel = document.createElement('button');\r\n        bDel.innerHTML = `&#9747;`;\r\n        bDel.setAttribute('del', index);\r\n        tdDel.setAttribute('data-label', 'Delete');\r\n        tdDel.appendChild(bDel);\r\n\r\n        trTag.appendChild(tdDel);\r\n        tableTag.appendChild(trTag);\r\n    });\r\n};\n\n//# sourceURL=webpack://webpack/./js/Users/drawUsers.js?");

/***/ }),

/***/ "./js/Users/sorting.js":
/*!*****************************!*\
  !*** ./js/Users/sorting.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stringSort\": () => (/* binding */ stringSort),\n/* harmony export */   \"objSort\": () => (/* binding */ objSort),\n/* harmony export */   \"numberSort\": () => (/* binding */ numberSort)\n/* harmony export */ });\nfunction stringSort(arr, key) {\r\n    arr.sort((a, b) => {\r\n        if(a[key].toLowerCase() > b[key].toLowerCase()) {\r\n            return 1;\r\n        } else if(a[key].toLowerCase() < b[key].toLowerCase()) {\r\n            return -1;\r\n        } else {\r\n            // a === b\r\n            return 0;\r\n        }\r\n    });\r\n    return arr;\r\n}\r\n\r\nfunction objSort(arr, key, value) {\r\n    arr.sort((a, b) => {\r\n        if(a[key][value].toLowerCase() > b[key][value].toLowerCase()) {\r\n            return 1;\r\n        } else if(a[key][value].toLowerCase() < b[key][value].toLowerCase()) {\r\n            return -1;\r\n        } else {\r\n        // a === b\r\n            return 0;\r\n        }\r\n    });\r\n    return arr;\r\n}\r\n//\r\nfunction numberSort(arr, key) {\r\n    arr.sort((a, b) => {\r\n        if(typeof a[key] === 'string' && typeof b[key] === 'string') {\r\n            return a[key].replace(/[^0-9]/g, '') - b[key].replace(/[^0-9]/g, '')\r\n        } else {\r\n            return a[key] - b[key];\r\n        }\r\n    });\r\n    return arr;\r\n}\n\n//# sourceURL=webpack://webpack/./js/Users/sorting.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Http_getUsers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Http/getUsers */ \"./js/Http/getUsers.js\");\n/* harmony import */ var _Users_drawUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Users/drawUsers */ \"./js/Users/drawUsers.js\");\n/* harmony import */ var _Users_sorting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Users/sorting */ \"./js/Users/sorting.js\");\n/* harmony import */ var _ModalBox_openBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModalBox/openBox */ \"./js/ModalBox/openBox.js\");\n/* harmony import */ var _Users_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Users/User */ \"./js/Users/User.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nlet users = [];\r\nconst sortTag = document.querySelector('#sort');\r\nconst eventBodyTable = document.querySelector('#usersBody');\r\nconst modalBox = document.querySelector('#openModal');\r\nconst closeModalBox = document.querySelector('#close-modal-box');\r\nconst addUser = document.querySelector('#add-user');\r\nconst bodyForm = document.querySelector('#open-form');\r\nconst closeForm = document.querySelector('#close-form');\r\nconst saveUserForm = document.querySelector('#save-user');\r\n\r\nasync function main() {\r\n    await (0,_Http_getUsers__WEBPACK_IMPORTED_MODULE_0__.getUsers)(users);\r\n    (0,_Users_drawUsers__WEBPACK_IMPORTED_MODULE_1__.drawUsers)(users);\r\n}\r\nmain();\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n//Sorting\r\n    sortTag.addEventListener('click', {\r\n        handleEvent(event) {\r\n            const key = event.target.innerText.toLowerCase();\r\n            switch(key) {\r\n                case 'address':\r\n                    (0,_Users_sorting__WEBPACK_IMPORTED_MODULE_2__.objSort)(users, key, 'city');\r\n                    (0,_Users_drawUsers__WEBPACK_IMPORTED_MODULE_1__.drawUsers)(users);\r\n                    break;\r\n                case 'company':\r\n                    (0,_Users_sorting__WEBPACK_IMPORTED_MODULE_2__.objSort)(users, key, 'name');\r\n                    (0,_Users_drawUsers__WEBPACK_IMPORTED_MODULE_1__.drawUsers)(users);\r\n                    break;\r\n                case 'phone number':\r\n                    (0,_Users_sorting__WEBPACK_IMPORTED_MODULE_2__.numberSort)(users, 'phone');\r\n                    (0,_Users_drawUsers__WEBPACK_IMPORTED_MODULE_1__.drawUsers)(users);\r\n                    break;\r\n                case 'id':\r\n                    (0,_Users_sorting__WEBPACK_IMPORTED_MODULE_2__.numberSort)(users, key);\r\n                    (0,_Users_drawUsers__WEBPACK_IMPORTED_MODULE_1__.drawUsers)(users);\r\n                    break;\r\n                default:\r\n                    (0,_Users_sorting__WEBPACK_IMPORTED_MODULE_2__.stringSort)(users, key);\r\n                    (0,_Users_drawUsers__WEBPACK_IMPORTED_MODULE_1__.drawUsers)(users);\r\n                    break;\r\n            }\r\n        }\r\n    });\r\n//Delete User & Modal Box(information)\r\n    eventBodyTable.addEventListener('click', {\r\n        handleEvent(e) {\r\n            const event = e.target.attributes[0];\r\n            if(typeof event === 'undefined') {\r\n                console.log('Empty');\r\n            } else {\r\n                switch(event.name) {\r\n                    case 'address':\r\n                        modalBox.classList.add('modal_active');\r\n                        (0,_ModalBox_openBox__WEBPACK_IMPORTED_MODULE_3__.openBox)(users, event.value, event.name);\r\n                        break;\r\n                    case 'company':\r\n                        modalBox.classList.add('modal_active');\r\n                        (0,_ModalBox_openBox__WEBPACK_IMPORTED_MODULE_3__.openBox)(users, event.value, event.name);\r\n                        break;\r\n                    case 'del':\r\n                        users.splice(event.value, 1);\r\n                        (0,_Users_drawUsers__WEBPACK_IMPORTED_MODULE_1__.drawUsers)(users);\r\n                        break;\r\n                }\r\n            }\r\n        }\r\n    });\r\n//Close Modal Box(information)\r\n    closeModalBox.addEventListener('click', function(){\r\n        modalBox.classList.remove('modal_active');\r\n    });\r\n//Open Modal Box Add New User\r\n    addUser.addEventListener('click', function() {\r\n        bodyForm.classList.add('modal_active');\r\n    });\r\n//Add New User\r\n    saveUserForm.addEventListener('submit', function(e) {\r\n        e.preventDefault();\r\n        const data = new FormData(saveUserForm);\r\n        const values = [...data.values()];\r\n        const createUser = new _Users_User__WEBPACK_IMPORTED_MODULE_4__.User(users.length + 1, values[0], values[1],values[2],values[3],values[4],values[5],values[6],values[7],values[8],values[9], values[10], values[11], values[12], values[13]);\r\n        users.push(createUser);\r\n        (0,_Users_drawUsers__WEBPACK_IMPORTED_MODULE_1__.drawUsers)(users);\r\n        bodyForm.classList.remove('modal_active');\r\n    });\r\n//Close Modal Box Add New User\r\n    closeForm.addEventListener('click', function() {\r\n        bodyForm.classList.remove('modal_active');\r\n    });\r\n});\n\n//# sourceURL=webpack://webpack/./js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/main.js");
/******/ 	
/******/ })()
;