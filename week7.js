const sname = document.getElementById('name');
const score = document.getElementById('score');
const increase = document.getElementById('increase');
const greater = document.getElementById('greater');
const results = document.getElementById('results');
const msg = document.getElementById('msg');
let nameVal = [];
let scoreVal = [];
const enterBtn = document.getElementById('enterBtn');
const increaseBtn = document.getElementById('increaseBtn');
const greaterBtn = document.getElementById('greaterBtn');

enterBtn.addEventListener('click', () =>{
    nameVal.push(sname.value);
    scoreVal.push(score.value);

    if(scoreVal === 0 || nameVal === 0){
        msg.innerText = "Enter values in name and score field";
    }
    else{
        for(let i=0; i<nameVal.length; i++){
            msg.innerText = `${nameVal[i]} ${scoreVal[i]}\n`;
        }
    }

    sname.value = "";
    score.value = "";
    
});


// let colors= ["red", "blue", "green"];
// colors.push("yellow");
// colors.shift();
// console.log(colors);

// for (let color of colors){
//     console.log(color);
// }

// let nums=[2,4,6];
// for (let num of nums){
//     console.log(num*2);
// }

// let students = ["Ali", "Sara", "Zain"];
// students.forEach(function(student){
//     console.log("Hello, " + student);
// });
// students.forEach(s => console.log("hi " + s));

// let fruits = ["apple", "banana", "mango"];
// fruits.forEach(s=>console.log(s.toUpperCase()));

// let nums = [1, 2, 3, 4];
// let doubled = nums.map(n=> n*2);
// console.log(doubled);

// let ages = [40, 10, 12, 34, 54, 23, 65];
// let adults = ages.filter(age => age >= 20);
// console.log(adults);

// let prices = [10,20,30];
// let total = prices.reduce((sum,p) => sum+p, 0);
// console.log(total);

// let marks = [90, 45, 80, 30, 60];
// let passing = marks.filter(mark => mark>=50);
// let bonus = marks.map(mark => mark+5);
// let total = marks.reduce((sum, p) => sum+p,0);
// console.log(marks);
// console.log(passing);
// console.log(bonus);
// console.log(marks);
// console.log(total);

