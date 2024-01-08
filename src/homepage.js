import './style.css';

export default function renderHomepage() {
    let container = document.querySelector("#activeContainer");
    container.innerHTML = "";

    let homeContainer = document.createElement("div");
    homeContainer.id = "homeContainer";
    container.appendChild(homeContainer);



}