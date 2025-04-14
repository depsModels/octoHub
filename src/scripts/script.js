document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const mobileLinks = mobileMenu.querySelectorAll("a");

    menuToggle.addEventListener("click", function () {
        mobileMenu.classList.toggle("active");
        menuToggle.classList.toggle("active");
        document.body.classList.toggle("overflow-hidden");
    });

    mobileLinks.forEach((link) => {
        link.addEventListener("click", function (e) {
            mobileMenu.classList.remove("active");
            menuToggle.classList.remove("active");
            document.body.classList.remove("overflow-hidden");

            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                setTimeout(() => {
                    const headerOffset = 80;
                    const elementPosition =
                        targetSection.getBoundingClientRect().top;
                    const offsetPosition =
                        elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                    });
                }, 300);
            }
        });
    });

    // Atualiza o ano atual no footer
    document.getElementById("currentYear").textContent = new Date().getFullYear();
});