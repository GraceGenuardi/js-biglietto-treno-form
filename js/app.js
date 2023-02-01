///MILESTONE 1:

//1- Inserisci Input con KM da percorrere, Nome- Cognome, -Sconto under 18 o over 65, Calcolatore e prezzo
const inputKm = document.querySelector("input");
const inputName = document.querySelector("input[name='name']");
const scegliSconto = document.querySelector("select");
const buttonCalcolatore = document.querySelector("button");
const prezzoIntero = document.querySelector("#priceOutput");




//2-selezionare da una select il tipo di sconto da applicare (3 scelte: sconto minorenne, sconto over 65, nessuno sconto)


buttonCalcolatore.addEventListener("click", function() {
  const km = parseFloat(inputKm.value);
  const name = inputName.value;
  const sconto = scegliSconto.value;
  let price = km * 0.21;


 //-SE <= 18 AVRAI UNO SCONTO DEL 20%
        //-ALTRIMENTI Prezzo 0.21 € al km

    //-SE >= 65 AVRAI UNO SCONTO DEL 40%
        //-ALTRIMENTI Prezzo 0.21 € al km 

  if (sconto === "minorenne") {
    price = price - (price * 0.2);
  } else if (sconto === "over65") {
    price = price - (price * 0.4);
  }


 //3-Al click sul pulsante calcolare il prezzo del biglietto. 
  nameOutput.innerHTML = `Grazie ${name} per l'acquisto!`;
  prezzoIntero.innerHTML = `Il prezzo del biglietto è: €${price.toFixed(2)}`;
 



});






