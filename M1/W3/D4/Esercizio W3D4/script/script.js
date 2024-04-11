const numeri = [];

numeriTabellone();
popolaTabellone(numeri);
estrazione()


function numeriTabellone() {
    for (i=1; i<91; i++) {
        numeri.push(i);
    }
};

function popolaTabellone(numbers) {
    const tabellone = document.getElementById('tabellone')
    for (let i = 0; i < numbers.length; i++) {
    const box = document.createElement('div')
    box.classList.add('box')
    const numValue = document.createElement('h3')
    numValue.innerText = i+1;
    box.appendChild(numValue);
    tabellone.appendChild(box);
    }   
}

function estrazione () {
    const estrazione = document.querySelector('#tiraNumero')
    estrazione.addEventListener('click', function () {
    numRandom = Math.round(Math.random() * 91);
    const tagsH3 = document.querySelectorAll('h3')
    tagsH3.forEach(function(h3Element) {
        let valoreH3 = h3Element.textContent.trim()
        let numeroH3 = parseInt(valoreH3)
                if (numRandom === numeroH3) {
            document.querySelector('.box').classList.replace('box', 'numeroEstratto')
        } console.log(numRandom);
    })
    }
)
}