document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section");

    document.getElementById("home").classList.add("active");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); 
           
            const targetId = this.getAttribute("href").substring(1);

            sections.forEach(section => section.classList.remove("active"));

            document.getElementById(targetId).classList.add("active");
        });
    });
});
        

    