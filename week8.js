// const names = ['ali', 'zara', 'zain'];
// names.forEach((name, i) => console.log(i+1, name));

// const letters = ['a', 'b', 'c'];
// letters.forEach((letter, i) => console.log(i+1, letter));


// const textbox = document.getElementById('textbox');
// const btn = document.getElementById('btn');
// const pagelist = document.getElementById('list');
// const list =[];

// btn.addEventListener('click', () => {
//     const textvalue = textbox.value.trim();
//     if (textvalue === "") return;

//     list.push(textvalue);

//     textbox.value = "";
//     renderList();
// })

// function renderList(){
//     pagelist.innerHTML = "";

//     list.forEach(item => {
//         const li = document.createElement('li');
//         li.textContent = item;
//         pagelist.append(li);
//     });
// }

// const nums = [1,2,3];
// const doubled = nums.map(n => n*2);
// doubled.forEach(item => console.log(item));

// const colors = ['red', 'yellow', 'blue'];
// const upper = colors.map(item => item.toUpperCase());
// upper.forEach(item => console.log(item));

// const arr = [{price:10}, {price:20}];
// const newarr = arr.map(item => item.price);
// newarr.forEach(item => console.log(item));

const nums = [1, 2, 3, 4, 5, 6];
const evens = nums.filter(item => item % 2 === 0);
evens.forEach(item => console.log(item));

// const obj = {
//     greet(){
//         return 'hello';
//     }
// };
// console.log(obj.greet());


// const name = 'ali';
// const age = 22; 
// const person = {
//     name,
//     age
// };

// console.log(person);


// const o = {
//     val: 5,
//     f: () => console.log(this),
//     g() {console.log(this)}
// };
// o.f();
// o.g();



// const factorial = n =>{
//     let j = 1;
//     if (n<=1) return 1;
//     else{
//         for(let i=1; i<=n; i++){
//             j = j*i;
//         }
//     }
//     return j;
// };
// console.log(factorial(5));


// const average = (...vals) => vals.reduce((s,p) => s+p,0)/vals.length;
// console.log(average(1,2,3,4,5));


// function greet(name = "user"){
//     return `Hello ${name}`;
// }
// console.log(greet(null));

// function product(...nums){
//     return nums.reduce((p,n) => p*n,1);
// }
// console.log(product(1,2,3,4,5));


// const arr1 = [1,2];
// const arr2 = [3,4];
// const merged = [...arr1, ...arr2];
// console.log(merged);

// function sum(...nums){
//     return nums.reduce((s,n) => s+n,0);
// }
// console.log(sum(1,2,3,4,5,6));
// const a = [1,2,3];
// const b = [0, ...a, 5];
// console.log(b);

// const obj1 = {x:1, y:2, z:3};
// const obj2 = {...obj1, e:2, f:3 };
// console.log(obj2);

// console.log(Math.max(...[7,1,2,3]));


// const student = {
//     address: {
//         city: 'Lahore', 
//         houseno:5
//     }
// };
// const {address:{houseno}} = student;
// console.log(houseno);

// const object = {
//     name: 'x',
//     score: 70
// };
// const {score:points} = object;
// console.log(points);

// const arr = [1,2,3];
// const [first, ...rest] = arr;
// console.log(rest);

// const person = {
//     name: 'Ali',
//     age: 22,
//     address: {city:'Lahore'}
// };

// const {job:'24'} = person;
// console.log(job);

// const {address:{city}} = person;
// console.log();

// const {name: n, age: a}=person;
// console.log(n);

// const {name, age} = person;
// console.log(name, age);

// console.log(person);


// const arr = [10, 20, 30];
// console.log(arr);

// const [x,y] = arr;
// console.log([x,y]);

// const [e, ,f] = arr;
// console.log([f]);

// const [z=9] = [];
// console.log([z]);

// const [head,...rest] = arr;
// console.log(head);

// const heading = document.getElementById('heading');
// const message = `can<br>i<br>enter<br>multiple<br>lines`;
// heading.innerHTML = message;




// const name = "hania";
// const multiline = `Hello
// Hi
// Bye
// Goodbye`;
// console.log(`Hello ${name} 2+2=${2+2} ${multiline}`);

// let a = 1;
// let b = 2;

// // function add(a,b){
// //     return a+b
// // }

// const add = (a,b) => a+b;


// console.log(add(a,b));


// const list = document.getElementById('list');

// const li1 = document.createElement('li');
// li1.textContent = "orange";
// list.append(li1);

// const li2 = document.createElement('li');
// li2.textContent = "apple";
// list.append(li2);

// const li3 = document.createElement('li');
// li3.textContent = "mango";
// list.append(li3);

// // list.forEach(item => useLayoutEffect.append(item));

// const names = ['ali', 'sara', 'zehra'];
// names.forEach((name, i) => console.log(i+1, name));