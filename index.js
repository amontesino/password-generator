const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOne = document.querySelector("#pass-one")
let passTwo = document.querySelector("#pass-two")
let password = []
let slider = document.querySelector("#pass-length")
let outputLength = document.querySelector("#output-length")
outputLength.innerHTML = "Password length: " + slider.value + " characters"
let symbolCheck = document.querySelector("#symbol-check")
let numberCheck = document.querySelector("#number-check")

function genPass() {
    passOne.textContent = ""
    passTwo.textContent = ""
    let passArray = characters
 // if you uncheck then check one of the boxes, it will still leave out symbols/numbers
 // until the the box is checked again after the page is refreshed AND generation hasn't 
 // been done on that refresh. why is this?
    if (symbolCheck.checked === false) {
        passArray.splice(62, 29)
    }
    if (numberCheck.checked === false) {
        passArray.splice(52, 10)
    }
    for (let i = 0; i < slider.value; i++) {
        password[i] = passArray[Math.floor(Math.random() * passArray.length)]
        passOne.textContent = passOne.textContent + password[i]
        password[i] = passArray[Math.floor(Math.random() * passArray.length)]
        passTwo.textContent = passTwo.textContent + password[i]
    }
}

passOne.addEventListener('click', (event) => {
    navigator.clipboard.writeText(passOne.textContent)
 // console.log("Copied password one!")
    document.querySelector("#copy-confirm").textContent = "Copied password one!"
})

passTwo.addEventListener('click', (event) => {
    navigator.clipboard.writeText(passTwo.textContent)
 // console.log("Copied password two!")
    document.querySelector("#copy-confirm").textContent = "Copied password two!"
})

slider.oninput = function() {
    outputLength.innerHTML = "Password length: " + this.value + " characters"
}