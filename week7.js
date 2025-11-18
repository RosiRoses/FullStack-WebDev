const sname = document.getElementById('name');
const score = document.getElementById('score');
const msg = document.getElementById('msg');
let nameVal = [];
let scoreVal = [];
const enterBtn = document.getElementById('enterBtn');

const increase = document.getElementById('increase');
const increaseBtn = document.getElementById('increaseBtn');

const greater = document.getElementById('greater');
const greaterBtn = document.getElementById('greaterBtn');

const results = document.getElementById('results');

enterBtn.addEventListener('click', () =>{
    const name = sname.value.trim();
    const sc = Number(score.value);

    if(name === "" || isNaN(sc) || !isNaN(name)){
        msg.innerText = "Please ensured valid values are inputed";
        return;
    }
    
    nameVal.push(name);
    scoreVal.push(sc);
    printMsg(nameVal, scoreVal);

    sname.value = "";
    score.value = "";

});

function printMsg(nameVal, scoreVal){
    let output = "";
    for(let i=0; i<nameVal.length; i++){
        output = output + `${nameVal[i]}: ${scoreVal[i]}\n`;
    }
    msg.innerText = output;
}

increaseBtn.addEventListener('click', () =>{
    const raw = increase.value.trim();

    if(raw === ""){
        msg.innerText = 'Please enter a number';
        return;
    }

    const increaseVal = Number(raw);

    if(Number.isNaN(raw)){
        msg.innerText = 'Please enter a number';
        return;
    }

    const increasedScore = scoreVal.map(scores => scores+increaseVal);
    scoreVal=increasedScore
    printMsg(nameVal, scoreVal);

    increase.value="";
});

greaterBtn.addEventListener('click', () =>{
    const raw = greater.value.trim();

    if(raw === ""){
        msg.innerText = 'Please enter a number';
        return;
    }

    const greaterVal = Number(raw);

    if(Number.isNaN(raw)){
        msg.innerText = 'Please enter a number';
        return;
    }

    const greaterScores = nameVal.map((name, i) => ({name, scores:scoreVal[i]})).filter(students => students.scores > greaterVal);

    const output = greaterScores
        .map(s => `${s.name}: ${s.scores}`)
        .join('\n');

    if(greaterScores.length === 0){
        msg.innerText = `No student found with score greater than ${greaterVal}`;
    }
    else{
        msg.innerText = output;
    }

 
    greater.value = '';
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

