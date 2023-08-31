let button = document.querySelector('.button-input-area');
let number = document.querySelector('.number');
let counter = 0;

button.onclick = function () {
  if (button.classList.contains('added')) {
    number.textContent--;
  } else {
    number.textContent++;
  }
  button.classList.toggle('added');

};