const greetText = document.querySelector('.greetings')
const picutreview = document.querySelector('.pictureview')
const greetings = ['Hello', 'Hola', 'नमस्ते', 'Bonjour', 'nǐn hǎo', 'konnichiwa']
const greet = document.querySelector('.welcome-screen h1');
greet.innerHTML=`${greetings[0]} !`;

var counter = 1;
setInterval(()=>{
    if (counter<6) {
        greet.innerHTML = `${greetings[counter]} !`;
        counter+=1;
    }
    else{
        counter = 1;
        greet.innerHTML = `${greetings[0]} !`;
    }
},5000);


const poetry = document.querySelector('.poetry');
const photography = document.querySelector('.photography');
const hobbies = document.querySelector('.hobbies');

poetry.addEventListener('mouseenter',()=> { 
    hobbies.classList.add('hover-left')
});

poetry.addEventListener('mouseleave',()=> {
    hobbies.classList.remove('hover-left');
});

photography.addEventListener('mouseenter',()=> {
    hobbies.classList.add('hover-right')
});

photography.addEventListener('mouseleave',()=> {
    hobbies.classList.remove('hover-right');
});

