// selectam butonul de scroll to top
const scrollToTopButton = document.querySelector(".scroll-to-top");

scrollToTopButton.addEventListener("click", function () {
    scrollToTopButton.blur();
    window.scrollTo({
        top: 0,
        behaviour: "smooth"
    });
});

document.addEventListener("scroll", function () {
    const viewportHeight = window.innerHeight;

    if (window.scrollY > viewportHeight / 2) {
        scrollToTopButton.style.visibility = "visible";
    } else {
        scrollToTopButton.style.visibility = "hidden";
    }
});