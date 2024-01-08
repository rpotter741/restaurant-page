import './style.css';

export default function renderHomepage() {
    let container = document.querySelector("#activeContainer");
    container.innerHTML = "";

    let homeContainer = document.createElement("div");
    homeContainer.id = "homeContainer";
    container.appendChild(homeContainer);

    let logo = document.createElement("img");
    logo.src = 'b88e652606a7fff08cc8.png';
    homeContainer.appendChild(logo);

}