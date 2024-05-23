window.addEventListener("load", function(e){

    // buttons
    const digi_5 = document.getElementById("5-digi");
    const digi_4 = document.getElementById("4-digi");
    const digi_3 = document.getElementById("3-digi");
    const digi_2 = document.getElementById("2-digi");
    const digi_1 = document.getElementById("1-digi");

    // reference arrays
    const digitArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const namesArr = ["Smith", "Johnson", "Nguyen", "Lee", "Isaac",
    "Carson", "Blais", "Joyce", "Theo", "Anders",
    "Douglass", "Arthur", "Samuel", "Stephen", "Jackie",
    "Alex", "Ashley", "Billie", "Daniel", "Sydney",
    "Tatum", "Taylor", "Jean", "Andy", "Grant",
    "L.", "B.", "J.", "F.", "W.",
    "Scott", "Terry", "Mary", "H.", "P."];

    // action methods
        // returns a random number from a reference array
    function rng_return(arr) {
        const rngVal = Math.floor(Math.random()* arr.length);
        return rngVal;
    }
    
        // returns a random string of numbers from a reference array, of the length provided
    function rng_id(idLength, array){
        let rngID = '';
    
        for (i = 0; i < idLength; i++) {
            rngID = rngID + rng_return(array);
        }

        rngID = rngID.padStart(5, '0');
        console.log("rng_id return: " + rngID)
        return rngID;
    }

        // creates an ARRay holding a random number ID and a value of either '2' or '3', indicating how many names the ID-holder will have
    function assignIdArr(rngID){
        let idArr = [];
        idArr.unshift(rngID);
    
        if (rngID%2 == 0){
            const nameVal = 2;
            idArr.push(nameVal);
        } else {
            const nameVal = 3;
            idArr.push(nameVal);
        }
        return idArr;
    }
    
        // reads idArr and assigns either 2 or 3 randomly chosen names to create persona name
    function assignName(idArr){
        let assignedName = '';
    
        const nameNum = idArr[1];
        if (nameNum == 2){
            for (i = 0; i < 2; i++){
                assignedName += namesArr[Math.floor(Math.random()*namesArr.length)] + " ";
            }
        } else {
            for (i = 0; i < 3; i++){
                assignedName += namesArr[Math.floor(Math.random()*namesArr.length)] + " ";
            }
        }
        return assignedName;
    }

        // returns an ID and a name 
    function collateInfo(num){
        const idString = rng_id(num, digitArr);
        const idArr = assignIdArr(idString);
        const personaName = assignName(idArr);
    
        console.log("Collated info: " + idString, idArr, personaName);

        const csvInfo = [idString, personaName];
        const infoReadable = csvInfo[0] + " " + csvInfo[1];
    
        return infoReadable;
    } 

    // generate/display digits button events:
    digi_5.addEventListener("click", function(f){

        const a5Value = collateInfo(5);
        const display = document.getElementById("num-display");
        const ul = document.createElement("ul");
        display.appendChild(ul);
        const li = document.createElement("li");
        ul.appendChild(li).innerHTML = a5Value;
    })

    digi_4.addEventListener("click", function(f){

        const a4Value = collateInfo(4);
        const display = document.getElementById("num-display");
        const ul = document.createElement("ul");
        display.appendChild(ul);
        const li = document.createElement("li");
        ul.appendChild(li).innerHTML = a4Value;
    })

    digi_3.addEventListener("click", function(f){

        const a3Value = collateInfo(3);
        const display = document.getElementById("num-display");
        const ul = document.createElement("ul");
        display.appendChild(ul);
        const li = document.createElement("li");
        ul.appendChild(li).innerHTML = a3Value;
    })

    digi_2.addEventListener("click", function(f){

        const a2Value = collateInfo(2);
        const display = document.getElementById("num-display");
        const ul = document.createElement("ul");
        display.appendChild(ul);
        const li = document.createElement("li");
        ul.appendChild(li).innerHTML = a2Value;
    })

    digi_1.addEventListener("click", function(f){

        const a1Value = collateInfo(1);
        const display = document.getElementById("num-display");
        const ul = document.createElement("ul");
        display.appendChild(ul);
        const li = document.createElement("li");
        ul.appendChild(li).innerHTML = a1Value;
    })
    
    
})