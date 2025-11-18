const list = document.getElementById('list');

const li1 = document.createElement('li');
li1.textContent = "orange";
list.append(li1);

const li2 = document.createElement('li');
li2.textContent = "apple";
list.append(li2);

const li3 = document.createElement('li');
li3.textContent = "mango";
list.append(li3);

// list.forEach(item => useLayoutEffect.append(item));

const names = ['ali', 'sara', 'zehra'];
names.forEach((name, i) => console.log(i+1, name));