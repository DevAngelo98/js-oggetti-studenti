var studente = {
  "nome" : "" ,
  "cognome" : "",
  "eta" : ""
};


for (const key in studente) {
  console.log(key);
}

//Creo il primo studente
var studente1 = {
  "nome" : "Angelo" ,
  "cognome" : "Inglima"
};

//Creo il secondo studente
var studente2 = {
  "nome" : "Giuseppe" ,
  "cognome" : "Palermo"
};

//Creo il terzo studente
var studente3 = {
  "nome" : "Gino" ,
  "cognome" : "Greco"
};

var arrayOggetti = [studente1,studente2,studente3];

for(var i =0; i< arrayOggetti.length; i++){

  var precdente = document.getElementById("box").innerHTML;
  document.getElementById("box").innerHTML =  precdente + "Il nome è: " + arrayOggetti[i].nome + " Il cognome è: " + arrayOggetti[i].cognome +"<br>";
}


var nomeUser = prompt("inserisci il nome: ");
var cognomeUser = prompt("inserisci il cognome: ");
var etaUser = prompt("inserisci l'età: ");

var studenteUtente = {};

studenteUtente.nome = nomeUser;
studenteUtente.cognome = cognomeUser;
studenteUtente.eta = etaUser;

arrayOggetti.push(studenteUtente);


for(var i =0; i< arrayOggetti.length; i++){
  
  var precdente = document.getElementById("box").innerHTML;
  document.getElementById("box").innerHTML =  precdente + "<br>" + "Il nome è: " + arrayOggetti[i].nome + " Il cognome è: " + arrayOggetti[i].cognome +"<br>";
}



// //Funzione che ritorna nome e cognome
  // "nomeCognome" : function(){
  //   return "Il nome è: " + this.nome + " Il cognome è: " + this.cognome;
  // }



