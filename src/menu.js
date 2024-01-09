import menuDisplay from "./menuDisplay.js";

export default function renderMenu() {
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
    food.addEventListener('click', () => {
        menuDisplay(foodMenu);
    });
    menuMenu.appendChild(food);

    let drinks = document.createElement("button");
    drinks.classList.add("menuBtn");
    drinks.textContent = "Drinks";
    drinks.addEventListener('click', () => {
        menuDisplay(drinksMenu)
    });
    menuMenu.appendChild(drinks);

    let rooms = document.createElement("button");
    rooms.classList.add("menuBtn");
    rooms.textContent = "Rooms";
    rooms.addEventListener('click', () => {
        menuDisplay(roomMenu);
    })
    menuMenu.appendChild(rooms);

    menuBox.appendChild(menuMenu);

    let itemDisplay = document.createElement("div");
    itemDisplay.id = "itemDisplay";
    itemDisplay.innerHTML = "";

    menuBox.appendChild(itemDisplay);

    menuDisplay(foodMenu);

}



let foodMenu = [
    {
        name: "Hog onuh Log",
        description: "Porkbutt shaved and skewered, layered with peppers, onions, and garlic. Served with Kille-Fried potatoes.",
        picture: "",
        price: "- 1 sp"
    }, 
    {
        name: "Chicken Flappies",
        description:"This delightfully baked array of chicken wings are so good, you'll just have to flap your arms! Comes with a browned tomato sauce, Kille-Fried potatoes, and your choice of either carrots or nothing.",
        picture: "",
        price: "- 5cp"
    },
    {
        name: "Ruvyn's Ridiculous Rings",
        description:"Ever dropped an onion and thought, 'Now what can I do with this?' Wonder no more! Try Ruvyn's Ridiculous Rings for a taste of earthy fried goodness!",
        picture: "",
        price: "- 1cp"
    },
    {
        name: "Meat",
        description:"Being an adventurer doesn't have to take you far from home! You can be adventurous right now and order Meat! Don't ask questions. Okay, yes it's animal meat. No more questions.",
        picture: "",
        price: "- 2cp"
    },
    {
        name: "Bearberry Pancakes",
        description:"Drinking with the kids and don't want the Missus finding out? Order them some Bearberry Pancakes and sober them right up! Whipped cream, butter, and syrup extra.",
        picture: "",
        price: "- 1cp"
    },
    {
        name: "Barrowmax Stew",
        description:"My brother might be dead, but his cooking is alive and well (okay, I found his recipe)! Enjoy the chonky, heart-warming, belly-filling delight that is Barrowmax Stew!",
        picture: "",
        price: "- 4cp"
    },
    {
        name: "Lemon",
        description:"Yeah, not the best citrus but it's impossible to get anything else tropical in Cyfehil. You want it or not? (depends on seasonal availability)",
        picture: "",
        price: "- 10gp"
    },
    {
        name: "Vegetables",
        description:"See title",
        picture: "",
        price: "- 1cp"
    }
]

let drinksMenu = [
    {
        name: "Timber Pale Ale",
        description: "This rabbity ale is also a bit skunky; as a rule, about as strong as a Beaver dam. Prices by tankard, flagon, and barrel.",
        picture: "",
        price: "- 2cp/1sp/3gp"
    }, 
    {
        name: "Berry Mead",
        description:"A sweet drink concocted from my brains and Nirel's berries!",
        picture: "",
        price: "- 5cp"
    },
    {
        name: "Shait Wine",
        description:"Druids have all but wiped out the shaitugarru berry, calling it an invasive species. Either way, we've got a few bottle's left.",
        picture: "",
        price: "- 2sp"
    },
    {
        name: "Wine",
        description:"Like the other wine, except without the shait.",
        picture: "",
        price: "- 6cp"
    },
    {
        name: "Generic Ale",
        description:"The herbs used to season this ale are generally light on busches. ",
        picture: "",
        price: "- 1cp"
    },
    {
        name: "Bjorn's Special",
        description:"This dastardly whiskey comes from the final barrel of my late brother's last distillation. It'll be the last ever served.",
        picture: "",
        price: "- 4sp"
    }
]

let roomMenu = [
    {
        name: "Single Bed",
        description: "A single bed in a room likely shared with others. Blankets and pillows provided.",
        picture: "",
        price: "- 2cp"
    },
    {
        name: "Single Room",
        description: "For the shy or reasonably wary of sleeping with strangers, the single room offers a bed in a room without others. Comes with blanket, pillow, and door.",
        picture: "",
        price: "- 5cp"
    },
    {
        name: "Suite",
        description: "For the ritzy and glamourous, this is your ticket to comfort in Cyfehil. Has two beds(!), blankets, pillows, a door, a wash tub, and two (or more) mirrors.",
        picture: "",
        price: "- 1sp"
    },
    {
        name: "One-Meal-A-Day Addon",
        description: "Tight on a budget but against starvation in general? This is the add-on for you! Includes up to 5cp of menu items (must be purchased with a room).",
        picture: "",
        price: "- 3cp"
    },
    {
        name: "Two-Meals-A-Day Addon",
        description: "Like to eat and drink without breaking the bank? Check out this deal! Includes up to 1sp of menu items (must be purchased with a room).",
        picture: "",
        price: "- 5cp"
    },
    {
        name: "Kingly Buffet Addon",
        description: "If you're a glutton but don't want others to know, this is the addon for you! Includes up to 5sp of menu items (must be purchased with the Suite)",
        picture: "",
        price: "- 3sp"
    }
]