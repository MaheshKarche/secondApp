let x = 100 + 50 - 3;

//var y = ++x;
//let z = x + y;
let Let = "Hello";
//console.log("mahesh" + " ashok" + " karche");
let answer2 = "He is called 'Johnny'";    // Single quotes inside double quotes
let answer3 = 'He is called "Johnny"';    // Double quotes inside single quotes

let vegetable = ["papaya","tomato","apple","oinion","peru"];
//console.log(vegetable.pop());
/*let v = vegetable.unshift("lemon");
console.log(vegetable)
console.log(v)*/
//console.log(vegetable.toString())

//let abc = vegetable.splice(0,1)
//vegetable.splice(1,2,"apple","kiwi")

// console.log(abc)

//console.log(vegetable);
//console.log(vegetable.join("+"))

const fruits = [44,4,9,16,25]

//console.log(fruits)

let txt = ""
/*function myFunction(value){
    console.log(value)
     console.log("______")
    txt += value ;
    console.log(txt); 
    console.log("*******")
}*/

/*function myFunction(total, value) {
    console.log("******")
    console.log(total)
    console.log(value)
    console.log("******")
    return total + value;
  } 
let abc = fruits.reduceRight(myFunction)*/


//console.log(abc)
//fruits.splice(2,1)
//let xyz = fruits.sort()
//console.log(xyz)

//console.log(fruits.reverse())



//console.log(fruits)

//var length = vegetable.length ;
//console.log(length);

//var lastName = vegetable.pop();
//var number = vegetable.length;
/* for(let i = 0; i < vegetable.length; i++ ){
    console.log(i);
    console.log(vegetable[i]);
} 
//console.log(number)
//console.log(vegetable); */


/*const abc = ["aa","bb","cc","dd"]
console.log(abc.includes("bb"))*/

//const d = new Date("s2/3/2015");

//let d = Math.random() * 10
//let d = Math.floor(Math.random() * 11)
/* let d = 25
if ( d < 30) {
    console.log(true);      
}
console.log(d) */

/*let i = 5;

for ( let j = 0 ; j < 10 ; j++ ) {

    let i = j;
    console.log("inner valus is " + i)
}

console.log("final value is " + i)*/

/*const person = [11,22,33,44,55]

let text = "" ;

for (let x in person ){
    console.log("X is " + x);
    text += person[x];
    console.log(text)

}*/
const cars = ["BMW" , "Volvo" , "Mini"];

let text = "";

for(let x of cars){
    console.log("X is --> " + x);
    text += x + "---";
    console.log("Text is --> " + text );

}