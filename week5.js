const s= "seventeen";
const n = 5;
const y= '5';
const x=null;
const z=null;

randInt(1,6);
function randInt(min,max){
    var a = max-min+1; //ensures full range of outcomes
    var b = Math.random()*a; //gives decimal b/w 0 and 5.9
    var c = Math.floor(b)+min; //now numbers are 0-5
 // adding +min changes the range to 1-6
    console.log(c);
}


shorten(s, 3);
function shorten(text, max){
    if(text.length > max){
        console.log(text.slice(0,max)+"...");
    }
    else{
        console.log(text);
    }
}



isEqual(x,z);
function isEqual(a,b){
    console.log("testing ==");
    console.log(a==b);
    console.log("testing ===");
    console.log(a===b);    
    
}





console.log(+5);
// console.log(5++);
// console.log(++5);

console.log(parseInt('123')+n);
console.log(Math.random()*100);
console.log(Math.floor(5.0));

console.log(`We are ${s} and are ${n}`);



console.log(s.replace('teen', 'toon'));
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.slice(2,7));
console.log(s.substring(0,-1));
console.log(s.indexOf('t'));
console.log(s.includes('teen'));
console.log(s.trim());


const arr = ['apple','banana', 'orange', 'mango', 'pumpkin'];
console.log(arr);
arr.push('cherry');
console.log(arr);
arr.pop();
console.log(arr);
arr.shift();
console.log(arr);
arr.shift();
console.log(arr);
arr.unshift('kiwi');
console.log(arr);
console.log(arr[2]);
console.log(arr.length);
console.log('old');
for(let q=0; q<arr.length; q++){
    console.log(arr[q]);
}
console.log('modern');
for(const item of arr){
    console.log(arr[item]);
}

const user = {
    name: 'hania',
    age: 21,
    favorite_color: 'pink'
};

console.log(user.name);
console.log(user['favorite_color']);
user.email = 'rosi@gmail.com';
console.log(user.email);
// delete user.age;
console.log(user.age);

for (const key in user){
    console.log(user[key]);
}


console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

const book ={
    title: 'Why enhypen is the best group',
    author: 'Sunghoon bias',
    pages: 75000
};

function describeBook (book) {
    return (`Title: ${book.title} -- By: ${book.author} -- Page count: ${book.pages} ` );
    // console.log(`Title: ${book.title} -- By: ${book.author} -- Page count: ${book.pages} ` );
}

console.log(describeBook(book));

function reverseString(str){
    const rev = [];
    for(let i=(s.length-1); i>=0; i--){
        rev.push(str[i]);
    }
    console.log(rev.join(''));
    // console.log(str.split('').reverse().join(''));
}
reverseString(s);
const day =1;
switch(day){
    case 0:
        console.log('Sunday');
        break;
    case 1: 
        console.log('Monday');
        break;
    default:
        console.log('Today');
}

function isEven(n){
    if(n%2===0){
        return true;
    }
    else{
        return false;
    }
}
for (let i=0; i<=10; i++){
    console.log(isEven(i));
}
let r=0;
// do{
//     console.log(r);
//     r++;
// }while(r<=10);

while(r<arr.length){
    console.log(arr[r]);
    r++;
}

function calculator(a, b, op){
    if(op==='+'){
        return a+b;
    }
    else if( op === '-'){
        return a-b;
    }
    else if(op==='*' || op==='x'){
        return a*b;
    }
    else if(op==='/'){
        return a/b;
    }
    else if(op==='%'){
        return a%b;
    }
    else if(op==='^'){
        return Math.pow(a,b);
    }
}
console.log(calculator(6,3,'^'));

function rollDice(){
    let frequency = [0,0,0,0,0,0,0];
    for(let i=1; i<=1000; i++){
        let range = (Math.random()*6)+1;
        range = Math.floor(range);
        switch(range){
            case 1:
                frequency[0]++;
                break;
            case 2:
                frequency[1]++;
                break;
            case 3:
                frequency[2]++;
                break;
            case 4:
                frequency[3]++;
                break;
            case 5:
                frequency[4]++;
                break;
            case 6:
                frequency[5]++;
                break;
            default:
                frequency[6]++;
        }
    }
    console.log(frequency);
}

rollDice();

const task = document.getElementById(task);
if(task===!0 || task===!null){
    console.log(task);
}


// console.log("hello");

// console.log(Number('90'));

// // console.log(0==='0');
// const p= null || 'default';
// console.log(p);

// let stringoo = "stringoo";
// console.log(typeof stringoo);

// let numberoo=9.2;
// console.log(typeof numberoo);

// let falsy= true;
// console.log(typeof falsy);

// let objecty = null;
// console.log(typeof objecty);

// let nodefine = undefined;
// console.log(typeof nodefine);

// let curly = {};
// console.log(typeof curly);

// let squary = [];
// console.log(typeof squary);

// let z;
// console.log(z);









// const colors = ['red'];
// console.log(colors);
// colors.push('blue');
// console.log(colors);
// colors.push('blue');
// console.log(colors);
// colors=[];
// console.log(colors);





// let a=3;

// console.log(a);
// a=6;
// console.log(a);

// const b=10;
// console.log(b);
// // b=11;
// // console.log(b);

// var c=1;
// console.log(c);
// c=2;
// console.log(c);