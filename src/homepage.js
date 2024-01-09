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

    let hoursBox = document.createElement("div");
    hoursBox.classList.add("contentBox");
    hoursBox.style = "margin: 4rem 0 4rem 0"

    let hoursLabel = document.createElement("div");
    hoursLabel.classList.add("contentHeader");
    hoursLabel.textContent = "Hours:"; 
    hoursBox.appendChild(hoursLabel);

    let hoursContent = document.createElement("div");
    hoursContent.classList.add("content");
    hoursContent.textContent = "0000 - 2359 Sunday - Saturday";
    hoursBox.appendChild(hoursContent)

    homeContainer.appendChild(hoursBox);

    let review = document.createElement("div");
    review.id = "nirelReview"
    review.classList.add("content");
    review.textContent = `"Oh yeah, Beaver Bro's Brewing Company is a pretty good spot to go after... well, pretty much anything. Ruvyn's been doing a great job taking care of the place since his brothers died in the Great Sacrifice, and for those looking for a sense of belonging, you've found no better spot. ... ... Oh you want me to keep saying more? I'm sorry? Oh you've got a ... okay, yeah. Um, if you're looking for something savory, you can choose between the Timber Pale Ale, which has real earthy tones in it but like, a good amount. Or you can try the Buckteef Brew - another almost bitter but complex drink. If you want something sweet, there's an awesome Berry Mead made from the berries of my farm, actually. Nirel's Berries are... right, sorry. So yeah, stop in to Beaver Bro's Brewing Company for, uh... you know, mead or food or a bed. It's a good place, really. Look, I would but I gotta get back to the farm. Yeah, anytime."`
    homeContainer.appendChild(review);

    let attribution = document.createElement("div");
    attribution.classList.add("content","attribution");
    attribution.id = "nirelAttribution"
    attribution.textContent = "-- Nirel Aldaos, Cyfehil's defacto BerryMan"
    homeContainer.appendChild(attribution)


    let caveat = document.createElement("div");
    caveat.classList.add("caveat");
    caveat.textContent = "*BBBC is the only tavern in Cyfehil - though the competing Friendly Hostel is known for better beds"
    homeContainer.appendChild(caveat)



}