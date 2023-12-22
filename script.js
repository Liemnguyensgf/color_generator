// var h3 = document.querySelector('h3');
// var color1 = document.querySelector('.color1');
// var color2 = document.querySelector('.color2');
// var body = document.getElementById('gradient')

// body.style.background = 'white';

// // color1.addEventListener('input', function(){
// //     body.style.background = "linear-gradient(to left, " + color1.value + ',' + color2.value+ ") fixed";
// // })
// // color2.addEventListener('input', function(){
// //     body.style.background = "linear-gradient(to top, "+ color1.value + ',' + color2.value+ ") fixed";
// // })
// function colorGenerator(){
//     body.style.background = "linear-gradient(to bottom, " + color1.value + ',' + color2.value + ") fixed";
//     h3.textContent = body.style.background + ";";
// }
// color1.addEventListener('input', colorGenerator)
// color2.addEventListener('input', colorGenerator)


let color1 = document.querySelector('.color1')
let color2 = document.querySelector('.color2')
let h3 = document.querySelector('h3')
let body = document.getElementById('gradient')

body.style.background = 'white';

function colorGenerator(){
    body.style.background = 'linear-gradient(to bottom, ' + color1.value +',' + color2.value+ ') fixed';
    h3.textContent = body.style.background + ';';
}

color1.addEventListener('input', colorGenerator);
color2.addEventListener('input', colorGenerator);