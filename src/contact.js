export default function renderContact() {
    let container = document.querySelector("#activeContainer");
    container.innerHTML = "";

    let contactBox = document.createElement('div');
    contactBox.id = "contactBox";

    let postageBox = document.createElement('div');
    postageBox.classList.add('content');
    postageBox.textContent = "For Postage, address letters to 13 Tarenthil Ave, Cyfehil, Locrati";
    contactBox.appendChild(postageBox);

    container.appendChild(contactBox);
    
}