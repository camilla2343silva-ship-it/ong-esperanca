function iniciarProjetos() {

    const listaProjetos = document.querySelector("#lista-projetos");

    if (!listaProjetos) {
        return;
    }

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

    listaProjetos.innerHTML = projetos.map(function(projeto) {

        return `
            <div>
                <span class="badge">${projeto.tipo}</span>

                <h3>${projeto.titulo}</h3>

                <p>${projeto.descricao}</p>

                <button type="button" class="btn-projeto">
                    ${projeto.botao}
                </button>
            </div>
        `;

    }).join("");

    const botoes = listaProjetos.querySelectorAll(".btn-projeto");

    botoes.forEach(function(botao) {

        botao.addEventListener("click", function() {
            mostrarToast();
        });

    });
}