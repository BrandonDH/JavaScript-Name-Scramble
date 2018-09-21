// Set variables for name jumble
const displayJumble = document.querySelector('.result');
const form = document.querySelector('form');
const prodName1 = document.getElementById('prodOne');
const prodName2 = document.getElementById('prodTwo');

const jumble = document.createElement('h2');

form.addEventListener('submit', addName);

function addName(e) {

  jumble.appendChild(document.createTextNode(prodName1.value));
  jumble.appendChild(document.createTextNode(prodName2.value));

  jumble.setAttribute('title', 'Your new product name jumble!');
  jumble.className = 'mixed';


  //document.querySelector('div.result').appendChild(jumbleOutput);
  var str = "My bologna has a first name, it's O S C A R.";

  var shuffled = str.split('').sort(function(){return 0.5-Math.random()}).join('');


console.log(jumbleOutput);

  e.preventDefault(); 
}


