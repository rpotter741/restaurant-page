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
    
    //Create header and subheader
    let container = document.querySelector("body");

    let header = document.createElement("div");
    header.textContent = "Welcome to Beaver Bro's Brewing Company!";
    header.classList.add("header");

    let subHeader = document.createElement("div");
    subHeader.textContent = "Where the Timber keeps you Limber!";
    subHeader.classList.add("subheader");

    let headerBox = document.createElement("div");
    headerBox.classList.add("headerBox")

    headerBox.appendChild(header);
    headerBox.appendChild(subHeader);

    container.appendChild(headerBox);

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


}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/pageload.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZWxvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3BhZ2Vsb2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2Vsb2FkKCkge1xuICAgIFxuICAgIC8vQ3JlYXRlIGhlYWRlciBhbmQgc3ViaGVhZGVyXG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIEJlYXZlciBCcm8ncyBCcmV3aW5nIENvbXBhbnkhXCI7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgICBsZXQgc3ViSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzdWJIZWFkZXIudGV4dENvbnRlbnQgPSBcIldoZXJlIHRoZSBUaW1iZXIga2VlcHMgeW91IExpbWJlciFcIjtcbiAgICBzdWJIZWFkZXIuY2xhc3NMaXN0LmFkZChcInN1YmhlYWRlclwiKTtcblxuICAgIGxldCBoZWFkZXJCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlckJveC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyQm94XCIpXG5cbiAgICBoZWFkZXJCb3guYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBoZWFkZXJCb3guYXBwZW5kQ2hpbGQoc3ViSGVhZGVyKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXJCb3gpO1xuXG4gICAgLy9jcmVhdGUgbWVudVxuICAgIGxldCBtZW51VUkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1lbnVVSS5jbGFzc0xpc3QuYWRkKFwibmF2TWVudVwiKVxuXG4gICAgbGV0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBob21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgaG9tZS5pZCA9IFwiaG9tZUJ0blwiO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZChcIm5hdkJ0blwiKVxuICAgIG1lbnVVSS5hcHBlbmRDaGlsZChob21lKTtcblxuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIG1lbnUuaWQgPSBcIm1lbnVCdG5cIjtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJuYXZCdG5cIilcbiAgICBtZW51VUkuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICBsZXQgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICBjb250YWN0LmlkID0gXCJjb250YWN0QnRuXCI7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKFwibmF2QnRuXCIpO1xuICAgIG1lbnVVSS5hcHBlbmRDaGlsZChjb250YWN0KTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51VUkpXG5cblxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9