// Set variables for name jumble
const displayJumble = document.querySelector('.result');
const form = document.querySelector('form');
const prodName1 = document.getElementById('prodOne');
const prodName2 = document.getElementById('prodTwo');
const jumble = document.createElement('h1');

form.addEventListener('submit', addName);

function addName(e) {

  newName = prodName1.value + prodName2.value;
  jamble = newName.split('');

  const shuffle = ([...arr]) => {
    let m = arr.length;
    while (m) {
      const i = Math.floor(Math.random() * m--);
      [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
  };

  test = shuffle(jamble);
  jumble.setAttribute('title', 'Your new product name jumble!');
  jumble.className = 'mixed';
  jumble.innerHTML = test.join('');

  displayJumble.appendChild(jumble);

  e.preventDefault(); 
}
