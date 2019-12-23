let rotate = 0;
let deg = 10;

const btn = document.querySelector('button');
let div = document.querySelector('div');

btn.addEventListener('click', function () {
    rotate += deg;
    div.style.transform = `rotate(${rotate}deg)`;
    div.style.transition = "0.5s";



})