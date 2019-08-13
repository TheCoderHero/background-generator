var css = document.querySelector( 'h3' );
var color1 = document.querySelector( '.color1' );
var color2 = document.querySelector( '.color2' );
var body = document.getElementById('gradient');
var button = document.querySelector('button');
var letters = '0123456789ABCDEF';
var randomColor1 = '#';
var randomColor2 = '#';

setGradient();

function setGradient() {
    body.style.background = 'linear-gradient(to right, ' 
    + color1.value 
    + ", " 
    + color2.value 
    + ")";
    css.textContent = body.style.background + ';';
}

function setRandomGradient( rcolor1, rcolor2) {
    body.style.background = 'linear-gradient(to right, ' 
    + rcolor1 
    + ", " 
    + rcolor2 
    + ")";
    css.textContent = body.style.background + ';';
    color1.value = rcolor1;
    color2.value = rcolor2;
    randomColor1 = '#';
    randomColor2 = '#';
}

function getRandomGradient() {
    for( var i = 0; i < 6; i++ ) {
        randomColor1 += letters[(Math.floor( Math.random() * 16))];
        randomColor2 += letters[(Math.floor( Math.random() * 16))];
    }
    setRandomGradient(randomColor1, randomColor2);
}

button.addEventListener( 'click', getRandomGradient)

color1.addEventListener('input', setGradient)

color2.addEventListener('input', setGradient)