"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["menu"],{

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderMenu)
/* harmony export */ });
function renderMenu() {
    let container = document.querySelector("#activeContainer");
    container.innerHTML = "";

    let menuBox = document.createElement("div");
    menuBox.id = "menuBox";
    container.appendChild(menuBox)

    let menuMenu = document.createElement("div");
    menuMenu.id = "menuMenuBox";

    let food = document.createElement("button");
    food.classList.add("menuBtn");
    food.textContent = "Food";
    menuMenu.appendChild(food);

    let drinks = document.createElement("button");
    drinks.classList.add("menuBtn");
    drinks.textContent = "Drinks";
    menuMenu.appendChild(drinks);

    let rooms = document.createElement("button");
    rooms.classList.add("menuBtn");
    rooms.textContent = "Rooms";
    menuMenu.appendChild(rooms);

    menuBox.appendChild(menuMenu);

    let itemDisplay = document.createElement("div");
    itemDisplay.id = "itemDisplay";

    menuBox.appendChild(itemDisplay);

}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyTWVudSgpIHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhY3RpdmVDb250YWluZXJcIik7XG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBsZXQgbWVudUJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUJveC5pZCA9IFwibWVudUJveFwiO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Qm94KVxuXG4gICAgbGV0IG1lbnVNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51TWVudS5pZCA9IFwibWVudU1lbnVCb3hcIjtcblxuICAgIGxldCBmb29kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBmb29kLmNsYXNzTGlzdC5hZGQoXCJtZW51QnRuXCIpO1xuICAgIGZvb2QudGV4dENvbnRlbnQgPSBcIkZvb2RcIjtcbiAgICBtZW51TWVudS5hcHBlbmRDaGlsZChmb29kKTtcblxuICAgIGxldCBkcmlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRyaW5rcy5jbGFzc0xpc3QuYWRkKFwibWVudUJ0blwiKTtcbiAgICBkcmlua3MudGV4dENvbnRlbnQgPSBcIkRyaW5rc1wiO1xuICAgIG1lbnVNZW51LmFwcGVuZENoaWxkKGRyaW5rcyk7XG5cbiAgICBsZXQgcm9vbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIHJvb21zLmNsYXNzTGlzdC5hZGQoXCJtZW51QnRuXCIpO1xuICAgIHJvb21zLnRleHRDb250ZW50ID0gXCJSb29tc1wiO1xuICAgIG1lbnVNZW51LmFwcGVuZENoaWxkKHJvb21zKTtcblxuICAgIG1lbnVCb3guYXBwZW5kQ2hpbGQobWVudU1lbnUpO1xuXG4gICAgbGV0IGl0ZW1EaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpdGVtRGlzcGxheS5pZCA9IFwiaXRlbURpc3BsYXlcIjtcblxuICAgIG1lbnVCb3guYXBwZW5kQ2hpbGQoaXRlbURpc3BsYXkpO1xuXG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==