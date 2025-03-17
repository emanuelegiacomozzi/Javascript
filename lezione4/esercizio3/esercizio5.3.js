document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    let tentativo = parseInt(document.getElementById("tentativo").value); 

    let range = () => {
        let randomNumber = Math.floor(Math.random() * 101); 
        return randomNumber;
    } 

    let indovina = () => {
        if (tentativo === range()) {
            document.getElementById("indovinato").innerHTML = "Hai indovinato!";
        } else if (tentativo > range()) {
            document.getElementById("maggiore").innerHTML = "Il numero inserito è più grande!";
            document.getElementById("minore").innerHTML = ""; 
        } else if (tentativo < range()) {
            document.getElementById("minore").innerHTML = "Il numero inserito è più piccolo!";
            document.getElementById("maggiore").innerHTML = "";
        } else if (tentativo > 100 || tentativo < 0) {
            document.getElementById("errore").innerHTML = "Errore! Inserire un numero valido";
        }
    };
    indovina(); 

});