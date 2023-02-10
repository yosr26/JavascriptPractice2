let fileInput = document.querySelector(".fileInput");
let nameInput = document.querySelector(".nameInput");
let btn = document.querySelector("button");
let containerStudent = document.querySelector(".containerStudent");
let index = 0;
function addStudent(){
    let name = nameInput.value;
    console.log(name);
    let div = `<button id="${index}">supprimer</button>
    <p>Titre:${name}</p>
    <img src="${URL.createObjectURL(fileInput.files[0])}" width="100">`;
    containerStudent.innerHTML += div;
    index ++;
    console.log(index);
    let dltBtns = document.querySelectorAll(".containerStudent button");
    dltBtns.forEach(btn =>{
       btn.onclick = function(){ 
        btn.parentElement.remove();
       }
    })
}


btn.addEventListener("click", addStudent);
