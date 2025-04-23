const nome = "Jubileu Nemeu";
const ano = new Date().getFullYear();
const twitter = "@jubileuNM";
const facebook = "@jubil&uNemeu";
const instagram = "@jubileu_nemeu";
const linkedin = "@JubileuNemeu";
const sexo = "Masculino";
const localizacaoPolo = "Higienópolis, SP";

function exibirInformacoes() {
    document.writeln(nome + "<br>");
    document.writeln("Ano corrente: " + ano + "<br>");
    document.writeln("Twitter: " + twitter + "<br>");
    document.writeln("Facebook: " + facebook + "<br>");
    document.writeln("Instagram: " + instagram + "<br>");
    document.writeln("LinkedIn: " + linkedin + "<br>");
    document.writeln("Sexo: " + sexo + "<br>");
    document.writeln("Localização do polo: " + localizacaoPolo + "<br>");
}

exibirInformacoes();