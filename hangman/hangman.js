// "Apple", "Blueberry", "Pineapple", "Pomegranate", "Mandarin", "Watermelon", "Raspberry", "Blackberry", "Dragonfruit", "Tangerine", "Orange", "Banana", "Plantain", "Grape", "Canteloupe", "Honeydew", "Mango", "Plum", "Pear", "Kiwi", "Lime", "Lemon", "Apricot", "Peach", "Grapefruit", "Cherry", "Date", "Raisin", "Guava", "Strawberry"
// "Hedgehog", "Rhinoceros", "Squirrel", "Panther", "Walrus", "Zebra", "Camel", "Penguin", "Mongoose", "Platypus", "Gorilla", "Chimpanzee", "Reindeer", "Falcon", "Eagle", "Bison", "Tiger", "Elephant", "Panda", "Lemur", "Wolverine", "Opossum", "Armadillo", "Donkey", "Orangutan", "Ostrich", "Koala", "Dingo", "Parrot", "Dolphin", "Peacock", "Chicken", "Moose"
// "India", "Italy", "Azerbaijan", "Hungary", "Croatia", "Georgia", "Australia", "China", "Brazil", "Argentina", "Mexico", "Canada", "Kyrgyzstan", "Poland", "Sweden", "Belgium", "Luxembourg", "Switzerland", "Afghanistan", "Turkmenistan", "Tajikistan", "Namibia", "Zimbabwe", "Ethiopia", "Eqypt", "Morocco", "Mozambique", "Madagascar", "Phillipines", "Vietnam", "Chile", "Japan", "Norway", "Cambodia", "Thailand", "Iran", "Iraq", "Fiji", "Jordan", "Cuba", "Samoa", "Peru", "Panama"


// Initial References

const letterContainer = document.getElementById("letter-container");
const optionsContainer = document.getElementById("options-container");
const userInputSection = document.getElementById("user-input-section");
const newGameContainer = document.getElementById("new-game-container");
const newGameButton = document.getElementById("new-game-button");
const canvas = document.getElementById("canvas");
const resultText = document.getElementById("result-text");


// Options values for buttons

let options = {
    fruits: ["Apple", "Blueberry", "Pineapple", "Pomegranate", "Mandarin", "Watermelon", "Raspberry", "Blackberry", "Dragonfruit", "Tangerine", "Orange", "Banana", "Plantain", "Grape", "Canteloupe", "Honeydew", "Mango", "Plum", "Pear", "Kiwi", "Lime", "Lemon", "Apricot", "Peach", "Grapefruit", "Cherry", "Date", "Raisin", "Guava", "Strawberry"
    ],
    animals: ["Hedgehog", "Rhinoceros", "Squirrel", "Panther", "Walrus", "Zebra", "Camel", "Penguin", "Mongoose", "Platypus", "Gorilla", "Chimpanzee", "Reindeer", "Falcon", "Eagle", "Bison", "Tiger", "Elephant", "Panda", "Lemur", "Wolverine", "Opossum", "Armadillo", "Donkey", "Orangutan", "Ostrich", "Koala", "Dingo", "Parrot", "Dolphin", "Peacock", "Chicken", "Moose"
    ],
    countries: ["India", "Italy", "Azerbaijan", "Hungary", "Croatia", "Georgia", "Australia", "China", "Brazil", "Argentina", "Mexico", "Canada", "Kyrgyzstan", "Poland", "Sweden", "Belgium", "Luxembourg", "Switzerland", "Afghanistan", "Turkmenistan", "Tajikistan", "Namibia", "Zimbabwe", "Ethiopia", "Eqypt", "Morocco", "Mozambique", "Madagascar", "Phillipines", "Vietnam", "Chile", "Japan", "Norway", "Cambodia", "Thailand", "Iran", "Iraq", "Fiji", "Jordan", "Cuba", "Samoa", "Peru", "Panama"
    ]
};

// count
let winCount = 0;
let count = 0;

let chosenWord = "";

// Display option buttons
const displayOptions = () => {
    optionsContainer.innerHTML += `<h3>Please Select An Option</h3>`;
    let buttonCon = document.createElement("div");
    for (let value in options){
        buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`
    }
    optionsContainer.appendChild(buttonCon);
};


// Initial Function (called when page loads/user clicks New Game)
const initializer = () => {
    winCount = 0;
    count = 0;
    displayOptions();
};


// New Game
newGameButton.addEventListener("click", initializer);
window.onload = initializer;