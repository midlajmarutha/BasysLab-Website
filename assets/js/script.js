const menu = document.getElementById('mobileMenu')


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        menu.classList.add("hidden")
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('navToggle').addEventListener('click', function() {
    menu.classList.toggle('hidden');
});
