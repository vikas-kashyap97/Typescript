const buttonElem = document.querySelector('.clickMe') as HTMLButtonElement;
const bodyElem = document.body as HTMLBodyElement;

let isWhite:boolean = false;


buttonElem.addEventListener('click', () => {
  if(isWhite) {
    bodyElem.style.backgroundColor = '';
  } else {
    bodyElem.style.backgroundColor = 'red';
  }
  isWhite = !isWhite
});