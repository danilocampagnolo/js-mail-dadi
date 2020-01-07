var dadoGiocatore1;
var dadoGiocatore2;

alert("Premi OK per lanciare i dadi")

dadoGiocatore1 = Math.floor(Math.random() * 6) + 1;
console.log(dadoGiocatore1);

dadoGiocatore2 = Math.floor(Math.random() * 6) + 1;
console.log(dadoGiocatore2);

if (dadoGiocatore1 > dadoGiocatore2) {
  console.log("il giocatore 1 ha vinto");
}
else if (dadoGiocatore1 == dadoGiocatore2) {
  console.log("pari")
}
else {
  console.log("il giocatore 2 ha vinto");
}
