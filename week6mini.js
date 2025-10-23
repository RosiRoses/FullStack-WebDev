const tasks = document.getElementById('tasks');
const textbox = document.getElementById('textbox');
const add = document.getElementById('add');

textbox.addEventListener('keypress', (e) =>{
    if(e.key === 'Enter'){
        add.click();
    }
});


add.addEventListener('click', () =>{
    if(textbox.value === ""){
        return;
    }
    const span = document.createElement('span');
    span.style.display= 'flex';
    span.style.marginBottom = '5px';
    const delBtn = document.createElement('button');

    const dustBin = document.createElement('img');
    dustBin.src = "https://cdn-icons-png.flaticon.com/128/3569/3569930.png";
    dustBin.width = 18;
    dustBin.height = 20;
    

    delBtn.style.width = '35px';
    delBtn.style.height = '30px';
    delBtn.style.padding = '4px';
    delBtn.style.backgroundColor = '#f6f4d2';
    delBtn.style.borderRadius = '15px';
    delBtn.style.marginLeft = 'auto';
    delBtn.style.marginRight = '0'; 
    delBtn.appendChild(dustBin);
    const li = document.createElement('li');
    li.innerText = textbox.value.trim();
    li.style.marginRight = '15px';

    li.addEventListener('click', () => {
        li.classList.toggle('done');
    });

    span.appendChild(li);
    span.appendChild(delBtn);
    tasks.appendChild(span);
    textbox.value = "";

    delBtn.addEventListener('click', () =>{
        span.remove();
    });

});

