const btn= document.getElementById('toggle');
btn.addEventListener('click', () => {
    const root=document.documentElement;
    root.setAttribute('data-theme', root.getAttribute('data-theme') == 'dark'? 'light' : 'dark');
})