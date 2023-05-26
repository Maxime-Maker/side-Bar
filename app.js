// récup variable
// event si jappui ouvre la nav /change la class

const open = document.querySelector('#burger');
const close = document.querySelector('#close');
const navbar = document.querySelector('nav');
open.addEventListener('click', function () {
  navbar.className = 'show-menu';
});

close.addEventListener('click', function () {
  navbar.classList.remove('show-menu');
});
