//Zad1
const buz = document.querySelector('#buz');

const buzParent = buz.parentElement;
console.log(buzParent);

const baz = document.querySelector('#baz');

const bazBrother =baz.previousElementSibling;
const bazBrother2 = baz.nextElementSibling;

console.log(bazBrother);
console.log(bazBrother2);

const foo = document.querySelector('#foo');

const fooChildren = foo.children;
console.log(fooChildren);

const fooParent = foo.parentElement;

console.log(fooParent);

const fooFirstChild =foo.firstElementChild;

console.log(fooFirstChild);

const fooMiddleChild = foo.children[1]

//Zad2
  let downloadTxt = function(elementId) {
        let el = document.querySelector(`#${elementId}`);
        el.addEventListener('click', function(event) {
            console.log(event.target.textContent.trim());
        });
    }
    downloadTxt('ex2');
//Zad3
const buttons = document.querySelectorAll("#ex3 div button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
       const span = button.nextElementSibling;
        if(span.style.display === "none") {
            span.style.display = "block";
        } else {
            span.style.display = "none";
        }
    });
})

//Zad4
const buttons = document.querySelectorAll("#ex3 div button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        button.parentElement.style.backgroundColor = randomColor;
    });
})

//Zad5
var divs = document.querySelectorAll("div#ex5 div");

var firstLi = document.querySelector("div#ex5 li");

divs[0].addEventListener("mouseover", function() {
    firstLi.style.backgroundColor = "red";
});


-parzyste 
var divs = document.querySelectorAll("div#ex5 div");
let allLi = document.querySelectorAll("div#ex5 li");
var firstLi = allLi[0];
var lastLi = allLi[allLi.length - 1];
let oddElements =  
allLi.forEach((element, index) => {
    if(index% 2 !== 0) oddElements.push(element);
});

for(let i=0; i<divs.length; i++){
    divs[i].addEventListener("mouseover", function() {
        const color = this.style.backgroundColor;
        //firstLi.style.backgroundColor = color; 
        //lastLi.style.backgroundColor = color;
        
        /*oddElements.forEach((element) => {
            element.style.backgroundColor = color;
        });*
    });

}
-cała lista 
var list = document.querySelector("div#ex5 ul");
var divs = document.querySelectorAll("div#ex5 div");
let allLi = document.querySelectorAll("div#ex5 li");
var firstLi = allLi[0];
var lastLi = allLi[allLi.length - 1];
let oddElements = [];
allLi.forEach((element, index) => {
    if(index% 2 !== 0) oddElements.push(element);
});



for(let i=0; i<divs.length; i++){
    divs[i].addEventListener("mouseover", function() {
        const color = this.style.backgroundColor;
        //firstLi.style.backgroundColor = color; 
        //lastLi.style.backgroundColor = color;
        
        /*oddElements.forEach((element) => {
            element.style.backgroundColor = color;
        });*/
        
      /*  allLi.forEach((element) => {
            element.style.backgroundColor = color;
        }); */
        list.style.backgroundColor = color;
        
    });

}


//Zad6
const mainDiv = document.getElementById('ex6');

let one = mainDiv.firstElementChild.firstElementChild.firstElementChild;

let two = mainDiv.firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;

let three = mainDiv.parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild;


console.log(one);
console.log(two);
console.log(three);
