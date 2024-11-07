// RICHIAMIAMO LA CLASSE DEL BOTTONE
const buttonElement = document.getElementById("bottone");

 
// RICHIAMIAMO L'IMMAGINE
const immagineLampadina = document.getElementById("lampadina");

// RICHIAMO TITOLO
const titoloElement = document.getElementById("titolo");

 // ANDIAMO A CREARE EVENTO DI CLICK BOTTONE

 buttonElement.addEventListener("click", function(){
console.log(buttonElement.classList);
if(buttonElement.classList.contains("bg-red")){
    buttonElement.classList.remove("bg-red");
    titoloElement.innerHTML = "Sono Accesa!"
} else {
    buttonElement.classList.add("bg-red");
    titoloElement.innerHTML = "La luce è spenta!"
}
 });
