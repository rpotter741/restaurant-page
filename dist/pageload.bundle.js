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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZWxvYWQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9wYWdlbG9hZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlbG9hZCgpIHtcbiAgICBcbiAgICAvL0NyZWF0ZSBoZWFkZXIgYW5kIHN1YmhlYWRlclxuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBCZWF2ZXIgQnJvJ3MgQnJld2luZyBDb21wYW55IVwiO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG4gICAgbGV0IHN1YkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc3ViSGVhZGVyLnRleHRDb250ZW50ID0gXCJXaGVyZSB0aGUgVGltYmVyIGtlZXBzIHlvdSBMaW1iZXIhXCI7XG4gICAgc3ViSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJzdWJoZWFkZXJcIik7XG5cbiAgICBsZXQgaGVhZGVyQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXJCb3guY2xhc3NMaXN0LmFkZChcImhlYWRlckJveFwiKVxuXG4gICAgaGVhZGVyQm94LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgaGVhZGVyQm94LmFwcGVuZENoaWxkKHN1YkhlYWRlcik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyQm94KTtcblxuICAgIC8vY3JlYXRlIG1lbnVcbiAgICBsZXQgbWVudVVJID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51VUkuY2xhc3NMaXN0LmFkZChcIm5hdk1lbnVcIilcblxuICAgIGxldCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIGhvbWUuaWQgPSBcImhvbWVCdG5cIjtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoXCJuYXZCdG5cIilcbiAgICBtZW51VUkuYXBwZW5kQ2hpbGQoaG9tZSk7XG5cbiAgICBsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBtZW51LmlkID0gXCJtZW51QnRuXCI7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibmF2QnRuXCIpXG4gICAgbWVudVVJLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gICAgbGV0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gICAgY29udGFjdC5pZCA9IFwiY29udGFjdEJ0blwiO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcIm5hdkJ0blwiKTtcbiAgICBtZW51VUkuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudVVJKVxuXG5cbiAgICAvL2NyZWF0ZSBjb250YWluZXIgZm9yIHBhZ2VzXG4gICAgbGV0IGFjdGl2ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWN0aXZlQ29udGFpbmVyLmlkID0gXCJhY3RpdmVDb250YWluZXJcIjtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhY3RpdmVDb250YWluZXIpXG5cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==