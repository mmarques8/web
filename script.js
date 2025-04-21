
document.querySelector('.scroll-down').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
});
