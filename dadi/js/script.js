var dadoGiocatore1;
var dadoGiocatore2;
var esito;

alert("Premi OK per lanciare i dadi")

dadoGiocatore1 = Math.floor(Math.random() * 6) + 1;
console.log(dadoGiocatore1);

dadoGiocatore2 = Math.floor(Math.random() * 6) + 1;
console.log(dadoGiocatore2);

esito = "pareggio";

if (dadoGiocatore1 > dadoGiocatore2) {
  esito = "vince giocatore 1";
}
else if (dadoGiocatore1 < dadoGiocatore2) {
  esito = "vince giocatore 2";
}

console.log(esito);
