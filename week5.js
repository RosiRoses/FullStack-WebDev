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