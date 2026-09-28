function iniciarFormulario() {

    const formulario = document.querySelector("#form-cadastro");

    if (!formulario) {
        return;
    }

    const nome = document.querySelector("#nome");
    const email = document.querySelector("#email");

    // Recuperar dados salvos
    const dadosSalvos = localStorage.getItem("dadosCadastro");

    if (dadosSalvos) {

        const dados = JSON.parse(dadosSalvos);

        nome.value = dados.nome || "";
        email.value = dados.email || "";
    }

    // Verificar os campos enquanto o usuário digita
    formulario.addEventListener("input", function (evento) {

        const campo = evento.target;

        if (!campo.checkValidity()) {
            campo.style.borderColor = "var(--cor-erro)";
        } else {
            campo.style.borderColor = "var(--cor-sucesso)";
        }

    });

    // Verificar o formulário no envio
    formulario.addEventListener("submit", function (evento) {

        evento.preventDefault();

        if (!formulario.checkValidity()) {

            formulario.reportValidity();

            return;
        }

        const dados = {
            nome: nome.value,
            email: email.value
        };

        // Salvar os dados no navegador
        localStorage.setItem(
            "dadosCadastro",
            JSON.stringify(dados)
        );

        // Mostrar mensagem de sucesso
        const mensagem = document.querySelector(".alert-sucesso");

        if (mensagem) {
            mensagem.style.display = "block";
            mensagem.textContent = "Cadastro realizado com sucesso! Seus dados foram salvos.";
        }

        // Limpar bordas de erro
        const campos = formulario.querySelectorAll("input, select, textarea");

        campos.forEach(function (campo) {
            campo.style.borderColor = "var(--cor-sucesso)";
        });

    });
}