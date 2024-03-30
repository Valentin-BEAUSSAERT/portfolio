// Script pour cacher/montrer la navbar avec un effet original
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    // Ajoute la classe 'navbar-hidden' pour cacher la navbar avec un effet dès que l'utilisateur commence à défiler
    if (window.scrollY > 0) {
        navbar.classList.add('navbar-hidden');
    } else {
        navbar.classList.remove('navbar-hidden');
    }
});
