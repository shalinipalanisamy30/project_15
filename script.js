const btn = document.querySelector('button');
const body = document.querySelector('body');
const color = ['pink','skyblue','yellow','red','violet','orange'];
body.style.backgroundColor = 'blue';
document.addEventListener('click',function(){
    const colorIndex = parseInt(Math.random()*color.length);
    body.style.backgroundColor = color[colorIndex];
});