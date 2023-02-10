let input = document.querySelector("input");
let ajoutBtn = document.querySelector(".ajoutBtn");
let containerEnregistré = document.querySelector(".containerEnregistré");
let containerVacciné = document.querySelector(".containerVacciné");

let index = 0;
function ajoutEnregistré(){
  let name = input.value;
  
  let div = `<div class="enregistré"><p>${name}</p>
  <button class="vaccinBtn" id='${index}'>V</button></div>`
  containerEnregistré.innerHTML+=div;
  index++
  console.log(index);
  let enrBtn = document.querySelectorAll(".vaccinBtn");
  enrBtn.forEach(ajoutVacciné);
   
  
}

function ajoutVacciné(btn){
  btn.onclick = function (){ 
      let element = btn.parentElement
      containerVacciné.append(element)
      element.children[1].innerText= "X"

      let deleteBTN = document.querySelectorAll(".containerVacciné button")
      deleteBTN.forEach(btn=> {
          btn.onclick = function(){
              btn.parentElement.remove()
          }
      })

  }

}


input.onkeyup = sajelFelLocalStorage

function sajelFelLocalStorage(){
  localStorage.setItem("enregistré",input.value)
}

console.log(localStorage.getItem("enregistré"));


// append ---> string
// appendCHild ---> node only

