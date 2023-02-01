//MILESTONE 1:
function calculateTicket() {
    var discount;
    var pricePerKm = 0.21;
    var totalPrice = distance * pricePerKm;
    if (discountOption === "1") {
      discount = 0.2;
    } else if (discountOption === "2") {
      discount = 0.4;
    } else {
      discount = 0;
    }
    totalPrice = totalPrice - (totalPrice * discount);
    console.log("Il prezzo del biglietto è: €" + totalPrice.toFixed(2));
  }