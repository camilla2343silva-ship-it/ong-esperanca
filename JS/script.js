// MENU HAMBÚRGUER
const botao = document.querySelector(".menu-btn");
const menu = document.querySelector("nav");

if (botao && menu) {
    botao.addEventListener("click", function () {
        menu.classList.toggle("menu-aberto");
    });
}


// TOAST
function mostrarToast() {
    const toast = document.getElementById("toast");

    if (!toast) {
        return;
    }

    toast.style.display = "block";

    setTimeout(function () {
        toast.style.display = "none";
    }, 3000);
}
// DADOS DOS PROJETOS //
const projetos = [
    {
        titulo: "Alimentação Solidária",
        descricao: "Arrecadação e distribuição de alimentos para famílias que precisam de apoio.",
        tipo: "Projeto ativo",
        botao: "Quero ajudar"
    },
    {
        titulo: "Ação Comunitária",
        descricao: "Realização de atividades e ações para melhorar a qualidade de vida da comunidade.",
        tipo: "Voluntariado",
        botao: "Ser voluntário"
    },
    {
        titulo: "Campanha de Doações",
        descricao: "Campanha para arrecadar recursos e materiais destinados aos nossos projetos sociais.",
        tipo: "Doação",
        botao: "Fazer doação"
    }
];
// GERAR PROJETOS NA TELA
const listaProjetos = document.querySelector("#lista-projetos");

if (listaProjetos) {
    listaProjetos.innerHTML = projetos.map(function(projeto) {
        return `
            <div>
                <span class="badge">${projeto.tipo}</span>

                <h3>${projeto.titulo}</h3>

                <p>${projeto.descricao}</p>

                <button type="button" onclick="mostrarToast()">
                    ${projeto.botao}
                </button>
            </div>
        `;
    }).join("");
}