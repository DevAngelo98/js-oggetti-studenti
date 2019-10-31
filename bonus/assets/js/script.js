//Studente generico 
var studente = function(nome,cognome,eta) {
  this.nome = nome;
  this.cognome = cognome;
  this.eta = eta;
};

//Ritorna il nome e cognome
studente.prototype.presentati = function(){
  if(this.eta != undefined){
    console.log("Ciao, mi chiamo " + this.nome + " il mio cogome è: " + this.cognome + ", ho: " + this.eta + "anni");
  } else{
    console.log("Ciao, mi chiamo " + this.nome + " il mio cogome è: " + this.cognome);
  }
}

var studente1 = new studente("Angelo","Inglima",21);
var studente2 = new studente("Gino", "Greco", 45);
var studente3 = new studente("Alfio", "Lombardo");

var arrayStudenti = [studente1,studente2,studente3];

for(var i=0; i<arrayStudenti.length; i++){
  arrayStudenti[i].presentati();
}



//Creazione professore, saluto in modo formale o non

var prof = function (nome, cognome) {
  this.nome = nome;
  this.cognome = cognome;
}

var prof1 = new prof ("Simone", "Icardi");
var prof2 = new prof ("Chiara", "Passaro");


function saluto (persona1, persona2){

  if(persona1 instanceof studente && persona2 instanceof studente){
    console.log(persona1.nome + ":" + " Ciao " + persona2.nome + " come stai?");
  } else if (persona1 instanceof studente && persona2 instanceof prof){
    console.log("Salve prof " + persona2.nome + ", Sono lo studente: " + persona1.nome + " " + persona1.cognome);
  } else if (persona2 instanceof studente && persona1 instanceof prof){
    console.log("Salve prof " + persona1.nome + ", Sono lo studente: " + persona2.nome + " " + persona2.cognome);
  }

}

saluto(prof1, studente1);
saluto(studente1, prof2);
saluto(studente2, studente3);