export default function menuDisplay(i) {

    let displayArea = document.querySelector("#itemDisplay");
    displayArea.innerHTML = "";


    i.forEach((item) => {
        let cost = document.createElement('div');
        cost.classList.add('price');
        cost.textContent = item.price;

        let title = document.createElement('div'); 
        title.classList.add("itemTitle"); 
        title.textContent = item.name;

        let namePrice = document.createElement('div');
        namePrice.classList.add('namePrice');
        namePrice.appendChild(title);
        namePrice.appendChild(cost);        

        let picture = document.createElement("img");
        picture.classList.add('itemPicture')
        picture.src = '';

        let description = document.createElement('div');
        description.classList.add('itemDescription');
        description.textContent = item.description;

        let box = document.createElement('div');
        box.classList.add('itemBox');
        box.appendChild(namePrice);
        box.appendChild(description);

        displayArea.appendChild(box)

    })
}
