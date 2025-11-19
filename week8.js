const average = (...vals) => vals.reduce((s,p) => s+p,0)/vals.length;
console.log(average(1,2,3,4,5));

// function greet(name = "user"){
//     return `Hello ${name}`;
// }
// console.log(greet(null));

// function product(...nums){
//     return nums.reduce((p,n) => p*n,0);
// }
// console.log(product(1,2));


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
// const message = `can
// i
// enter
// multiple
// lines`;
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