const currentYear = new Date().getFullYear()
document.getElementById('curerntYear').innerText = currentYear



const getBooks = function() {
    fetch('https://striveschool-api.herokuapp.com/books')
    .then((response)=> {
        if (response.ok) {
            return response.json()
        } else          
            throw new Error('File Not Found')
    })
    .then((arrayOfCards)=>{
        console.log('libri: ', arrayOfCards);
        let genCards = () => {
            const cardContainer = document.getElementById('cardContainer')
            arrayOfCards.forEach((card) => {
            cardContainer.innerHTML += `
                <div class="card border-info" style="width: 18rem;">
                        <img src="${card.img}" class="card-img-top" alt="card title">
                        <div class="card-body">
                          <h4 class="card-title">${card.title}</h4>
                          <p class="card-text"><b>€ <span id="price">${card.price}</span></b></p>
                          
                          <div class="d-flex justify-content-between">
                                <a href="#" class="btn btn-success">Add to <span><i class="bi bi-cart4"></i></span></a>
                                <a href="#" class="btn btn-danger"><i class="bi bi-trash3"></i></a>
                          </div>
                        </div>
                </div>
                `
          

            })
         }
        genCards(arrayOfCards)
    })
    .catch((err)=>{console.log('ERROR: ', err);})
}

getBooks()

