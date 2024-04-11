const handleSubmit = function(e) {
e.preventDefault();
addText();
cancella ();
chkList();
}

function addText () {
    let newText = document.querySelector('#newText input');
    let taskList = document.querySelector('#lista')
    let newList =    `
                        <div class="lista">
                            <span id="newTask">
                                ${newText.value}
                            </span>
                            <button class="delete">
                                <i class="fa-regular fa-trash-can"></i>                            </button>
                        </div>                  
                    `;
    taskList.innerHTML += newList;
    newText.value = '';
};


function chkList () {
    let allList = document.querySelectorAll('lista');
    for (let i = 0; i < allList.length; i++) {
        allList[i].addEventListener('click', function () {
            this.classList.toggle('checked')
        });
            }
};

function cancella () {
    let allDelete = document.querySelectorAll('.delete');
    allDelete.forEach(singleDelate => {
        singleDelate.addEventListener('click', function(){
            this.parentNode.remove();
        })        
    });
}

window.onload = function () {
    let form = document.querySelector('form');
    form.addEventListener('submit', handleSubmit);
};