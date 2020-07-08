// Your code goes here

// 1mouseover
const navLink = document.querySelectorAll('.nav-link')

for (const link of navLink){
    link.addEventListener('mouseover', function(event){
        event.target.style.color = "blue"; 
    })
}

// 2keydown
const backGround = document.querySelector('body')

backGround.addEventListener('keydown', function(){
    backGround.style.color = "skyblue";
})

// 3wheel
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

// 4keyup
backGround.addEventListener('keyup', function(){
    backGround.style.color = "pink";
})

// 5click
backGround.addEventListener('click', function(){
    backGround.style.color = "white";
})

// 6auxclick
document.body.onauxclick = function(){
    document.body.style.backgroundColor = 'black';
}


// 7resize
document.body.onresize = function(){
    document.body.style.backgroundColor = 'green';
}

// 8mouseenter
const mEnter = document.querySelector('.img-content');

mEnter.addEventListener('mouseenter', function(){
    mEnter.style.border = '5px dotted black';
})


// 9select
const selection = document.querySelector('.text-content');

selection.addEventListener('select', function(){
    selection.style.fontStyle = 'oblique';
})

// 10dblclick
const title = document.querySelector('.text-content');

title.addEventListener('dblclick', function(){
    title.style.color = 'green';
})
