let lower = 'qwertyuiopasdfghjklzxcvbnm'
let upper = 'QWERTYUIOPASDFGHJKLZXCVBNM'
let numbers = '123456789'
let symbols = '/*-+!@#$%^&()_=`~\|;:{}[]<>?'

const result = document.getElementById('passwordGenerated')

const generate = document.getElementById('generate')
generate.addEventListener('click', function(){

    getPassword(8, lower, upper, numbers, symbols);

})

const copy = document.getElementById('copy')
copy.addEventListener('click', function() {

    copyPassword()

})

function getPassword(length, lower, upper, numbers, symbols){
    
    let allCharacters = lower + upper + numbers + symbols;
    let password = ''

    for (let i = 0; i <= length; i++){
        let ramdonIndex = Math.floor(Math.random() * allCharacters.length)
        password += allCharacters[ramdonIndex]
    }

    result.innerHTML = password

}

function copyPassword(){
    navigator.clipboard.writeText(result.textContent)
}