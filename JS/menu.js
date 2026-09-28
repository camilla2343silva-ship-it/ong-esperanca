function iniciarMenu() {

    const botao = document.querySelector(".menu-btn");
    const menu = document.querySelector("nav");

    if (!botao || !menu) {
        return;
    }

    botao.addEventListener("click", function () {

        if (menu.style.display === "flex") {
            menu.style.display = "none";
        } else {
            menu.style.display = "flex";
        }

    });
}