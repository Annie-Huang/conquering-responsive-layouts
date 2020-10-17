const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav__list');

navToggle.addEventListener('click', e => {
  navList.classList.toggle('show');
})
