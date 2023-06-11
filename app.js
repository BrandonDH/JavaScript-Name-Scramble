// Set variables for name jumble
let displayJumble = document.querySelector('#result');
let form = document.querySelector('form');
let prodName1 = document.getElementById('prodOne');
let prodName2 = document.getElementById('prodTwo');
let jumble = document.createElement('h1');

// Handle submit event
form.addEventListener('submit', addName);

// Name mix logic
function addName(event) {
  newName = prodName1.value + prodName2.value;

  // Shuffle logic
  let shuffle = ([...newWord]) => {
    let totalLetters = newWord.length;
    while (totalLetters) {
      let randomNum = Math.floor(Math.random() * totalLetters--);
      [newWord[totalLetters], newWord[randomNum]] = [newWord[randomNum], newWord[totalLetters]];
    }
    return newWord;
  };
  
  // Handle display
  jumble.setAttribute('title', 'Your new product name jumble!');
  jumble.className = 'mixed';
  jumble.innerHTML = doTheDeed.join('');
  displayJumble.appendChild(jumble);
  event.preventDefault(); 
}
