import './style.css';

export default function renderHomepage() {
    let container = document.querySelector("#activeContainer");
    container.innerHTML = "";

    let homeContainer = document.createElement("div");
    homeContainer.id = "homeContainer";
    container.appendChild(homeContainer);

    let headerBox = document.createElement("div");
    headerBox.classList.add("headerBox");

    let subheader = document.createElement("div");
    subheader.classList.add("subheader");
    subheader.textContent = "Where the timber gets you limber!"
    headerBox.appendChild(subheader);

    homeContainer.appendChild(headerBox);


    let welcomeBox = document.createElement("div");
    welcomeBox.classList.add("primaryTextBox");
    welcomeBox.textContent = "At Beaver Bro's Brewing Company (BBBC), we provide exceptional food and drink alongside mediocre lodging at incredibly low prices! Rated the best tavern in Cyfehil*, you won't be able to stop yourself from showing up and saying, 'Dam!'"
    homeContainer.appendChild(welcomeBox);


    
    let caveat = document.createElement("div");
    caveat.classList.add("caveat");
    caveat.textContent = "*BBBC is the only tavern in Cyfehil - though the competing Friendly Hostel is known for better beds"
    homeContainer.appendChild(caveat)



}