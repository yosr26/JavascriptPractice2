let nom = document.querySelector('.inputN');
let list = document.querySelector('ul');
let Btn = document.querySelector('button');

function handleAjout(e){

    if (nom.value == ''){
        window.alert("empty field");
    }
    else{
    let listItem = document.createElement("li");
    list.appendChild(listItem);
    listItem.innerText = nom.value;}
}

function handleChange(){
    Btn.innerText = 'ajouter '+nom.value+' à la liste';
}

