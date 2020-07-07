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

// drag / drop

// load

// focus

// resize

// scroll

// select

// dblclick

