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
    animals: ["Hedgehog", "Rhinoceros", "Squirrel", "Panther", "Walrus", "Zebra", "Camel", "Penguin", "Mongoose", "Platypus", "Gorilla", "Chimpanzee", "Reindeer", "Falcon", "Eagle", "Bison", "Tiger", "Elephant", "Panda", "Lemur", "Wolverine", "Opossum", "Armadillo", "Donkey", "Orangutan", "Ostrich", "Koala", "Dingo", "Parrot", "Dolphin", "Peacock", "Chicken", "Moose", "Llama", "Alpaca", "Kangaroo"
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
        buttonCon.innerHTML += `<button class="options" onclick="generateWord('${value}')">${value}</button>`;
    }
    optionsContainer.appendChild(buttonCon);
};


// Block all the Buttons
const blocker = () =>{
    let optionsButtons = document.querySelectorAll(".options");
    let letterButtons = document.querySelectorAll(".letters");
    // disable all options
    optionsButtons.forEach((button)=>{
        button.disabled = true;
    });

    // disable all letters
    letterButtons.forEach((button)=>{
        button.disabled.true;
    });

    newGameContainer.classList.remove("hide");
};

// Word Generator
const generateWord = (optionValue) => {
    let optionsButtons = document.querySelectorAll(".options");
    // If optionValue matches the button innerText then highlight the button
    optionsButtons.forEach((button)=> {
        if(button.innerText.toLowerCase() === optionValue){
            button.classList.add("active");
        }
        button.disabled = true;
    });

    // initially hide letters, clear previous word
    letterContainer.classList.remove("hide");
    userInputSection.innerText = "";

    let optionArray = options[optionValue];
    // choose random word
    chosenWord = optionArray[Math.floor(Math.random() * optionArray.length)];
    chosenWord = chosenWord.toUpperCase();
    console.log(chosenWord);

    // replace every letter with span containing dash
    let displayItem = chosenWord.replace(/./g,'<span class="dashes"> _ </span>');

    // Display each element as a span
    userInputSection.innerHTML = displayItem;
};


// Initial Function (called when page loads/user clicks New Game)
const initializer = () => {
    winCount = 0;
    count = 0;

    // Initially erase all content and hide letters/new game button
    userInputSection.innerHTML = "";
    optionsContainer.innerHTML = "";
    letterContainer.classList.add("hide");
    newGameContainer.classList.add("hide");
    letterContainer.innerHTML = "";

    // For creating letter buttons
    for(let i =65; i <91; i++){
        let button = document.createElement("button");
        button.classList.add("letters");
        // Number to ASCII[A-Z]
        button.innerText = String.fromCharCode(i);
        // character button click
        button.addEventListener("click", () => {
            let charArray = chosenWord.split("");
            let dashes = document.getElementsByClassName("dashes");
            // if array contains a clicked value, replace matched dash with letter, else draw on canvas
            if(charArray.includes(button.innerText)){
                charArray.forEach((char, index) => {
                    // if char in array is same as clicked button
                    if(char === button.innerText){
                        // replace dash with letter
                        dashes[index].innerText = char;
                        // increment counter
                        winCount += 1;
                        // if winCount equals word length
                        if(winCount === charArray.length){
                            resultText.innerHTML = `<h2 class='win-msg'>YOU WIN!</h2><p class='win-msg'>The word was <span>${chosenWord}</span></p>`;
                            // block all buttons
                            blocker();
                        };
                    };
                });
            } else {
                // lose count
                count += 1;
                // drawing hangman
                drawMan(count);
                // Count == 6: head, body, 2 arms, 2 legs;
                if (count == 6){
                    resultText.innerHTML = `<h2 class='win-msg'>You Lose.</h2><p class='win-msg'>The word was <span>${chosenWord}</span></p>`;
                    blocker();
                }
            }
            // disable clikced button
            button.disabled = true;
        })
        letterContainer.append(button);
    }


    displayOptions();
    
    // Call to Canvas creator (for clearing previous canvas and creating initial canvas)
    let { initialDrawing } = canvasCreator();
    // initialDrawing draws the frame
    initialDrawing();

};

// Canvas
const canvasCreator = () => {
    let context = canvas.getContext("2d");
    context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 2;

    // For drawing lines
    const drawLine = (fromX, FromY, toX, toY) => {
        context.moveTo(fromX, FromY);
        context.lineTo(toX, toY);
        context.stroke();
    };

    const head = () => {
        context.beginPath();
        context.arc(70, 30, 10, 0, Math.PI*2, true);
        context.stroke();
    };

    const body = () => {
        drawLine(70, 40, 70, 80);
    };

    const leftArm = () => {
        drawLine(70, 50, 50, 70);
    };

    const rightArm = () => {
        drawLine(70, 50, 90, 70);
    };

    const leftLeg = () => {
        drawLine(70, 80, 50, 110);
    };

    const rightLeg = () => {
        drawLine(70, 80, 90, 110);
    };

    // initial frame
    const initialDrawing = () => {
    // clear canvas
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    // bottom line
    drawLine(10, 130, 130, 130);
    // left line
    drawLine(10, 10, 10, 131);
    // top line
    drawLine(10, 10, 70, 10);
    // small top line
    drawLine(70, 10, 70, 20);
    };

    return { initialDrawing, head, body, leftArm, rightArm, leftLeg, rightLeg };

};

// draw hangman
const drawMan = (count) => {
    let { head, body, leftArm, rightArm, leftLeg, rightLeg } = canvasCreator();
    switch (count) {
        case 1:
            head();
            break;
        case 2:
            body();
            break;
        case 3:
            leftArm();
            break;
        case 4:
            rightArm();
            break;
        case 5:
            leftLeg();
            break;
        case 6:
            rightLeg();
            break;
        default:
            break;
    };
};

// New Game
newGameButton.addEventListener("click", initializer);
window.onload = initializer;