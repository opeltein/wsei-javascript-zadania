//ZAD 2
var table=[3,4,7,2,16,32,62,35,124]

setTimeout(()=>{
for(let i=0;i<table.length;i++){
    console.log(table[i]);
}
let i = 0;
    var inter = setInterval(() => {
    
        console.log(table[i]);
    i++
        if (i >=table.length) {
            clearInterval(inter);
        }},3000)
},2000)

//Zad1

var counter = 1;

function write() {
  console.log("Cześć po raz " + counter);
  counter++;
  if (counter > 15) {
    clearInterval(int);
  }
}
var int = setInterval(write, 3000); 

