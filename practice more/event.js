console.log("js file");

// 
function makeGreen() {
    document.body.style.backgroundColor='green'
}


// 
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// 

// const purpleButton = document.getElementById('make-purple');
// makePurpleButton.onclick = function makePurple() {
//     document.body.style.backgroundColor = 'purple';
// }

const makePurpleButton = document.getElementById('make-purple');
makePurpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}
