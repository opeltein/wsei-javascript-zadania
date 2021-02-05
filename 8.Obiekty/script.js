// Zadanie 1

var car = {
  name: 'BMW',
  model: 'M5 e60',
  power: '507HP',
  color: 'black'
};
console.log(car);

// Zadanie 2

car.changeName = function(chg){
    this.name = chg;
}
car.changeName('Audi');
console.log(car);

// Zadanie 3

let a= {
 sum: function(arr){
        this.sum = arr.reduce((b, c) => b += c);
    }
} 
a.sum([8,9,45,1,2]);
console.log(a);

// Zadanie 4

const car = {
    name:'Audi',
    age: 10,
    color: 'Blue',
    model: 550
}

Object.keys(car).forEach((key) => console.log(`${key}: ${car[key]}`))

// Zadanie 5

const car = {
  name: 'Audi',
  age: 1,
  color: 'Graphite',
  model: 'RS6 C7 Avant'
}
Object.keys(car).forEach((key) => console.log(`${key}: ${car[key]}`))

// Zadanie 6

const car = {
  name: 'Audi',
  age: 4,
  color: 'Graphite',
  model: 'RS6 C7 Avant'
}

car.engine = "4.2 V8";

car.hello = function() {
    console.log("Hello");
}
car.hello();
