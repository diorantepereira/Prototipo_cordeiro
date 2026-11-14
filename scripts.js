/*!
 * Cordeiro - comportamento do menu fixo
 */
window.addEventListener('DOMContentLoaded', function () {
  var nav = document.getElementById('mainNav');
  function updateNav() {
    if (window.scrollY > 80) nav.classList.add('navbar-shrink');
    else nav.classList.remove('navbar-shrink');
  }
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });
});
