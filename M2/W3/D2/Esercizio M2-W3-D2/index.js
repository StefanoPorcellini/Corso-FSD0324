//Esercizio 1

let nameInput = document.getElementById('nameText')
let precedentNameSaved = document.getElementById('precedentSaved')
let precedentSavedInput = document.getElementById('precedentSavedInput')

let enableBtn = function (s) {
if (s === 'enable') {
    document.getElementsByClassName('btn-danger')[0].removeAttribute('disabled')
    } 
    else { 
        document.getElementsByClassName('btn-danger')[0].setAttribute('disabled', true)
    }
}
if (localStorage.getItem('name')) {
    enableBtn('enable')
    precedentNameSaved.classList.remove('d-none')
    precedentSavedInput.innerHTML = localStorage.getItem('name')
}

const saveName = function() {
    const nameValue = nameInput.value
    localStorage.setItem('name', nameValue)
    enableBtn('enable')
}

const cancelName = function() {
    localStorage.removeItem('name')
    enableBtn('disable')
    precedentNameSaved.classList.add('d-none')

}

//Esercizio 2
let spanTimer = document.getElementById('timer')

let counter = parseInt(sessionStorage.getItem('timer')) || 0

const timer = function() {
    counter++
    spanTimer.textContent = counter
    sessionStorage.setItem('timer', counter)
}

setInterval(timer, 1000)

spanTimer.textContent = counter


