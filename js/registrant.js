
let button = document.querySelector('.button-input-area');
let number = document.querySelector('.number');
let counter = 0;

button.onclick = function () {
  counter++;
  number.textContent = counter;
  button.classList.toggle('added');
};
