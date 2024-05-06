let petNameInput = document.getElementById('petNameInput')
let ownerNameInput = document.getElementById('ownerNameInput')
let speciesInput = document.getElementById('speciesInput')
let breedInput = document.getElementById('breedInput')

let cardContainer = document.getElementById('cardConteiner')
let addPetBtn = document.getElementById('addPet')

let pets = []

class Pet {
    constructor (_petName, _owerName, _species, _breed) {
        this.petName = _petName
        this.owerName = _owerName
        this.species = _species
        this.breed = _breed
    }

    checkOwner(petOwn) {
        if (this.owerName === petOwn.owerName) {
            return true
        } else {return false}
    }
}

const createCard = function() {
    cardContainer.innerHTML = ''
    pets.forEach((pet) => {
        const newDiv = document.createElement('div')
        newDiv.classList.add('col')
        newDiv.innerHTML = `
          <div class="card shadow-sm ">            
              <div class="card-body">
                  <h5 class="card-title">Nome Animale: ${pet.petName}</h5>
                  <h5 class="card-title">Nome Proprietario: ${pet.owerName}</h5>
                  <h5 class="card-title">Specie: ${pet.species}</h5>
                  <h5 class="card-title">Razza: ${pet.breed}</h5>
              </div>
          </div>
        `
        cardContainer.appendChild(newDiv)
    })
}

addPetBtn.onclick = function(e) {
    e.preventDefault()
    let newPet = new Pet(
        petNameInput.value,
        ownerNameInput.value,
        speciesInput.value,
        breedInput.value
    )
    pets.push(newPet)
    createCard()
    petNameInput.value = ''
    ownerNameInput.value = ''
    speciesInput.value = ''
    breedInput.value = ''
}

