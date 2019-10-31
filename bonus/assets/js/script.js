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

studente1 = new studente("Angelo","Inglima",21);
studente2 = new studente("Gino", "Greco", 45);
studente3 = new studente("Alfio", "Lombardo");

var arrayStudenti = [studente1,studente2,studente3];

for(var i=0; i<arrayStudenti.length; i++){
  
  arrayStudenti[i].presentati();

}