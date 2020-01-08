var mailUtente;
var database;
var trovato = false;

database = ["esempio1@mail", "esempio2@mail", "esempio3@mail", "esempio4@mail", "danilo@mail"];

mailUtente = prompt("Inserisci la tua mail");
console.log (mailUtente);

for (var i = 0; i < database.length; i++) {
  if (mailUtente == database[i]) {
    trovato = true;
  }
}
console.log(trovato);

if (trovato == true) {
  console.log("mail trovata");
}
else {
  console.log("mail non trovata");
}
