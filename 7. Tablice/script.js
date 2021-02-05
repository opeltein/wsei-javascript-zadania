//Zad1
const a = ["cat", "dog"];
console.log(a);

for(let i = 0; i< a.length; i++) {
    console.log(a[i]);
}

//Zad2

var array = ["One", 2,3,4,5,"Six"];
//1
console.log(array[0], array[1])
//2
console.log(array[array.length-1])
//3
console.log(array)
//4
console.log(array.filter((x,i)=> i %2 ))
//5
console.log(array.filter((x,i)=>{
    return typeof(x) == "string"
}))
//6 
console.log(array.filter((x,i)=>{
    return typeof(x) == "number"
}))

//Zad3

let exampleArray = [1, 3, 7, 66, 462, 754];
//1
let counter = 0;
exampleArray.forEach((elem, i )=>{
    counter += elem;
})
console.log(counter);
//2
let counter1 = 0;
exampleArray.forEach((elem, i )=>{
        counter1 -= elem;
})
console.log(counter1);

//3
exampleArray.forEach((elem, i )=>{
        counter += elem;
})
console.log(counter / exampleArray.length);

//4
exampleArray.forEach((elem, i) =>{
    if (elem % 2 == 0) console.log(elem);
})

//5
exampleArray.forEach((elem, i) =>{
    if (elem % 2 != 0) console.log(elem);
})

//6
var max = 0;
for (let i = 0; i < exampleArray.length; i++){
    if (max <= exampleArray[i]){
        max = exampleArray[i];
    }
}
console.log('max: ', max);

//7
var min = 0;
for (let i = 0; i < exampleArray.length; i++){
    if (exampleArray[i] < min){
        min = exampleArray[i];
    }
}
console.log('min: ', min)

//8
console.log(exampleArray.reverse());

//Zad4
let tab = [1,2,3];

let sum = 0;

function tabSumFunction(tab) {
    for(let i = 0; i < tab.length; i++) {
        sum += tab[i]
    }
    console.log(sum);
}

tabSumFunction(tab);
//Zad 5
const func = (arr) =>{
    // getting average
    let ave = (arr.reduce((a,b)=>a+b/arr.length))
    let new_arr = arr.map((x) => x*ave)
    console.log('aaa', new_arr)
}
func([1,2,3,4])
Zad 6


const func = (arr) =>{
    let sum = 0;
    let counter = 0;
    arr.forEach((elem, i ) => {
        if(elem % 2 == 0){
          sum += elem;
           counter++;
        }
       
    })
    console.log(sum)
   
    let average = sum / counter
    console.log(average)
}

func([2,4,6,5])
    

//Zad 7 

const func = (arr) =>{
  var done = false;
    while(!done){
        done = true;
        for(var i =1; i<arr.length;i++){
            if(arr [i-1] > arr[i]){
                done = false
                var temp = arr[i-1];
                arr[i-1] = arr[i]
                arr[i] = temp
            }
        }
    }
    console.log(arr)
}

func([2,4,6,5, 22, 42]);
    
//Zad 8 
const tab1 = [11, 22, 33];
const tab2 = [44, 55, 66];
function write(tab1, tab2)
{
  var x = 0;
  const tab3 = [];

  for(var a = x; a <= tab1.length - 1; a++)
  {
    tab3[x] = tab1[x] + tab2[x];
    x++;
  }
    console.log(tab3);
}
write(tab1, tab2);

// Zadanie 9

function ccc(a,b){ 
        return a.filter(c => c != b);
}
console.log(ccc([1,2,3,4,5],3));

// Zadanie 10

const tab = [-99, -17, 0, 123, 512];
var counter = 0;
function write(tab)
{
  for( var a = counter; a < tab.length; a++)
  {
      tab[a] = (tab[a] - (2*tab[a]));
    var arr = tab;
  }
  console.log(arr);
}
write(tab);
