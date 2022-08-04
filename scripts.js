const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


let button = document.getElementById('generateBtn')
let password = document.getElementById('pwField')
let passwordLength = 14
let restart = document.getElementById('restartLink')




function getRandomCharacter (){
    let randomChar = Math.floor( Math.random() * characters.length)
    return characters[randomChar]
}


function newPassword () {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}

const generatedPasswordOne = newPassword() // Named the value put out by newPassword()

function displayPassword () {
    password.innerText = generatedPasswordOne
    restart.style.display = 'block'
}


button.addEventListener("click", displayPassword)
