// RICHIAMIAMO LA CLASSE DEL BOTTONE
const buttonElement = document.getElementById("bottone");

 
// RICHIAMIAMO L'IMMAGINE
const immagineLampadina = document.getElementById("lampadina");

// RICHIAMO TITOLO
const titoloElement = document.getElementById("titolo");

 // ANDIAMO A CREARE EVENTO DI CLICK BOTTONE


 

 buttonElement.addEventListener("click", function(){
if(buttonElement.classList.contains("bg-red")){                 // ACCENDIAMO LA LAMPADINA 
    buttonElement.classList.remove("bg-red");
    buttonElement.innerHTML = "Spegnimi";
    titoloElement.innerHTML = "Sono Accesa!";
    immagineLampadina.src = "./img/yellow_lamp.png"
                             
} else {
    buttonElement.classList.add("bg-red");                    // SPEGNAMO LA LAMPADINA 
    buttonElement.innerHTML = "Accendimi";
    titoloElement.innerHTML = "Sono Spenta!";
    immagineLampadina.src = "./img/white_lamp.png"
}
 });
