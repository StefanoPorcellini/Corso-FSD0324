document.getElementById('year').innerText = new Date().getFullYear()

let token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZmI1ZDgxODQ0MjAwMTUzNzU5YjYiLCJpYXQiOjE3MTUzMzgwNzcsImV4cCI6MTcxNjU0NzY3N30.taNoqg_CTf9ABl56QpugDZpH9jblQ7vJlrwBoxfkIhI'
let url = 'https://striveschool-api.herokuapp.com/api/product/'
let metToUse
const addressBarContent = new URLSearchParams(location.search)
const gameId = addressBarContent.get('id')
console.log('gameId', gameId);

let newURL = url + gameId
console.log('url per eliminare e modificare', newURL);

const nameInput = document.getElementById('name')
const descriptionInput = document.getElementById('description')
const gameTypeInput = document.getElementById('gameType')
const imgUrlInput = document.getElementById('imgUrl')
const priceInput = document.getElementById('price')

const loadSavedGame = function() {
    fetch(url, {
        method: 'GET',
        headers: {"Authorization": token}})
    .then((response) =>{
        if (response.ok) {
            return response.json()
        } else {
            throw Error('Errore nella lettura dei dati')
        }            
    })
    .then((gameArray) => {
        console.log('array recuperato', gameArray);
        nameInput.value = gameArray[0].name
        descriptionInput.value = gameArray[0].description
        gameTypeInput.value = gameArray[0].brand
        imgUrlInput.value = gameArray[0].imgUrl
        priceInput.value = gameArray[0].price
        
    })
    .catch((err) => {
        console.log('ERRORE', err)
  })}


const createButton = function(e) {
        e.preventDefault()
        metToUse =  'POST'
        settingsGameGame()
}

const resetBtn = function(){
        nameInput.value = ''
        descriptionInput.value = ''
        gameTypeInput.value = ''
        imgUrlInput.value = ''
        priceInput.value = ''
}

if (gameId) {
    document.getElementById('delateBtn').removeAttribute('disabled')
    document.getElementById('modBtn').removeAttribute('disabled')
    document.getElementById('createBtn').setAttribute('disabled', true)
    document.getElementById('resetBtn').setAttribute('disabled', true)
    document.getElementById('gameTitle').innerText = `Game's Edit`
    loadSavedGame()
}

class Game {
    constructor(_name, _description, _brand, _imageUrl, _price) {
        this.name = _name
        this.description = _description
        this.brand = _brand
        this.imageUrl = _imageUrl
        this.price = _price
    }
}

const settingsGame = function() {
    const gameFromForm = new Game(
        nameInput.value,
        descriptionInput.value,
        gameTypeInput.value,
        imgUrlInput.value,
        priceInput.value,)

    if (gameId) {
        url+=gameId
    }

        fetch(url, {
            method: metToUse,
        body: JSON.stringify(gameFromForm),
        headers: {
            "Authorization": token,
            'Content-type': 'application/json'
        }          
        }
        )
    .then((response) => {
        if(response.ok) {
            if(metToUse === 'GET') {
                alert('Scheda Gioco Creata!')}
                    else {
                    alert('Scheda Gioco Modificata!')
                    window.location.replace("index.html")
                    }
            resetBtn()
        } else {
            throw new Error('Errore nel invio dei dati')
        }
    })
    .catch((err) => {
        console.log('ERRORE', err)
        alert(err)    
})}

const delateButton = function(e) {
    e.preventDefault()
    metToUse =  'DELETE'
    console.log('metodo', metToUse);
    console.log(gameId);
    delateGame()    
}

const modButton = function(e) {
    e.preventDefault()
    metToUse =  'PUT'
    console.log('metodo', metToUse);
    console.log(gameId);
    settingsGame()    
}

const delateGame = function() {
       fetch(newURL, {
            method: metToUse,
        headers: {
            "Authorization": token,
        }          
        }
        )
    .then((response) => {
            if(response.ok) {
            alert('Scheda Gioco Eliminata!')
            window.location.replace("index.html")
        } else {
            throw new Error('Errore nel invio dei dati')
        }
    })
    .catch((err) => {
        console.log('ERRORE', err)
        alert(err)    
})}


