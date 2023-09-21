// let menubar =  document.querySelector('#menubar');
// let mynav =  document.querySelector('.navbar');


// menubar.onclick = () => {
//     menubar.classList.toggle('fa-times')
//     mynav.classList.toggle('active')
// }
let menubar = document.querySelector('#menubar');
let mynav = document.querySelector('.navbar');

menubar.onclick = () => {
  menubar.classList.toggle('fa-times');
  mynav.classList.toggle('active');
}

// Get all the links inside the navigation menu
let navLinks = document.querySelectorAll('.navbar a');

// Add event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    menubar.classList.toggle('fa-times');
    mynav.classList.toggle('active');
  });
});
