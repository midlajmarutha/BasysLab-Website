const menu = document.getElementById("mobileMenu");

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        menu.classList.add("hidden");
        // document.querySelector(this.getAttribute("href")).scrollIntoView({
        //     behavior: "smooth",
        //     offset: "100px",
        // });
        var element = document.querySelector(this.getAttribute("href"));
        var headerOffset = 45;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition =
            elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });
    });
});

document.getElementById("navToggle").addEventListener("click", function () {
    menu.classList.toggle("hidden");
});
