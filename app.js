document.addEventListener("DOMContentLoaded", function () {
    const nome = "Rodolfo Gama";
    const cidadeCursoUniversidade = "Jacareí/ADS-MACK";

    const data = new Date();
    const nomeDiasSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const diaSemana = data.getDay();
    const hora = data.getHours();

    let mensagem = "";
    if (hora >= 6 && hora < 12) {
        mensagem = "Bom dia!";
    } else if (hora >= 12 && hora < 18) {
        mensagem = "Boa tarde!";
    } else if (hora >= 18 && hora < 23 || hora >= 0 && hora < 6) {
        mensagem = "Boa noite!";
    }

    // Versão com Alert
    // window.alert(`Sou o ${nome} \n${cidadeCursoUniversidade} \n${mensagem} Hoje é ${nomeDiasSemana[diaSemana]}`);

    // Versão com Modal
    const texto = `
    <p>Sou o ${nome}</p>
    <p>${cidadeCursoUniversidade}</p>
    <p>${mensagem} Hoje é ${nomeDiasSemana[diaSemana]}</p>
    <button class="close-btn" onclick="document.getElementById('modal').style.display='none'">Fechar</button>
    `;

    document.getElementById("modalMessage").innerHTML = texto;
    document.getElementById("modal").style.display = "flex";
})