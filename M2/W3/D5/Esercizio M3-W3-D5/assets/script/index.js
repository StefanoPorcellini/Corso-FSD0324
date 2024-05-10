document.getElementById('year').innerText = new Date().getFullYear()
let token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNkZmI1ZDgxODQ0MjAwMTUzNzU5YjYiLCJpYXQiOjE3MTUzMzgwNzcsImV4cCI6MTcxNjU0NzY3N30.taNoqg_CTf9ABl56QpugDZpH9jblQ7vJlrwBoxfkIhI'
let url = 'https://striveschool-api.herokuapp.com/api/product/'

const deleteCard = function (e) {
    e.target.closest('.card').remove()
}

const editCard = function(e) {
    e.target.location.assign()
}

let generateGameCard = function(arrayOfGame){
    const gameCardRow = document.getElementById('gameCardRow')
    arrayOfGame.forEach((game) => {
        const newCol = document.createElement('div')
        newCol.classList.add('col')
        newCol.innerHTML = `
        <div class="card h-100 d-flex flex-column">
            <img src=${game.imageUrl} class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column justify-content-around">
            <h5 class="card-title">${game.name}</h5>
            <p class="card-text">${game.description}</p>
            <p class="card-text">Genere: ${game.brand}</p>
            <div class="d-flex justify-content-between align-item-center">
                <div class="bg-warning p-2 rounded"><p class="m-0"><b>€ ${parseFloat(game.price).toFixed(2)}</b></p></div>
                <div>
                    <button id="editCard" class="btn btn-info"><b><i class="bi bi-pencil-square text-white"></i></b></button>
                    <button class="btn btn-danger" onclick="deleteCard(event)"><i class="bi bi-trash3"></i></button>
                </div>
            </div>
            </div>
        </div>
        `
        gameCardRow.appendChild(newCol)

        const editCard = document.getElementById('editCard')
        editCard.addEventListener('click', function(){
            location.assign(`backoffice.html?id=${game._id}`)
        })
        
    })
}

const getGame = function(){
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
        
        generateGameCard(gameArray)
    })
    .catch((err) => {
        console.log('ERRORE', err)
  })
}

getGame()

