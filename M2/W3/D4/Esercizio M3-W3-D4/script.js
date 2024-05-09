let apiKey = 'ArRvucPz3eXwtmXlXgTqFnesdYbV0STvJI1TGcRbCeKyPp0cnLYQzO5i'
let pexelsLink = 'https://api.pexels.com/v1/search'
let fullLink = ''
let queryPhotoItaly = '?query=Italy'
let queryPhotoFrance = '?query=France'
let loadFirst = document.getElementById('loadFirst')
let loadSecond = document.getElementById('loadSecond')
let photos
let newSearch
const row = document.getElementById('RowOfCards')
const searchContainer = document.getElementById('searchContainer')

getPhotoItaly = function(){
    row.innerHTML = ''
    fullLink = ''
    fullLink = pexelsLink + queryPhotoItaly
    getPhoto()
}

getPhotoFrance = function() {
    row.innerHTML = ''
    fullLink = ''
    fullLink = pexelsLink + queryPhotoFrance
    getPhoto()
}

searchLink = function(){
    row.innerHTML = ''
    fullLink = ''
    fullLink = pexelsLink + newSearch
    console.log('nuovo link', fullLink);
    getPhoto()
}

const generatePhotoCard = function(photos) {
    photos.forEach(photo => {
        const newCol = document.createElement('div')
        newCol.classList.add('col-md-4')
        newCol.innerHTML = `
                            <div class="card mb-4 shadow-sm">
                                <img
                                    src="${photo.src.original}"
                                    class="bd-placeholder-img card-img-top"
                                    alt="${photo.alt}"
                                />
                                <div class="card-body">
                                    <h5 class="card-title">${photo.alt}</h5>
                                    <p class="card-text">
                                    ${photo.photographer}
                                    </p>
                                    <div
                                    class="d-flex justify-content-between align-items-center"
                                    >
                                    <div class="btn-group">
                                        <button
                                        type="button"
                                        class="btn btn-sm btn-outline-secondary"
                                        >
                                        View
                                        </button>
                                        <button
                                        type="button" onclick="hideCard(event)"
                                        class="btn btn-sm btn-outline-secondary"
                                        >
                                        Hide
                                        </button>
                                    </div>
                                    <small class="text-muted">id: ${photo.id}</small>
                                    </div>
                                </div>
                            </div>
                       `
        row.appendChild(newCol)
        });
        }

const searchFunc = function () {
    searchContainer.innerHTML = ''
    const searchDiv = document.createElement('div')
        searchDiv.innerHTML = 
                                `
                                <form id="searchForm" class="d-flex" role="search">
                                    <input id="search-input" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                                    <button id="inputBtn" class="btn btn-outline-success" type="submit">Search</button>
                                </form>
                                `
        searchContainer.appendChild(searchDiv)
        document.getElementById('searchForm').addEventListener('submit', submitEvent)
}

submitEvent = function(e) {
    e.preventDefault()
    const searchInput=document.getElementById('search-input')
    newSearch = '?query=' + searchInput.value
    console.log('newsearch', newSearch);
    searchLink()
}


const hideCard = function(e){
    e.target.closest('.card').remove()
}

const getPhoto = function() {

    fetch(fullLink, {
        headers: { 
            'Authorization' :  apiKey,
        }        
    })
    .then((response) => {
        if(response.ok) {
            return response.json()
        } else {
            throw new Error('Errore file non trovato');
        }
    })
    .then((array) => {
        console.log('FOTO', array);
        photos=array.photos
        console.log(photos);
        
        generatePhotoCard(photos)
        searchFunc()
    })
    .catch((err) => {
        console.log('ATTENZIONE ', err);
    })
}

