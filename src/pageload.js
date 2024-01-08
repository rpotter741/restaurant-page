export default function pageload() {
    
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
