addText();
cancella ();


function addText () {
    let newText = document.getElementById('newText');
    var btnCancella = `<button id="cancella" class="material-symbols-outlined">delete</button><br>`
        document.getElementById("addText").addEventListener('click', function(){
    newList = `<li> ${newText.value} </li> ${btnCancella}`;
    document.getElementById("lista").innerHTML += newList;
    newText.value = '';})
};


function cancella () {
    document.getElementById("cancella").addEventListener('click', function(){
    let lista = document.getElementById("lista");
        if (lista.lastChild) {
            lista.removeChild(lista.lastChild);
        }
    });
};

function chkList () {
    let lista = document.getElementById("lista")
}