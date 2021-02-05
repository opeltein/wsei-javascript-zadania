// Zadanie 1

let p1 = 2;
let p2 = 6;
if(p1>p2) {
  console.log(p1);  
} else if(p1==p2) {
  console.log("Sa rowne");  
} else {
  console.log(p2);  
} 

// Zadanie 2
let firstNumber = 111;
let secondNumber = 222;
let thirdNumber = 3;

if (firstNumber > secondNumber && firstNumber > thirdNumber) {

    console.log(firstNumber);

} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {

    console.log(secondNumber);
    
} else {
    console.log(thirdNumber);
}
// Zadanie 3

for (var step = 0; step < 10; step++) {

  console.log('Lubię JavaScript');
}
// Zadanie 4
let result = 0;

for(let i = 1; i<=10; i++){
    result += i;
}

console.log(result);
// Zadanie 5
for(let n = 0; n<5; n++){
    if(n%2 == 0){
        console.log(n + " parzysta");
        
    } else {
        console.log(n + " nieparzysta");
    }
}
// Zadanie 6
for ( let i = 0; i < 5; i++) {

	for ( let j = 0; j < 5; j++) {

		console.log("i= " + i + ", j= " + j);

		}
	}
// Zadanie 7
for (var i=1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}
// Zadanie 8
const star = '*'
for (let i = 0; i < 5; i++) {
    let result = '';
    for (let j = 0; j < i; j++) {
        result += star;
    }
    console.log(result)
}


// Zadanie 8a

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}
// Zadanie 8b

let star = ' *';

for(let x = 0; x < 5; x++) {
 var result = '';
 for(y = 0; y < 5 - x; y++) {
 result += ' ';
 }
 for(z = 0; z < x + 1; z++) {
 result += star;
 }
 console.log(result);
 }

// Zadanie 8c

  let tree = '';
  const height = 5;
  let stars = 1;
  for (let row = 1; row <= height; row++) {
    tree += ' '.repeat(height-row);
    tree += '*'.repeat(stars) + '\n';
    stars += 2;
  }
  console.log(tree);

// Zadanie 8d

let show = '';
  let show1 = '';
  const height = 5;
  for (let row = 1; row <= height; row++) {
    show += '*'.repeat(row)
    for (let i = row; i < height; i++) {
      show += i;
    }
    show += '\n';

    show1 += '*'.repeat(height - row + 1);
    for (let i = (height - row + 1); i < height; i++) {
      show1 += i;
    }
    show1 += '\n';
  }
  console.log(show);
  console.log("-".repeat(height));
  console.log(show1);

// Zadanie 8e

  var dart = '';
  const size = 5;
  for (let i = 1; i <= size; i++) {
    dart += ' '.repeat(size-i);
    dart += '* '.repeat(i) + '\n';
  }
  for (let i = 0; i < (size-2); i++) {
    dart += " ".repeat(size-1);
    dart += "* \n";
  }
  console.log(dart);
