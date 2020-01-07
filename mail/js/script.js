var mailUtente;
var database;
var trovato = false;

mailUtente = prompt("Inserisci la tua mail");
console.log (mailUtente);

database = ["esempio1@mail", "esempio2@mail", "esempio3@mail", "esempio4@mail", "danilo@mail"];

for (var i = 0; i < database.length; i++) {
  if (mailUtente == database[i]) {
    var trovato = true;
  }
}
console.log(trovato);

if (trovato == true) {
  console.log("mail trovata");
}
else {
  console.log("mail non trovata");
}
