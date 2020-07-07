// Your code goes here

// mouseover
const navLink = document.querySelectorAll('.nav-link')

for (const link of navLink){
    link.addEventListener('mouseover', function(event){
        event.target.style.color = "blue"; 
    })
}

// keydown
const backGround = document.querySelector('body')

backGround.addEventListener('keydown', function(event){
    event.target.style.color = "skyblue";
})

// wheel

function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    image.style.transform = `scale(${scale})`;
    }

let scale = 1;
const image = document.querySelector('img')
image.onwheel = zoom;

image.addEventListener('wheel', zoom);

// drag / drop


// load

// focus

// resize

// scroll

// select

// dblclick
const title = document.querySelector('h2');

title.addEventListener('dblclick', function(e){
    title.classList.toggle('large');
})
