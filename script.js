document.addEventListener('DOMContentLoaded', () =>{
    const burger = document.querySelector('.burguer');
    const nav = document.querySelector('.nav-links');
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    });
});