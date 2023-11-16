const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOne = document.querySelector("#pass-one")
let passTwo = document.querySelector("#pass-two")
let password = []

function genPass() {
    passOne.textContent = ""
    passTwo.textContent = ""
    for (let i = 0; i < 14; i++) {
        password[i] = characters[Math.floor(Math.random() * characters.length)]
        passOne.textContent = passOne.textContent + password[i]
        password[i] = characters[Math.floor(Math.random() * characters.length)]
        passTwo.textContent = passTwo.textContent + password[i]
    }
}
