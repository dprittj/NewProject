window.addEventListener("load", ()=>{

    const submit = document.getElementById("submit");
    const stringInput = document.getElementById("userstring");
    let userString = '';

    const iterate = document.getElementById("iterate");

    function getString(){
        userString = stringInput.value;

        const display = document.getElementById("stringdisplay");
        // const p = document.createElement("p");
        display.innerHTML = "Your string is: '" + userString + "'.";
        // display.appendChild(p);

        return userString;
    }

    stringInput.addEventListener("submit", getString);
    submit.addEventListener("click", getString);

    iterate.addEventListener("click", ()=>{
        console.log("User String to iterate: " + userString)

        const output = document.getElementById("output");
        const iterate = userString[Symbol.iterator]();
        let letters = iterate.next();

        while(!letters.done){
            const p = document.createElement("p");
            p.innerHTML = letters.value;
            output.appendChild(p);
            letters = iterate.next();
        }
    
    })


})