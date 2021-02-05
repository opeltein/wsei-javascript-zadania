//Zadanie 1
function something(){
	return "Udało się!";
}
console.log(something());

//Zadanie 2
Napisz funkcję która przyjmuje dowolny parametr i wyświetla go w konsoli*/

function printParam(str) {
    console.log(str);
}

printParam('anyx');
//Zad3

const exampleArray = ["bla", "add", "fsa"];

function returnArray(array) {
    
  return array;
}

console.log(returnArray(exampleArray));

//Zad4
var counter = 1;
var smth = "hello world";

function write(smth) {
  console.log(smth);
  counter++;
  if (counter > 5) {
    clearInterval(int);
    console.log("Koniec.");
  }
}
var int = setInterval(write, 3000, smth); 
