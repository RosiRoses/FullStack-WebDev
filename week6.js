const heading = document.getElementById("title");
const desc = document.querySelector(".desc");
const button = document.querySelector("#changeBtn");
const bodyy = document.getElementById('boddy');

// console.log(heading, desc, button);

button.addEventListener('click', () =>{
    heading.innerText = "BYE!";
    desc.innerHTML = "<ol><li><i>I am now a list</i></li></ol>";
    bodyy.classList.add('change');
    heading.classList.toggle("highlight");
    document.body.removeChild(newItem);
});

const newItem = document.createElement('li');
newItem.innerHTML = "Fashion";
document.body.appendChild(newItem);

const list = document.getElementById('list');
const addBtn = document.getElementById('add');

addBtn.addEventListener('click', () =>{
    const li = document.createElement('li');
    li.innerHTML = 'Soap';
    list.appendChild(li);
});

const checkbox = document.getElementById("checkbox");
const hello = document.getElementById('hello');

heading.addEventListener('mouseover', () =>{
    hello.style.backgroundColor = 'pink';
});

heading.addEventListener('mouseout', () =>{
    hello.style.backgroundColor = '';
});
// heading.style.color ="pink";
// desc.style.fontSize= "20px";

const name = document.getElementById('name');
name.addEventListener('keydown', (event) =>{
    console.log("You pressed: ", event.key);
});

const form = document.getElementById("myForm");
const output = document.getElementById('output');

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const username = document.getElementById('username').value;
    if(username === ''){
        output.innerHTML = "Please enter name";
    }
    else {
        output.innerHTML = `Hello ${username}`;
    }
    
});

const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const counter = document.getElementById('counter');
let i=0;

plus.addEventListener('click', ()=>{
    i = i+1;
    counter.innerHTML = i;
});

minus.addEventListener('click', () =>{
    i=i-1;
    counter.innerHTML = i;
})


const addTask = document.getElementById('addTask');
const todolist = document.getElementById('todolist');

addTask.addEventListener('click', ()=>{
    const span = document.createElement('span');
    const delBtn = document.createElement('button');
    delBtn.innerHTML= 'Del';
    const listtask = document.createElement('li');
    const task = document.getElementById('task').value;
    listtask.innerHTML = task;
    span.appendChild(listtask);
    span.appendChild(delBtn);
    delBtn.addEventListener('click', () =>{
        // span.removeChild(listtask);
        // span.removeChild(delBtn);
        span.remove();
    });
    todolist.appendChild(span);
});
