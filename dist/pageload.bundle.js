"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["pageload"],{

/***/ "./src/pageload.js":
/*!*************************!*\
  !*** ./src/pageload.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ pageload)
/* harmony export */ });
function pageload() {
    
    let container = document.querySelector("body");

    //create menu
    let menuUI = document.createElement("div");
    menuUI.classList.add("navMenu")

    let home = document.createElement('button');
    home.textContent = "Home";
    home.id = "homeBtn";
    home.classList.add("navBtn")
    menuUI.appendChild(home);

    let menu = document.createElement('button');
    menu.textContent = "Menu";
    menu.id = "menuBtn";
    menu.classList.add("navBtn")
    menuUI.appendChild(menu);

    let contact = document.createElement('button');
    contact.textContent = "Contact";
    contact.id = "contactBtn";
    contact.classList.add("navBtn");
    menuUI.appendChild(contact);

    container.appendChild(menuUI)


    //create container for pages
    let activeContainer = document.createElement("div");
    activeContainer.id = "activeContainer";

    container.appendChild(activeContainer)

}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/pageload.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZWxvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZWxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnZWxvYWQoKSB7XG4gICAgXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gICAgLy9jcmVhdGUgbWVudVxuICAgIGxldCBtZW51VUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVVSS5jbGFzc0xpc3QuYWRkKFwibmF2TWVudVwiKVxuXG4gICAgbGV0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgaG9tZS5pZCA9IFwiaG9tZUJ0blwiO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZChcIm5hdkJ0blwiKVxuICAgIG1lbnVVSS5hcHBlbmRDaGlsZChob21lKTtcblxuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIG1lbnUuaWQgPSBcIm1lbnVCdG5cIjtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJuYXZCdG5cIilcbiAgICBtZW51VUkuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICBsZXQgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICBjb250YWN0LmlkID0gXCJjb250YWN0QnRuXCI7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwibmF2QnRuXCIpO1xuICAgIG1lbnVVSS5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51VUkpXG5cblxuICAgIC8vY3JlYXRlIGNvbnRhaW5lciBmb3IgcGFnZXNcbiAgICBsZXQgYWN0aXZlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBhY3RpdmVDb250YWluZXIuaWQgPSBcImFjdGl2ZUNvbnRhaW5lclwiO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFjdGl2ZUNvbnRhaW5lcilcblxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9